
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Pressed = () => {
  const [todo, setTodo] = useState();
  const  {id} = useParams(); 

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((res) => {
        setTodo(res.data);
      })
  }, [id]);

  return (
    <div className="disk">
      <h1>abb ayega maza</h1>
      {todo && (
        <ul>
          <li><strong>ID:</strong> {todo.id}</li>
          <li><strong>Title:</strong> {todo.title}</li>          
        </ul>
      )}
    </div>
  );
};

export default Pressed;
