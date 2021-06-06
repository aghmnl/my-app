import React from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import { lang, front, back, design, testing, mobile, workflow, prox } from '../content/Stack.jsx'
import '../styles/Sections.css'

const row1 = [
	[lang, 'Languages'],
	[front, 'FrontEnd'],
	[design, 'Design'],
	[workflow, 'Workflow'],
]

const row2 = [
	[back, 'BackEnd'],
	[testing, 'Testing'],
	[mobile, 'Mobile'],
	[prox, 'Comming soon'],
]

const data = [row1, row2]

function Stack() {
	return (
		<div className="section">
			<div className="sectionTitle">Stack</div>
			{data.map((row, id) => {
				return (
					<div key={id} className="columns">
						{row.map((c, i) => {
							return (
								<Col key={i} className="column">
									<div className="subtitle">{c[1]}</div>
									<ListGroup variant="flush" className="lista">
										{Object.values(c[0]).map((v, index) => {
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
			})}
		</div>
	)
}

export default Stack
