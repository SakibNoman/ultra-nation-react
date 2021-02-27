import './App.css';
import { useEffect, useState } from 'react';
import User from './Components/User/User';
import userData from './data/userData.json'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://dummyapi.io/data/api/user', { headers: { 'app-id': "603a138429e8f90915ef838d" } })
      .then(res => res.json())
      .then(data => {
        setUsers(data.data);
      })
  }, [])
  users.forEach(each => {
    each.salary = (Math.random() * 10000).toFixed(0);
    each.phone = '+012-' + (Math.random() * 10000000).toFixed(0);
  })
  console.log(users);
  return (
    <div className="App" >
      <header className="App-header">
        {
          users.map(each => <User users={each} key={each.id} ></User>)
        }
      </header>
    </div >
  );
}

export default App;
