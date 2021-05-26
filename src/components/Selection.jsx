import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'
import '../styles/Selection.css'

function Selection(props) {
	const selections = [
		['stack', 'Stack'],
		['work', 'Work experience'],
		['projects', 'Projects'],
		['education', 'Education'],
		['extra', 'Extra info'],
	]
	Selection.propTypes = {
		fixed: PropTypes.string,
		setShow: PropTypes.func,
		handleFixed: PropTypes.func,
	}

	return (
		<ButtonGroup vertical className="sections">
			{selections.map((sec) => {
				return (
					<Button
						key={sec[0]}
						id={`${sec[0]}`}
						// This conditional is necessary to avoid change of colour when loosing focus of the button
						className={props.fixed === `${sec[0]}` ? 'selectorFijo' : 'selector'}
						onMouseOver={() => {
							props.setShow(sec[0])
						}}
						onClick={() => props.handleFixed(sec[0])}
					>
						{sec[1]}
					</Button>
				)
			})}
		</ButtonGroup>
	)
}

export default Selection
