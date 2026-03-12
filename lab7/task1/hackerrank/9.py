n = int(input().strip())
arr = list(map(int, input().split()))

max_score = max(arr)
runner_up = max(x for x in arr if x != max_score)

print(runner_up)