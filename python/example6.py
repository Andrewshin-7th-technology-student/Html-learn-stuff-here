import requests
from bs4 import BeautifulSoup

# Fetch the webpage
url = 'https://example.com'
response = requests.get(url)

# Parse the content
soup = BeautifulSoup(response.text, 'html.parser')

# Extract titles
titles = soup.find_all('h1')
for title in titles:
    print(title.text)
