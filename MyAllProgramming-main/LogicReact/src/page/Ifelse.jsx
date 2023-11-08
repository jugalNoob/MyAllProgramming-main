import React,{useState,useEffect} from 'react'

function Ifelse() {
    const [isLoaded, setLoading] = useState(true);
    useEffect(() => {
        setLoading(!isLoaded);
      }, []);
    const [name, setName] = useState(18);
    useEffect(()=>{
        if (name === 18) {
          setName("jugal");
        } else {
          setName("not error");
        }
      },[])
  return (
    <div>
          <h1>{name && <p>{name}</p>}</h1>
          {/* {name ? "true" : "false"} */}

          {isLoaded ? (
     <div>
          {name ? "true" : "false"}
     </div>
     
      ) : (

        console.log(false)

      )}
    </div>
  )
}

export default Ifelse