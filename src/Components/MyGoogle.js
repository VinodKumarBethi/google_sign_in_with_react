import React from "react";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MyGoogle(props) {
    const navigate = useNavigate();
    function handleCredentialResponse(response) {
        const responsePayload = jwtDecode(response.credential);
        if (props.localStorage) {
            localStorage.setItem('user', JSON.stringify(responsePayload));
        }
        if (props.handleResponse) {
            props.handleResponse(responsePayload);
        }
        if (props.briefConsoleLog) {
            console.log("ID: " + responsePayload.sub);
            console.log('Full Name: ' + responsePayload.name);
            console.log('Given Name: ' + responsePayload.given_name);
            console.log('Family Name: ' + responsePayload.family_name);
            console.log("Image URL: " + responsePayload.picture);
            console.log("Email: " + responsePayload.email);
        }
        if (props.redirect) {
            navigate(props.redirect, { replace: true });
        }
    }
    useEffect(() => {
        console.log("Connecting with google...");
        window.google.accounts.id.initialize({
            client_id: props.ClientId,
            callback: handleCredentialResponse,
        });
        const parent = document.getElementById('google_btn');
        window.google.accounts.id.renderButton(parent, { theme: "filled_blue" });
        window.google.accounts.id.prompt();
    },);
    return (
        <div style={{justifyContent:"center"}}>
            <h2>Login Here</h2>
        <div id="google_btn" >

        </div>
        </div>
    )
}
export default MyGoogle;