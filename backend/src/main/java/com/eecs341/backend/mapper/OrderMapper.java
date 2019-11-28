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

    @Select("select o.id from eecs341.orders o, eecs341.cust_ord co, eecs341.customer_account ca\n" +
            "where o.id = co.order_id\n" +
            "and co.customer_id = ca.id\n" +
            "and ca.email_address = #{email}\n" +
            "except\n" +
            "select id from eecs341.orders\n" +
            "where status='returned'")
    List<Map> getOrderIdByEmailAddressExceptReturned(@Param("email") String email);

}
