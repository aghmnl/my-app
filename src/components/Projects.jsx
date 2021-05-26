import React from 'react'
import '../styles/Sections.css'
import YoutubeEmbed from './Youtube'

function Projects() {
	return (
		<div className="section">
			<div className="sectionTitle">Projects</div>
			<div className="columns">
				<div className="subtitle">
					<b>e-commerce:</b>&nbsp;Toni-Wines
					<YoutubeEmbed embedId="4JLnXLgnXMY" />
				</div>

				<div style={{ marginTop: '30px' }} className="itemLista">
					<p>This e-commerces was done as a team project at HENRY</p>
					<p>It&apos;s about wines and have categories and varietals</p>
					<p>It have both user and admin authentications with email/password, Google or Github</p>
					<p>Products can be bought and reviewed after delivery is confirmed</p>
					<p>Admin can manage stocks, products, purchases and users</p>
				</div>
			</div>
		</div>
	)
}

export default Projects
