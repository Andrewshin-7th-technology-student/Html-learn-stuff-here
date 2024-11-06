import os

# Directory containing the files
directory = '/path/to/directory'

for filename in os.listdir(directory):
    if filename.endswith('.txt'):
        new_name = filename.replace('.txt', '_renamed.txt')
        os.rename(os.path.join(directory, filename), os.path.join(directory, new_name))
