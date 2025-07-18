import { useLoaderData } from "react-router";

const UserDetails = () => {
    const user = useLoaderData();
    const {name } = user;
    return (
        <div>
            <h2>Details about users</h2>
            <h3>Name : {name}</h3>
        </div>
    );
};

export default UserDetails;