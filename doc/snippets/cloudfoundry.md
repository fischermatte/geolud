Create a User-Provided Services for Email and Database Service
   
    cf cups geolud-mailservice -p "host,port,username,password,to"   
    cf cups geolud-db -p "uri"   
    cf cups geolud-push -p "vapid_private_key, vapid_public_key"   
