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
public interface FacilityMapper {

    @Select("select state, city, zip_code, detailed_address from eecs341.facility\n" +
            "where state = #{state}\n" +
            "and deleted = false")
    List<Map> selectFacilityByState(@Param("state") String state);


    @Insert("insert into eecs341.facility (state, city, zip_code, detailed_address)\n" +
            "values (#{state}, #{city}, ${zipCode}, #{detailedAddress})")
    int insertFacility(
            @Param("state") String state,
            @Param("city") String city,
            @Param("zipCode") String zipCode,
            @Param("detailedAddress") String detailedAddress
    );
}
