package com.eecs341.backend.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Mapper
@Component
public interface ProductSupplierMapper {

    @Select("select address, city, state, zip_code\n" +
            "from eecs341.product_supplier\n" +
            "where name = #{name}\n" +
            "limit 1;")
    List<Map> getAddressOfSupplierByName(@Param("name") String name);

    @Select("select distinct name\n" +
            "from eecs341.product_supplier;")
    List<Map> getAllSupplierNames();

}
