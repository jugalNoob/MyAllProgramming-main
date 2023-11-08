import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./page/Home"
import Form from './page/Form';
import Fav from './page/Fav';
import Login from "./page/Login"
import Uder from "./page/Uder"
import Api from './page/Api';
import Stacks from "./page/Stacks"
import Pay from './page/Pay';
import Hash from './page/Hash';
// import Impone from './page/Impone';
import Imptwo from './page/Imptwo';
import Userid from './page/Userid';
import  Call from "./page/Call"
import Thrott from './page/Thrott';
function App() {
  return (
    <div>
{/* 
<span>jugal sharma</span>
<span>welome mother fucker</span> */}

<Routes>
  
  <Route path="/" element={<Home />} />
  <Route path="/form/:id" element={<Form></Form>}/>
  <Route path="/fav" element={<Fav></Fav>}/>
  <Route path="/login" element={<Login></Login>}/>
  <Route path="/uder" element={<Uder></Uder>}/>
  <Route path="/api" element={<Api></Api>}/>
  <Route path="/stack" element={<Stacks></Stacks>}/>
  <Route path="/pay" element={<Pay></Pay>}/>
  <Route path="/hash" element={<Hash></Hash>}/>
  {/* <Route path="/one" element={<Impone></Impone>}/> */}
  <Route path="/two" element={<Imptwo></Imptwo>}/>
  <Route path='/id' element={<Userid></Userid>}/>
  <Route path='/call' element={<Call></Call>}/>
  <Route path='/thro' element={<Thrott></Thrott>}/>
  </Routes>
    </div>
  )
}

export default App