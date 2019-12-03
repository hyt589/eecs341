package com.eecs341.backend.mapper;

import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Mapper
@Component
public interface OrderMapper {

    @Select("select o.id, o.qty, p.name, p.category from eecs341.orders o,\n" +
            "              eecs341.cust_ord co, \n" +
            "              eecs341.prod_ord po,\n" +
            "              eecs341.customer_account c,\n" +
            "              eecs341.product p\n" +
            "where o.id=co.order_id\n" +
            "and co.customer_id=c.id\n" +
            "and o.id=po.order_id\n" +
            "and po.product_id=p.id\n" +
            "and c.email_address=#{email}\n" +
            "and o.status!='returned'")
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
