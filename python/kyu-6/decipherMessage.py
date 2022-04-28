def decipher_this(string):

# solution deciphers messages with the following encryption:
# - second and last letters swuitched
# - first letter replaced with its character code

    list = string.split(' ')
    result = []

    for i in list:
        num, body = '', ''
        for char in i:
            if char in '0123456789':
                num += char
            else:
                body += char
        if len(body) > 1:
            result.append(chr(int(num)) + body[-1] + body[1:-1] + body[0])
        elif len(body) == 1:
            result.append(chr(int(num)) + body)
        else:
            result.append(chr(int(num)))

    return ' '.join(result)