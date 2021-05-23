import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import agus from '../src/images/Agus.png'
import './App.css'

function App() {
	return (
		<Container fluid className="principal">
			<Row className="columnas">
				<Col className="columnaIzquierda">
					<Image src={agus} className="foto" />
				</Col>

				<Col className="columnaDerecha">
					<Row className="title">Agustín Minetto</Row>

					<Row className="emphasis">
						{/*eslint-disable-next-line prettier/prettier*/}
						Passionate developer of digital tools that improve user&apos;s lives. I love having challenges and learning every day. I have experience as a
						Jr. Full-Stack Developer (Osmind – USA) and also more than 15 years of experience as a Chemical Engineer in different industries and
						countries. I led a group of 40 people in shifts, operating 10 refinery units. I continuously improved processes (LEAN) and created tools to
						work more efficiently and effectively. I always promote an enjoyable and open working atmosphere.
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default App
