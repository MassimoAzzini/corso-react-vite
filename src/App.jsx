import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function handleClick(){
  alert("ciao");
}

function handleChange(e){
  console.log(e.target.value);
}

function handleSubmit(e){
  e.preventDefault();
  console.log(e);
}

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1,2,3]);
  const [user, setUser] = useState({ name: "Alice", age : 30});
  console.log(items);

  const aggiungiItem = () => {
    const nuovoItem = 4;
    setItems([...items, nuovoItem])
    console.log(items);
  }
  const updateUserName = () => {
    const nuovoItem = 4;
    setItems([...items, nuovoItem])
    console.log(items);
  }

  const cities = [
    {
      id: 0,
      name: "Tokyo",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptas. ",
      imgURL: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 1,
      name: "New York",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptas. ",
      imgURL: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
    },
    {
      id: 2,
      name: "Rome",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptas. ",
      imgURL: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 3,
      name: "Paris",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptas. ",
      imgURL: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
    },
  ]

  return (
    <>
      <div className='grid grid-cols-4 gap-10'>

        {cities.map((city) => (

          <Card 
            key = {city.id}
            title= {city.name}
            isVisited= {city.isVisited}
            imgURL=  {city.imgURL}>
               {city.description}
            </Card>

        ))}

        {cities
          .filter((city) => city.isVisited)
          .map((city) => (

          <Card 
            key = {city.id}
            title= {city.name}
            isVisited= {city.isVisited}
            imgURL=  {city.imgURL}>
               {city.description}
            </Card>

        ))}

      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={aggiungiItem}>
          prova
        </button>

        <button onClick={handleClick}>
          alert
        </button>

        <input type='text' onChange={handleChange}/>

        <form onSubmit={handleSubmit}>
          <button type='submit'>invia</button>
        </form>
      </div>
    </>
  )
}

export default App
