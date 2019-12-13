package com.eecs341.backend.mapper;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Mapper
@Component
public interface ShippingStatusMapper {
    @Select("select delivery_address\n" +
            "from eecs341.shipping_status\n" +
            "where to_facility_id in (\n" +
            "    select id\n" +
            "    from eecs341.facility\n" +
            "    where state = 'OH')" +
            "except (select shipping_id" +
            "         from eecs341.ship_ord" +
            "           where order_id in(select id" +
            "                               from eecs341.orders" +
            "                                where status = #{status}")
    List<Map> getDelivAddressInOhioExceptSelectSatus(@Param("status") String status);

    @Select("select ss1.id\n" +
            "from eecs341.shipping_status as ss1\n" +
            "except (select ss2.id\n" +
            "                 from eecs341.shipping_status as ss2\n" +
            "                 where ss2.sender_state = #{state})")
    List<Map>getShipStatIDsExceptSelectState(@Param(statet) int state);

    @Select("insert into eecs341.shipping_status(sender_address, delivery_address, sender_city,sender_state,sender_zip,delivery_city,delivery_state,delivery_zip)\n" +
            "values (#{sender_address}, #{delivery_address}, #{sender_city}, #{sender_state},#{sender_zip},#{delivery_city},#{delivery_state},#{delivery_zip})\n" +
            "returning id")
    int insertShippingStatus(
            @Param("sender_address") String senderAddress,
            @Param("delivery_address") String deliveryAddress,
            @Param("sender_city") String senderCity,
            @Param("delivery_city") String deliveryCity,
            @Param("sender_state") String senderState,
            @Param("delivery_state") String deliveryState,
            @Param("sender_zip") int senderZip,
            @Param("delivery_zip") int deliveryZip
    );

    @Insert("insert into eecs341.item_ship(item_id, shipment_id)\n" +
            "values (#{itemID}, #{shipmentID})")
    void insertItemShip(
        @Param("itemID") int itemID,
        @Param("shipmentID") int shipmentID

    );

    @Insert("insert into eecs341.ship_ord(shipment_id,order_id)\n" +
            "values (#{shipmentID}, #{orderID})")
    void insertShipOrd(
        @Param("orderID") int orderID,
        @Param("shipmentID") int shipmentID
    );

    @Insert("insert into eecs341.ship_fac(shipping_id, facility_id)\n" +
            "values (#{shipmentID}, #{facilityID})")
    void insertShipFac(
        @Param("facilityID") int facilityID,
        @Param("shipmentID") int shipmentID

    );

    @Select("select fi.facility_id from eecs341.prod_ord io, eecs341.prod_fac fi\n" +
            "where io.product_id=fi.product_id\n" +
            "and order_id = #{orderId}")
    List<Integer> getFacilityIdByOrderID(@Param("orderId") int orderId);
}
