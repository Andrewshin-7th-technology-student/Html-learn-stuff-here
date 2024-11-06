from sklearn.linear_model import LinearRegression
import numpy as np

# Sample data
X = np.array([[1], [2], [3], [4]])
y = np.array([2, 3, 5, 7])

# Create a model and fit it
model = LinearRegression()
model.fit(X, y)

# Make a prediction
prediction = model.predict([[5]])
print(f'Prediction for input 5: {prediction}')
