package com.eecs341.backend.service;

import com.eecs341.backend.mapper.ProductSupplierMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.eecs341.backend.mapper.ProductSupplierMapper;

import java.util.List;
import java.util.Map;

@Service
public class ProductSupplierService {

    @Autowired
    ProductSupplierMapper mapper;

    @Autowired
    ProductSupplierMapper psMapper;


    public List<Map> getAddressByName(String name) {
        return mapper.getAddressOfSupplierByName(name);
    }

    public List<Map> getAllNames() {
        return mapper.getAllSupplierNames();
    }

    public List<Map> getAllNamesExceptSelectName(String name){
        return mapper.getNameOfAllSuppliersExceptSelectSupplier(name);
    }

    public List<Map> getAllNamesNotSupplyingSelectCategory(String category){
        return mapper.getNameOfAllSuppliersThatDontSupplySelectCategory(category);
    }

    public void insertProductSupplier(String name){
        int prodSupId = psMapper.insertProductSupplier(name);
    }



}
