import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import ScrollText from 'react-scroll-text';
import PlayButton from './track.play.button.card';

const TrackSearchCard = props => {
	const [imageLoading, setImageLoading] = useState(true);
	if (props.track.type !== 'track') return null;

	const parse_duration = ms => {
		let s = ms / 1000;
		let m = Math.floor(s / 60);
		s = s - m * 60;

		m = m.toFixed(0);
		s = s.toFixed(0);

		return m + ':' + s;
	};

	const handleImageLoaded = () => {
		setImageLoading(false);
	};

	return (
		<>
			<Card
				className='d-inline-block m-2 w-30 h-25 border-success rounded'
				bg='dark'
				text='success'
			>
				<center>
					<Spinner
						animation='grow'
						variant='light'
						style={{
							margin: props.track.album.images[1].width / 2,
							display: !imageLoading ? 'none' : 'block'
						}}
					/>
				</center>
				<Card.Img
					variant='top'
					src={props.track.album.images[1].url}
					onLoad={handleImageLoaded}
					className={imageLoading ? 'd-none' : 'd-block'}
				/>

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
					{/* <Button variant='primary'>Go somewhere</Button> */}
					<PlayButton />
				</Card.Body>
			</Card>
		</>
	);
};

export default TrackSearchCard;
