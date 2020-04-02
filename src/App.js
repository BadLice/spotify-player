import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/nav.bar';
import axios from 'axios';
import SearchResultList from './components/search.result.list';

export const useSearch = _TOKEN => {
	const [searchResult, setResult] = useState(null);
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
						setResult(data);
					}
				})
				.catch(err => setError(err));

			return () => (subscribed = false);
		}
	}, [searchOptions, _TOKEN]);

	return { searchResult, search, searchOptions, error };
};

const App = props => {
	const { searchResult, search, searchOptions, error } = useSearch(
		props._TOKEN
	);

	console.log(searchResult);

	return (
		<>
			<NavBar logged={props.logged} search={search} />
			{searchResult && (
				<SearchResultList
					searchResult={searchResult}
					search={search}
					searchOptions={searchOptions}
				/>
			)}
		</>
	);
};

export default App;
