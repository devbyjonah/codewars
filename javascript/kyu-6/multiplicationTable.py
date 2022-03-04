def multiplication_table(size):

    # generates a multiplication table with column and row length of the size argument
    # uses a list comprehension which creates a list for each value in the range of size

    return [[(x + 1) * (i + 1) for x in range(size)] for i in range(size)]