package com.eecs341.backend.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
@Mapper
public interface CustomerAccountMapper {

    @Select("select id from eecs341.customer_account\n" +
            "where email_address=#{email}\n" +
            "and deleted=false" +
            "limit 1")
    int getIdByEmail(
            @Param("email") String email
    );

    @Select("select distinct email_address as email from eecs341.customer_account where deleted=false")
    List<Map> getMailingList();

    @Insert("insert into eecs341.customer_account (username, email_address, shipping_address, + \n" +
            "shipping_city, shipping_state, shipping_zip, billing_address, billing_city, + \n" +
            "billing_state, billing_zip )\n" +
            "values (#{username}, #{email_address}, #{shipping_address}, #{shipping_city}, #{shipping_state}, + \n" +
            "#{shipping_zip}, #{billing_address}, #{billing_city}, #{billing_state}, #{billing_zip}) \n" +
            "returning id")
    void insertCustomerAccount(
            @Param("username") String username,
            @Param("email_address") String email_address,
            @Param("shipping_address") String shipping_address,
            @Param("shipping_city") String shipping_city,
            @Param("shipping_state") String shipping_state,
            @Param("shipping_zip") String shipping_zip,
            @Param("billing_address") String billing_address,
            @Param("billing_city") String billing_city,
            @Param("billing_state") String billing_state,
            @Param("billing_zip") String billing_zip
    );

    @Insert("insert into eecs341.cust_ord (customer_id, order_id)\n" +
            "values (#{customerID},#{orderID})")
    void insertProductOrder(
            @Param("customerID") int customerID,
            @Param("orderID") int orderID
    );



}
