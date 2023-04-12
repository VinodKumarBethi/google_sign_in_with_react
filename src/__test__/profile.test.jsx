import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from '../Components/Profile';
import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';

const localStorageMock = (function () {
    let store = {};
  
    return {
      getItem(key) {
        if(store[key]===undefined)
        return null;
        return store[key];
      },
  
      setItem(key, value) {
        store[key] = value;
      },
      clear() {
        store = {};
      },
    };
  })();
  
  Object.defineProperty(window, "localStorage", { value: localStorageMock });
  const setLocalStorage = (id, data) => {
    window.localStorage.setItem(id, JSON.stringify(data));
  };
  const getlocalStorage =(key)=>{
    const strData=window.localStorage.getItem(key);
    return JSON.parse(strData);
  }
  const user = {
    email: "vinodb7890@gmail.com",
    name: 'Vinod Kumar',
    picture: "https://lh3.googleusercontent.com/a/AGNmyxbuyrhvKgkmIIeExqZNu9iesw0lLj0bsMY92eJ7=s96-c",
    given_name: "Vinod",
    family_name: "Kumar",
}
console.log("empty strg: "+localStorage.getItem('user'));
  setLocalStorage('user',user);
  
  console.log(getlocalStorage('user'));

test('Renders Profile Page', () => {

   const profile = render(
            <Profile />
        )
        const pageTitle = profile.getByText('Profile Page')
        expect(pageTitle).toBeInTheDocument()
})
test('Renders Welcome Message properly',()=>{
    const profile = render(
        <Profile />
    )
    const welcomeMessage="Welcome "+user.name
    const Welcome = profile.getByText(welcomeMessage)
    expect(Welcome).toBeInTheDocument()
})
test('Renders Profile Picture',()=>{
    const profile = render(
        <Profile />
    )
    const picture=document.querySelector("img")
    expect(picture.alt).toContain("Profile Pic")
})
test('Renders Email',()=>{
    const profile = render(
        <Profile />
    )
    const emailShow="Email: "+user.email
    const Email = profile.getByText(emailShow)
    expect(Email).toBeInTheDocument()
})
test('Renders First Name',()=>{
    const profile = render(
        <Profile />
    )
    const firstNameShow="First Name: "+user.given_name
    const FirstName = profile.getByText(firstNameShow)
    expect(FirstName).toBeInTheDocument()
})
test('Renders Last Name',()=>{
    const profile = render(
        <Profile />
    )
    const lastNameShow="Last Name: "+user.family_name
    const LastName = profile.getByText(lastNameShow)
    expect(LastName).toBeInTheDocument()
})
test('Renders logout button',()=>{
    const profile = render(
        <Profile />
    )
    const logoutBtn=profile.getByRole('button')
    expect(logoutBtn).toBeInTheDocument()
})
// test('Logout user',()=>{
//     const profile = render(
//         <MemoryRouter><Profile /></MemoryRouter>
        
//     )
//     const logoutBtn=profile.getByRole('button')
//     fireEvent.click(logoutBtn)
//     console.log("in logout user test: \n"+localStorage.getItem('user'));
//     // expect(localStorage.getItem('user')).toBeNull()
// })

