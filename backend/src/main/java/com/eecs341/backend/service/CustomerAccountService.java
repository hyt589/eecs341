package com.eecs341.backend.service;

import com.eecs341.backend.mapper.CustomerAccountMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CustomerAccountService {

    @Autowired
    CustomerAccountMapper customerAccountMapper;

    public List<Map> getMailingList() {
        return customerAccountMapper.getMailingList();
    }
}
