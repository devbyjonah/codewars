# two sum is a common coding problem where you must return two values from an array of integers that sum to a target value

def two_sum(numbers, target):

    # nested for loops compare each value in array to all other elements of the array checking for sum == target
    for x in range(len(numbers)):
        for y in range(len(numbers)):
            if x != y:
                if numbers[x] + numbers[y] == target:
                    return (x, y)