# 用户表(users)
```sql
CREATE TABLE `users`(
    `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '主键',
    `email` VARCHAR(200) NOT NULL COMMENT '邮箱',
    `password` VARCHAR(200) NOT NULL COMMENT '密码',
    `nickname` VARCHAR(100) DEFAULT NULL COMMENT '昵称',
    `slug` VARCHAR(200) NOT NULL COMMENT '别名',
    `avatar`  VARCHAR(200) DEFAULT NULL COMMENT '头像',
    `status`  VARCHAR(20) NOT NULL COMMENT '状态(未激活(unactivated)，已激活(activated)，无权限(forbidden)，禁用)',
    `bio`  VARCHAR(250) DEFAULT NULL COMMENT '个人简介'
) ENGINE = INNODB DEFAULT CHARSET = utf8;


insert into users(email,password,nickname,slug,avatar,status,bio) values (
  '948527099@qq.com','123456','admin','admin','/img/default.png','activated','一切开始于迅速的行动'
);


```

# 文章表(posts)
```sql
CREATE TABLE posts(
`id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '主键',
`slug` VARCHAR(200) NOT NULL COMMENT '别名',
`title` VARCHAR(200) NOT NULL COMMENT '文章标题',
`feature` VARCHAR(200) DEFAULT NULL COMMENT '发表时间',
`created` DATETIME  NOT NULL COMMENT '发表时间',
`content` TEXT COMMENT '内容',
`views` INT(10) COMMENT '浏览量',
`likes` INT(10) COMMENT '点赞量',
`status` VARCHAR(20) NOT NULL COMMENT '草稿(drafted)/已发布(published)/回收站(trashed)',
`user_id` INT(11) NOT NULL  COMMENT '用户ID',
`categiry_id` INT(11) NOT NULL  COMMENT '分类ID'
) ENGINE = INNODB DEFAULT CHARSET = utf8;



INSERT INTO `posts` (`id`, `slug`, `title`, `feature`, `created`, `content`, `views`, `likes`, `status`, `user_id`, `category_id`) VALUES
(1, 'hello-world', '世界，你好categories', '/uploads/2017/hello-world.jpg', '2017-07-01 08:08:00', '欢迎使用阿里百秀。这是您的第一篇文章。编辑或删除它，然后开始写作吧！', 222, 111, 'published', 1, 1),
(2, 'simple-post-2', '第一篇示例文章', NULL, '2017-07-01 09:00:00', '欢迎使用阿里百秀。这是一篇示例文章', 123, 10, 'drafted', 1, 1),
(3, 'simple-post-3', '第二篇示例文章', NULL, '2017-07-01 12:00:00', '欢迎使用阿里百秀。这是一篇示例文章', 20, 120, 'drafted', 1, 2),
(4, 'simple-post-4', '第三篇示例文章', NULL, '2017-07-01 14:00:00', '欢迎使用阿里百秀。这是一篇示例文章', 40, 100, 'drafted', 1, 3);


```

# 分类表(category)
```sql
CREATE TABLE `categories`(
    `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '主键',
    `slug` VARCHAR(200) NOT NULL COMMENT '别名',
    `name` VARCHAR(200) NOT NULL COMMENT '分类别名'
) ENGINE = INNODB DEFAULT CHARSET = utf8;

-- 文章分类
INSERT INTO `categories` (`id`, `slug`, `name`) VALUES
(1, 'uncategorized', '未分类'),
(2, 'funny', '奇趣事'),
(3, 'living', '会生活'),
(4, 'travel', '爱旅行');

```


# 评论表(comments)
```sql
CREATE TABLE `comments`(
    `id` INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY COMMENT '评论表主键',
    `author` VARCHAR(20) NOT NULL COMMENT '作者',
    `email` VARCHAR(50) NOT NULL COMMENT '邮箱',
    `created` DATE TIME NOT NULL COMMENT '创建时间',
    `content` TEXT COMMENT '内容',
    `status` VARCHAR(20) NOT NULL COMMENT '待审核(held) 准许(approved) 拒绝(rejected) 回收站(trashed)',
    `post_id` INT(11) NOT NULL COMMENT '文章ID',
    `parent_id` INT(11) NOT NULL COMMENT '父级ID'
) ENGINE = INNODB DEFAULT CHARSET = utf8;


-- 文章评论
INSERT INTO `comments` (`id`, `author`, `email`, `created`, `content`, `status`, `post_id`, `parent_id`) VALUES
(1, '汪磊', 'w@zce.me', '2017-07-04 12:00:00', '这是一条测试评论，欢迎光临', 'approved', 1, NULL),
(2, '嘿嘿', 'ee@gmail.com', '2017-07-05 09:10:00', '想知道香港回归的惊人内幕吗？快快与我取得联系', 'rejected', 1, NULL),
(3, '小右', 'www@gmail.com', '2017-07-06 14:10:00', '你好啊，交个朋友好吗？', 'held', 1, NULL),
(4, '汪磊', 'www@gmail.com', '2017-07-09 22:22:00', '不好', 'held', 1, 3),
(5, '汪磊', 'w@zce.me', '2017-07-09 18:22:00', 'How are you?', 'held', 1, 3),
(6, '小右', 'www@gmail.com', '2017-07-11 22:22:00', 'I am fine thank you and you?', 'held', 1, 5),
(7, '哈哈', 'hh@gmail.com', '2017-07-22 09:10:00', '一针见血', 'approved', 1, NULL);

```

# 设置表(options)
```sql
CREATE TABLE `options`(
    `id` INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY COMMENT '主键',
    `key` VARCHAR(200) NOT NULL COMMENT '属性键',
    `value` TEXT NOT NULL COMMENT '属性值'
) ENGINE = INNODB DEFAULT CHARSET = utf8;    
```