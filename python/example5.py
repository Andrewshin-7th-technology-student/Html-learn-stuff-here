# here is a basic game coded in python
import pygame
import sys

pygame.init()

# Set up display
screen = pygame.display.set_mode((400, 300))

# Set up colors
black = (0, 0, 0)
red = (255, 0, 0)

# Rectangle position
x, y = 50, 50

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Move the rectangle
    x += 1

    # Fill the screen
    screen.fill(black)
    pygame.draw.rect(screen, red, (x, y, 50, 50))
    pygame.display.flip()
