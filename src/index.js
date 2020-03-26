import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const InitApi = props => {
	const useToken = () => {
		const [token, setToken] = useState(null);
		useEffect(() => {
			if (!token) {
				let url = window.location.href;
				let start = url.indexOf('access_token=');
				let padding = 'access_token='.length;
				let end = url.indexOf('&token_type');
				if (start !== -1 && end !== -1) {
					let token = url.substring(start + padding, end);
					setToken(token);
				}
			}
		}, [window.location.href]);

		return token;
	};

	let token = useToken();
	let children = React.cloneElement(props.children, {
		logged: !!token,
		_TOKEN: token
	});

	return children;
};

ReactDOM.render(
	<React.StrictMode>
		<InitApi>
			<App logged={!!false} />
		</InitApi>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
