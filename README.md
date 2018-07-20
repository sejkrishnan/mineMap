# Mine A Map

### Step to start the server
* After moving inside the directory, Just do 

    ```npm install```

    This command will read the *dependencies* from package.json file and install it in your *node_modules* directory. __This will install just the server side dependencies.__

*   then move inside *public* folder by 
    
    ```cd public ```

    then again do 
    
    ```npm install``` 

    to install client side dependencies. Now it will read the dependencies from public's package.json file

* Now all the required dependencies are installed. Now run this command to build your angular project

    ``` ng build --watch ```

    Dont stop this command. Let this run in the background. This command will build your typescript file so that it can run on the browser. Now, If you  make any changes, It will build your project automatically.(Thats the reason we added __--watch__ flag)

* Now go back to the parent folder. ```cd ..``. Now just run
``` npm start ```
This will start the server at port 3000. then if you type __http://localhost:3000__, It should render your angular project.
