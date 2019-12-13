package com.eecs341.backend.service;

import com.eecs341.backend.mapper.ItemMapper;
import com.eecs341.backend.mapper.OrderMapper;
import com.eecs341.backend.mapper.ShippingStatusMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ShippingStatusService {
    @Autowired
    ShippingStatusMapper shippingStatusMapper;

    public List<Map> getDelivAddressInOhioExceptCancelled(String deliveryAddress) {
        return shippingStatusMapper.getDelivAddressInOhioExceptCancelled(deliveryAddress);
    }

    public List<Map> getShipStatIDsExceptDneInOH(int id) {
        return shippingStatusMapper.getShipStatIDsExceptDneInOH(id);
    }

    public boolean insertShippingStatus(
            String senderAddress,
            String deliveryAddress,
            String senderCity,
            String deliveryCity,
            String senderState,
            String deliveryState,
            int senderZip,
            int deliveryZip,
            int orderId
    ) {
        List<Integer> facilityIdList =  shippingStatusMapper.getFacilityIdByOrderID(orderId);
        if (facilityIdList.size() == 0){
            return false;
        }
        int shippingStatusId = shippingStatusMapper.insertShippingStatus(
                senderAddress,
                deliveryAddress,
                senderCity,
                deliveryCity,
                senderState,
                deliveryState,
                senderZip,
                deliveryZip
        );
        shippingStatusMapper.insertShipOrd(orderId, shippingStatusId);
        shippingStatusMapper.insertShipFac(facilityIdList.get(0), shippingStatusId);
        return true;
    }
}
