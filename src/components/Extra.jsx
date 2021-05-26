import React from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import { interests, strenghs } from '../content/Extra'
import '../styles/App.css'

const row = [
	[strenghs, 'Strenghs'],
	[interests, 'Interests'],
]

function Extra() {
	return (
		<div className="section">
			<div className="sectionTitle">Extra info</div>
			<div className="columns">
				{row.map((c, i) => {
					return (
						<Col key={i} className="column">
							<div className="subtitle">{c[1]}</div>
							<ListGroup variant="flush" className="lista">
								{c[0].map((v, index) => {
									return (
										<ListGroup.Item key={index} className="itemLista">
											{v}
										</ListGroup.Item>
									)
								})}
							</ListGroup>
						</Col>
					)
				})}
			</div>
			)
		</div>
	)
}

export default Extra
