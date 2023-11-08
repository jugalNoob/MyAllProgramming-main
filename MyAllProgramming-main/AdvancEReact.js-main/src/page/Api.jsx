import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Api() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(2); // Number of users to display per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter users based on search term
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.website.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Calculate the index of the last user on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  // Calculate the index of the first user on the current page
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // Get the current users for the current page
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Logic to change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <input type="text" name="" onChange={handleSearch} value={searchTerm} />
      <h1>API Data</h1>
      <ul>
        {currentUsers.map((user) => (
          <li key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Website: {user.website}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Api;



// import React from 'react'

// function Api() {

//     const All=async()=>{
//         const alluse=await fetch("https://jsonplaceholder.typicode.com/users")
//         const oip=await alluse.json()
//         console.log(oip[5].div)
//         console.log(oip)
//     }
//     All()
//   return (
//     <div>Api</div>
//   )
// }

// export default Api


// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])