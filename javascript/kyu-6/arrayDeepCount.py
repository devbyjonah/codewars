def deep_count(a):

    # Deep count uses recursion to count the layers of nested arrays
    # iterates through inital array checking for any nested arrays
    # if a nested array is found the function calls itself with the  inner array as the argument
    # this continues until the function iterates all the way through its input array without finding a nested array
    # this last call will then return its value to the previous caller until reaching the original function call

    count = 0
    for i in a:
        count += 1
        if type(i) == list:
            count += deep_count(i)
    return count