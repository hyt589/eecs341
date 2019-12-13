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

    @Select("select distinct ps1.name\n" +
            "from eecs341.product_supplier as ps1,\n" +
            "     eecs341.product as p1\n" +
            "where p1.name = 'black tea'\n" +
            "    EXCEPT (select distinct ps2.name\n" +
            "            from eecs341.product_supplier as ps2\n" +
            "            where ps2.name = #{name}")
    List<Map> getNameOfAllSuppliersExceptSelectSupplier(@Param ("name") String name);

    @Select("select ps1.name\n" +
            "from eecs341.product_supplier as ps1\n" +
            "where not exists(select ps2.name\n" +
            "                 from eecs341.product_supplier as ps2,\n" +
            "                      eecs341.product as p2,\n" +
            "                      eecs341.sup_by as sb2\n" +
            "                 where ps2.id = sb2.supplier_id\n" +
            "                   and p2.id = sb2.product_id\n" +
            "                   and ps1.id = sb2.supplier_id\n" +
            "                   and p2.id = sb2.product_id\n" +
            "                   and p2.category = = #{category}")
    List<Map> getNameOfAllSuppliersThatDontSupplySelectCategory(@Param ("category") String category);

}
