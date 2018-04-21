package com.zzd.controller;

import com.zzd.bean.User;
import org.springframework.stereotype.Controller;

/**
 * Created by zhangzhende on 2017/5/31.
 */
@Controller
public class UserController {

    public Object UserRegister(User user){
        return "OK";
    }
}
