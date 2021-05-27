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
			<SiReact /> &nbsp; React
		</div>
	),
	b: (
		<div>
			<SiRedux />
			&nbsp; Redux
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
			&nbsp; PostgresSQL / PGAdmin
		</div>
	),
}

export const design = {
	a: (
		<div>
			<SiCss3 /> &nbsp; CSS
		</div>
	),
	b: (
		<div>
			<SiBootstrap />
			&nbsp; React-Bootsrap
		</div>
	),
	c: (
		<div>
			<FaLess />
			&nbsp; Less
		</div>
	),
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
