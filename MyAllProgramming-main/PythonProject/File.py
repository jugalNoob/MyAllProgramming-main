f = open("demofile.txt")

f = open("demofile.txt", "rt")

f = open("demofile.txt", "r")
print(f.read())

f = open("D:\\myfiles\welcome.txt", "r")
print(f.read())



f = open("demofile2.txt", "a")
f.write("Now the file has more content!")
f.close()

#open and read the file after the appending:
f = open("demofile2.txt", "r")
print(f.read())


f = open("demofile3.txt", "w")
f.write("Woops! I have deleted the content!")
f.close()

#open and read the file after the overwriting:
f = open("demofile3.txt", "r")
print(f.read())


import os
os.remove("demofile.txt")