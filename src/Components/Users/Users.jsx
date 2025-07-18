import { useLoaderData } from "react-router";
import User from "../User/User";
import './Users.css'

const Users = () => {
  const users = useLoaderData();

  return (
    <>
      <div>
        <div>
          <h2>Our Users total - {users.length}</h2>
        </div>
        <div className="users">
          {users.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
