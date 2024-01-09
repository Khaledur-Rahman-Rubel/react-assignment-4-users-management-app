import React, { useEffect, useState } from 'react';

import Users from './components/Users';

const url = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  // step2 : use useEffect for fetching the data including updating isLoading and error states
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const respons = await fetch(url);
      const data = await respons.json();
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error.message}</p>}
      {users && <Users users={users} />}
      {/* step3 : pass the users data to Users component  */}
    </div>
  );
};

export default App;
