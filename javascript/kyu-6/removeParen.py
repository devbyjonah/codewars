def remove_parentheses(s):

    # function removes any parentheses and all of the content they contain

    result = ''
    open = 0

    for i in s:
        if i == '(':
            open += 1
            continue
        elif i == ')':
            open -= 1
            continue
        if open == 0:
            result += i
    return result