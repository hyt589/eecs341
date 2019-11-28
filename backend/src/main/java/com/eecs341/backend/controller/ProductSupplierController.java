package com.eecs341.backend.controller;

import com.eecs341.backend.service.ProductSupplierService;
import com.eecs341.backend.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ProductSupplier")
public class ProductSupplierController {

    @Autowired
    ProductSupplierService service;

    @GetMapping("/address-byName")
    public R getAddressByName(@RequestParam String name) {
        return R.data(service.getAddressByName(name));
    }

}