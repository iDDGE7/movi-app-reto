import React from "react";
import { WrapperApp } from "layouts";
import { SignUp, SignIn, OTP, Welcome, Validation } from "pages";
import { Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <WrapperApp>
            <Routes>
                <Route path="/login" element={<SignIn />} />
                <Route path="/numberConfirmation" element={<OTP />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/validation" element={<Validation />} />
                <Route path="/" element={<SignUp />} />
            </Routes>
        </WrapperApp>
    );
};

export default App;
