import agus from '../src/images/Agus.png'
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './App.css'

function App() {
	return (
		<Container className="app">
			<Row>
				<Col xs={6} md={4}>
					<Image className="foto" src={agus} />
				</Col>
			</Row>
		</Container>
	)
}

export default App
