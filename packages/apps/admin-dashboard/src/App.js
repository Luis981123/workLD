import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import './App.css';
import '../src/submodule/assets/font.css';
import '../src/submodule/assets/overall.css';

// layout
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
// dashboard
import DashboardIndex from './pages/dashboard';
import VacancyIndex from './pages/Vacancies';
import Moderation from './pages/Moderation/Moderation';
import "preline/preline";
import { HSStaticMethods } from "preline/preline";

function App() {

  const location = useLocation();
  useEffect(() => {
    import("preline/preline");
    HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      
      <Routes>
        <Route path='/' element={<DashboardIndex />} />
        <Route path='/vacancy' element={<VacancyIndex />} />
        <Route path='/moderationManager' element={<Moderation editDivState={false} role='manager' />} />
        <Route path='/moderationAdmin' element={<Moderation editDivState={false} role='admin' />} />
        <Route path='/moderationAdminEdited' element={<Moderation editDivState={true} role='admin' />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
