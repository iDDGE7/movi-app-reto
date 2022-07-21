import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignUp, SignIn, OTP, Welcome, Validation } from "views";
import { WrapperApp } from "components/shared";

const App = () => {
    return (
        <WrapperApp>
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/validation" element={<Validation />} />
                <Route path="/numberConfirmation" element={<OTP />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/" element={<SignUp />} />
            </Routes>
        </WrapperApp>
    );
};

export default App;
