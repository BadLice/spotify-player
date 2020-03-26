import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/nav.bar';
import axios from 'axios';

export const useSearch = _TOKEN => {
	const [result, setResult] = useState(null);
	const [error, setError] = useState(null);
	const [searchOptions, search] = useState(null);

	useEffect(() => {
		if (searchOptions && _TOKEN) {
			let subscribed = true;
			let searchLink = 'https://api.spotify.com/v1/search?';
			let options = Object.keys(searchOptions).reduce(
				(opt, key) => opt + '&' + key + '=' + searchOptions[key],
				'access_token=' + _TOKEN
			);

			axios
				.get(searchLink + options)
				.then(({ data }) => {
					if (subscribed) {
						console.log(data);
						setResult(data);
					}
				})
				.catch(err => setError(err));

			return () => (subscribed = false);
		}
	}, [searchOptions, _TOKEN]);

	return { result, search, error };
};

const App = props => {
	const { searchResult, search, error } = useSearch(props._TOKEN);

	return (
		<>
			<NavBar logged={props.logged} search={search} />
			{searchResult && searchResult.map(item => null)}
		</>
	);
};

export default App;
