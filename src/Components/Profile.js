import { useState } from "react";
import { Navigate } from "react-router-dom";
let Profile = () => {
    console.log("in profile");
    const user = JSON.parse(localStorage.getItem('user'));
    const [logout, setLogout] = useState(false);
    console.log(user);
    if (!user || logout) {
        return <Navigate to="/login" />
    }
    return (
        <div >
            <div id="Profile" >
                <h1 style={{ textDecoration: "underline" }}>Profile Page</h1>
                <h3>Welcome {user.name}</h3>
                <img  src={user.picture} alt="Profile Pic"></img>
                <h4>Email: {user.email}</h4>
                <h4>First Name: {user.given_name}</h4>
                <h4>Last Name: {user.family_name}</h4>
                <button style={{backgroundColor:"red",borderRadius:"20px",cursor:"pointer"}}
                    onClick={() => {
                        setLogout(true);
                        localStorage.clear();
                    }}>Logout</button>
            </div>
        </div>
    )
}
export default Profile;