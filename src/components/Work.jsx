import React from 'react'
import { ListGroup, Row } from 'react-bootstrap'
import { work } from '../content/Work'
import '../styles/Sections.css'

function Work() {
	return (
		<div className="section">
			<div className="sectionTitle">Work experience</div>
			{work.map((w, i) => {
				return (
					<div key={i} className="column">
						<ListGroup.Item className="itemLista">
							<Row className="rows">
								<div className="strong">{w.company}</div>&nbsp;&nbsp;
								<div>{w.place}&nbsp;&nbsp;</div>
								<div className="site">{w.site}</div>
								<div className="city">{w.city}</div>
							</Row>
							{w.positions.map((p, index) => {
								return (
									<Row key={index}>
										<div>
											<p>
												<b>{p.title}</b>
											</p>
											{p.description}
										</div>
									</Row>
								)
							})}
						</ListGroup.Item>
					</div>
				)
			})}
		</div>
	)
}

export default Work
