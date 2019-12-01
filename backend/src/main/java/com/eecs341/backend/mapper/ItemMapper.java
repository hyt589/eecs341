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
            "  and i.status = #{status}")
    List<Map> selectAllFacilitiesContainingItemOfStatus(@Param("status") String status);

}
