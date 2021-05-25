import React from 'react'
import { Col, ListGroup } from 'react-bootstrap'
// import { ReactComponent as CypressLogo } from '../images/Cypress.svg'
import { SiReact, SiJavascript, SiTypescript, SiJava, SiCss3, SiBootstrap, SiRedux, SiNodeDotJs, SiAmazonaws, SiPostgresql } from 'react-icons/si'

function Stack() {
	return (
		<div className="section">
			<div className="sectionTitle">Stack</div>
			<div className="columns">
				<Col className="column">
					<div className="subtitle">Languages</div>
					<ListGroup variant="flush" className="lista">
						<ListGroup.Item className="itemLista">
							<SiJavascript />
							&nbsp; JavaScript
						</ListGroup.Item>
						<ListGroup.Item className="itemLista">
							<SiTypescript />
							&nbsp; TypeScript
						</ListGroup.Item>
						<ListGroup.Item className="itemLista">
							<SiJava />
							&nbsp; Java
						</ListGroup.Item>
					</ListGroup>
					<div className="text"></div>
				</Col>
				<Col className="column">
					<div className="subtitle">FrontEnd</div>
					<ListGroup variant="flush" className="lista">
						<ListGroup.Item className="itemLista">
							<SiReact />
							&nbsp; React
						</ListGroup.Item>
						<ListGroup.Item className="itemLista">
							<SiRedux />
							&nbsp; Redux
						</ListGroup.Item>
					</ListGroup>
					<div className="text"></div>
				</Col>
				<Col className="column">
					<div className="subtitle">BackEnd</div>
					<ListGroup variant="flush" className="lista">
						<ListGroup.Item className="itemLista">
							<SiNodeDotJs />
							&nbsp; Node.js
						</ListGroup.Item>
						<ListGroup.Item className="itemLista">
							<SiAmazonaws /> &nbsp; AWS
						</ListGroup.Item>
						<ListGroup.Item className="itemLista">
							<SiPostgresql /> &nbsp; PostgresSQL
						</ListGroup.Item>
					</ListGroup>
					<div className="text"></div>
				</Col>
			</div>
			<div className="columns">
				<Col className="column">
					<div className="subtitle">Design</div>
					<ListGroup variant="flush" className="lista">
						<ListGroup.Item className="itemLista">
							<SiCss3 /> &nbsp; CSS
						</ListGroup.Item>
						<ListGroup.Item className="itemLista">
							<SiBootstrap /> &nbsp; React-Bootsrap
						</ListGroup.Item>
					</ListGroup>
					<div className="text"></div>
				</Col>
				<Col className="column">
					<div className="subtitle">Testing</div>
					<ListGroup variant="flush" className="lista">
						<ListGroup.Item className="itemLista">
							{/* <CypressLogo /> */}
							Cypress
						</ListGroup.Item>
						<ListGroup.Item className="itemLista">Reflect</ListGroup.Item>
					</ListGroup>
					<div className="text"></div>
				</Col>
				<Col className="column">
					<div className="subtitle">Mobile</div>
					<ListGroup variant="flush" className="lista">
						<ListGroup.Item className="itemLista">
							<SiReact /> &nbsp; React Native
						</ListGroup.Item>
						<ListGroup.Item className="itemLista">
							<SiJava />
							&nbsp; Java
						</ListGroup.Item>
					</ListGroup>
					<div className="text"></div>
				</Col>
			</div>
		</div>
	)
}

export default Stack
