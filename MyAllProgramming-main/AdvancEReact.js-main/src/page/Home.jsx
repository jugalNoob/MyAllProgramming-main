import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./style/home.css"


import one from "./style/four.jpg"
function Home(props) {

  const { state } = props;
let jso=JSON.stringify(state)
// console.log(jso)

  // console.log(props)
  const Fucks = () => {
    if (document.getElementById("myname").style.width === "256px") {
      document.getElementById("myname").style.width = "0";
    } else {
      document.getElementById("myname").style.width = "256px";
    }
  }

  const Close=()=>{
    document.getElementById("myname").style.width="0"
  }

  const id=3;

  const value=`/form/${id}`

  //Get User Link 
  const handleLinkClick = (linkText) => {
    console.log(`Clicked on ${linkText} link`);
  };
  
  //React.js is Loding start row class

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate an API request or any async operation
    setTimeout(() => {
      setIsLoading(true); // Set isLoading to false after some time
    }, 2000); // Simulating a 2-second loading time
  }, []);

  
  return (
    <div>

{isLoading ? (
        // Display a loading indicator while isLoading is true
        <div className="loading">Loading...</div>
      ) : (
        // Display your content when isLoading is false
        <div>
          <h1>Welcome to My App</h1>
          <p>This is the content of my app.</p>
        </div>
      )}
   
  );

      <div className="sidebar" >




        <h1>jugal</h1>
<span class="material-symbols-outlined" onClick={Fucks}>
menu
</span>
      </div>

      <div className="sides" id="myname">
      <span class="material-symbols-outlined" onClick={Close}>
close
</span>

<Link to="/"  onClick={() => handleLinkClick('Home')}>home</Link>

      {/* <Link to="/" target='_blank'>home</Link> */}
    <br />
    <Link to={value}>form</Link>
    <br />
    <Link to="/fav">favourite</Link>
    <br />
    <Link to="/login">login</Link>
    <br />
    <Link to="/uder">uder</Link>
    <br />
    <Link to="/api">api</Link>
      </div>
      {/* https://nextui.org/docs/guide/introduction */}

      {/* bestUI */}

      {/* Download ImAge /////////// */}

<img src={one} alt="dogs image" width="150px" height="200px" />
<a href={one} download={one}>download</a>

{/* last row class line  */}
    </div>
  )
}

export default Home