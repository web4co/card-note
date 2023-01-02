## 数据库设计
| 数据表     | 命名    | 备注                      |
| :--------- | :-----: | :----------------------- |
| 卡片信息  | card     | 卡片属性以及内容 |
| 卡片分类  | category | 卡片分类支持多级  |

### 卡片分类category
- cateid
- parentCateid
- parentPath
- cateName
- cateIcon
- seq

### 卡片信息card
- cardid
- cardType
- title
- content
- createTime
- updateTime

### 分类卡片关联
- cateid
- cardid
- cardType
- title
