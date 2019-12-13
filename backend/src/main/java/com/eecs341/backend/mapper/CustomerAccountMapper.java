package com.eecs341.backend.mapper;

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

}
