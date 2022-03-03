def deep_count(a):

    # Deep count uses recursion to count the layers of nested arrays
    # iterates through inital array checking for any nested arrays
    # if a nested array is found the function calls itself with the argument being the nested array
    # this continues until the function iterates all the way through its input array without finding a nested array
    # the value that is returned that continues returning to the previous caller until the original call is returned

    count = 0
    for i in a:
        count += 1
        if type(i) == list:
            count += deep_count(i)
    return count