import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ScrollText from 'react-scroll-text';

const TrackSearchCard = props => {
	if (props.track.type !== 'track') return null;

	const parse_duration = ms => {
		let s = ms / 1000;
		let m = Math.floor(s / 60);
		s = s - m * 60;

		m = m.toFixed(0);
		s = s.toFixed(0);

		return m + ':' + s;
	};

	const parse_artists = artists => {
		let text = artists
			.reduce((acc, artist) => acc + artist.name + ', ', '')
			.slice(0, -2);

		if (text.length > 46) {
			text = text.slice(0, -(text.length - 46 + 3)) + '...';
		}

		return text;
	};

	return (
		<>
			<Card
				className='d-inline-block m-2 w-30 h-25 border-success rounded'
				bg='dark'
				text='success'
			>
				<Card.Img variant='top' src={props.track.album.images[1].url} />
				<Card.Body>
					<Card.Title>
						<ScrollText>{props.track.name}</ScrollText>
					</Card.Title>
					{/* <Card.Text> */}
					<span className='text-info'>
						{parse_duration(props.track.duration_ms)}
					</span>
					<br />
					<ScrollText className='text-white-50'>
						{props.track.artists
							.reduce(
								(acc, artist) => acc + artist.name + ', ',
								''
							)
							.slice(0, -2)}
					</ScrollText>
					{/* </Card.Text> */}
					<Button variant='primary'>Go somewhere</Button>
				</Card.Body>
			</Card>
		</>
	);
};

export default TrackSearchCard;
