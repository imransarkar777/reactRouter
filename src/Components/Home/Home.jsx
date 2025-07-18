import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/footer";

const Home = () => {
  const locaton = useLocation();
  const navigation = useNavigation();

  console.log(locaton);
  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" ? <p>loading...</p> : <Outlet></Outlet>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
