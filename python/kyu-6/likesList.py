# formats a list of users who have liked an image
# format method uses {} as placeholders, the * operator unpacks the name array with one elemnent for each placeholder

def likes(names):
    likes_display = ""
    if len(names) == 0:
        likes_display = "no one likes this"
    elif len(names) == 1:
        likes_display = "{} likes this".format(*names)
    elif len(names) == 2:
        likes_display = "{} and {} like this".format(*names)
    elif len(names) == 3:
        likes_display = "{}, {} and {} like this".format(*names)
    else:
        likes_display = "{}, {} and ".format(*names) + str(len(names) - 2) + " others like this"
    return likes_display