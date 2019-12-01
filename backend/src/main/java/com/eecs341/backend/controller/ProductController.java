package com.eecs341.backend.controller;

import com.eecs341.backend.service.ProductService;
import com.eecs341.backend.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductService service;

    @GetMapping("/qtyInStock-byCategory")
    public R getQtyInStockOfCategory(@RequestParam String category) {
        List<Map> data = service.getQtyInStockOfCategory(category);
        return data.size() > 0 ? R.data(data) : R.error("Empty results");
    }

    @GetMapping("/name-bySupplierNameAndMaxQtyInStock")
    public R getNamesOfProductBySupplierAndQtyInStock(@RequestParam String supplier,
                                                              @RequestParam int qty) {
        List<Map> data = service.getNamesOfProductsBySupplierNameAndQtyInStock(supplier, qty);
        return data.size() > 0 ? R.data(data) : R.error("Empty results");
    }
}
