// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
// import Header from './components/Header';

// function App() {
// 	const [count, setCount] = useState(0);

// 	return (
// 		<>
// 			<Header />
// 		</>
// 	);
// }

// export default App;

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import School from './components/School';
import SearchBar from './components/SearchBar';
import Student from './components/Student';
import Partner from './components/Partner';
import Main from './components/Main';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/student' element={<Student />} />
				<Route path='/partner' element={<Partner />} />
				<Route path='/school' element={<School />} />
				<Route path='/search' element={<SearchBar />} />
			</Routes>
		</>
	);
}

export default App;
