package com.eecs341.backend.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Mapper
@Component
public interface ProductMapper {

    @Select("select s.name as supplier, p.name as product, qty_in_stock\n" +
            "from eecs341.product p,\n" +
            "     eecs341.product_supplier s,\n" +
            "     eecs341.sup_by sb\n" +
            "where p.id = sb.product_id\n" +
            "    and sb.supplier_id = s.id\n" +
            "    and category = #{category}" +
            "    and p.deleted=false")
    List<Map> getQtyInStockByCategory(@Param("category") String category);

    @Select("select p.name, p.qty_in_stock\n" +
            "from eecs341.product p,\n" +
            "    eecs341.product_supplier s,\n" +
            "    eecs341.sup_by sb\n" +
            "where p.id = sb.product_id\n" +
            "    and sb.supplier_id = s.id\n" +
            "    and s.name = #{supplier}\n" +
            "    and p.qty_in_stock < #{qty}" +
            "    and p.deleted=false")
    List<Map> getNamesOfProductBySupplierNameAndQtyInStock(@Param("supplier") String supplier, @Param("qty") int qty);

    @Select("select p.id, p.name, ps.name as supplier from eecs341.product p, eecs341.sup_by sb, eecs341.product_supplier ps\n" +
            "where p.id=sb.product_id and sb.supplier_id=ps.id and p.deleted=false")
    List<Map> getIdNameSupplierList();
}
