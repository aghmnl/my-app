import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Image, ButtonGroup, Button, ListGroup } from 'react-bootstrap'
import { SiWhatsapp, SiLinkedin, SiGithub } from 'react-icons/si'
import { RiPhoneFill } from 'react-icons/ri'
import Stack from './components/Stack'
import Work from './components/Work'
import Projects from './components/Projects'
import Education from './components/Education'
import Extra from './components/Extra'
import agus from '../src/images/Agus.png'
import './App.css'

function App() {
	const [show, setShow] = useState('stack')
	const [fixed, setFixed] = useState('')

	useEffect(() => {}, [fixed])

	function handleFocus(section) {
		document.getElementById(section).focus({ preventScroll: false })
	}

	function handleFixed(section) {
		if (fixed === section) {
			setFixed('')
			document.activeElement.blur()
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

					<ButtonGroup vertical className="sections">
						<Button
							id="stack"
							className="selector"
							onMouseOver={() => {
								setShow('stack')
							}}
							onClick={() => handleFixed('stack')}
						>
							Stack
						</Button>
						<Button
							id="work"
							className="selector"
							onMouseOver={() => {
								setShow('work')
							}}
							onClick={() => handleFixed('work')}
						>
							Work experience
						</Button>
						<Button id="projects" className="selector" onMouseOver={() => setShow('projects')} onClick={() => handleFixed('projects')}>
							Projects
						</Button>
						<Button
							id="education"
							className="selector"
							onMouseOver={() => {
								setShow('education')
							}}
							onClick={() => handleFixed('education')}
						>
							Education
						</Button>
						<Button
							id="extra"
							className="selector"
							onMouseOver={() => {
								setShow('extra')
							}}
							onClick={() => handleFixed('extra')}
						>
							Extra info
						</Button>
					</ButtonGroup>
					<ListGroup className="sections">
						<ListGroup.Item className="final">Open for international relocation. </ListGroup.Item>
						<ListGroup.Item className="final">References available.</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col className="columnaDerecha">
					<Row className="title">Agustín Minetto</Row>
					<Row className="emphasis">
						Passionate developer of digital tools that improve user&apos;s lives. I love having challenges and learning every day. I have experience as a
						Jr. Full-Stack Developer (Osmind – USA) and also more than 15 years of experience as a Chemical Engineer in different industries and
						countries. I led a group of 40 people in shifts, operating 10 refinery units. I continuously improved processes (LEAN) and created tools to
						work more efficiently and effectively. I always promote an enjoyable and open working atmosphere.
					</Row>
					{((!fixed && show === 'stack') || fixed === 'stack') && <Stack />}
					{((!fixed && show === 'work') || fixed === 'work') && <Work />}
					{((!fixed && show === 'projects') || fixed === 'projects') && <Projects />}
					{((!fixed && show === 'education') || fixed === 'education') && <Education />}
					{((!fixed && show === 'extra') || fixed === 'extra') && <Extra />}
					<Row className="pie">
						<ListGroup horizontal>
							<ListGroup.Item className="contacto" style={{ width: '35%' }} action href="https://wa.me/5491169700135" target="_blank">
								<RiPhoneFill />
								&nbsp;/&nbsp; <SiWhatsapp />
								&nbsp; +54 911 6970 0135
							</ListGroup.Item>
							<ListGroup.Item className="contacto" style={{ width: '35%' }} action href="https://www.linkedin.com/in/agustin-minetto/" target="_blank">
								<SiLinkedin />
								&nbsp;&nbsp;<b>LinkedIn:</b>&nbsp;agustin-minetto
							</ListGroup.Item>
							<ListGroup.Item className="contacto" style={{ width: '30%' }} action href="https://github.com/aghmnl" target="_blank">
								<SiGithub />
								&nbsp;&nbsp;<b>GitHub:</b>&nbsp;aghmnl
							</ListGroup.Item>
						</ListGroup>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default App
