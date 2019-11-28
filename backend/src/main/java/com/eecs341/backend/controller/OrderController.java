package com.eecs341.backend.controller;

import com.eecs341.backend.service.OrderService;
import com.eecs341.backend.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    OrderService service;

    @GetMapping("/id-byEmailExceptReturned")
    public R getOrderIdByEmailExceptReturned(@RequestParam String email) {
        List<Map> data = service.getOrderIdByEmailAddressExceptReturned(email);
        return data.size() > 0 ? R.data(data) : R.error("Empty results");
    }
}
