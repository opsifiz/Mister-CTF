import hashlib

key = input("Dormon's Safety Key : ")

# First MD5
hash1 = hashlib.md5(key.encode()).hexdigest()
# Second MD5
hash2 = hashlib.md5(hash1.encode()).hexdigest()
# Third MD5
hash3 = hashlib.md5(hash2.encode()).hexdigest()

if hash3 == "a3233a3800f8cba9dd419d1997d27412":
    print(f"Snickers 1: TVJPQ1RG{key[4]}21{key[3]}bWVfYm9{key[1]}Mnhv{key[4]}")