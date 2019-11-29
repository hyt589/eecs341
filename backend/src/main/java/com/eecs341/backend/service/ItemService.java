package com.eecs341.backend.service;

import com.eecs341.backend.mapper.ItemMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ItemService {
     @Autowired
     ItemMapper mapper;

    public List<Map> getStatusExceptIfDamaged(String status){
        return mapper.getStatusExceptIfDamaged(status);
    }

    public List<Map> getFacilitiesofallItemsWithStatusOfDamaged(String detailed_address,
                                                                String city,
                                                                String state,
                                                                Integer zip_code) {
        return mapper.getFacilitiesofallItemsWithStatusOfDamaged(detailed_address,city,state,zip_code);
    }
}