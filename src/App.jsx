import agus from '../src/images/Agus.png'
import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import './App.css'

function App() {
	return (
		<Container fluid className="principal">
			<Row className="columnas">
				<Col sm={5} md={4} lg={3} xl={2}>
					<Image src={agus} className="foto" />
				</Col>
				<Col sm={7} md={8} lg={9} xl={10}>
					Agustín Minetto
				</Col>
			</Row>
		</Container>
	)
}

export default App
