package com.eecs341.backend.service;

import com.eecs341.backend.mapper.CustomerAccountMapper;
import com.eecs341.backend.model.CustomerAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerAccountService {

    @Autowired
    private CustomerAccountMapper mapper;

    public CustomerAccount getByEmail(String email) {
        return mapper.selectByEmail(email);
    }
}
