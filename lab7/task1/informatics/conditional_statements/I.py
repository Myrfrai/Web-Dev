import math

x = int(input())
c = 0
d = 1
while d * d <= x:
    if x % d == 0:
        if d * d == x:
            c += 1
        else:
            c += 2
    d += 1
print(c)
