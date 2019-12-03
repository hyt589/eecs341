package com.eecs341.backend.controller;

import com.eecs341.backend.service.OrderService;
import com.eecs341.backend.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

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

    @PostMapping("/newOrder")
    public R insertOrder(@RequestBody Map<String, Object> order) {
        String email = (String) order.get("email");
        Integer productID =  Integer.parseInt((String) order.get("productId"));
        Integer qty = Integer.parseInt((String) order.get("qty"));
        if (Objects.isNull(email) && Objects.isNull(productID) && Objects.isNull(qty)){
            return R.error("Not enough information to post record");
        }
        try {
            service.insertOrder(email, productID, qty);
            return R.msg("Insert success");
        } catch (Exception e){
            System.err.println(e.getMessage());
            return R.error("An error occurred while inserting into database");
        }
    }
}
