def encrypt(txt):
    n = len(txt)
    msg = []
    x = n**(0.5)//1
    if x*x != n:
        return "Invalid Length Flag!"
    x = int(x)
    for i in range(0,n,x):
        msg.append(txt[i:i+x][::-1])
    msg = ''.join(msg)
    return msg[n//2:][::-1] + msg[:n//2]

flag = input("Enter Your Flag : ")

with open("enc.txt","w") as f:
    f.write(encrypt(flag))