import React from "react";
import {Routes, Route} from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import ChatPage from '../pages/chat/ChatPage';
import ContactsPage from '../pages/contacts/ContactsPage';
import HomePage from "../pages/home/HomePage";
import MeetingsPage from '../pages/meetings/MeetingsPage';
import NotFoundPage from "../pages/notFound/NotFoundPage";
import SchedulePage from '../pages/schedule/SchedulePage';
import SettingsPage from "../pages/settings/SettingsPage";

const PagesRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="chat" element={<ChatPage/>}/>
            <Route path="meetings" element={<MeetingsPage/>}/>
            <Route path="schedule" element={<SchedulePage/>}/>
            <Route path="contacts" element={<ContactsPage/>}/>
            <Route path="settings" element={<SettingsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    </Routes>
  )
}

export default PagesRoute