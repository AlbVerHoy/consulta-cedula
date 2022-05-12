import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TextArea from './TextArea';

const linkStyles = {
	fontFamily: 'Montserrat !important',
	fontSize: '18px !important',
	fontWeight: '500',
	textAlign: 'left',
	overflowX: 'auto',
};

export default function TextBody() {
	return (
		<>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<TextArea>
				{[
					<>
						La consulta de tu documento profesional es sencilla, es decir, los
						pasos resultan fáciles porque el formulario indica cuáles son los
						datos necesarios. . .
					</>,
					<>
						<span>
							Es importante que conozcas el estatus para así disfrutar de los
							beneficios de tener tu cédula de profesional
						</span>
						, recuerda que este es un documento con autoridad de identidad, y
						sin el cual tu título profesional está incompleto.
					</>,
				]}
			</TextArea>
			<TextArea title="Pasos para Buscar la Cédula">
				{[
					<>
						Como hemos dicho anteriormente los pasos son sumamente sencillos.
						<span>
							{' '}
							En tan solo 5 minutos podrás hacer la consulta de tu cédula
							profesional.
						</span>
					</>,
					<>
						<span>
							A continuación los pasos con los que podrás realizar la consulta:
						</span>
					</>,
					<ul>
						<li key={1}>En primer lugar ingresa al sitio: Consultar Cédula.</li>
						<li key={2}>
							Comienza ingresando los 3 datos que se solicitan: Nombres, primer
							apellido y segundo apellido.
						</li>
						<li key={3}>
							<span>Luego haz clic en “Consultar”.</span>
						</li>
						<li key={4}>
							Tras presionar Consultar, te llevará a la sección resultados,
							donde podrás ver el estatus de la cédula perteneciente a los datos
							ingresados.
						</li>
						<li key={5}>
							También podrás ver en la pestaña de Detalles, todos los datos
							específicos de la cédula consultada.
						</li>
					</ul>,
					<blockquote>
						Con
						<span>
							{' '}
							estos pasos indicados ya podrás hacer la consulta de tu cédula de
							profesional
						</span>
						, como puedes ver es un proceso que no te tomará mucho tiempo, solo
						necesitarás conexión a internet y habrás logrado tu consulta.
					</blockquote>,
				]}
			</TextArea>
			<TextArea title="Requisitos para La Cédula">
				{[
					<>
						<span>
							Para sacar tu documento de profesional es necesario que reúnas una
							serie de requisitos que son obligatorios
						</span>
						, porque precisamente sirven para demostrar tu identidad y tu
						estatus académico.
					</>,
					<span>Los requisitos son:</span>,
					<ul>
						<li key={1}>Acta de nacimiento</li>
						<li key={2}>CURP</li>
						<li key={3}>Certificado de Bachillerato</li>
						<li key={4}>Certificado de Estudios Profesionales</li>
						<li key={5}>Constancia de Liberación de Servicio Social</li>
						<li key={6}>Acta de examen profesional</li>
						<li key={7}>
							Dos fotografías recientes, tamaño infantil en blanco y negro
						</li>
						<li key={8}>Título Profesional</li>
						<li key={9}>Recibo de pago de derechos federales</li>
						<li key={10}>
							Solicitud de registro de Titulo y Expedición de cédula
						</li>
						<li key={11}>Solicitar Tu Cita para sacar la cedula.</li>
					</ul>,
					<blockquote>
						Encuentra todos los pasos en: Tramitar Cédula Profesional.
						<br />
						<br /> Estos son requisitos que
						<span> se pueden obtener de forma fácil</span>, así que comienza a
						reunirlos y prepárate para solicitar tu cita y así obtener tu cédula
						con todos los beneficios y ventajas que eso representa.
					</blockquote>,
				]}
			</TextArea>
			<TextArea title="¿Qué cuesta la cédula?">
				{[
					<>
						La expedición de la cédula tiene un costo que puede variar de
						acuerdo al tipo de título académico que tengas, además hay que tener
						en cuenta también costos como el de la compulsa de documentos por
						hoja, lo cual es necesario para la opción presencial.
					</>,
					<>
						<h3>
							<strong>
								#1: Por diplomado de especialidad y expedición de cédula
								electrónica
							</strong>
						</h3>
						El costo por diploma de especialidad y expedición de cédula
						electrónica para mexicanos y extranjeros con estudios en México, es
						de: $1,888.94 mxn.
					</>,
					<>
						<h3>
							<strong>
								#2: Por expedición de cédula de identidad para nivel técnico{' '}
							</strong>
						</h3>
						En cuanto al costo <span> por registro de título profesional</span>{' '}
						y expedición del documento profesional electrónica para extranjeros
						y mexicanos con estudios en México para nivel técnico, es de:
						$396.06 mxn.
					</>,
					<>
						<h3>
							<strong>
								#3: Con estudios para nivel técnico superior universitario y
								licenciatura
							</strong>
						</h3>
						Ahora bien, en el caso del registro de título profesional y
						expedición de cédula electrónica para extranjeros y mexicanos con
						estudios en México para nivel técnico superior universitario y
						licenciatura, el costo es de: $1,320.22 mxn.
					</>,
					<>
						<h3>
							<strong>
								#4: Con estudios para niveles de maestría y doctorado
							</strong>
						</h3>
						<Box className="paragraph">
							<span>
								Costo por registro de grado académico y expedición de la cédula
								electrónica para extranjeros y mexicanos
							</span>{' '}
							con estudios en México para niveles de maestría y doctorado,
							equivale a $1,320.22 mxn.
						</Box>
						<Box className="paragraph">
							Según el caso que proceda puedes ver el costo que tiene la cédula
							de extranjería, y, como ya hemos dicho, para el caso presencial
							debes pagar adicionalmente una compulsa de documentos por hoja de
							$11.94 mxn.
						</Box>
					</>,
				]}
			</TextArea>
			<TextArea title="Trámite de cédula Profesional">
				{[
					<>
						<Box className="paragraph">
							Ahora que ya conoces tanto los requisitos de documentos, como los
							requisitos de pagos para poder{' '}
							<span>hacer tu trámite de sacar tu cédula</span>, te resta saber
							cuáles son los pasos para obtener tu documento que te identifica
							como profesional.
						</Box>
						<Box className="paragraph">
							<span>
								En tal sentido, existen dos formas en las que puedes realizar el
								trámite de solicitud para disfrutar de este documento. . .
							</span>
							<Box className="paragraph">
								Una de esas formas es la solicitud presencial y otra la
								solicitud online. . .{' '}
								<span>A continuación las presentamos:</span>
							</Box>
						</Box>
						<h3>
							<span>#1: Trámite Presencial </span>
						</h3>
						<Box className="paragraph">
							Los trámites{' '}
							<span>para la obtención de cédula de forma presencial</span>,
							incluyen la solicitud de cita, sin embargo, ese aspecto de lo
							presentaremos en el próximo segmento.
						</Box>
						<Box className="paragraph">
							Ahora bien, lo primero es llenar tu solicitud, si no haces una
							solicitud no tienes cita.
						</Box>
						<span>Llenar la solicitud</span>
						<Box className="paragraph">
							Este paso es fundamental, porque sin solicitud no tendrás cita,
							así que no podrás llevar los documentos reunidos.
						</Box>
						<span>Ten en cuenta los siguientes pasos:</span>
						<ul>
							<li key={1}>
								Primero, debes pagar el recibo de derechos federales ara que
								puedes hacer el trámite: Obtén tu recibo aquí.
							</li>
							<li key={2}>
								Luego llena la solicitud de registro y expedición de cédula en:
								Solicitud de Registro y Expedición de Cédula.
							</li>
							<li key={3}>
								Ya después de llenar esta solicitud debes prepararte para
								asistir a la cita. A continuación te diremos cómo puedes
								solicitar tu cita para el trámite presencial: Cita Cedula
								Profesional.
							</li>
						</ul>
					</>,
					<>
						<h3>
							<strong>
								#2: Trámite online para obtener la cédula profesional:
							</strong>
						</h3>
						<Box className="paragraph">
							La ventaja de hacer el trámite vía online, es que puedes hacerlo
							de forma rápida, sencilla y segura, sin perder tiempo en
							trasladarte a una oficina.
						</Box>
						<Box className="paragraph">
							Para realizar <span>este tipo de trámite</span>, en primer lugar
							debes considerar la información con la que debes contar para poder
							iniciar el trámite, esta información es:
						</Box>
						<ul>
							<li key={1}>
								<span>Solicitud firmada con e.firma.</span> Ahora bien, esta
								solicitud firmada con e.firma debe contener:
								<ul>
									<li key={1}>Tu nombre, lugar y fecha de nacimiento.</li>
									<li key={2}>Tu nacionalidad.</li>
									<li key={3}>Clave Única de Registro de Población (CURP).</li>
									<li key={4}>
										Nombre o denominación de la institución que te otorgó el
										título profesional, y fecha de emisión.
									</li>
								</ul>
							</li>
							<li key={2}>
								De igual <span>forma debes tener a la mano</span>, para poder
								hacer el trámite online, un archivo electrónico en el cual esté:
								<ul>
									<li key={1}>Título profesional.</li>
									<li key={2}>
										Diploma de especialidad o grado académico, el cual
										previamente tu institución educativa debió registrar ante la
										Dirección General de Profesiones.
									</li>
								</ul>
							</li>
							<li key={3}>
								<span>
									También es importante que cuentes con un método de pago
								</span>
								, pues deberás ingresar tu pago luego de hacer presentado tu
								solicitud en la plataforma, puedes escoger entre tener a la mano
								una tarjeta de crédito y una tarjeta de débito.
							</li>
						</ul>
						<Box className="paragraph">
							Después de <span>tener estos requisitos a la mano</span>, para
							proceder al trámite en sí, es necesario que tengas en cuenta los
							siguientes pasos con los que de una forma simple y rápida podrás
							contar con tu cédula profesional:
						</Box>
						<ul>
							<li key={1}>
								Lo primero que debes hacer, es ingresar a la plataforma oficial
								para tu registro de profesionales:{' '}
								<Link
									underline="always"
									color="#404041"
									sx={linkStyles}
									target="_blank"
									rel="noopener"
									component={'div'}
									href="https://msirepve.sep.gob.mx/validacionelectronica/publico/startCedulaElectronica!startWizard.action">
									https://msirepve.sep.gob.mx/validacionelectronica/publico/startCedulaElectronica!startWizard.action
								</Link>
							</li>
							<li key={2}>
								Hay dos formas de iniciar el trámite, puedes hacerlo con:
								<ul>
									<li key={1}>
										La Clave Única de Registro de Población (CURP).
									</li>
									<li key={2}>A través de los datos personales.</li>
								</ul>
							</li>
							<li key={3}>
								Si te decides por los datos personales, necesitarás ingresar tu
								nombre, primer y segundo apellido.
							</li>
							<li key={4}>
								Luego escoge el método de pago para la obtención de tu cédula.
							</li>
							<li key={5}>Por último descarga tu cédula.</li>
						</ul>
						Como puedes ver es la forma más conveniente por la facilidad,
						bastará con tener acceso a internet para poder ingresar a la
						plataforma y con tus datos iniciar el trámite.
					</>,
				]}
			</TextArea>
			<TextArea title="Cédula profesional Cita">
				{[
					<>
						<Box className="paragraph">
							Ahora que ya sabes cómo prepararte para la cita presencial, los
							requisitos y cómo obtener tu solicitud y llenarla,{' '}
							<span>
								necesitas conocer los pasos para solicitar tu cita. . .
							</span>
						</Box>
						<Box className="paragraph">
							Y así en definitiva optar por tu cédula como profesional. Ten en
							cuenta que esta cita se tramita frente a la oficina de la
							Secretaría de Educación Pública.
						</Box>
						<Box className="paragraph">
							En el caso de los residentes del Distrito Federal y del área
							metropolitana, el trámite se puede hacer en las oficinas del
							Departamento Federal y Expedición de Cédulas, las cuales se
							encuentran en el sur de la ciudad.
						</Box>
						<Box className="paragraph">
							Pero si estás en otra entidad federativa, puedes y debes acudir a
							las oficinas estatales de la SEP.{' '}
							<span>
								A continuación los pasos para la solicitud de tu cita:
							</span>
						</Box>
						<ul>
							<li key={1}>
								<Box className="paragraph">
									<span>En primer lugar tienes que ingresar a:</span>
								</Box>
								<Link
									underline="always"
									color="#404041"
									sx={linkStyles}
									target="_blank"
									rel="noopener"
									component={'div'}
									href="https://www.citas.sep.gob.mx">
									https://www.citas.sep.gob.mx
								</Link>
							</li>
							<li key={2}>
								Ubica la pestaña “Cita”, Arriba a la derecha, y de las tres
								opciones que se desplegan haz clic en “Solicitud”.
							</li>
							<li key={3}>
								En el primer campo y el segundo campo, del formulario que
								encontrarás, debes escoger la segunda opción.
							</li>
							<li key={4}>
								Luego sigue{' '}
								<span>
									los pasos del sistema y estarás completando tu solicitud.
								</span>
							</li>
							<li key={5}>
								<span>
									Al tener la fecha de la cita, haz el pago correspondiente.
								</span>
							</li>
						</ul>
						<Box className="paragraph">
							La cita consiste en una revisión de los documentos que avalan tu
							solicitud y tendrá una extensión de más o menos una hora y media y
							dos horas. . .
						</Box>
					</>,
				]}
			</TextArea>
			<TextArea title="Tipos de Cédula">
				{[
					<>
						<Box className="paragraph">
							Para que tengas en cuenta el tipo de cédula que debes solicitar,
							debes saber que existen dos tipos, y{' '}
							<span>cada una responde a una serie de condiciones</span>,
							esencialmente a tu estatus académico.
						</Box>
						<span>
							Recuerda que la cédula de profesionales, avala tu título
							académico, a eso se debe la distinción en sus tipos.
						</span>
						<ul>
							<li key={1}>
								En primer lugar, las cédulas de tipo A1: se expiden únicamente
								para las personas que además de tener una carrera profesional,
								también cuenten con una especialidad que esté relacionada con la
								profesión que ejercen o para la cual se han capacitado.
							</li>
							<li key={2}>
								Por otra parte,{' '}
								<span>el otro tipo de cédula son las tipos C1</span>. Estas se
								expiden exclusivamente para los profesionales que cuentan con
								una Licenciatura, Maestría, Doctorado o también a quienes son
								Técnicos o TSU.
							</li>
						</ul>
					</>,
				]}
			</TextArea>
			<TextArea title="Reposición o Duplicado de cédula">
				{[
					<>
						<Box className="paragraph">
							La reposición o duplicado de cédula es uno de los conocimientos
							que necesitas obtener, para esos casos en los que se te haya
							perdido tu cédula o sencillamente necesites renovarla. En este
							sentido, existen dos formas de hacer la reposición o duplicado de
							cédula, a continuación te presentamos cada una de estas opciones:
						</Box>
						<h3>
							<strong>#1: Reposición o duplicado online</strong>
						</h3>
						<Box className="paragraph">
							Los <span>pasos online son muy sencillos y fáciles</span>, no
							necesitarás ir hasta una oficina, sino que basta con que cuentes
							con conexión a internet.
						</Box>
						<span>Estos son los pasos:</span>
						<ul>
							<li key={1}>
								Ten a la mano tu solicitud con la e.firma, asegúrate de que
								contenga correctamente los siguientes datos:
								<ul>
									<li key={1}>Tu nombre, lugar y fecha de nacimiento.</li>
									<li key={2}>También debe tener tu nacionalidad.</li>
									<li key={3}>
										La Clave Única de Registro de Población (CURP).
									</li>
								</ul>
							</li>
							<li key={2}>
								De igual forma es importante que tengas el comprobante del pago
								en línea, dicho pago puedes hacerlo con tarjeta de crédito o de
								débito.
							</li>
							<li key={3}>
								Con estos requisitos ya podrás ingresar a la página de la
								Secretaría de Educación Pública, hazlo con el siguiente enlace:{' '}
								<Link
									underline="always"
									color="#404041"
									sx={linkStyles}
									target="_blank"
									rel="noopener"
									component={'div'}
									href="https://www.gob.mx/tramites/ficha/duplicado-de-cedula-profesional/SEP67">
									https://www.gob.mx/tramites/ficha/duplicado-de-cedula-profesional/SEP67
								</Link>
							</li>
							<li key={4}>Ubica el botón de Trámite en línea.</li>
							<li key={5}>
								Al llegar al nuevo sitio, tras hacer clic en Trámite en línea,
								puedes hacer en primer lugar el paso de la búsqueda de la cédula
								profesional.
							</li>
							<li key={6}>
								Tienes la opción de hacer la búsqueda mediante la introducción
								de la Clave Única de Registro de Población en el campo en donde
								es solicitado.
							</li>
							<li key={7}>
								La otra forma de hacer la búsqueda es mediante tus datos
								personales, con esta opción debes ingresar:{' '}
								<ul>
									<li key={1}>Nombre</li>
									<li key={2}>Primer apellido.</li>
									<li key={3}>Segundo apellido.</li>
									<li key={4}>Fecha de nacimiento.</li>
									<li key={5}>Sexo</li>
									<li key={6}>Estado</li>
								</ul>
							</li>
							<li key={8}>
								<span>Después de haber introducido los datos</span>, de acuerdo
								a la forma de búsqueda de tu preferencia, debes marcar la
								casilla del Captcha y luego hacer clic en Continuar.
							</li>
							<li key={9}>
								El sistema te guiará al siguiente paso, y luego hacia el método
								de pago,{' '}
								<span>
									permitiéndote así descargar tu duplicado de la cédula
									profesional.
								</span>
							</li>
						</ul>
						<h3>
							<strong>#2: Reposición o duplicado presencial </strong>
						</h3>
						<Box className="paragraph">
							La opción de{' '}
							<span>
								la reposición o duplicado presencial te llevará a solicitar una
								cita
							</span>{' '}
							en la que debes presentar una serie de documentos, con la
							finalidad de poder demostrar tu identidad y así obtener tu
							duplicado.
						</Box>
						<Box className="paragraph">
							Aunque recomendamos la forma online, por sus facilidades y
							rapidez, ten en cuenta esta opción en el caso en que prefieras
							hacer el trámite de forma presencial. Debes reunir los siguientes
							requisitos:
						</Box>
						<ul>
							<li key={1}>
								Debes contar con la solicitud del trámite de cédula en formato
								original y en copia.
							</li>
							<li key={2}>
								Es necesario{' '}
								<span>que cuentes con una copia de la cédula a reponer</span>, y
								esta debe estar ampliada al 200%.
							</li>
							<li key={3}>
								También debes presentar el título de tu carrera estudiada, y
								éste debe tener el sello de registro ante la Dirección General
								de Profesionales.
							</li>
							<li key={4}>
								De la misma manera es necesario presentar el comprobante de
								pago.
							</li>
							<li key={5}>
								Ten a la mano <span>la copia de tu CURP</span>, en tamaño carta
								y con ampliación del 200%.
							</li>
							<li key={6}>
								3 fotografías de tamaño infantil, en blanco y negro y con fondo
								blanco o transparente, deben ser recientes.
							</li>
						</ul>
						<blockquote>
							<Box className="paragraph">
								Con estos requisitos ya asegurado, solicita una cita por medio
								del enlace:{' '}
								<Link
									underline="always"
									color="#404041"
									sx={linkStyles}
									target="_blank"
									rel="noopener"
									component={'div'}
									href="https://www.citas.sep.gob.mx/citas">
									https://www.citas.sep.gob.mx/citas
								</Link>
							</Box>
							<Box className="paragraph">
								Así podrás acceder a un duplicado.
							</Box>
						</blockquote>
					</>,
				]}
			</TextArea>
			<TextArea title="Validación de la cedula">
				{[
					<>
						<Box className="paragraph">
							En el sentido de validar la cédula, es importante recalcar que es
							un tipo de trámite{' '}
							<span>
								muy sencillo que equivale a la consulta de la cédula
								profesional.
							</span>
						</Box>
						<Box className="paragraph">
							De manera que solo tienes que devolverte en la lectura y encontrar
							el ítem de pasos para realizar la consulta.
						</Box>
					</>,
				]}
			</TextArea>
			<TextArea title="¿Por qué es importante Obtener este documento?">
				{[
					<>
						<Box className="paragraph">
							Es importante que cuentes con este documento porque es el aval de
							tu título académico, te servirá para una serie de trámites.
						</Box>
						<Box className="paragraph">
							Así que{' '}
							<span>
								aprovecha y con esta información que te hemos compartido
							</span>
							, obtén tu cédula o también tu duplicado en caso de haberla
							perdido.
						</Box>
					</>,
				]}
			</TextArea>
			<TextArea title="¿Quiénes están obligados a tramitar su Cédula?">
				{[
					<>
						<Box className="paragraph">
							Este es un requisito para todas las personas que han egresado de
							algún centro de educación superior, que cuenten con una profesión
							y quieran ejercerla.
						</Box>
						<Box className="paragraph">
							La cédula para los profesionales es, entonces,{' '}
							<span>un requisito obligatorio para todo</span> tipo de
							profesionista que quiere competir en el mercado laboral.
						</Box>
					</>,
				]}
			</TextArea>
			<TextArea title="¿Se puede ejercer sin este documento?">
				{[
					<>
						Puedes tener un título académico, y contar con un gran conocimiento,
						pero la verdad es que necesitas la cédula de profesional para poder
						ejercer tu carrera.
					</>,
					<>
						Es decir, sin la cédula de profesional no podrás ejercer tu
						profesión.
					</>,
				]}
			</TextArea>
			<TextArea title="¿Un extranjero con estudios en México, puede sacar su Cédula?">
				{[
					<>
						<span>
							Todo profesional en México puede obtener su cédula de profesional.
							. .
						</span>
						<Box className="paragraph">
							Solo necesita seguir los pasos para la solicitud,{' '}
							<span>
								hacer el pago correspondiente para obtener la certificación
							</span>{' '}
							expresa en la cédula, este pago no dependerá de su nacionalidad,
							sino del tipo o nivel de estudio.
						</Box>
					</>,
				]}
			</TextArea>
			<TextArea title="Beneficios de Sacar tu cédula">
				{[
					<>
						<>Entre los principales beneficios de sacar la cédula, están:</>
						<ul>
							<li key={1}>
								Cuentas con un aval de este documento que certifica tu
								profesión.
							</li>
							<li key={2}>
								Es como un título portable, que podrás llevar contigo con
								tranquilidad y comodidad.
							</li>
							<li key={3}>Te permite acceder a ofertas laborales.</li>
							<li key={4}>
								Puedes <span>realizar diversos trámites</span>, porque es un
								documento a nivel de documento de identidad.
							</li>
						</ul>
					</>,
				]}
			</TextArea>
			<TextArea title="¿Qué es el Registro Nacional de Profesionistas?">
				{[
					<>
						El Registro Nacional de Profesionista sirve como herramienta para
						saber qué personas ejercen la profesión son una formación técnica o
						académica.
					</>,
					<>
						De manera que se le puede considerar como un mecanismo que permite
						ejemplificar las posibilidades de{' '}
						<span>
							la apertura informativa de instituciones gubernamentales.
						</span>{' '}
						Provee de información útil y práctica para los empleadores, a la que
						se puede acceder fácil y sencillamente.
					</>,
				]}
			</TextArea>
			<TextArea title="Dirección general de profesiones teléfono ">
				{[
					<>
						<span>La dirección general de profesiones es:</span>
						<ul>
							<li key={1}>
								Viaducto Río Piedad No. 551, Jardín Balbuena, Venustiano
								Carranza, Código Postal 15900, Ciudad de México.
							</li>
							<li key={2}>
								En esta dirección se labora un horario de atención de lunes a
								viernes de 9:00 a 19:00 horas.
							</li>
							<li key={3}>
								En cuanto <span>al número telefónico para comunicarte</span>,
								debes llamar al 36013800 extensión 61100, de igual forma puedes
								llamar al TelSEP 36017599.
							</li>
							<li key={4}>
								Si lo prefieres puedes comunicarte al lada sin costo 01 800 288
								6688, con un horario de atención de lunes a viernes de 9:00 a
								15:00 horas.
							</li>
						</ul>
					</>,
				]}
			</TextArea>
			<br />
			<br />
			<br />
		</>
	);
}
