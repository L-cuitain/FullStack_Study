# 哔哩哔哩数据据设计练习
```sql
-- 注册表
CREATE TABLE register(
    r_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT '注册id',
    r_name VARCHAR(20) NOT NULL COMMENT '注册昵称',
    r_pwd VARCHAR(20) NOT NULL COMMENT '注册密码',
    r_phone VARCHAR(20) NOT NULL COMMENT '注册的电话号码'
);

insert into register values(1,'15843850965','123','12341232');

-- 登录表
CREATE TABLE login(
    l_id INT PRIMARY KEY AUTO_INCREMENT COMMENT '登录id',
    l_name VARCHAR(20) NOT NULL COMMENT '登录昵称',
    l_pwd VARCHAR(20) NOT NULL COMMENT '登录密码',
    l_time DATETIME NOT NULL COMMENT '登录时间'
);

drop table `user`;

-- 用户表
CREATE TABLE `user`(
    pk_u_id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT COMMENT '用户id',
    u_r_id INT NOT NULL  COMMENT '用户注册id',
    u_nickname VARCHAR(20) NOT NULL COMMENT '用户主页昵称 可以随意更改',
    u_email VARCHAR(30) COMMENT '用户邮箱',
    u_phone VARCHAR(20) COMMENT '用户手机号',
    u_restime DATETIME NOT NULL COMMENT '用户注册时间',
    u_status INT NOT NULL DEFAULT 1 COMMENT '用户是否禁用  1为未禁用 0为禁用',
    u_grade INT NOT NULL DEFAULT 1 COMMENT '用户等级',
    u_experience INT NOT NULL DEFAULT 0 COMMENT '用户等级经验',
    u_photo VARCHAR(70) DEFAULT '/img/1.png' COMMENT '用户头像',
    u_backgroud VARCHAR(70) DEFAULT '/img/background/1.png' COMMENT '用户背景',
    u_attention INT DEFAULT 0 COMMENT '用户关注数',
    u_fans INT DEFAULT 0 COMMENT '用户粉丝数',
    u_state INT DEFAULT 0 COMMENT '用户动态',
    u_coin DOUBLE DEFAULT 0.0 COMMENT '硬币数',
    u_Bcoin INT DEFAULT 0 COMMENT 'B币数',
    u_jiecao INT DEFAULT 0 COMMENT '节操数',
    u_vip CHAR DEFAULT 0 COMMENT '是否为大会员 1为是大会员 0为非大会员 ',
    FOREIGN KEY (u_r_id) REFERENCES register(r_id)
);

insert into `user`(user_id, user_r_id, user_r_name, user_nickname, user_pwd, user_email, user_phone, user_sex, user_restime, user_ip) values(1001,1,'张三','L-cuitain','123456','948527099@qq.com','15843850965','男',NOW(),'198.0.0.1');

-- 个人中心表
CREATE TABLE `user_center`(
    pk_uc_id INT NOT NULL PRIMARY KEY COMMENT '个人中心列表 id',
    uc_title VARCHAR(10) NOT NULL COMMENT '个人中心列表项'
);

-- 密保设置表
CREATE TABLE `user_center_encrypted`(
    pk_ep_id INT NOT NULL  PRIMARY KEY COMMENT '密保id',
    user_id INT NOT NULL COMMENT '用户id',
    uc_id INT NOT NULL COMMENT '个人中心列表 id',
    ep_question_one VARCHAR(30) NOT NULL,
    ep_answer_one VARCHAR(30) NOT NULL ,
    ep_question_two VARCHAR(30) NOT NULL,
    ep_answer_two VARCHAR(30) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES `user`(pk_u_id),
    FOREIGN KEY (uc_id) REFERENCES `user_center`(pk_uc_id)
);

-- 实名认证表
CREATE TABLE `user_center_realMessage`(
    pk_rm_id INT NOT NULL PRIMARY KEY COMMENT '实名认证id',
    user_id INT NOT NULL COMMENT '用户id',
    uc_id INT NOT NULL COMMENT '个人中心列表 id',
    rm_name VARCHAR(10) NOT NULL COMMENT '实名认证姓名',
    rm_card_option VARCHAR(15) NOT NULL DEFAULT '身份证' COMMENT '证件类型',
    rm_card_number VARCHAR(30) NOT NULL COMMENT '证号号码',
    rm_card_photo_one VARCHAR(30) NOT NULL COMMENT '手持证件照',
    rm_card_photo_two VARCHAR(30) NOT NULL COMMENT '证件照正面',
    rm_card_photo_three VARCHAR(30) NOT NULL COMMENT '证件照背面',
    FOREIGN KEY (user_id) REFERENCES `user`(pk_u_id),
    FOREIGN KEY (uc_id) REFERENCES `user_center`(pk_uc_id)
);

-- 用户硬币表
CREATE TABLE `user_center_coin`(
    u_id INT NOT NULL COMMENT '用户id',
    uc_id INT NOT NULL COMMENT '个人中心列表 id',
    coin_time DATETIME NOT NULL COMMENT '硬币获取日期',
    coin_change INT NOT NULL COMMENT '硬币变化',
    coin_reason VARCHAR(10) NOT NULL COMMENT '原因',
    FOREIGN KEY (u_id) REFERENCES `user`(pk_u_id),
    FOREIGN KEY (uc_id) REFERENCES `user_center`(pk_uc_id)
);

-- 用户记录表
CREATE TABLE `user_center_login_record`(
    u_id INT NOT NULL COMMENT '用户id',
    uc_id INT NOT NULL COMMENT '个人中心列表 id',
    pk_lr_id INT NOT NULL PRIMARY KEY COMMENT '用户记录列表id',
    lr_time DATETIME NOT NULL COMMENT '登录时间',
    lr_change VARCHAR(20) NOT NULL  COMMENT '登录ip变化',
    lr_location VARCHAR(30) NOT NULL COMMENT '登录地理位置',
    FOREIGN KEY (u_id) REFERENCES `user`(pk_u_id),
    FOREIGN KEY (uc_id) REFERENCES `user_center`(pk_uc_id)
);


-- 节操记录表
CREATE TABLE `user_center_jiecao_record`(
    u_id INT NOT NULL COMMENT '用户id',
    uc_id INT NOT NULL COMMENT '个人中心列表 id',
    pk_jr_id INT NOT NULL PRIMARY KEY COMMENT '节操记录列表id',
    jr_time DATETIME NOT NULL COMMENT '节操记录时间',
    jr_change INT NOT NULL  COMMENT '节操变化',
    jr_reason VARCHAR(30) NOT NULL COMMENT '节操变化原因',
    jr_explain VARCHAR(30) NOT NULL COMMENT '节操变化说明',
    FOREIGN KEY (u_id) REFERENCES `user`(pk_u_id),
    FOREIGN KEY (uc_id) REFERENCES `user_center`(pk_uc_id)
);

-- 经验记录表
CREATE TABLE `user_center_experience_record`(
    u_id INT NOT NULL COMMENT '用户id',
    uc_id INT NOT NULL COMMENT '个人中心列表 id',
    pk_jr_id INT NOT NULL PRIMARY KEY COMMENT '经验记录列表id',
    jr_time DATETIME NOT NULL COMMENT '经验记录时间',
    jr_change INT NOT NULL  COMMENT '经验变化',
    jr_reason VARCHAR(30) NOT NULL COMMENT '经验变化原因',
    FOREIGN KEY (u_id) REFERENCES `user`(pk_u_id),
    FOREIGN KEY (uc_id) REFERENCES `user_center`(pk_uc_id)
);

-- 邀请码表
CREATE TABLE `user_center_invitation`(
    u_id INT NOT NULL COMMENT '用户id',
    uc_id INT NOT NULL COMMENT '个人中心列表 id',
    ivt_code VARCHAR(20) NOT NULL COMMENT '邀请码',
    ivt_buy_time DATETIME NOT NULL COMMENT '邀请码购买时间',
    ivt_valid_time DATETIME NOT NULL COMMENT '邀请码有效时间',
    FOREIGN KEY (u_id) REFERENCES `user`(pk_u_id),
    FOREIGN KEY (uc_id) REFERENCES `user_center`(pk_uc_id)
);

-- 个人空间表
CREATE TABLE `user_personal_space`(
    ups_id INT NOT NULL COMMENT '个人空间表id',
    
)

```