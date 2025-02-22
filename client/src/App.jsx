import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage';
import JoinGroupPage from './components/JoinGroupPage';



function App() {
  const [currentPage, setCurrentPage] = useState('home');


  const handleJoinGroup = () => {
    setCurrentPage('join');
  };

  const handleCreateGroup = () => {
    console.log('Create clicked');
  };

  const handleBack = () => {
    setCurrentPage('home');
  };


  return (
    <>
      {currentPage === 'home' ? (
        <HomePage 
          onJoinGroup={handleJoinGroup}
          onCreateGroup={handleCreateGroup}
        />
      ) : currentPage === 'join' ? (
        <JoinGroupPage onBack={handleBack} />
      ) : null}
    </>
  )
}

export default App