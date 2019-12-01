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

     public List<Map> facilitiesContainingItemsOfStatus(String status) {
          return mapper.selectAllFacilitiesContainingItemOfStatus(status);
     }
}