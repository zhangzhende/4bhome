package com.zzd.services;

import com.zzd.bean.User;

/**
 * Created by zhangzhende on 2017/5/31.
 */
public interface IUserService {
    /**
     * 添加一個用戶
     * @param user
     * @return
     */
    public boolean InsertUser(User user);

    /**
     * 检查用户是否已存在
     * @param user
     * @return
     */
    public boolean CheckUser(User user);
}
