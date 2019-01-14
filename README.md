React Redux Glint Tes
=========================


```
git clone https://github.com/ixanscream/react-redux-glint.git
```


go to react-redux-glint folder to install all node modules

type => 

```
npm install
```

wait until finish

type => 

```
json-server --watch db.json
```

now the server (db) run on port 3000 (http://localhost:3000)

(http://localhost:3000/companies) companies

(http://localhost:3000/office) offices

(http://localhost:3000/phonecode) phone code


as you can see, there are several addresses to access datas

after the server is on, now we will run the application

open new terminal (cmd) in the same folder (react-redux-glint)
type => 

```
npm start
```

now u got warn "Something is already running on port 3000"
yes because we just used that port for the server 

type => 

```Y``` 

now our application will run on port 3001  (http://localhost:3001)
 
if you want to debug redux with dev tools, please open the store.js file and delete the comment that I marked
->   
```
//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
```

that it.


(https://ibb.co/tbFzPV0) sample first screen

(https://ibb.co/SXSRwW5) confirm deletion

(https://ibb.co/8Bjr8yQ) phont code selection implementation fetched from db.json

(https://ibb.co/kMV9bNV) calender popup

(https://ibb.co/87hMNTf) notification for submit

(https://ibb.co/bd4p43P) application diagram for detail proses application and structure db



React Redux Glint Tes Structure Files
=========================

```
    db.json                         #database server, when u submit u can see the changes here
    package-lock.json
    package.json                    #package
    README.md
    yarn.lock
    
    ----public
        -favicon.ico
        -index.html
        -manifest.json   
    ----src
        -   App.css
        -   App.js
        -   App.test.js
        -   index.css
        -   index.js
        -   logo.svg
        -   serviceWorker.js
        -   store.js                    #store redux
        -   
        ----actions
        -       companyAction.js        #redux company action crud
        -       officeAction.js         #redux office action crud
        -       phonecodeAction.js      #redux fetch phone code
        -       types.js                #redux action types
        -       
        ----Component
        -       CompaniesPage.js        #redux action types
        -       CompanyItem.js          #company items list #1 page and deletion company
        -       DetailCompany.js        #company detail page include list office and deletion for office
        -       FormCompany.js          #form create company
        -       FormOffice.js           #form create office
        -       MainPage.js             #Main page
        -       OfficeItem.js           #office item list for company detail
        -       
        ----reducers    
                companyReducer.js       #reducer company        
                index.js                #combine reducers
                officeReducer.js        #reducer office
                phonecodeReducer.js     #reducer fetching phone code`
```
