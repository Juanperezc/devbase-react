import NavBar from "../components/NavBar";
import UserDetail from "../components/UserDeatil";

function DetailPage() {
  return (
    <>
      <NavBar isBack={true} />
      <UserDetail />
    </>
  );
}

export default DetailPage;
