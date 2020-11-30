import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Catalog from './Catalog';
import ListSection from './ListSection';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Hero/>
      <Catalog/>
      <ListSection/>
    </div>
  );
}
export default App;
