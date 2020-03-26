import React from 'react';
import { Button } from 'react-bootstrap';

const Login = props => {
	const loginToSpotify = () => {
		window.location.href =
			'https://accounts.spotify.com/authorize?client_id=bee70acc71d645e0aeb3ba505672c35d&response_type=token&redirect_uri=http://localhost:3000';
	};

	return (
		<>
			<Button onClick={loginToSpotify} variant='success'>
				Login
			</Button>
		</>
	);
};

export default Login;
