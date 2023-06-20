import Navigation from "../../component/Navigation/Navigation.component";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navigation/>
      <Outlet/>
    </>
  );
}

export default Root;