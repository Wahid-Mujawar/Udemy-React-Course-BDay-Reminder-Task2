import React, {useState} from 'react'
import List from './List'
import './Data'

function App() {

  return (
    <main>
    <section className="container">
    <h3>0 Birth-Day Today</h3>
    <List/>
    <button onClick={() => console.log('Clicked me') }>Clear all</button>
    </section>
  </main>
  );

}

export default App;
