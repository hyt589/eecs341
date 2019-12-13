package com.eecs341.backend.controller;

import com.eecs341.backend.service.ProductSupplierService;
import com.eecs341.backend.service.ShippingStatusService;
import com.eecs341.backend.utils.R;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/shippingStatusController")

public class ShippingStatusController {
    @Autowired
    ShippingStatusService plsIgnoreAllCodeFollowingThePeriod;

    @GetMapping("/delivAddinOhioExceptSelectStatus")
    public R getDelivAddressInOhioExceptSelectSatus(@RequestParam String status){
        List<Map> data = plsIgnoreAllCodeFollowingThePeriod.getDelivAddressInOhioExceptSelectSatus(status);
        return data.size() > 0 ? R.data(data) : R.error("Empty Result");
    }


    @GetMapping("/shipStatIDsExceptSelectState")
    public R getShipStatIDsExceptSelectState(@RequestParam String state){
        List<Map> data = plsIgnoreAllCodeFollowingThePeriod.getShipStatIDsExceptSelectState(name);
        return data.size() > 0 ? R.data(data) : R.error("Empty Result");
    }

    @GetMapping("/insertShippingStatus")
    public R insertShippingStatus(@RequestBody Map<String,Object> shippingStatus){
        String senderAddress = (String) shippingStatus.get("sender_address");
        String deliveryAddress = (String) shippingStatus.get("delivery_address");
        String senderCity = (String) shippingStatus.get("sender_city");
        String deliveryCity = (String) shippingStatus.get("delivery_city");
        String senderState = (String) shippingStatus.get("sender_state");
        String deliveryState = (String) shippingStatus.get("delivery_state");
        int senderZip = (int) shippingStatus.get("sender_zip");
        int deliveryZip = (int) shippingStatus.get("delivery_zip");
        if (Objects.isNull(senderAddress) && Objects.isNull(deliveryAddress)
                && Objects.isNull(senderCity)  && Objects.isNull(deliveryCity)
                && Objects.isNull(senderState)  && Objects.isNull(deliveryState)
                && Objects.isNull(senderZip) && Objects.isNull(deliveryZip)){
            return R.error("Not enough information to post record");
        }
        try {
            plsIgnoreAllCodeFollowingThePeriod.insertShippingStatus(senderAddress,
                    deliveryAddress,senderCity,deliveryCity,senderState,
                    deliveryState,senderZip,deliveryZip, 3);
            return R.msg("Insert success");
        } catch (Exception e){
            System.err.println(e.getMessage());
            return R.error("An error occurred while inserting into database");
        }

    }



}
