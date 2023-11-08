import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Form() {

  const param=useParams()
  console.log(param.id)
  console.log(`http://localhost:3000/form/${param.id}`)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [pass, setPass] = useState('');
  const [gender, setGender] = useState(''); // Initialize gender state

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can access the form data here and perform any necessary actions
    const formData = {
      name,
      email,
      age,
      pass,
      gender,
    };


    console.log(formData);
  };


  const  AddCart=(e)=>{
    e.preventDefault();
    const newData = {
      name,
      email,
      age,
      pass,
      gender,
    };
    let existingData = JSON.parse(localStorage.getItem("userdata")) || [];
    existingData.push(newData);
    localStorage.setItem("userdata", JSON.stringify(existingData));
    console.log("Data appended and stored in localStorage:", existingData);
  }


  return (
    <div>

   
      <div className="allone">
        <div className="froms">
          <form >
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="enter name"
              value={name}
            />
            <br />
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter email"
              value={email}
            />
            <br />
            <input
              type="text"
              name="age"
              onChange={(e) => setAge(e.target.value)}
              placeholder="enter age"
              value={age}
            />
            <br />
            <input
              type="password"
              name="password"
              onChange={(e) => setPass(e.target.value)}
              placeholder="enter password"
              value={pass}
            />
            <br />
            <label>
              Gender:
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <br />
           <button onClick={ handleSubmit}>sigin</button>
           <button onClick={ AddCart}>addcart</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
