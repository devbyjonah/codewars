def data_reverse(data):

    # data reverse function accepts a list of bytes(8 digits of 1s and 0s) and reverses them in place

    bytes_list = []

    for i in range(1, (len(data) // 8) + 1):
        bytes_list.insert(0, data[(i * 8) - 8:(i*8)])
    return sum(bytes_list, [])