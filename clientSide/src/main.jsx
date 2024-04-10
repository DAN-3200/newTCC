import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

//Pages
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisPage from './pages/RegisPage.jsx'
import NotesPage from './pages/NotesPage.jsx'

function Urls() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<HomePage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisPage />} />
					<Route path='/notes' element={<NotesPage />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Urls />
	</React.StrictMode>
)
