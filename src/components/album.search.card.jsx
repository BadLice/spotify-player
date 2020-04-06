import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import Marquee from './marquee';
import PlayButton from './track.play.button.card';

const AlbumSearchCard = (props) => {
	const [imageLoading, setImageLoading] = useState(true);
	const { album } = props;

	const handleImageLoaded = () => {
		setImageLoading(false);
	};

	const handleRedirectArtist = (id) => {
		props.history.push('/artist/' + id);
	};

	const handleRedirectAlbum = (id) => {
		props.history.push('/album/' + id);
	};

	const parseDate = (date) => {
		const dtf = new Intl.DateTimeFormat('it', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		});
		const [
			{ value: da },
			,
			{ value: mo },
			,
			{ value: ye },
		] = dtf.formatToParts(date);

		let res = ye;

		// if (mo) res = mo + '/' + res;
		// if (da) res = da + '/' + res;

		return res;
	};

	if (album.type !== 'album') return null;

	return (
		<>
			<Card
				className='d-inline-block m-2 w-30 h-25 border-success rounded'
				bg='dark'
				text='success'
			>
				{album.images.length >= 2 ? (
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
								'image-cropper rounded-0 ' +
								(imageLoading ? 'd-none' : 'd-block')
							}
						>
							<Card.Img
								variant='top'
								src={album.images[1].url}
								onLoad={handleImageLoaded}
								className='profile-pic '
							/>
						</div>
					</>
				) : (
					<div className='border border-secondary image-cropper bg-dark rounded-0'></div>
				)}

				<Card.Body>
					<Marquee
						className='text-center font-weight-bold span-link noselect'
						style={{ fontSize: '20px' }}
					>
						<p onClick={() => handleRedirectAlbum(album.id)}>
							{album.name}
						</p>
					</Marquee>

					<Marquee className='text-white-50 mb-1'>
						<p>
							{props.album.artists.map((artist, i) => (
								<span key={artist.id}>
									<span
										className='span-link'
										onClick={() =>
											handleRedirectArtist(artist.id)
										}
									>
										{artist.name}
									</span>
									{i !== props.album.artists.length - 1
										? ', '
										: ''}
								</span>
							))}
						</p>
					</Marquee>

					<Marquee className='noselect text-capitalize text-warning mb-1'>
						<p>
							{Number(album.total_tracks) === 1
								? 'Single'
								: album.total_tracks + ' tracks'}
						</p>
					</Marquee>

					<Marquee className='noselect text-capitalize text-primary mb-1'>
						<p>{parseDate(new Date(album.release_date))}</p>
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

export default AlbumSearchCard;
