import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/nav.bar';
import axios from 'axios';
import SearchResultList from './components/search.result.list';

export const useSearch = _TOKEN => {
	const [searchResult, setResult] = useState(null);
	const [error, setError] = useState(null);
	const [searchOptions, search] = useState(null);
	const [nextLink, next] = useState(null);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		if (nextLink && _TOKEN) {
			let subscribed = true;

			axios
				.get(nextLink + '&access_token=' + _TOKEN)
				.then(({ data }) => {
					if (subscribed) {
						setResult(data);
						setOffset(offset + 1);
					}
				})
				.catch(err => setError(err));

			return () => (subscribed = false);
		}
	}, [nextLink]);

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
						setOffset(0);
					}
				})
				.catch(err => setError(err));

			return () => (subscribed = false);
		}
	}, [searchOptions, _TOKEN]);

	return { searchResult, search, next, offset, error };
};

const App = props => {
	const { searchResult, search, next, offset, error } = useSearch(
		props._TOKEN
	);
	console.log(searchResult);

	return (
		<>
			<NavBar logged={props.logged} search={search} />
			{searchResult && (
				<SearchResultList
					searchResult={searchResult}
					next={next}
					offset={offset}
				/>
			)}
		</>
	);
};

export default App;
