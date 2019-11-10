package com.eecs341.backend.controller;

import com.eecs341.backend.service.CustomerAccountService;
import com.eecs341.backend.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customerAccount")
public class CustommerAccountController {

    @Autowired
    private CustomerAccountService service;

    @GetMapping("/byEmail")
    public R getByEmail(@RequestParam String email) {
        return R.data(service.getByEmail(email));
    }
}
