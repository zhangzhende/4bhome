package com.zzd.services.impl;

import com.zzd.bean.User;
import com.zzd.services.IServices;
import com.zzd.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by zhangzhende on 2017/5/31.
 */
@Service
public class ServicesImpl  implements IServices{
    @Autowired
    private IUserService userService;
    public Object AddUser(User user){
        userService.InsertUser(user);
        return "OK";
    }

}
