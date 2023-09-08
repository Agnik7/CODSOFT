import os
import uuid
from pymongo import MongoClient
import bcrypt
MONGO_PASSWORD = os.environ.get("MONGO_PASSWORD")
CONNECTION = f"mongodb+srv://bakshiagnik:{MONGO_PASSWORD}@cluster0.fn9sjyf.mongodb.net/?retryWrites=true&w=majority"
CLIENT = MongoClient(CONNECTION)
if CLIENT:
    print("=========Connection Successfull=============")
else:
    print("==========Connection Failed==========")

USER_DATABASE = CLIENT.get_database("globetrotters")
USER_DETAILS = USER_DATABASE['user_database']

class Database:
    
    def __init__(self):
        self.name = ''
    def register(self,name, email, password):
        print(f"=======================================\nName:{name}\nEmail:{email}\nPassword:{password}")
        existing_user = USER_DETAILS.find_one({"email": email})
        if existing_user:
            print("xxxxxxxxxxxxxxxxxxxxxxxxxxx Error: User already exists in the database.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
            return False
        user_id = int(uuid.uuid4().int & (1 << 31)-1)
        user = {
                '_id': str(user_id),
                'name': name,
                'email': email,
                'password': password
            }
        response=USER_DETAILS.insert_one(user)
        if response.inserted_id:
            return True
        else:    
            return False

    def login(self,email,password):
        user = USER_DETAILS.find_one({"email": email})
        if user:
            user_password = user["password"]
            self.name = user['name']
            if bcrypt.checkpw(password.encode('utf-8'), user_password.encode('utf-8')):
                return True
            else:
                print("xxxxxxxxxxxxxxxxxxxxxxxxxx Error: Password did not match xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
                return False
        else:
            print("xxxxxxxxxxxxxxxxxxxxxxxxxx Error: No such user xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
            return False
    
    def user_id(self,email):
        user = USER_DETAILS.find_one({'email':email})
        return user["_id"]
    def user_name(self):
        return self.name
    
    def reset_password(self, email, new_password):
        user_details = USER_DETAILS.find_one({'email':email})
        if not user_details:
            print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Error: User does not exist xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
            return False
        user = {
            '_id': user_details['_id'],
            'name': user_details['name'],
            'email': user_details['email'],
            'password': new_password
        }
        update = USER_DETAILS.update_one({'email': email}, {'$set': user})
        if update:
            print("========================Password Changed Successfully================================")
            return True
        else:
            print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Error occurred while changing the password xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
            return False
