package com.eecs341.backend.service;

import com.eecs341.backend.mapper.ProductSupplierMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ProductSupplierService {

    @Autowired
    ProductSupplierMapper mapper;

    public List<Map> getAddressByName(String name) {
        return mapper.getAddressOfSupplierByName(name);
    }

    public List<Map> getAllNames() {
        return mapper.getAllSupplierNames();
    }
}
