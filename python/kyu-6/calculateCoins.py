import math

def loose_change(cents):

# checks for invalid inputs 0 and float

    if cents <= 0:
         return {'Nickels' : 0, 'Pennies' : 0, 'Dimes' : 0, 'Quarters' : 0}
    if type(cents) == float:
        c = math.floor(cents)
    else:
        c = cents

    # divides cents by coins in descending value order to determine quantity of each
    
    quarters = c // 25
    c -= (quarters * 25)
    dimes = c // 10
    c -= (dimes * 10)
    nickels  = c // 5
    c -= (nickels * 5)
    pennies = c
    
    return {'Nickels' : n, 'Pennies' : p, 'Dimes' : d, 'Quarters' : q}

# improved solution uses % to find result more efficiently

def loose_change_improved(cents):
    c = max(int(cents), 0)
    return {'Quarters': c/25, 'Dimes': c%25/10, 'Nickels': c%25%10/5, 'Pennies': c%5}