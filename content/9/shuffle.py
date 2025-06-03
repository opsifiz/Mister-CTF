import time
import random

timestamp = int(time.time()*1000)%1000000

random.seed(timestamp)

with open("here.png", "rb") as f:
    data = bytearray(f.read())

n = len(data)

for _ in range(n):
    i = random.randint(0,n-1)
    j = random.randint(0,n-1)
    data[i], data[j] = data[j], data[i]

with open("corrupted", "wb") as f:
    f.write(data)
