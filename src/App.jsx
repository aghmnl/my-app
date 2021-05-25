import React, { useState } from 'react'
import { Container, Col, Row, Image, ButtonGroup, Button, ListGroup } from 'react-bootstrap'
import { ImWhatsapp, ImLinkedin, ImGithub } from 'react-icons/im'
import Stack from './components/Stack'
import Work from './components/Work'
import Projects from './components/Projects'
import Education from './components/Education'
import Extra from './components/Extra'
import agus from '../src/images/Agus.png'
import './App.css'

function App() {
	const [show, setShow] = useState('stack')

	return (
		<Container fluid>
			<Row className="principal">
				<Col className="columnaIzquierda">
					<Image src={agus} className="foto" />

					<ButtonGroup vertical className="sections">
						<Button variant="secondary" onClick={() => setShow('stack')}>
							Stack
						</Button>
						<Button variant="secondary" onClick={() => setShow('work')}>
							Work experience
						</Button>
						<Button variant="secondary" onClick={() => setShow('projects')}>
							Projects
						</Button>
						<Button variant="secondary" onClick={() => setShow('education')}>
							Education
						</Button>
						<Button variant="secondary" onClick={() => setShow('extra')}>
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
					{show === 'stack' && <Stack />}
					{show === 'work' && <Work />}
					{show === 'projects' && <Projects />}
					{show === 'education' && <Education />}
					{show === 'extra' && <Extra />}
					<Row className="pie">
						<ListGroup horizontal>
							<ListGroup.Item style={{ width: '35%' }} action href="https://wa.me/5491169700135" target="_blank">
								<ImWhatsapp />
								&nbsp; +54 911 6970 0135
							</ListGroup.Item>
							<ListGroup.Item style={{ width: '35%' }} action href="https://www.linkedin.com/in/agustin-minetto/" target="_blank">
								<ImLinkedin />
								&nbsp;&nbsp;<b>LinkedIn:</b> agustin-minetto
							</ListGroup.Item>
							<ListGroup.Item style={{ width: '30%' }} action href="https://github.com/aghmnl" target="_blank">
								<ImGithub />
								&nbsp;&nbsp;<b>GitHub:</b> aghmnl
							</ListGroup.Item>
						</ListGroup>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default App
