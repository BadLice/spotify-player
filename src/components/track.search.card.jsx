import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import PlayButton from './track.play.button.card';
import Marquee from './marquee';

const TrackSearchCard = (props) => {
	const [imageLoading, setImageLoading] = useState(true);

	const parse_duration = (ms) => {
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

	const handleRedirectArtist = (id) => {
		props.history.push('/artist/' + id);
	};

	const handleRedirectAlbum = (id) => {
		props.history.push('/album/' + id);
	};

	if (props.track.type !== 'track') return null;

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
							display: !imageLoading ? 'none' : 'block',
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
					<Marquee
						style={{ fontSize: '20px' }}
						className='font-weight-bold'
					>
						<p>{props.track.name}</p>
					</Marquee>
					<span className='text-info'>
						{parse_duration(props.track.duration_ms)}
					</span>
					<br />
					<Marquee className='text-white-50'>
						<p>
							{props.track.artists.map((artist, i) => (
								<span key={artist.id}>
									<span
										className='span-link'
										onClick={() =>
											handleRedirectArtist(artist.id)
										}
									>
										{artist.name}
									</span>
									{i !== props.track.artists.length - 1
										? ', '
										: ''}
								</span>
							))}
						</p>
					</Marquee>
					<Marquee className='text-warning'>
						<p>
							<span
								className='span-link'
								onClick={() =>
									handleRedirectAlbum(props.track.album.id)
								}
							>
								{props.track.album.name}
							</span>
						</p>
					</Marquee>
					<PlayButton
						notifyPlayerNotSupported={
							props.notifyPlayerNotSupported
						}
					/>
				</Card.Body>
			</Card>
		</>
	);
};

export default TrackSearchCard;
