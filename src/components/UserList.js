import UserService from "../services/UserService";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'; // version 5.2.0

function UserList() {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const getUsers = async () => {
    try {
      const userList = await UserService.index();
      if (userList.status !== 200) {
        throw userList;
      }
      setUsers(userList.data);
      console.log(userList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleView = (id) => {
    history.push('/detail/' + id)
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container mx-10 mt-10">
      <h1 className="text-2xl">Top 5 GitHub Users</h1>
      <p className="my-3">Tap the username to see more information</p>
      <div className="flex flex-col  sm:flex-row">
        {users.map((user, index) => (
          <div className="my-5 flex-auto " key={index}>
            <button  onClick={() => handleView(user.id)} className="bg-blue-500   hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              {user.login}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
