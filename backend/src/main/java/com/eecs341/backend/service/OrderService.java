package com.eecs341.backend.service;

import com.eecs341.backend.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class OrderService {

    @Autowired
    OrderMapper mapper;

    public List<Map> getOrderIdByEmailAddressExceptReturned(String email){
        return mapper.getOrderIdByEmailAddressExceptReturned(email);
    }
}
