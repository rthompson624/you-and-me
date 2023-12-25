import React from "react";
import { Link } from "react-router-dom";

interface IHomeProps {
  name: string;
}

const Home = ({ name }: IHomeProps) => {
  return (
    <div>
      <h1>Home</h1>
      <p>Hello, {name}!</p>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Home;
