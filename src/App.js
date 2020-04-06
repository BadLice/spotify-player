import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/nav.bar';
import axios from 'axios';
import SearchResultList from './components/search.result.list';
import { Switch, Route, useHistory } from 'react-router-dom';

export const useSearch = (_TOKEN) => {
	const [searchResult, setResult] = useState(null);
	const [error, setError] = useState(null);
	const [searchOptions, search] = useState(null);

	useEffect(() => {
		if (searchOptions && _TOKEN) {
			let tempOptions = { ...searchOptions };
			let subscribed = true;
			let searchLink = 'https://api.spotify.com/v1/search?';

			if (tempOptions.type === 'none') {
				tempOptions.type = 'album,artist,playlist,track';
			}

			let options = Object.keys(tempOptions).reduce(
				(opt, key) => opt + '&' + key + '=' + tempOptions[key],
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
				.catch((err) => setError(err));

			return () => (subscribed = false);
		}
	}, [searchOptions, _TOKEN]);

	useEffect(() => {
		if (error) {
			console.error(error);
		}
	}, [error]);

	return { searchResult, search, searchOptions, error };
};

const App = (props) => {
	const { searchResult, search, searchOptions } = useSearch(props._TOKEN);

	const history = useHistory();

	return (
		<>
			<Switch>
				<Route path='/' exact>
					<NavBar
						logged={props.logged}
						search={search}
						history={history}
					/>
				</Route>

				<Route path='/search/:type/:query/:offset' exact>
					<NavBar
						logged={props.logged}
						search={search}
						history={history}
					/>
					<SearchResultList
						searchResult={searchResult}
						search={search}
						searchOptions={searchOptions}
						history={history}
					/>
				</Route>

				<Route>
					<p className='text-white'>NOT FOUND</p>
				</Route>
			</Switch>
		</>
	);
};

export default App;
