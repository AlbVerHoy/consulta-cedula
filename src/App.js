import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import './styles/main.css';
import Login from './pages/Login';
import Administration from './pages/Administration';
import NotFound from './pages/NotFound';
import Protected from './components/Protected';

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
						<Route path="/" element={<Main />} />
						<Route
							path="/login"
							element={
								<Protected fallbackTo={<Login />}>
									<Main />
								</Protected>
							}
						/>
						<Route
							path="/administracion"
							element={
								<Protected>
									<Administration />
								</Protected>
							}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
				<Footer />
			</ThemeProvider>
		</QueryClientProvider>
	);
}
