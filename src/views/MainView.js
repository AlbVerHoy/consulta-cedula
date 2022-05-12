import React from "react";
import TextArea from '../components/TextArea/TextArea';
import Box from '@mui/material/Box';
import CedulaTabs from '../components/CedulaTabs/CedulaTabs';
import TextBody from '../components/TextArea/TextBody';

export default function MainView() {
  return (
    <Box className="body">
      <TextArea title="¿Qué es una Cédula Profesional?" spacing={2}>
        {[
          <>
            Este apartado tiene como propósito ampliar los criterios de
            búsqueda de profesionistas que registran sus títulos y cuentan
            con cédula profesional con efectos de patente; esto delimita la
            responsabilidad del Registro Nacional de Profesionistas, al
            definirla como la única instancia válida para hacer uso de esta
            información.
          </>,
          <>
            La información publicada en este sitio, de acuerdo a los
            criterios ordenados por el Instituto Nacional de Transparencia
            Acceso a la Información y Protección de Datos Personales (INAI),
            es de carácter público y constantemente se actualiza; esto
            determina que la Secretaría de Educación Pública (SEP) se
            deslinde y no sea responsable del uso, adecuaciones y
            modalidades de la información que pudieran aparecer en otros
            sitios web.'
          </>,
        ]}
      </TextArea>
      <CedulaTabs />
      <TextBody />
    </Box>
  );
}