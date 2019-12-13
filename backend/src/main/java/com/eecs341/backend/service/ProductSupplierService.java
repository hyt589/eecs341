package com.eecs341.backend.service;

import com.eecs341.backend.mapper.ProductSupplierMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ProductSupplierService {

    @Autowired
    ProductSupplierMapper mapper;

    public List<Map> getAddressByName(String name) {
        return mapper.getAddressOfSupplierByName(name);
    }

    public List<Map> getAllNames() {
        return mapper.getAllSupplierNames();
    }

    public List<Map> getAllNamesExceptSelectName(String name){
        return mapper.getNameOfAllSuppliersExceptSelectSupplier(name);
    }

    public List<Map> getAllNamesNotSupplyingSelectCategory(String category){
        return mapper.getNameOfAllSuppliersThatDontSupplySelectCategory(category);
    }

    public boolean insertProductSupplier(
            String name
    ){
        List<Integer> productIdList = mapper.getProdIdBySuppID(prodID);
        if (productIdList.size() == 0{
            return false;
        }
        int productSupplierId = mapper.insertProductSupplier(name);
        mapper.insertSupBy(productIdList.get(0), productSupplierId);
        return true;
    }
}
