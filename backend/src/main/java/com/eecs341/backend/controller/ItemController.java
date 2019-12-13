package com.eecs341.backend.controller;

import com.eecs341.backend.service.ItemService;
import com.eecs341.backend.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/byVariousConditions")
    public R filterItemsByConditions(@RequestBody Map<String, List<String>> conditions){
        List<Map> data = service.filterItemsByVariousCondition(conditions);
        return data.size() > 0 ? R.data(data) : R.error("Empty result");
    }


}
