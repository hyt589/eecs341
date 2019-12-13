package com.eecs341.backend.controller;

import com.eecs341.backend.service.FacilityService;
import com.eecs341.backend.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/facility")
public class FacilityController {

    @Autowired
    FacilityService service;

    @GetMapping("/inState")
    public R getFacilityInState(@RequestParam String state) {
        List data = service.selectFacilityByState(state);
        return data.size() > 0 ? R.data(data) : R.error("Empty Result");
    }

    @PostMapping("/newFacility")
    public R insertFacility(
            @RequestBody Map<String, String> facility
            ){
        try {
            int insert = service.insertFacility(facility.get("state"), facility.get("city"), facility.get("zipCode"), facility.get("detailedAddress"));
            return insert > 0 ? R.msg("Insert Success") : R.error("Insert failed");
        } catch (Exception e) {
            return R.error("Runtime error");
        }
    }
}
