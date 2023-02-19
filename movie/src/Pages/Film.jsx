import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';



export default function Film() {

  const [posts, setPosts] = useState(false);

  useEffect(()=>{
  async function getPost() {
      const responce = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await responce.json()
      setPosts(data)
      console.log(data[0].id)
  }

  getPost();
},[])

if(!posts) {
  return <h1>Loading...</h1>
}

  return (
    <div>
    {posts.map(item=>(
    <div key={item.id} style={{'marginBottom':'5px'}}>
        {/* обернем заголовки в кликабельные линки {item.title} */}
        <Link to={`/about/${item.id}`}>{item.title}</Link>
    </div>
))}

</div>
  )
}
