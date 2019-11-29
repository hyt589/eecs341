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
    @Select("select i.status from eecs341.items i\n" +
            "except where status = 'damaged'\n")
    List<Map>getStatusExceptIfDamaged(@Param("status") String status);
}
public interface getFacilitiesofallItemsWithStatusOfDamaged{
    @Select("select f.detailed_address,\n" +
            "    f.city,\n" +
            "    f.state,\n" +
            "    f.zip_code\n" +
            "from eecs341.facilty as f,\n" +
            "    eecs341.item_fac as iff,\n" +
            "    eecs341.item as i\n" +
            "where f.id = iff.facilty_id,\n" +
            "    and i.id = iff.item_id\n" +
            "    and i.status = \"damaged\"\n")
    List<Map>getFacilitiesofallItemsWithStatusOfDamaged(@Param("detailed_address")String detailed_address,
                                                                @Param("city") String city,
                                                                @Param("state") String state,
                                                                @Param("zip_code") Integer zip_code)
}
