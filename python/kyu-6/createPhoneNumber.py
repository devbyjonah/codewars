def create_phone_number(array):

# format() method uses {} as placeholders filled by the provided argument
# the * operator is used to unpack the array inputting a number for each placeholder

    return "({}{}{}) {}{}{}-{}{}{}{}".format(*array)