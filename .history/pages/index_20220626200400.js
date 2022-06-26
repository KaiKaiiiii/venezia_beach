import { Fragment } from "react";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Banner></Banner>
    </Fragment>
  );
}
