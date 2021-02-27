import './App.css';
import { useEffect, useState } from 'react';
import User from './Components/User/User';
import Cart from './Components/Cart/Cart';



function App() {
  const [users, setUsers] = useState([]);
  const [added, setAdded] = useState([]);

  const handleUser = (user) => {
    if (added.indexOf(user) == -1) {
      let newAdded = [...added]
      newAdded.push(user);
      setAdded(newAdded);
    }
    else {
      alert("Already added")
    }
  }

  useEffect(() => {
    fetch('https://dummyapi.io/data/api/user', { headers: { 'app-id': "603a138429e8f90915ef838d" } })
      .then(res => res.json())
      .then(data => {
        setUsers(data.data);
      })
  }, [])

  users.forEach(each => {
    each.salary = 4000;
    each.phone = '+012-45624287';
  })
  return (
    <div className="App" >
      <header className="App-header">
        <div className="allcard" >
          {
            users.map(each => <User users={each} key={each.id} handleUser={handleUser} ></User>)
          }
        </div>
        <div className="cart" >
          <Cart added={added} ></Cart>
        </div>
      </header>
    </div >
  );
}

export default App;
