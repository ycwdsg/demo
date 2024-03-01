print('''line1
line2''') # 三引号换行
# 逻辑判断 and or not
print(True and True)
print(True or False)
print(not True)

# 格式化字符串输出（同c语言） % 表示格式化字符串
# 占位符 &s 表示字符串 %d 表示整数 %f 表示浮点数
print('hello %s' 'world' %('motherfucker '))
# 其他格式化字符串方式
print('Hello {0}, motherfucker!'.format('world'))
name = 'world'
print(f'Hello {name}, motherfucker!')

# list数组与tuple元组
classmate = ['Michale', 'Bob', 'Tracy']
print(len(classmate))
classmate.append('Jack') # 末尾添加一个
print(classmate)
classmate.pop() # 末尾删除一个 删除指定位置pop(i)
print(classmate)
classmate.insert(1,'Adam') # 指定位置插入
print(classmate)

classmate2 = ('Adam', 'Lisa', 'Bart') # 元组无法修改（同typescript）
print(classmate2)

# 条件判断

age = 3
if age >= 18:
    print('adult, you can do it')
else:
    print('teenager, you can do it')

birth = input('birth: ') # input可以让用户手输字符串，如果想要和数字比较，需要转换
if int(birth) < 2000:
    print('老逼登')
else:
    print('小年轻')
    # else if 需写成elif

# 匹配模式

score = 'A'
match score:
    case 'A':
        print('excellent')
    case 'B': #可匹配列表 case ['A', 'B']:
        print('good')
    case 'C': # 可匹配变量 case x if x < 10
        print('just so so')
    case _: # 表示匹配到其他任何情况
        print('bad')

# 循环
sum = 0 
for x in range(101): # range(101) 生成0-100的整数序列
    sum = sum + x
print(sum)

sum2 = 0
n = 100
while n > 0:
    sum2 = sum2 + n
    # print(sum2)
    if sum2 > 1000:
        break # 可用break直接跳出循环
    n = n - 1
    if n % 2 == 0: 
        continue # 可用continue跳出本次循环，直接执行下一次循环
    print(f'n = {n}')
print(sum2)

# 使用dict和set
d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
print(d['Michael'])
d['Adam'] = 67 # 可以通过key放入
# 可以通过in 或者 get判断dict中key是否存在
print('Adam' in d)
print(d.get('Tom'))
# 删除key可用pop的方法
d.pop('Bob')

# set和dict类似，是key的集合，但不存储value
# 要创建一个set，需要提供一个list作为输入集合
s = set([1,2,3])
s.add(4) # 可以add添加元素
s.remove(4) # remove删除

