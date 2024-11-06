import pandas as pd

# Read a CSV file
data = pd.read_csv('data.csv')

# Display the first few rows
print(data.head())

# Calculate the mean of a column
mean_value = data['column_name'].mean()
print(f'Mean: {mean_value}')
