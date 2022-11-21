-- select语句：用于从指定表中查询数据，执行的结果被存储在一个结果表中，语法格式：
-- 从指定的表中查询满足条件的数据
SELECT 列名 FROM 表名
-- 多个列名可用逗号分隔

-- insert语句：向指定表中插入数据，值通过values指定
-- 注意：列和值必须一一对应，多个值和列之间使用逗号分隔
INSERT INTO 表名(列1,列2) VALUES (值1,值2)

-- update语句：用于修改表中的数据
-- update指定要更新哪个表中的数据，set指定列对应的新值，where指定更新的条件
UPDATE 表名 SET 列名 = 新值 WHERE 条件
-- 如果修改多个列，用逗号分隔列名1 = 新值1,列名2 = 新值2

-- 删除语句：删除表中的数据
DELETE FROM 表名 WHERE 条件

-- sql中的where子句：用于限定选择的标准，可在select、update、delete中使用
-- 在where子句中可使用的运算符：
-- =：等于、<>（!=）：不等于、>：大于、<：小于、>=：大于等于、<=：小于等于、between：在某个范围内、like：搜索某种模式

-- AND和OR运算符：
-- 可以在where子句中把两个或多个条件结合起来
-- and表示必须同时满足多个条件相当于&&运算符
-- or表示只用满足任意一个条件即可，相当于||运算符

-- sql中的order by语句：用于根据指定的列对结果集进行排序
-- 默认按照升序对记录进行排序
SELECT * FROM 表名 ORDER BY id DESC
-- 加了desc表示按照降序进行排序
-- 多重排序用逗号隔开

-- sql中的count(*)函数:返回查询结果的总数据条数
SELECT count(*) from 表名 WHERE 条件
-- 使用as关键字为列设置别名
SELECT count(*) AS 别名 from 表名 WHERE 条件
