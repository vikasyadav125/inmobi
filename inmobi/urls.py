#!/usr/bin/python
import string
import sys
import re
import pymongo
from pymongo import MongoClient
client=MongoClient()
db=client.project
import datetime
posts=db.domain

def extract_domain(filename):
  f = open(filename, 'rU')
  text = f.read()
  names = re.findall(r'\'[ \w]+\': \[[.\'\-:/\w,\s\n]+\]', text)
  return names

def main():
  url=[]
  name=extract_domain(sys.argv[1])
  for v in name:
    domain=re.findall(r'\'[ \w]+\':', v)
    print("\n\n",domain)
    post={"domain":domain}
    post_id=posts.insert_one(post).inserted_id
    cont=re.findall(r'\[[.\'\-:/\w,\s\n]+\]', v)
    conte=re.findall(r'\'[.\-:/\w\s\n]+\'', cont[0])
    i=0
    for var in conte:
      urlm=var.split(",")
      print("\n",urlm)
      url=urlm   
    for index in range(len(url)):
      result = db.domain.update_one(
            {"domain": domain},
         {
         "$set": {
             "url":[url[index]]
            },
         }
      ) 
      print(result)
if __name__ == '__main__':
  main()
