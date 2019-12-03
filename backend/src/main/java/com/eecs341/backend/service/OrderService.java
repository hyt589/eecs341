package com.eecs341.backend.service;

import com.eecs341.backend.mapper.CustomerAccountMapper;
import com.eecs341.backend.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class OrderService {

    @Autowired
    OrderMapper orderMapper;

    @Autowired
    CustomerAccountMapper customerAccountMapper;

    public List<Map> getOrderIdByEmailAddressExceptReturned(String email){
        return orderMapper.getOrderIdByEmailAddressExceptReturned(email);
    }

    public void insertOrder(
            String email,
            int productId,
            int qty
    ) {
        int customerId = customerAccountMapper.getIdByEmail(email);
        int orderId = orderMapper.insertOrder(qty);
        orderMapper.insertCustOrd(customerId, orderId);
        orderMapper.insertProductOrder(productId, orderId);
    }
}
