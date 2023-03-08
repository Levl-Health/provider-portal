from faker import Faker
# import csv
import numpy as np
from random import randint 
import random
import random as r
import pandas as pd 
from faker.providers import BaseProvider

fake = Faker()

class CustomProvider(BaseProvider):
    __provider__ = "personalia"
    
    def personalia(self):
        gender = self.random_element(["F", "M"])
        middle_name = self.generator.first_name_male() if gender == "M" else self.generator.first_name_female()
        return middle_name 
        # + " " + last_name

fake.add_provider(CustomProvider)

personalia = fake.personalia()
idNumbers = [1111, 2222, 3333, 4444]
symptoms = ['insomnia', 'lack of appetite', 'irritability', 'impulsivity', 'weight gain', 'inactivity', 'hyperactivity']

#function to create 
def input_data(x):
   
    # pandas dataframe
    data = pd.DataFrame()
    pd.set_option('display.max_rows', None)
    pd.set_option('display.max_columns', 500)
    pd.set_option('max_colwidth', 400)
    pd.set_option('display.width', 1000)
    pd.options.display.float_format = '{:.0f}'.format
    for i in range(0, x):
        data.loc[i,'patientMetricsId']= int(np.random.randint(1,90))
        data.loc[i,'patientId']= int(np.random.randint(1,90))
        data.loc[i,'title']= str(np.random.choice(symptoms))
        # data.loc[i,'adhd']= (np.random.randint(0,100))
        # data.loc[i,'anxiety']= (np.random.randint(0,100))
        # data.loc[i,'depression']= (np.random.randint(0,100))
        # data.loc[i,'createdAt']= (fake.date_this_century())
        # data.loc[i,'dosages']= int(np.random.randint(1,5))
        # data.loc[i,'dosagesTaken']= int(np.random.randint(1,5))
        # data.loc[i,'checkedIn']= random.choice([1, 0])
        # data.loc[i,'moodLevel']= (np.random.randint(0,100))
        # data.loc[i,'overdue']= random.choice([1, 0]) 
        # data.loc[i,'riskStatus']= (np.random.randint(0,100))
        # data.loc[i,'firstName']= str(fake.first_name())
        # data.loc[i,'middleName']= str(fake.personalia())
        # data.loc[i,'lastName']= str(fake.last_name())
        # data.loc[i,'providerId']= int(np.random.randint(1,14))
        # data.loc[i,'address']= fake.address()
        # data.loc[i,'birthday']= (fake.date_between())
        # data.loc[i,'last check in']= (fake.date())
        # data.loc[i,'next check in']= (fake.date())
        # data.loc[i,'last assessment']= (fake.date())
        # data.loc[i,'next assessment']= (fake.date())
        
    
    return data
   
info = input_data(90)
df = pd.DataFrame(info)
df.to_excel(r'C:\Users\dhruv\Downloads\Spring23\CS491\Fake-Data\sideeffects.xlsx', index=False)

# separate the user info column into first, last, email
# make sure you have every aspect of the schema from github mocked but focus on patient for today
# try to get all of it into mysql 
# select * from dbo.[user] is done 
# select * from dbo.[provider] is done
# select * from dbo.[patient] is done
# select * from dbo.[dailymetrics] is done