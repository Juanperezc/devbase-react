import NavBar from "../components/NavBar";
import UserDetail from "../components/UserList";
import UserService from "../services/UserService";
import { useState, useEffect } from "react";
function Detail() {
  const [user, setUser] = useState({});
  const getUser = async (id) => {
    try {
      const userData = await UserService.show();
      if (userData.status !== 200) {
        throw userData;
      }
      setUser(userData.data);
    
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //  getUser(id);
  }, []);

  return (
    <>
      <NavBar isBack={true} />
      <UserDetail />
    </>
  );
}

export default Detail;
