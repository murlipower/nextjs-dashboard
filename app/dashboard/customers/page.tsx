
"use client";
import {useState} from "react";

export default function page(){
 const[input, setInput] = useState("This is page");
    
    return<p>{input}</p>
}