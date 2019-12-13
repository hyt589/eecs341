package com.eecs341.backend.service;

import com.eecs341.backend.mapper.CustomerAccountMapper;
import com.eecs341.backend.mapper.ItemMapper;
import com.eecs341.backend.mapper.OrderMapper;
import com.eecs341.backend.mapper.ShippingStatusServiceMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ShippingStatusService {
    @Autowired
    ShippingStatusServiceMapper shippingStatusServiceMapper;

    @Autowired
    FacilityMapper facilityMapper;

    @Autowired
    OrderMapper orderMapper;

    @Autowired
    ItemMapper itemMapper;

    public List<Map> getDelivAddressInOhioExceptCancelled(String delivery_address) {
        return shippingStatusServiceMapper.getDelivAddressInOhioExceptCancelled(delivery_address);
    }

    public List<Map> getShipStatIDsExceptDneInOH(int id) {
        return shippingStatusServiceMapper.getShipStatIDsExceptDneInOH(id);
    }

    public void insertShippingStatus(
            String sender_address,
            String delivery_address,
            String sender_city,
            String delivery_city,
            String sender_state,
            String delivery_state,
            int sender_zip,
            int delivery_zip
    ){
         int shippingSatusID = shippingStatusServiceMapper.();
        int facilityID = facilityMapper.();
        int orderId = orderMapper.insertOrder();
        int itemID = itemMapper.insertItem();
    }
}
