import React from 'react'
import {
	SiJavascript,
	SiTypescript,
	SiJava,
	SiReact,
	SiRedux,
	SiNodeDotJs,
	SiAmazonaws,
	SiPostgresql,
	SiCss3,
	SiBootstrap,
	SiGit,
	SiGithub,
	SiNextDotJs,
	SiGraphql,
	SiApollographql,
	SiWordpress,
	SiTailwindcss,
} from 'react-icons/si'
import { FaLess } from 'react-icons/fa'
import { DiScrum } from 'react-icons/di'
export const lang = {
	a: (
		<div>
			<SiJavascript /> &nbsp; Javascript
		</div>
	),
	b: (
		<div>
			<SiTypescript />
			&nbsp; TypeScript
		</div>
	),
	c: (
		<div>
			<SiJava />
			&nbsp; Java
		</div>
	),
}

export const front = {
	a: (
		<div>
			<SiReact />
			&nbsp;React
		</div>
	),
	b: (
		<div>
			<SiRedux />
			&nbsp;Redux
		</div>
	),
}

export const back = {
	a: (
		<div>
			<SiNodeDotJs /> &nbsp; Node.js
		</div>
	),
	b: (
		<div>
			<SiAmazonaws />
			&nbsp; AWS / DynamoDB
		</div>
	),
	c: (
		<div>
			<SiPostgresql />
			&nbsp; PGAdmin
		</div>
	),
	d: <div>PostgresSQL</div>,
}

export const design = {
	a: (
		<div>
			<SiCss3 /> &nbsp; CSS
		</div>
	),

	b: (
		<div>
			<FaLess />
			&nbsp; Less
		</div>
	),
	c: (
		<div>
			<SiBootstrap />
			&nbsp; React-Bootsrap
		</div>
	),
	d: <div>Ant design</div>,
}

export const testing = {
	a: 'Cypress',
	b: 'Reflect',
}
export const mobile = {
	a: (
		<div>
			<SiReact /> &nbsp; React Native
		</div>
	),
	b: (
		<div>
			<SiJava />
			&nbsp; Java
		</div>
	),
}

export const workflow = {
	a: (
		<div>
			<SiGit /> &nbsp; Git
		</div>
	),
	b: (
		<div>
			<SiGithub /> &nbsp; GitHub
		</div>
	),
	c: (
		<div>
			<DiScrum /> &nbsp; Scrum
		</div>
	),
}

export const prox = {
	a: (
		<div>
			<SiNextDotJs /> &nbsp; Next.js
		</div>
	),
	b: (
		<div>
			<SiGraphql /> &nbsp; GpraphQL
		</div>
	),
	c: (
		<div>
			<SiApollographql /> &nbsp; Apollo
		</div>
	),
	d: (
		<div>
			<SiWordpress /> &nbsp; Wordpress
		</div>
	),
	e: (
		<div>
			<SiTailwindcss /> &nbsp; Tailwindcss
		</div>
	),
}
