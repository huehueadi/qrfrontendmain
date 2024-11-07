import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Table from './components/pages/Table';
import Login from './components/pages/Login';
import QRManagement from './components/pages/QRManagement';
import Qrdemo from './components/pages/Qrdemo';
import QrList from './components/pages/QrList';
import Analytics from './components/pages/Analytics';
import AddBrand from './components/pages/AddBrand';
import Test from './components/pages/Test';
import Slotmanagement from './components/pages/Slotmanagement';
import NotFound from './components/pages/NotFound'; // Import the 404 page
import QRCodeGenerator from './components/pages/QRCodeGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Routes wrapped with Layout for the main app */}
        <Route element={<Layout />}>
          <Route path="table" element={<Table />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="qrmanagement" element={<QRManagement />} />
          <Route path="qrcode" element={<QRCodeGenerator />} />
          <Route path="qrdemo" element={<Qrdemo />} />
          <Route path="qrlist" element={<QrList />} />
          <Route path="slot_management" element={<Slotmanagement />} />
          <Route path="add_brand" element={<AddBrand />} />
          <Route path="blank" element={<Test />} />
        </Route>

        {/* Catch-all route for undefined paths, outside Layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
