package com.eecs341.backend.service;

import com.eecs341.backend.mapper.FacilityMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class FacilityService {
    @Autowired
    FacilityMapper mapper;

    public List<Map> selectFacilityByState(String state){
        return mapper.selectFacilityByState(state);
    }
    public int insertFacility(
            String state,
            String city,
            String zipCode,
            String detailedAddress
    ){
        return mapper.insertFacility(state, city, zipCode, detailedAddress);
    }
}
