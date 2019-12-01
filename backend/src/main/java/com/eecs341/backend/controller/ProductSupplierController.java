package com.eecs341.backend.controller;

import com.eecs341.backend.service.ProductSupplierService;
import com.eecs341.backend.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/productSupplier")
public class ProductSupplierController {

    @Autowired
    ProductSupplierService service;

    @GetMapping("/address-byName")
    public R getAddressByName(@RequestParam String name) {
        return R.data(service.getAddressByName(name));
    }

    @GetMapping("/listAllNames")
    public R getAllNames() {
        return R.data(service.getAllNames());
    }
}
