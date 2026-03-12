N = int(input().strip())
a = list(map(int, input().split()))

ans = "NO"
for i in range(N - 1):
    if a[i] * a[i + 1] > 0:
        ans = "YES"
        break

print(ans)