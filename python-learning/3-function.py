# 定义函数
def my_abs(x):
    if not isinstance(x, (int, float)):
        x = int(x)
        # raise TypeError('bad operand type') 抛出异常
    if x >= 0: 
        return x
    else:
        return -x
    # pass 占位符，让代码先运行起来
print(my_abs(input('请输入一个数字:')))

# 函数参数需为不可变对象，否则多次声明函数会指向一个对象地址
# 函数可变参数
def sumNumber(*numbers):
    sum = 0
    for n in numbers:
        sum = sum + n
    return sum
print(sumNumber(20,50,100))
# 关键字参数 
# 可变参数允许你传入0个或任意个参数，这些可变参数在函数调用时自动组装为一个tuple。而关键字参数允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个dict
def person(name,age,**kw):
    print('name:',name,'age:',age,'other:',kw)
person('Adma',24,city='Beijing',job='Engineer')
# 如果要限制关键字参数的名字，就可以用命名关键字参数，例如，只接收city和job作为关键字参数。这种方式定义的函数如下：
def person(name,age,*,city,job):
    print(name,age,city,job)