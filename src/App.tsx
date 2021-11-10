import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Anya Taylor-Joy',
      url: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/11/queens-gambit-star-anya-taylor-weird-looking-19-5fbcba5f57873__700.jpg',
      age: 25,
      note: 'Likes witchcraft and chess',
    },
    {
      name: 'Noémie Merlant',
      url: 'https://iv1.lisimg.com/image/17140204/740full-noemie-merlant.jpg',
      age: 32,
    },
    {
      name: 'Lea Seydeux ',
      url: 'https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/1/0/9/1271109_leaseydoux_119360.jpg',
      age: 36,
      note: '',
    },
    {
      name: 'Marion Cotillard ',
      url: 'https://images.mubicdn.net/images/cast_member/13067/cache-618186-1607600626/image-w856.jpg?size=800x',
      age: 46,
      note: 'Cap ou pas cap?',
    },
  ]);

  return (
    <div className="App">
      <h1>Party Guests</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
