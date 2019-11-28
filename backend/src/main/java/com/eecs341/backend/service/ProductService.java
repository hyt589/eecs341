package com.eecs341.backend.service;

import com.eecs341.backend.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ProductService {

    @Autowired
    ProductMapper mapper;

    public List<Map> getQtyInStockOfCategory(String category) {
        return mapper.getQtyInStockByCategory(category);
    }

    public List<Map> getNamesOfProductsBySupplierNameAndQtyInStock(String supplier, int qty) {
        return mapper.getNamesOfProductBySupplierNameAndQtyInStock(supplier, qty);
    }
}
