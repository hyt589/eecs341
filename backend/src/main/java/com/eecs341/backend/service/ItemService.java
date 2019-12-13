package com.eecs341.backend.service;

import com.eecs341.backend.mapper.ItemMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Service
public class ItemService {
    @Autowired
    ItemMapper mapper;

    public List<Map> facilitiesContainingItemsOfStatus(String status) {
        return mapper.selectAllFacilitiesContainingItemOfStatus(status);
    }

    public List<Map> filterItemsByVariousCondition(Map<String, List<String>> conditions) {
        List<String> facilityStates = conditions.get("facilityStates");
        List<String> productCategories = conditions.get("productCategories");
        List<String> suppliers = conditions.get("suppliers");
        List<String> itemStatus = conditions.get("itemStatus");
        String sql = "";
        String stateList = constructSqlList(facilityStates, "and f.state in");
        String categoryList = constructSqlList(productCategories, "and p.category in");
        String supplierList = constructSqlList(suppliers, "and ps.name in");
        String statusList = constructSqlList(itemStatus, "and i.status in");
        sql += stateList + categoryList + supplierList + statusList;
        return mapper.filterItemByVariousCondition(sql);
    }

    private String constructSqlList(List<String> list, String prefix){
         if (Objects.nonNull(list) && list.size() > 0) {
              String lstStr = list.stream().map(s -> "'" + s + "'").reduce((s1, s2) -> s1 + "," + s2).orElse("");
              lstStr = prefix + " (" + lstStr + ")\n";
              return lstStr;
         }
         return "";
    }
}