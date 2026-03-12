def xor(x, y):
    return (x + y) == 1

x, y = map(int, input().split())
print(1 if xor(x, y) else 0)