import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import Marquee from './marquee';

const ArtistSearchCard = (props) => {
	const [imageLoading, setImageLoading] = useState(true);
	const { artist } = props;

	const handleImageLoaded = () => {
		setImageLoading(false);
	};

	const handleRedirectArtist = (id) => {
		props.history.push('/artist/' + id);
	};

	if (artist.type !== 'artist') return null;

	return (
		<>
			<Card
				className='d-inline-block m-2 w-30 h-25 border-success rounded'
				bg='dark'
				text='success'
			>
				{artist.images.length >= 2 ? (
					<>
						<center>
							<Spinner
								animation='grow'
								variant='light'
								style={{
									margin: '41%',
									display: !imageLoading ? 'none' : 'block',
								}}
							/>
						</center>
						<div
							className={
								'image-cropper ' +
								(imageLoading ? 'd-none' : 'd-block')
							}
						>
							<Card.Img
								variant='top'
								src={artist.images[1].url}
								onLoad={handleImageLoaded}
								className='profile-pic '
							/>
						</div>
					</>
				) : (
					<div className='border border-secondary rounded-circle image-cropper bg-dark'></div>
				)}

				<Card.Body>
					<Marquee
						className='text-center font-weight-bold span-link noselect'
						style={{ fontSize: '20px' }}
					>
						<p onClick={() => handleRedirectArtist(artist.id)}>
							{artist.name}
						</p>
					</Marquee>
				</Card.Body>
			</Card>
		</>
	);
};

export default ArtistSearchCard;
