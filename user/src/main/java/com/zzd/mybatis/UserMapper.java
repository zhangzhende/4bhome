package com.zzd.mybatis;

import com.zzd.bean.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by zhangzhende on 2017/6/26.
 */
@Mapper
public interface UserMapper {
     void addUser(User user);

     User getUsrById(String id);

     void updateUser(User user);

     void deleteUserByid(User user);
}
