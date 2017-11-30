# 增加博客查询功能

----
#### 从此可以查看博客内容。

#####相关notes

新建字段  
alter table blogs add isDeleted varchar(255);

修改字段类型  
alter table blogs modify column isDeleted tinyint(1);  

查看表结构
describe blogs;

选择数据库  
use joexp;

修改字段默认值  
alter table blogs alter column isDeleted set default 0;

源码传送门： [Github](https://github.com/JoJoChilly/joexp-react)
