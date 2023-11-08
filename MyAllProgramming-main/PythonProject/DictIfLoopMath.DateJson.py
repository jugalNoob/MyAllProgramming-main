thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964,
    "colors": ["red", "white", "blue"]
}
print(thisdict["brand"])
print(len(thisdict))
x = thisdict["model"]
x = thisdict.get("model")
x = thisdict.keys()
thisdict.pop("model")
thisdict.update({"year": 2020})
thisdict["year"] = 2018
thisdict["color"] = "red"
for x in thisdict.values():
    for x in thisdict:
  print(x)
  print(x)
thisdict = dict(name = "John", age = 36, country = "Norway")
print(thisdict)




car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}

x = car.keys()

print(x) #before the change

car["color"] = "white"

print(x) #aft


myfamily = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
}

child1 = {
  "name" : "Emil",
  "year" : 2004
}
child2 = {
  "name" : "Tobias",
  "year" : 2007
}
child3 = {
  "name" : "Linus",
  "year" : 2011
}

myfamily = {
  "child1" : child1,
  "child2" : child2,
  "child3" : child3
}
print(myfamily["child2"]["name"])



#Loop python

i = 1
while i < 6:
  print(i)
  i += 1
  
  fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
  
  
  #Python Function
  
  def my_function(fname):
  print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
my_function("Linus")

x = lambda a : a + 10
print(x(5))

x = lambda a, b : a * b
print(x(5, 6))

def myfunc(n):
  return lambda a : a * n

#Python Date Time

import datetime

x = datetime.datetime.now()
print(x)
x = datetime.datetime(2020, 5, 17)

print(x)
print(x.year)
print(x.strftime("%A"))


#Python Math 
x = min(5, 10, 25)
y = max(5, 10, 25)

print(x)
print(y)

x = abs(-7.25)

print(x)


x = pow(4, 3)

print(x)


x = math.ceil(1.4)
y = math.floor(1.4)

print(x) # returns 2
print(y) # returns 1

#Python Import Json

import json

# some JSON:
x =  '{ "name":"John", "age":30, "city":"New York"}'
# parse x:
y = json.loads(x)
# the result is a Python dictionary:
print(y["age"])

x = {
  "name": "John",
  "age": 30,
  "city": "New York"
}

# convert into JSON:
y = json.dumps(x)

# the result is a JSON string:
print(y)

print(json.dumps({"name": "John", "age": 30}))
print(json.dumps(["apple", "bananas"]))
print(json.dumps(("apple", "bananas")))
print(json.dumps("hello"))
print(json.dumps(42))
print(json.dumps(31.76))
print(json.dumps(True))
print(json.dumps(False))
print(json.dumps(None))