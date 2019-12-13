package com.eecs341.backend.service;

import com.eecs341.backend.mapper.CustomerAccountMapper;
import com.eecs341.backend.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CustomerAccountService {

    @Autowired
    CustomerAccountMapper customerAccountMapper;

    @Autowired
    OrderMapper orderMapper;

    public List<Map> getMailingList() {
        return customerAccountMapper.getMailingList();
    }

    public void insertCustomerAccount(
        String username,
        String email_address,
        String shipping_address,
        String shipping_city,
        String shipping_state,
        String shipping_zip,
        String billing_address,
        String billing_city,
        String billing_state,
        String billing_zip
    ) {
        int customerId = customerAccountMapper.insertCustomerAccount(username, email_address, 
        shipping_address, shipping_city, shipping_state, shipping_zip, billing_address,
        billing_city, billing_state, billing_zip);
    }
}
