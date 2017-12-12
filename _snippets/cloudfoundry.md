* Create a User-Provided Service Mail Service

      cf cups geolud-mailservice -p '{"host":"","port":"","username":"","password":"", "to":""}'
      
Or interactive
   
    cf cups geolud-mailservice -p "host,port,username,password,to"   