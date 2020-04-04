import React, { useState } from 'react';
import TrackSearchCard from './track.search.card';
import { Container, Accordion, Card, Toast } from 'react-bootstrap';
import PageSelector from './page.selector';
import SearchAccordion from './search.accordion';
import ArtistSearchCard from './artist.search.card';

const SearchResultList = (props) => {
	const [playerNotSupportedNotifyShow, notifyPlayerNotSupported] = useState(
		false
	);

	return (
		<>
			<Container className='pt-2 pb-2'>
				{props.searchResult && props.searchResult.tracks && (
					<SearchAccordion toggle='Tracks'>
						{props.searchResult.tracks.items.map((track) => (
							<TrackSearchCard
								key={track.id}
								track={track}
								notifyPlayerNotSupported={
									notifyPlayerNotSupported
								}
								history={props.history}
							/>
						))}
					</SearchAccordion>
				)}
				{props.searchResult && props.searchResult.artists && (
					<SearchAccordion toggle='Artists'>
						{props.searchResult.artists.items.map((artist) => (
							<ArtistSearchCard
								key={artist.id}
								artist={artist}
								history={props.history}
							/>
						))}
					</SearchAccordion>
				)}

				<PageSelector
					history={props.history}
					offset={props.offset}
					next={props.next}
					resultsPerPage={6}
					search={props.search}
					searchOptions={props.searchOptions}
				/>
			</Container>
			<div
				style={{
					position: 'fixed',
					bottom: 10,
					right: 10,
				}}
			>
				<Toast
					animation
					autohide
					delay={3000}
					show={playerNotSupportedNotifyShow}
					onClose={() => notifyPlayerNotSupported(false)}
				>
					<Toast.Header className='bg-danger text-light'>
						<strong className='mr-auto'>Error</strong>
						<small>Just now</small>
					</Toast.Header>
					<Toast.Body>
						Spotify player is not supported yet by Spotify API.
					</Toast.Body>
				</Toast>
			</div>
		</>
	);
};

export default SearchResultList;
