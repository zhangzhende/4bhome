package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

/**
 * Created by zhangzhende on 2017/5/31.
 */
@EnableDiscoveryClient
@SpringBootApplication
public class Application {
    public static  void main(String[] args){
        SpringApplication.run(Application.class,args);
    }
}
