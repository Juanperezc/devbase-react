import UserService from "../services/UserService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // version 5.2.0

function ItemList({ user }) {
  return (
    <div className="relative inline-block w-full">
      <img
        className="inline-block object-cover w-20 h-20 rounded-full"
        src={user.avatar_url}
        alt="Profile image"
      />
  
      <span className="ml-4 inline-block text-black text-2xl">{user.name}</span>
      <span className="ml-4 inline-block absolute bottom-2 left-20 text-gray-500">{user.location}</span>
    </div>
  );
}

function UserDetail() {
  const [user, setUser] = useState({});
  const param = useParams();
  const getUser = async (id) => {
    try {
      const userData = await UserService.show(id);
      if (userData.status !== 200) {
        throw userData;
      }
      //  console.log(userData);
      setUser(userData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (param) getUser(param.id);
  }, [param]);

  return (
    <div className="container mx-10 my-10">
      <div>
        <ItemList user={user} />
      </div>
    </div>
  );
}

export default UserDetail;
