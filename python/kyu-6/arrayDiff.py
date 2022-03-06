# returns difference between two arrays in original order
# uses a list comprehension and a conditional to find all values in a that are not in b

def array_diff(a, b):

    return [i for i in a if i not in b]