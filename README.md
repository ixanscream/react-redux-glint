# react-redux-glint
git clone https://github.com/ixanscream/react-redux-glint.git

go to react-redux-glint folder to install all node modules

type => npm install 

wait until finish

typ e=> json-server --watch db.json

the server is run on port 3000

as you can see, there are several addresses to access datas

after the server is on, now we will run the application

open new terminal (cmd) in the same folder (react-redux-glint)
type => npm start
now u got warn "Something is already running on port 3000"
yes because we have used that port for the server

type => Y 

now our application will run on port 3001

if you want to debug redux with dev tool, please open the store.js file and delete the comment that I marked
->   //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   

that it.


https://ibb.co/tbFzPV0 sample screen
https://ibb.co/SXSRwW5 confirm deletion
https://ibb.co/8Bjr8yQ code selection implementation fetch from db.json
https://ibb.co/kMV9bNV calender popup
https://ibb.co/87hMNTf notification for submit
