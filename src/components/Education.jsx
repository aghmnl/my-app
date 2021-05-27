import React from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { education, languages } from '../content/Education'
import '../styles/Sections.css'

function Education() {
	return (
		<div className="section">
			<div className="sectionTitle">Education</div>
			<div className="columns">
				<Col className="column">
					<ListGroup variant="flush" className="lista">
						{education.map((e, index) => {
							return (
								<ListGroup.Item key={index} className="itemLista">
									<Row>
										<i>{e.year}</i>&nbsp;&nbsp;<div className="strong">{e.title}</div>
									</Row>
									<Row className="place">
										{e.place}&nbsp;&nbsp;
										<div className="site">{e.site}</div>
									</Row>
								</ListGroup.Item>
							)
						})}
						)
					</ListGroup>
				</Col>
				<Col className="column">
					<div className="subtitle">Languages</div>
					<ListGroup variant="flush" className="lista">
						{languages.map((l, index) => {
							return (
								<ListGroup.Item key={index} className="itemLista">
									<b>{l.lang}:</b> {l.level}
								</ListGroup.Item>
							)
						})}
						)
					</ListGroup>
				</Col>
			</div>
		</div>
	)
}

export default Education
