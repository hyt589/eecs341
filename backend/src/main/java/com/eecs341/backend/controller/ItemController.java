package com.eecs341.backend.controller;

import com.eecs341.backend.service.ItemService;
import com.eecs341.backend.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/item")
public class ItemController {

    @Autowired
    private ItemService service;

    @GetMapping("/facilitiesContainItemOfStatus")
    public R facilityContainingItemsOfStatus(@RequestParam String status) {
        List<Map> data = service.facilitiesContainingItemsOfStatus(status);
        return data.size() > 0 ? R.data(data) : R.error("Empty result");
    }


}
