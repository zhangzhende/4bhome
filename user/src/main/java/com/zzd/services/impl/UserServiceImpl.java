package com.zzd.services.impl;

import com.zzd.bean.User;
import com.zzd.services.IUserService;
import org.springframework.stereotype.Service;

/**
 * Created by zhangzhende on 2017/5/31.
 */
@Service
public class UserServiceImpl implements IUserService{
    /**
     * 添加一個用戶
     * @param user
     * @return
     */
    @Override
    public boolean InsertUser(User user){
    return  true;
    }

    /**
     * 验证用户信息
     * @param user
     * @return
     */
    @Override
    public boolean CheckUser(User user){
    return true;
    }

}
