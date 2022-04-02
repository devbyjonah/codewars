def solution(s):

    a = []
    c = ''
    
    for ind, i in enumerate(s):
        if ind == len(s) - 1:
            c += i
            a.append(c)
        if i.isupper():
            a.append(c)
            c = i
        else:
            c += i

    return ' '.join(a)