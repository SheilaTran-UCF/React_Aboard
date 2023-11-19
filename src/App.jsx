import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/public/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import School from './pages/School';
import SearchBar from './pages/SearchBar';
import Student from './pages/Student';
import Partner from './pages/Partner';
import Main from './pages/Main';
import Home from './pages/Home';
function App() {
	return (
		<>
			
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/student' element={<Student />} />
				<Route path='/partner' element={<Partner />} />
				<Route path='/school' element={<School />} />
				<Route path='/search' element={<SearchBar />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</>
	);
}

export default App;
