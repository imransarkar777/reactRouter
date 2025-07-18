import { Link } from "react-router";
const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "2px solid grey",
    paddin: "10px",
    borderRadius: "20px",
  };
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>{email}</p>
      <small>{phone}</small>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
