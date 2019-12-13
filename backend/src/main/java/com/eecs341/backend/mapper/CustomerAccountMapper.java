package com.eecs341.backend.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
@Mapper
public interface CustomerAccountMapper {

    @Select("select id from eecs341.customer_account\n" +
            "where email_address=#{email}\n" +
            "and deleted=false" +
            "limit 1")
    int getIdByEmail(
            @Param("email") String email
    );

    @Select("select distinct email_address as email from eecs341.customer_account where deleted=false")
    List<Map> getMailingList();

    @Select("select ca1.shipping_address, o1.status \n" + 
            "from eecs341.customer_account as ca1, \n" + 
            "eecs341.cust_ord as co1, \n" + 
            "eecs341.orders as o1 \n" + 
            "where ca1.id = co1.customer_id \n" + 
            "  and o1.id = co1.order_id \n" + 
            "    except (select ca2.shipping_address, o2.status \n" + 
            "            from eecs341.customer_account as ca2, \n" + 
            "                 eecs341.cust_ord as co2, \n" + 
            "                 eecs341.orders as o2 \n" + 
            "            where ca2.id = co2.customer_id \n" + 
            "              and o2.id = co2.order_id \n" + 
            "              and o2.status = 'delivered')")
    List<Map> getShippingAddressOfCustomersExceptDelivered();

    @Select("select id, username, shipping_address, billing_address \n" +
            "from eecs341.customer_account as ca1 \n" +
            "where not exists( \n" +
            "select * \n" +
            "from eecs341.customer_account \n" +
            "where ca1.id = '1')")
    List<Map> getCustomerIdOfNotExists1 ();

    

    @Select("insert into eecs341.customer_account (username, email_address, shipping_address, \n" +
            "shipping_city, shipping_state, shipping_zip, billing_address, billing_city, \n" +
            "billing_state, billing_zip )\n" +
            "values (#{username}, #{email_address}, #{shipping_address}, #{shipping_city}, #{shipping_state}, \n" +
            "${shipping_zip}, #{billing_address}, #{billing_city}, #{billing_state}, ${billing_zip}) \n" +
            "returning id")
    int insertCustomerAccount(
            @Param("username") String username,
            @Param("email_address") String email_address,
            @Param("shipping_address") String shipping_address,
            @Param("shipping_city") String shipping_city,
            @Param("shipping_state") String shipping_state,
            @Param("shipping_zip") String shipping_zip,
            @Param("billing_address") String billing_address,
            @Param("billing_city") String billing_city,
            @Param("billing_state") String billing_state,
            @Param("billing_zip") String billing_zip
    );

    @Insert("insert into eecs341.cust_ord (customer_id, order_id)\n" +
            "values (#{customerID},#{orderID})")
    void insertCustOrd(
            @Param("customerID") int customerID,
            @Param("orderID") int orderID
    );
}
