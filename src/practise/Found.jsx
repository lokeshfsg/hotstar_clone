 import React from 'react';
 import JSON from './Loki.json';
 import {useLoaderData} from 'react';
 import { useEffect, useState } from "react";
 import axios from 'axios'
 const Found = () => {
    const foundDetails = useLoaderData()
   
    return(
        <div>
      <p><b>movie Title: </b>{foundDetails}</p>
        </div>
    )
 }
export default Found;
export const findDetails= async({params}) => {
    const {id} = params;
    const res= await fetch("http://localhost:3001" + id);
    return res.json();
}