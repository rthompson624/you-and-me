import React from "react";

interface INotFoundProps {
  name: string;
}

const NotFound = ({ name }: INotFoundProps) => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>The url could not be found, {name}!</p>
    </div>
  );
};

export default NotFound;
