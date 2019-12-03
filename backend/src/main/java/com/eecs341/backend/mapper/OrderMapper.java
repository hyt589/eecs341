package com.eecs341.backend.mapper;

import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Mapper
@Component
public interface OrderMapper {

    @Select("select o.id, o.qty, o.status, p.name " +
            "from eecs341.orders o, eecs341.cust_ord co, eecs341.customer_account ca, eecs341.item_ord io, eecs341.prod_item pi, eecs341.product p\n" +
            "where o.id = co.order_id\n" +
            "and co.customer_id = ca.id\n" +
            "and ca.email_address = #{email} " +
            "and io.order_id = o.id " +
            "and io.item_id = pi.item_id " +
            "and p.id = pi.product_id\n")
    List<Map> getOrderIdByEmailAddressExceptReturned(@Param("email") String email);


    @Select("insert into eecs341.orders(qty, status) \n" +
            "values (#{qty}, 'pre-shipping') \n" +
            "returning id")
    int insertOrder(
            @Param("qty") int qty
    );

    @Insert("insert into eecs341.prod_ord (product_id, order_id)\n" +
            "values (#{productID},#{orderID})")
    void insertProductOrder(
            @Param("productID") int productID,
            @Param("orderID") int orderID
    );

    @Insert("insert into eecs341.cust_ord (customer_id, order_id)\n" +
            "values (#{customerID},#{orderID})")
    void insertCustOrd(
            @Param("customerID") int customerID,
            @Param("orderID") int orderID
    );

}
