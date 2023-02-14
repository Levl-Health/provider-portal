from faker import Faker
import csv

from random import randint 
import pandas as pd 
 

fake = Faker()

 
def input_data(x):
   
    # pandas dataframe
    data = pd.DataFrame()
    pd.set_option('display.max_rows', None)
    pd.set_option('max_colwidth', 400)
    for i in range(0, x):
        data.loc[i,'name']= fake.name()
        data.loc[i,'address']= fake.address()
        data.loc[i,'email']= str(fake.email())
    return data
   

info = input_data(100)
with open('data.csv', 'w') as f:
    writer = csv.writer(f)
    writer.writerow([info])