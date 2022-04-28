# Node class gives node object two attributes: data and next
# self.data == the value the node is storing
# self.next == a pointer to the next node in the linked list
# This is the simplest implementation of a singly linked list

class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None
    
# length function accepts a node (the head of a linked list)

def length(node):
    # current variable is used to store the current node
    count = 1 # count is set to 1 to account for the first node
    current = node
    
    if node == None: # checks for invalid input
        return 0
    
    if node.next == None: # checks for single node
        return 1
    
    while current.next != None: # while loop iterates through linkedlist
        count += 1              # increment count for each node
        current = current.next  # set current equal to the next node by using the .next pointer
        
    return count

# count function counts the occurences of a given integer in a linked list
  
def count(node, data):
    count = 0
    current = node # assign current variable to inputted node(head of linked list)
    searching = True # searching variable to prevent loop from terminating before checking final node
    
    if node == None: # check for invalid input
        return 0
    
    if node.next == None: # check for single node
        if node.data == data:
            return 1
    
    while searching: # iterate through linkedlist checking for target value
        if current.data == data:
            count += 1
        if current.next == None:
            searching = False
        current = current.next
    return count