import React, {useState} from 'react'
import List from './List'
import Data from './Data'

function App() {
  const [people, setPeople]=useState(Data)

  return (
    <main>
    <section className="container">
    <h3>{people.length} Birth-Days Today</h3>
    <List people={people}/>
    <button onClick={() => console.log('Clicked me') }>Clear all</button>
    </section>
  </main>
  );

}

export default App;
