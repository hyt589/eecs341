package com.eecs341.backend.utils;

import java.util.HashMap;

public class R extends HashMap<String, Object> {

    public R(String msg, int code) {
        this.put("msg", msg);
        this.put("code", code);
    }

    public static R data(Object data) {
        R r = new R("ok", 200);
        r.put("data", data);
        return r;
    }

    public static R msg(String msg) {
        return new R(msg, 200);
    }

    public static R error(String msg) {
        return new R(msg, 500);
    }
}
