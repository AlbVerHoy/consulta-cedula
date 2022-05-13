import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MainView from './views/MainView';
import './styles/main.css';
import LoginView from './views/LoginView';
import AdministrationView from './views/AdministrationView';

const theme = createTheme({
	status: {
		danger: '#e53e3e',
	},
	palette: {
		primary: {
			main: '#0C221D',
			darker: '#053e85',
		},
		neutral: {
			main: '#0C221D',
			contrastText: '#fff',
		},
	},
});

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient} contextSharing={true}>
			<ThemeProvider theme={theme} component={'div'}>
				<NavBar />
				<Router>
					<Routes>
						<Route path="/" element={<MainView />} />
						<Route path="/login" element={<LoginView />} />
						<Route path="/administration" element={<AdministrationView />} />
					</Routes>
				</Router>
				<Footer />
			</ThemeProvider>
		</QueryClientProvider>
	);
}
