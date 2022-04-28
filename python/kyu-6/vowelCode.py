# encode maps all vowels to numbers in these pairs {a:1, e:2, i:3, o:4, u:5}
# translate method accepts a hash map 
# maketrans method generates a hash map using indexes of two strings equal in length

def encode(st):
    return st.translate(str.maketrans('aeiou', '12345'))
    
def decode(st):
    return st.translate(str.maketrans('12345', 'aeiou'))