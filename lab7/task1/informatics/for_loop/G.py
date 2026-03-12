x = int(input())

d = 2
for d in range(2, 10):
    if x % d == 0:
        print(d)
        break