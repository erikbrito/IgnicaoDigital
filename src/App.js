import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'

import './Styles.scss'

function App() {

  return (
    <div className="App">

      <div className='Sidebar'>
        <Sidebar />
      </div>

      <div className='Container-Body'>
        <Navbar />
        <Dashboard />
      </div>

    </div>
  );
}

export default App;
