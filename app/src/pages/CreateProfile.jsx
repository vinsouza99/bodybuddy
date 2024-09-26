import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EditProfile } from './EditProfile';



const CreateProfile = () => {
  return (
    <div>
        <h1>CreateProfile</h1>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EditProfile />} />
            </Routes>
        </BrowserRouter>
    </div>

  )
}

export default CreateProfile;
