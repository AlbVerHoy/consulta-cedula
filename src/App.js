import React from 'react';
import NavBar from './components/NavBar/NavBar';
import TextArea from './components/TextArea/TextArea';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles/main.css';
import CedulaTabs from './components/CedulaTabs/CedulaTabs';
import TextBody from './components/TextArea/TextBody';
import Footer from './Footer/Footer';

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

function App() {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<div className="body">
				<TextArea title="¿Qué es una Cédula Profesional?" spacing={2}>
					{[
						<>
							Este apartado tiene como propósito ampliar los criterios de
							búsqueda de profesionistas que registran sus títulos y cuentan con
							cédula profesional con efectos de patente; esto delimita la
							responsabilidad del Registro Nacional de Profesionistas, al
							definirla como la única instancia válida para hacer uso de esta
							información.
						</>,
						<>
							La información publicada en este sitio, de acuerdo a los criterios
							ordenados por el Instituto Nacional de Transparencia Acceso a la
							Información y Protección de Datos Personales (INAI), es de
							carácter público y constantemente se actualiza; esto determina que
							la Secretaría de Educación Pública (SEP) se deslinde y no sea
							responsable del uso, adecuaciones y modalidades de la información
							que pudieran aparecer en otros sitios web.'
						</>,
					]}
				</TextArea>
				<CedulaTabs />
				<TextBody />
			</div>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
