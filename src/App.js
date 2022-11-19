import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Landing from './component/Landing';
import {Login} from './component/Login';
import Display from './component/Display';
import {MyBids} from './component/MyBids';
import Navbar from './component/Navbar';
import {Highestbids} from './component/Highestbids';


class App extends Component {


  render() {
    return (
     /*  <Router>
           <div className="App">
           <ul>
      <li>
        <Link to="/display">Display</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/landing">Landing</Link>
      </li>
      <li>
        <Link to="/">home</Link>
      </li>
    </ul>

    <Routes>

                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/display' element={< Display />}></Route>
                 <Route exact path='/landing' element={< Landing />}></Route>
                 <Route exact path='/' element={< Navbar />}></Route>
          </Routes>

</div>

       </Router>*/

<Router>
           <div className="App">
           <ul>

    </ul>

    <Routes>

                <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/display' element={< Display/>}></Route>
                 <Route exact path='/mybids' element={< MyBids />}></Route>
                 <Route exact path='/highestbids' element={< Highestbids />}></Route>
                 <Route exact path='/' element={< Landing />}></Route>

                 
          </Routes>

</div>

       </Router>









   );
  }
}

export default App;