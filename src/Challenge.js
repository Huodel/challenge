import React, {useState,useRef,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function Challenge() {

  
  const [search, setsearch] = useState([]);
  const [result, setresult] = useState([]);
  const [input, setinput] = useState("");
  
  useEffect(() => { 
    initsearch()
   }, [])

const pass = localStorage.getItem("slist");

  function los() {
    localStorage.setItem("slist",JSON.stringify([...search,{"search":input}]));
  }
  function initsearch() {  setsearch(JSON.parse(pass)) }

  function getseatch() {
    axios.get("https://www.googleapis.com/customsearch/v1",
    {"q":input,
      "API_KEY":"AIzaSyByxMmkuX1pNr-nCzHyKvQ1W7k3VmiEeM0",
      "cx":"5787283a28fa24bd2",
      "searchType":"SEARCH_TYPE_UNDEFINED"})
      
      .then(function (res){ setsearch(res.data) })
      .catch(function (error) { alert(error) });
      }

  
  return (
    <div id="App">
    <div id="wingpane1" >
      <div>Search</div>
      <div><input id="in" placeholder='Google Search Api' onChange={e=> setinput(e.currentTarget.value)} />
      <div id="arch" onClick={e=> {setsearch([...search,{"search":input}]);los();getseatch() }} >Search</div>
      <div id="list" >{search.map( i=> <div>{i.search}</div> )}</div>
      
      </div>
    </div>
    <div id="miniline" ></div>
      <div id="wingpane2" >
      <div>Result</div>
      <div>{JSON.stringify(result)}</div></div>
    </div>
  );
}

export default Challenge;
