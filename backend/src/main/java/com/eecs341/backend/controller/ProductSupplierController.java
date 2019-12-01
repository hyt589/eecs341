package com.eecs341.backend.controller;

import com.eecs341.backend.service.ProductSupplierService;
import com.eecs341.backend.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/productSupplier")
public class ProductSupplierController {

    @Autowired
    ProductSupplierService service;

    @GetMapping("/address-byName")
    public R getAddressByName(@RequestParam String name) {
        List<Map> data = service.getAddressByName(name);
        return data.size() > 0 ? R.data(data) : R.error("Empty Result");
    }

    @GetMapping("/listAllNames")
    public R getAllNames() {
        List<Map> data = service.getAllNames();
        return data.size() > 0 ? R.data(data) : R.error("Empty Result");
    }
}
