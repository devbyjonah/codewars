class SnakesLadders():

    import math

    # Basic Snakes and Ladders implementation using chained conditionals to check for when players hit snakes and ladders.

    # Uses 2 dictionaries to store the start and end space of each snake and ladder
    # ladders = {starting_space: destination} snakes = {starting_space: destination}

    ladders = {2:38, 7:14, 8:31, 15:26, 21:42, 28:84, 36:44, 51:67, 71:91, 78:98, 87:94}
    snakes = {16:6, 46:25, 49:11, 62:19, 64:60, 74:53, 89:68, 92:88, 95:75, 99:80}
    
    def __init__(self):

        # Storing each player's position on the board as a class attribute : self.p1_pos self.p2_pos
        # self.turn is used to determine the active player
        # self.playing attribute used to determine when game has concluded.

        self.p1_pos = 0
        self.p2_pos = 0
        self.turn = 0
        self.playing = True

        # play method accepts game object and the two dice values for current player's turn
        # added checkPosition method as extra functionality

    def checkPosition(self):
        return self.p1_pos if self.turn == 0 else self.p2_pos

    def play(self, die1, die2):

        # First checks if game is active and returns 'Game over!' if false

        if self.playing == False:
            return 'Game over!'

        # Checks for double dice roll

        double = False

        if die1 == die2:

            double = True

        # Checks for active player
        # Checks for player position == 100(win) or > 100(sent back)
        # Checks if new position value is in the list of keys of the snakes and ladders dictionaries
        # Sets turn equal to next player if current player didnt roll double

        if self.turn == 0:

            self.p1_pos += die1 + die2

            if self.p1_pos == 100:

                self.playing = False
                return 'Player 1 wins!'

            elif self.p1_pos > 100:

                self.p1_pos = 100 - (self.p1_pos - 100)

            if self.p1_pos in SnakesLadders.ladders.keys():

                self.p1_pos = SnakesLadders.ladders[self.p1_pos]

            elif self.p1_pos in SnakesLadders.snakes.keys():

                self.p1_pos = SnakesLadders.snakes[self.p1_pos]

            if not double:

                self.turn += 1

            return f'Player 1 is on square {self.p1_pos}'

        # same checks as above changed slightly for player 2's turn

        elif self.turn == 1:

            self.p2_pos += die1 + die2

            if self.p2_pos == 100:

                self.playing = False

                return 'Player 2 Wins!'

            elif self.p2_pos > 100:

                self.p2_pos = 100 - (self.p2_pos - 100)

            if self.p2_pos in SnakesLadders.ladders.keys():

                self.p2_pos = SnakesLadders.ladders[self.p2_pos]

            elif self.p2_pos in SnakesLadders.snakes.keys():

                self.p2_pos = SnakesLadders.snakes[self.p2_pos]

            if not double:

                self.turn -= 1

            return f'Player 2 is on square {self.p2_pos}'
