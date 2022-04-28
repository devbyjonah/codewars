# Highest rank function returns the integer with the most occurences in an array

def highest_rank(arr):
    max_count = 0
    max_result = 0
    for i in arr:
        if arr.count(i) > max_count:
            max_count = arr.count(i)
            max_result = i
        elif arr.count(i) == max_count and i > max_result:
            max_count = arr.count(i)
            max_result = i
    return max_result