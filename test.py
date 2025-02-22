#import library to read the document
import requests
from bs4 import BeautifulSoup
import sys
sys.stdout.reconfigure(encoding='utf-8')

def decode(URL):
  file = retrieve_file(URL)
  if file is None:
    return None
  #skip the line that says the description of the file and the labels of the table
  file = file[5:]
  ymax = -1
  xmax = -1
  table = []
  i = 0
  while i < len(file) - 1:
    curr = [file[i].get_text(), file[i+1].get_text(), file[i+2].get_text()]
    currx = int(curr[0])
    curry = int(curr[2])
    xmax =  max(xmax, currx)
    ymax = max(ymax, curry)
    curr[0] = currx
    curr[2] = curry
    table.append(curr)
    i += 3

  finalcode = [[" " for x in range(xmax+1)] for y in range(ymax+1)]

  for row in table:
    finalcode[row[2]][row[0]] = row[1]

  for y in range(ymax, -1, -1):
    curr = ""
    for x in range(xmax):
      curr += finalcode[y][x]
    print(curr)
  return


def retrieve_file(URL):
  file = requests.get(URL)
  if file.status_code != 200:
    print("Failed to get the file")
    return None
  else:
    htmlvers = BeautifulSoup(file.text, "html.parser")
    content = htmlvers.find_all("p")
    return content
  
decode("https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub")
decode("https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub")