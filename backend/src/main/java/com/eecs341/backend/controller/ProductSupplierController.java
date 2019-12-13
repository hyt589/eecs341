package com.eecs341.backend.controller;

import com.eecs341.backend.service.ProductSupplierService;
import com.eecs341.backend.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

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

    @GetMapping("/getAllNamesExceptSelectName")
    public R getAllNamesExceptSelectName(@RequestParam String name) {
        List<Map> data = service.getAllNamesExceptSelectName(name);
        return data.size() > 0 ? R.data(data) : R.error("Empty Result");
    }

    @GetMapping("/getAllNamesNotSupplyingSelectCategory")
    public R getAllNamesNotSupplyingSelectCategory(@RequestParam String category) {
        List<Map> data = service.getAllNamesNotSupplyingSelectCategory(category);
        return data.size() > 0 ? R.data(data) : R.error("Empty Result");
    }

    @GetMapping("/insertProductSupplier")
    public R insertProductSupplier(@RequestParam Map<String, Object> productSupplier){
        String name = (String) productSupplier.get("name");
        if (Objects.isNull(name)){
            return R.error("Not enough information to post record");
        }
        try {
            service.insertProductSupplier(name);
            return R.msg("Insert success");
        } catch (Exception e){
            System.err.println(e.getMessage());
            return R.error("An error occurred while inserting into database");
        }
    }
}
