import React, { Component } from 'react'
import { Provider } from 'react-redux'
import DetailCompany from './Component/DetailCompany'
import store from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './Component/MainPage'

class App extends Component {
  render() {    
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Route exact path='/' render={props => (
              <React.Fragment>
                  <MainPage />
              </React.Fragment>
            )} />
            <Route exact path="/detail/:id" render={props => (
              <DetailCompany id={props.match.params.id} {...props}/>      
            )}/>
          </div>
        </Provider>    
      </Router>
    );
  }
}

export default App;
