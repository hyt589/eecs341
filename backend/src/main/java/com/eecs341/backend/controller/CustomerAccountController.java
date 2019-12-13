package com.eecs341.backend.controller;

import com.eecs341.backend.service.CustomerAccountService;
import com.eecs341.backend.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/customer")
public class CustomerAccountController {

    @Autowired
    CustomerAccountService customerAccountService;

    @GetMapping("/mailingList")
    public R getMailingList() {
        List data = customerAccountService.getMailingList();
        return data.size() > 0 ? R.data(data) : R.error("Empty Result");
    }

    @PostMapping("/newCustomerAccount")
    public R insertOrder(@RequestBody Map<String, Object> customer_account) {
        String username = (String) customer_account.get("username");
        String email_address = (String) customer_account.get("email_address");
        String shipping_address = (String) customer_account.get("shipping_address");
        String shipping_city = (String) customer_account.get("shipping_city");
        String shipping_state = (String) customer_account.get("shipping_state");
        String shipping_zip = (String) customer_account.get("shipping_zip");
        String billing_address = (String) customer_account.get("billing_address");
        String billing_city = (String) customer_account.get("billing_city");
        String billing_state = (String) customer_account.get("billing_state");
        String billing_zip = (String) customer_account.get("billing_zip");
        if (Objects.isNull(username) && Objects.isNull(shipping_address) && Objects.isNull(shipping_city)
        && Objects.isNull(shipping_state) && Objects.isNull(shipping_zip) && Objects.isNull(billing_address)
        && Objects.isNull(billing_city) && Objects.isNull(billing_state) && Objects.isNull(billing_zip)) {
            return R.error("Not enough information to post record");
        }
        try {
            customerAccountService.insertCustomerAccount(username, email_address, shipping_address, 
            shipping_city, shipping_state, shipping_zip, billing_address, billing_city,
            billing_state, billing_zip);
            return R.msg("Insert success");
        } catch (Exception e){
            System.err.println(e.getMessage());
            return R.error("An error occurred while inserting into database");
        }
    }
}
