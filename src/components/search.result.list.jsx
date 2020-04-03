import React from 'react';
import TrackSearchCard from './track.search.card';
import { Container, Accordion, Card, Button } from 'react-bootstrap';
import PageSelector from './page.selector';
const SearchResultList = props => {
	return (
		<>
			<Container className='pt-2 pb-2'>
				<Accordion
					defaultActiveKey='0'
					className='mb-2 border-0 rounded-lg'
				>
					<Card className='mb-2 border-0 text-light rounded-lg'>
						<Accordion.Toggle
							as={Card.Header}
							eventKey='0'
							className='bg-secondary'
						>
							Tracks
						</Accordion.Toggle>
						<Accordion.Collapse eventKey='0' className='border-0'>
							<Card.Body className='bg-transparent border-0 bg-dark-2'>
								{props.searchResult &&
									props.searchResult.tracks &&
									props.searchResult.tracks.items.map(
										track => (
											<TrackSearchCard
												key={track.id}
												track={track}
											/>
										)
									)}
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>

				{/* <Accordion
					defaultActiveKey='0'
					className='mb-2 border-0 rounded-lg'
				>
					<Card className='mb-2 border-0 text-light rounded-lg'>
						<Accordion.Toggle
							as={Card.Header}
							eventKey='0'
							className='bg-secondary'
						>
							Albums
						</Accordion.Toggle>
						<Accordion.Collapse eventKey='0' className='border-0'>
							<Card.Body className='bg-transparent border-0 bg-dark-2'>
								{props.searchResult &&
									props.searchResult.tracks &&
									props.searchResult.tracks.items.map(
										track => (
											<TrackSearchCard
												key={track.id}
												track={track}
											/>
										)
									)}
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion> */}

				<PageSelector
					history={props.history}
					offset={props.offset}
					next={props.next}
					resultsPerPage={6}
					search={props.search}
					searchOptions={props.searchOptions}
				/>
			</Container>
		</>
	);
};

export default SearchResultList;
