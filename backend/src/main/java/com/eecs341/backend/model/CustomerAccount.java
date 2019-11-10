package com.eecs341.backend.model;

import lombok.Data;

@Data
public class CustomerAccount {
    private int id;
    private String username;
    private String emailAddress;
    private String shippingAddress;
    private String billingAddress;
}
