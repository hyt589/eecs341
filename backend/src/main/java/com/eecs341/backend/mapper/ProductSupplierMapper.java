package com.eecs341.backend.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.HashMap;

@Mapper
@Component
public interface ProductSupplierMapper {

    @Select("select address\n" +
            "from eecs341.product_supplier\n" +
            "where name = #{name}\n" +
            "limit 1;")
    HashMap getAddressOfSupplierByName(@Param("name") String name);

}
