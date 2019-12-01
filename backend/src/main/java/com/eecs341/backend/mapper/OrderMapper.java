package com.eecs341.backend.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
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

}
