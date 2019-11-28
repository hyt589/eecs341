package com.eecs341.backend.service;

import com.eecs341.backend.mapper.ProductSupplierMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class ProductSupplierService {

    @Autowired
    ProductSupplierMapper mapper;

    public HashMap getAddressByName(String name) {
        return mapper.getAddressOfSupplierByName(name);
    }
}
