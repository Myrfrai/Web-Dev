v = int(input())
t = int(input())
s = v * t
if s < 0:
    print(109 + s)
elif s > 109:
    print(s - 109)
else:
    print(s)