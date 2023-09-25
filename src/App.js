import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Success from './components/Success'
import Verify from './components/Verify'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <div className="app-body">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/verify" component={Verify} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
