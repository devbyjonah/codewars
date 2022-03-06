# max ball function accepts an initial velocity in km/h
# A device is recording the balls path captures every tenth of a second
# the function must return the time of the maximum height the device records

def max_ball(v0):
    v = (((v0 * 1000)/60)/60) # conversion
    g = 9.81 # gravity acceleration m/s**
    t = 0 # integer t tracks increments of .1 seconds

    heights = [] # stores heights at .1 second increments
    times = [] # stores times with same index as matching height
    i = 0 # used to check if height is still positive
    while i >= 0:
        t += 1 # increment time by .1s
        heights.append((v*(t*0.1)) - (0.5 * g * (t * 0.1) * (t * 0.1))) # append balls height to aray
        times.append(t) # appends current time in tenths of a second to times array
        i = heights[-1] # assign i to last recorded height
    return times[heights.index(max(heights))]