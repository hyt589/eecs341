create table if not exists Customer_Account{
    id varchar(9)
    primary key (id)
    username varchar(40)
    email_address varchar(40)
    shipping_address varchar(40)
    billing_address varchar(40)
    foreign key(orderID) references Order(id)
};

create table if not exists product{
    id varchar(9)
    primary key (id)
    name varchar(40)
    price float,
    qty_in_stock int
    };

