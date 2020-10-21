import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Recomended from './Recomended';

const Appp =()=>
{
  return ( <>
  <div className="app">
  <Header/>
  
  <div className="app_page">
      <Sidebar/>
  
  <Recomended/>
  </div>
  </div>
  </>
  );
}
export default Appp;