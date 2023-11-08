import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx';
import RandName from "./page/RandName"
import Form from './page/Form.jsx';
import CryptoForm from "./page/CryptoForm"
import Ifelse from "./page/Ifelse"
function App() {
  return (
    <div>

<Routes>

<Route path="/" element={<Home />} />
<Route path="/rand" element={<RandName></RandName>}/>
<Route path="/form" element={<Form></Form>}/>
<Route path="/cry" element={<CryptoForm></CryptoForm>}/>
<Route path="/if" element={<Ifelse></Ifelse>}/>
</Routes>
    </div>
  )
}

export default App