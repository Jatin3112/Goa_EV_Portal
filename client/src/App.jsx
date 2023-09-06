import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import ApplicationForm from "./Pages/Form/ApplicationForm";
import AdminHomePage from "./Pages/AdminPanel/AdminHomePage";
import AdminApplicationList from "./Pages/AdminPanel/ApplicationList/AdminApplicationList";
import TrackApplication from "./Pages/HomePage/TrackApplication/TrackApplication";
import UserApplication from "./Pages/UserPanel/UserApplication";
import EditForm from "./Pages/EditForm/EditForm";
import AdminManagement from "./Pages/AdminPanel/AdminManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ApplicationForm />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route
          path="/admin/applicationlist"
          element={<AdminApplicationList />}
        />
        <Route path="/trackapplication" element={<TrackApplication />} />
        <Route path="/user" element = {<UserApplication />} />
        <Route path = "/editform/:id" element = {<EditForm />} />
        <Route path = "/adminManagement" element = {<AdminManagement/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
