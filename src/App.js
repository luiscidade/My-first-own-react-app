import React, {useState} from 'react';
import UserInput from './components/UserForm/UserInput';
import UsersList from './components/Users/UsersList';

function App() {

  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers(prevUsers => {
      return [...prevUsers, user]
    });
  };

  const userDeleteHandler = (userId) => {
    console.log("App.js", userId)
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    });
  };

  return (
        <>
          <UserInput onUserAdd={addUserHandler}/>
          <UsersList items={users} onUserDelete={userDeleteHandler}/>
        </>
  );
}

export default App;
