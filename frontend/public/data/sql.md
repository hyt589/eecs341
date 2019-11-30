```sql
create table customer_account
(
    id               bigserial                                          not null
        constraint idx_16693_primary
            primary key,
    username         varchar(20)                                        not null,
    email_address    varchar(40)                                        not null,
    shipping_address text                                               not null,
    billing_address  text                                               not null,
    gmt_create       timestamp with time zone default CURRENT_TIMESTAMP not null,
    gmt_modified     timestamp with time zone default CURRENT_TIMESTAMP not null,
    shipping_city    text                                               not null,
    shipping_state   text                                               not null,
    shipping_zip     integer                                            not null,
    billing_city     text                                               not null,
    billing_state    text                                               not null,
    billing_zip      integer                                            not null
);

alter table customer_account
    owner to project;

create unique index idx_16693_customer_account_email_address_uindex
    on customer_account (email_address);

create trigger on_update_current_timestamp
    before update
    on customer_account
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();

create table facility
(
    id               bigserial                                          not null
        constraint idx_16709_primary
            primary key,
    state            varchar(2)                                         not null,
    city             varchar(30)                                        not null,
    zip_code         varchar(10)                                        not null,
    detailed_address text                                               not null,
    gmt_create       timestamp with time zone default CURRENT_TIMESTAMP not null,
    gmt_modified     timestamp with time zone default CURRENT_TIMESTAMP not null
);

alter table facility
    owner to project;

create trigger on_update_current_timestamp
    before update
    on facility
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();

create table item
(
    id           bigserial                                                not null
        constraint idx_16720_primary
            primary key,
    status       item_status              default 'in_stock'::item_status not null,
    restock_date date,
    gmt_create   timestamp with time zone default CURRENT_TIMESTAMP       not null,
    gmt_modified timestamp with time zone default CURRENT_TIMESTAMP       not null
);

alter table item
    owner to project;

create trigger on_update_current_timestamp
    before update
    on item
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();

create table item_fac
(
    item_id      bigint
        constraint item_fac_item_id_fk
            references item
            on update cascade on delete set null,
    facility_id  bigint
        constraint item_fac_facility_id_fk
            references facility
            on update cascade on delete set null,
    gmt_create   timestamp with time zone default CURRENT_TIMESTAMP not null,
    gmt_modified timestamp with time zone default CURRENT_TIMESTAMP not null
);

alter table item_fac
    owner to project;

create index idx_16727_item_fac_facility_id_fk
    on item_fac (facility_id);

create index idx_16727_item_fac_item_id_fk
    on item_fac (item_id);

create trigger on_update_current_timestamp
    before update
    on item_fac
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();

create table orders
(
    id           bigserial                                                      not null
        constraint idx_16744_primary
            primary key,
    qty          bigint                                                         not null,
    status       orders_status            default 'pre-shipping'::orders_status not null,
    gmt_create   timestamp with time zone default CURRENT_TIMESTAMP             not null,
    gmt_modified timestamp with time zone default CURRENT_TIMESTAMP             not null
);

alter table orders
    owner to project;

create table cust_ord
(
    customer_id  bigint
        constraint cust_ord_customer_account_id_fk
            references customer_account
            on update cascade on delete set null,
    order_id     bigint
        constraint cust_ord_orders_id_fk
            references orders
            on update cascade on delete set null,
    gmt_create   timestamp with time zone default CURRENT_TIMESTAMP not null,
    gmt_modified timestamp with time zone default CURRENT_TIMESTAMP not null
);

alter table cust_ord
    owner to project;

create index idx_16702_cust_ord_orders_id_fk
    on cust_ord (order_id);

create index idx_16702_cust_ord_customer_account_id_fk
    on cust_ord (customer_id);

create trigger on_update_current_timestamp
    before update
    on cust_ord
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();

create table item_ord
(
    item_id      bigint
        constraint item_ord_item_id_fk
            references item
            on update cascade on delete set null,
    order_id     bigint
        constraint item_ord_orders_id_fk
            references orders
            on update cascade on delete set null,
    gmt_create   timestamp with time zone default CURRENT_TIMESTAMP not null,
    gmt_modified timestamp with time zone default CURRENT_TIMESTAMP not null
);

alter table item_ord
    owner to project;

create index idx_16732_item_ord_item_id_fk
    on item_ord (item_id);

create index idx_16732_item_ord_orders_id_fk
    on item_ord (order_id);

create trigger on_update_current_timestamp
    before update
    on item_ord
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();

create trigger on_update_current_timestamp
    before update
    on orders
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();

create table product
(
    id           bigserial                                          not null
        constraint idx_16753_primary
            primary key,
    name         text                                               not null,
    category     text                                               not null,
    price        bigint                                             not null,
    qty_in_stock bigint                                             not null,
    gmt_create   timestamp with time zone default CURRENT_TIMESTAMP not null,
    gmt_modified timestamp with time zone default CURRENT_TIMESTAMP not null
);

alter table product
    owner to project;

create trigger on_update_current_timestamp
    before update
    on product
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();

create table product_supplier
(
    id           bigserial                                          not null
        constraint idx_16764_primary
            primary key,
    name         text                                               not null,
    address      text                                               not null,
    gmt_create   timestamp with time zone default CURRENT_TIMESTAMP not null,
    gmt_modified timestamp with time zone default CURRENT_TIMESTAMP not null
);

alter table product_supplier
    owner to project;

create trigger on_update_current_timestamp
    before update
    on product_supplier
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();

create table prod_fac
(
    product_id  bigint
        constraint prod_fac_product_id_fk
            references product
            on update cascade on delete set null,
    facility_id bigint
        constraint prod_fac_facility_id_fk
            references facility
            on update cascade on delete set null
);

alter table prod_fac
    owner to project;

create index idx_16773_prod_fac_facility_id_fk
    on prod_fac (facility_id);

create index idx_16773_prod_fac_product_id_fk
    on prod_fac (product_id);

create table prod_ord
(
    product_id   bigint
        constraint prod_ord_product_id_fk
            references product
            on update cascade on delete set null,
    order_id     bigint
        constraint prod_ord_orders_id_fk
            references orders
            on update cascade on delete set null,
    gmt_create   timestamp with time zone default CURRENT_TIMESTAMP not null,
    gmt_modified timestamp with time zone default CURRENT_TIMESTAMP not null
);

alter table prod_ord
    owner to project;

create index idx_16776_prod_ord_orders_id_fk
    on prod_ord (order_id);

create index idx_16776_prod_ord_product_id_fk
    on prod_ord (product_id);

create trigger on_update_current_timestamp
    before update
    on prod_ord
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();

create table shipping_status
(
    id               bigserial                                          not null
        constraint idx_16783_primary
            primary key,
    sender_address   text                                               not null,
    delivery_address text                                               not null,
    from_facility_id bigint
        constraint shipping_status_from_facility__fk
            references facility
            on update cascade on delete set null,
    to_facility_id   bigint
        constraint shipping_status_to_facility__fk
            references facility
            on update cascade on delete set null,
    gmt_create       timestamp with time zone default CURRENT_TIMESTAMP not null,
    gmt_modified     timestamp with time zone default CURRENT_TIMESTAMP not null,
    sender_city      text                                               not null,
    sender_state     text                                               not null,
    sender_zip       integer                                            not null,
    delivery_city    text                                               not null,
    delivery_state   text                                               not null,
    delivery_zip     integer                                            not null
);

alter table shipping_status
    owner to project;

create table item_ship
(
    item_id      bigint
        constraint item_ship_item_id_fk
            references item
            on update cascade on delete set null,
    shipment_id  bigint
        constraint item_ship_shipping_status_id_fk
            references shipping_status
            on update cascade on delete set null,
    gmt_create   timestamp with time zone default CURRENT_TIMESTAMP not null,
    gmt_modified timestamp with time zone default CURRENT_TIMESTAMP not null
);

alter table item_ship
    owner to project;

create index idx_16737_item_ship_item_id_fk
    on item_ship (item_id);

create index idx_16737_item_ship_shipping_status_id_fk
    on item_ship (shipment_id);

create trigger on_update_current_timestamp
    before update
    on item_ship
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();

create index idx_16783_shipping_status_from_facility__fk
    on shipping_status (from_facility_id);

create index idx_16783_shipping_status_to_facility__fk
    on shipping_status (to_facility_id);

create trigger on_update_current_timestamp
    before update
    on shipping_status
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();

create table ship_ord
(
    shipping_id  bigint
        constraint ship_ord_shipping_status_id_fk
            references shipping_status
            on update cascade on delete set null,
    order_id     bigint
        constraint ship_ord_orders_id_fk
            references orders
            on update cascade on delete set null,
    gmt_create   timestamp with time zone default CURRENT_TIMESTAMP not null,
    gmt_modified timestamp with time zone default CURRENT_TIMESTAMP not null
);

alter table ship_ord
    owner to project;

create index idx_16792_ship_ord_orders_id_fk
    on ship_ord (order_id);

create index idx_16792_ship_ord_shipping_status_id_fk
    on ship_ord (shipping_id);

create trigger on_update_current_timestamp
    before update
    on ship_ord
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();

create table sup_by
(
    product_id   bigint
        constraint sup_by_product_id_fk
            references product
            on update cascade on delete set null,
    supplier_id  bigint
        constraint sup_by_product_supplier_id_fk
            references product_supplier
            on update cascade on delete set null,
    gmt_create   timestamp with time zone default CURRENT_TIMESTAMP not null,
    gmt_modified timestamp with time zone default CURRENT_TIMESTAMP not null
);

alter table sup_by
    owner to project;

create index idx_16797_sup_by_product_supplier_id_fk
    on sup_by (supplier_id);

create index idx_16797_sup_by_product_id_fk
    on sup_by (product_id);

create trigger on_update_current_timestamp
    before update
    on sup_by
    for each row
execute procedure public.on_update_current_timestamp_gmt_modified();


```