import React, {useEffect, useState} from 'react';
import './App.css';
import { Carusel } from '../carusel/carusel';
import { CaruselItem } from '../carusel-item/carusel-item';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(res => setItems(res.results))
  }, [])

  return (
    <>
    {items.length > 0 ? (
        <Carusel>
        {items.map((item => (
          <CaruselItem key={item.id} props={item} />
      )))}
        </Carusel>
    ) : (
      <p>Loading...</p>
    )}

    </>
  );
}

export default App;
