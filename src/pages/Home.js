
import NavBar from "../components/NavBar";
import UserList from "../components/UserList";
function Home() {
  return (
    <>
      <NavBar isBack={false}/>
      <UserList />
    </>
  );
}

export default Home;
