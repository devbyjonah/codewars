class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None
    
def length(node):
    count = 1
    current = node
    
    if node == None:
        return 0
    
    if node.next == None:
        return 1
    
    while current.next != None:
        count += 1
        current = current.next
        
    return count
  
def count(node, data):
    count = 0
    current = node
    searching = True
    
    if node == None:
        return 0
    
    if node.next == None:
        if node.data == data:
            return 1
    
    while searching:
        if current.data == data:
            count += 1
        if current.next == None:
            searching = False
        current = current.next
    return count