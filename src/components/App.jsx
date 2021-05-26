import React, { useState } from 'react'
import { Container, Col, Row, Image, ListGroup } from 'react-bootstrap'
import Stack from './Stack'
import Work from './Work'
import Projects from './Projects'
import Education from './Education'
import Extra from './Extra'
import Selection from './Selection'
import Footer from './Footer'

import agus from '../images/Agus.png'
import '../styles/App.css'

function App() {
	const [show, setShow] = useState('stack')
	const [fixed, setFixed] = useState('')

	function handleFocus(section) {
		document.getElementById(section).focus({ preventScroll: false })
	}

	function handleFixed(section) {
		if (fixed === section) {
			setFixed('')
			document.getElementById(section).blur()
		} else {
			handleFocus(section)
			setFixed(section)
		}
	}

	return (
		<Container fluid>
			<Row className="principal">
				<Col className="columnaIzquierda">
					<Image src={agus} className="foto" />
					<Selection setShow={setShow} fixed={fixed} handleFixed={handleFixed}></Selection>
					<ListGroup className="sections">
						<ListGroup.Item className="final">Open for international relocation. </ListGroup.Item>
						<ListGroup.Item className="final">References available.</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col className="columnaDerecha">
					<Row className="title">Agustín Minetto</Row>
					<Row className="emphasis">
						Passionate developer of digital tools that improve user&apos;s lives. I love having challenges and learning every day. I have experience as a
						Full-Stack Developer (Osmind – USA) and also more than 15 years of experience as a Chemical Engineer in different industries and countries. I
						led a group of 40 people in shifts, operating 10 refinery units. I continuously improved processes (LEAN) and created tools to work more
						efficiently and effectively. I always promote an enjoyable and open working atmosphere.
					</Row>
					{((!fixed && show === 'stack') || fixed === 'stack') && <Stack />}
					{((!fixed && show === 'work') || fixed === 'work') && <Work />}
					{((!fixed && show === 'projects') || fixed === 'projects') && <Projects />}
					{((!fixed && show === 'education') || fixed === 'education') && <Education />}
					{((!fixed && show === 'extra') || fixed === 'extra') && <Extra />}
					<Footer />
				</Col>
			</Row>
		</Container>
	)
}

export default App
