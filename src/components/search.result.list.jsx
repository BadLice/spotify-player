import React from 'react';
import TrackSearchCard from './track.search.card';
import { Container } from 'react-bootstrap';
import PageSelector from './page.selector';
const SearchResultList = props => {
	return (
		<>
			<Container className='pt-2 pb-2'>
				{props.searchResult &&
					props.searchResult.tracks &&
					props.searchResult.tracks.items.map(track => (
						<TrackSearchCard key={track.id} track={track} />
					))}
				<PageSelector
					offset={props.offset}
					next={props.next}
					resultsPerPage={6}
					nextLink={props.searchResult.next}
				/>
			</Container>
		</>
	);
};

export default SearchResultList;
