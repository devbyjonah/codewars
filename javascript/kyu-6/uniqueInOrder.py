def unique_in_order(iterable):
    
    # list comprehension used to create an array with each unique character, no duplicats, and in their original order

    return [iterable[i] for i in range(len(iterable)) if i == 0 or iterable[i] != iterable[i - 1]]