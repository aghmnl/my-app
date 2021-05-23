import React from 'react'
import { Container, Col, Row, Image, ButtonGroup, Button, ListGroup } from 'react-bootstrap'
import agus from '../src/images/Agus.png'
import './App.css'

function App() {
	return (
		<Container fluid className="principal">
			<Col className="columnaIzquierda">
				<Image src={agus} className="foto" />
				<ListGroup variant="flush" className="text">
					<ListGroup.Item action href="https://wa.me/5491169700135" target="_blank">
						+54 911 6970 0135
					</ListGroup.Item>
					<ListGroup.Item action href="https://www.linkedin.com/in/agustin-minetto/" target="_blank">
						<b>LinkedIn:</b> agustin-minetto
					</ListGroup.Item>
					<ListGroup.Item action href="https://github.com/aghmnl" target="_blank">
						<b>GitHub:</b> aghmnl
					</ListGroup.Item>
					<ListGroup.Item as="li">Open for international relocation.</ListGroup.Item>
					<ListGroup.Item as="li">References available.</ListGroup.Item>
				</ListGroup>
			</Col>
			<Col className="columnaDerecha">
				<Row className="title">Agustín Minetto</Row>
				<Row className="emphasis">
					Passionate developer of digital tools that improve user&apos;s lives. I love having challenges and learning every day. I have experience as a Jr.
					Full-Stack Developer (Osmind – USA) and also more than 15 years of experience as a Chemical Engineer in different industries and countries. I led
					a group of 40 people in shifts, operating 10 refinery units. I continuously improved processes (LEAN) and created tools to work more efficiently
					and effectively. I always promote an enjoyable and open working atmosphere.
				</Row>
				<Row>
					<ButtonGroup>
						<Button variant="secondary">Stack</Button>
						<Button variant="secondary">Work experience</Button>
						<Button variant="secondary">Projects</Button>
						<Button variant="secondary">Education</Button>
						<Button variant="secondary">Extra info</Button>
					</ButtonGroup>
				</Row>
			</Col>
		</Container>
	)
}

export default App
