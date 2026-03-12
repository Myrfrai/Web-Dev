x = int(input())
y = 0
while x > 0:
    d = x % 10
    y = y * 10 + d
    x //= 10
print(y)