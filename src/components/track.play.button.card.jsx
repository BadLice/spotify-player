import React from 'react';
import { Button } from 'react-bootstrap';

const PlayButton = (props) => {
	return (
		<Button
			className='float-right mb-2 rounded-circle'
			variant='outline-success'
			onClick={() => props.notifyPlayerNotSupported(true)}
		>
			&#x25B6;
		</Button>
	);
};

export default PlayButton;
