import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Login from './pages/LoginPage';
import Registration from './pages/Registration';
import UserDashboard from './pages/UserDashboard';

 function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;