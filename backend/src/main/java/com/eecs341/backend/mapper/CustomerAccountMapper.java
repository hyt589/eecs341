package com.eecs341.backend.mapper;

import com.eecs341.backend.model.CustomerAccount;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface CustomerAccountMapper {

    @Select("select * from customer_account where email_address=#{email}")
    @Results({
            @Result(property = "emailAddress", column = "email_address"),
            @Result(property = "shippingAddress", column = "shipping_address"),
            @Result(property = "billingAddress", column = "billing_address")

    })
    CustomerAccount selectByEmail(@Param("email") String email);

}
