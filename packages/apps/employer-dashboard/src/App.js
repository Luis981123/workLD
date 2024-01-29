import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import '../src/submodule/assets/font.css';
import '../src/submodule/assets/overall.css';

// layout
import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
// JobList
import Vacancy from './pages/JobListBoard/Vacancy';
import ActiveJobList from './pages/JobListBoard/ActiveJobList';
import InActiveVacancy from './pages/JobListBoard/InActiveVacancy';
import InActiveJobList from './pages/JobListBoard/InActiveJobList';
import DeleteVacancy from './pages/JobListBoard/DeleteVacancy';
import BlankVacList from './pages/JobListBoard/BlankVacList';
import BlankJobList from './pages/JobListBoard/BlankJobList';
// Chat
import PageDialogChat from './pages/ChatPage/PageDialogChat'
import ChatPage from './pages/ChatPage/ChatPage';
// User
import BlankMyAccount from './pages/User/BlankMyAccount';
import MyAccount from './pages/User/MyAccount';
import Profile from './pages/User/Profile';
// CRUD
import CreatingVacancy from './pages/CRUD/CreatingVacancy';
import CreateJob from './pages/CRUD/CreateJob';
import RegisterAgency from './pages/CRUD/RegisterAgency';
import EditVacancy from './pages/CRUD/EditVacancy';
import EditJob from './pages/CRUD/EditJob';
import ModerationVacancy from './pages/CRUD/ModerationVacancy';
import ModerationJob from './pages/CRUD/ModerationJob';
// pages
import PageVacActiveBoard from './components/JobDetail/PageVacActiveBoard';
import PageVacDelete from './components/JobDetail/PageVacDelete';
import PageVacNotActive from './components/JobDetail/PageVacNotActive';
import VacancyNotActiveFirst from './components/JobDetail/VacancyNotActiveFirst';
import VacancyNotActiveSecond from './components/JobDetail/VacancyNotActiveSecond';
import VacancyNotActiveThird from './components/JobDetail/VacancyNotActiveThird';
import PageJobActiveBoard from './components/JobDetail/PageJobActiveBoard';
import PageJobNotActive from './components/JobDetail/PageJobNotActive';
import JobNotActiveFirst from './components/JobDetail/JobNotActiveFirst';
import JobNotActiveSecond from './components/JobDetail/JobNotActiveSecond';
import VacancyActiveFromEdit from './components/JobDetail/VacancyActiveFromEdit';
import JobActiveFromEdit from './components/JobDetail/JobActiveFromEdit';
// proposals
import Proposals from './pages/Proposals/Proposals';
import BlankChatPage from './pages/ChatPage/BlankChatPage';

function App() {
  return (
    <div className='App'>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<BlankMyAccount />} />
          <Route path='/myaccount' element={<MyAccount />} />
          <Route path='/vacancy' element={<Vacancy />} />
          <Route path='/inactive' element={<InActiveVacancy />} />
          <Route path='/deletevac' element={<DeleteVacancy />} />
          <Route path='/blank' element={<BlankVacList />} />
          <Route path='/pagedialogchat' element={<PageDialogChat />} />
          <Route path='/job' element={<ActiveJobList />} />
          <Route path='/inactivejob' element={<InActiveJobList />} />
          <Route path='/blankjob' element={<BlankJobList />} />
          <Route path='/createjob' element={<CreateJob />} />
          <Route path='/editjob' element={<EditJob />} />
          <Route path='/moderationjob' element={<ModerationJob />} />
          <Route path='/createVacancy' element={<CreatingVacancy />} />
          <Route path='/edit' element={<EditVacancy />} />
          <Route path='/blankChat' element={ <BlankChatPage /> } />
          <Route path='/chat' element={<ChatPage />} />
          <Route path='/activeBoard' element={<PageVacActiveBoard />} />
          <Route path='/activejobboard' element={<PageJobActiveBoard />} />
          <Route path='/delete' element={<PageVacDelete />} />
          <Route path='/notActive' element={<PageVacNotActive />} />
          <Route path='/first' element={<VacancyNotActiveFirst />} />
          <Route path='/second' element={<VacancyNotActiveSecond />} />
          <Route path='/notActiveJob' element={<PageJobNotActive />} />
          <Route path='/vacFromEdit' element={<VacancyActiveFromEdit />} />
          <Route path='/firstJob' element={<JobNotActiveFirst />} />
          <Route path='/secondJob' element={<JobNotActiveSecond />} />
          <Route path='/third' element={<VacancyNotActiveThird />} />
          <Route path='/jobFromEdit' element={<JobActiveFromEdit />} />
          <Route path='/moderation' element={<ModerationVacancy />} />
          <Route path='/registerAgency' element={<RegisterAgency />} />
          <Route path='/proposals' element={<Proposals />} /> 
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
