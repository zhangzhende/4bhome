package com.zzd.bean;

/**
 * Created by zhangzhende on 2017/5/31.
 */
public class User {
    /**
     * 用户ID
     */
    private String userId;
    /**
     * 用户密码
     */
    private String password;
    /**
     * 用户名称，昵称
     */
    private String username;
    /**
     * 用户点子邮箱
     */
    private String email;
    /**
     * 用户头像
     */
    private String photo;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}
