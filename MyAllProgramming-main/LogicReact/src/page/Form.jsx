import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hobbies, setHobbies] = useState(['', '']);
  
  const [identity, setIdentity] = useState({
    hashPanCard: true,
    hashAdhaarCard: false,
  });
  const [bio, setBio] = useState('');
  const [isEligible, setIsEligible] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');

  const [isLoading, setIsLoading] = useState(false);


  const handleChangeIdentity = (key, value) => {
    setIdentity((prevIdentity) => ({
      ...prevIdentity,
      [key]: value,
    }));
  };


  const Clicked = () => {
    setIsLoading(true);

    // Simulate a form submission (replace this with actual submission logic)
    setTimeout(() => {
      
    let data={name , age ,hobbies, bio , isEligible , gender , country , identity}
    console.log(data)
      console.log('Form submitted:', name);
      setIsLoading(false);
    }, 2000);
  }

  // const Clicked=()=>{

  // }

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Hobbies:
        <input
          type="text"
          value={hobbies[0]}
          onChange={(e) => setHobbies([e.target.value, hobbies[1]])}
        />
        <input
          type="text"
          value={hobbies[1]}
          onChange={(e) => setHobbies([hobbies[0], e.target.value])}
        />
      </label>
      <br />
      <br />

      <label>
          Gender:
          <input
            type='radio'
            name='gender'
            value='Male'
            checked={gender === 'Male'}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type='radio'
            name='gender'
            value='Female'
            checked={gender === 'Female'}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>

<br />
      <br />
      <label>
        Bio:
        <input type='text'
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </label>
      <br />
      <br />
     <label>
      elgible
   
      <select name="select-box" onChange={(e)=>setIsEligible(e.target.value)}>

  <option value="male">male</option>
  <option value="female">female</option>
 
</select>
</label>
      <br />
      <br />
    
    <label>
        Hash PAN Card:
        <input
          type="checkbox"
          checked={identity.hashPanCard}
          onChange={(e) =>  handleChangeIdentity('hashPanCard', e.target.checked)}
        />
      </label>
      <br />
      <br />
      <label>
        Hash Aadhaar Card:
        <input
          type="checkbox"
          checked={identity.hashAdhaarCard}
          onChange={(e) => handleChangeIdentity('hashAdhaarCard', e.target.checked)}
        />
      </label>
      <br />
      <br />

     
   <label htmlFor="">country
      <select name="select-box" onChange={(e)=>setCountry(e.target.value)}>
    <option value="" disabled  >select a country</option>
  <option value="AF">india</option>
  <option value="AL">usa</option>
  <option value="DZ">Japan</option>
</select>
</label>

      <br />
      <br />
      <button disabled={isLoading} onClick={ Clicked}>

      {isLoading ? "Adding..." : "Submit"}

      </button>
    </div>
  );
}

export default Form;
