import React from 'react'
import { Row, ListGroup } from 'react-bootstrap'
import { SiWhatsapp, SiLinkedin, SiGithub } from 'react-icons/si'
import { RiPhoneFill } from 'react-icons/ri'
import '../styles/Footer.css'

function Footer() {
	return (
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
	)
}

export default Footer
