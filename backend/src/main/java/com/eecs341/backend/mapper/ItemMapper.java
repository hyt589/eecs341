package com.eecs341.backend.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Mapper
@Component
//getStatusExceptIfDamaged
public interface ItemMapper {

    @Select("select f.detailed_address,\n" +
            "       f.city,\n" +
            "       f.state,\n" +
            "       f.zip_code\n" +
            "from eecs341.facility as f,\n" +
            "     eecs341.item_fac as iff,\n" +
            "     eecs341.item as i\n" +
            "where f.id = iff.facility_id\n" +
            "  and i.id = iff.item_id\n" +
            "  and i.status = #{status}" +
            "  and i.deleted=false")
    List<Map> selectAllFacilitiesContainingItemOfStatus(@Param("status") String status);

    @Select("select i.id, i.status, i.restock_date, p.name as product_name, p.category, ps.name as supplier\n" +
            "from eecs341.item i,\n" +
            "     eecs341.prod_item pi,\n" +
            "     eecs341.sup_by sb,\n" +
            "     eecs341.product_supplier ps,\n" +
            "     eecs341.facility f,\n" +
            "     eecs341.item_fac fi,\n" +
            "     eecs341.product p,\n" +
            "     eecs341.item_ship si,\n" +
            "     eecs341.shipping_status ss\n" +
            "where i.deleted = false\n" +
            "  and i.id = fi.item_id\n" +
            "  and i.id = pi.item_id\n" +
            "  and i.id = si.item_id\n" +
            "  and si.shipment_id = ss.id\n" +
            "  and pi.product_id = sb.product_id\n" +
            "  and sb.supplier_id = ps.id\n" +
            "  and fi.facility_id = f.id\n" +
            "  and p.id = pi.product_id\n" +
            "  and ss.transit = false" +
            "  ${conditionalSqlStatement}")
    List<Map> filterItemByVariousCondition(@Param("conditionalSqlStatement") String sql);
}
