import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import Marquee from './marquee';
import PlayButton from './track.play.button.card';

const PlaylistSearchCard = (props) => {
	const [imageLoading, setImageLoading] = useState(true);
	const { playlist } = props;

	const handleImageLoaded = () => {
		setImageLoading(false);
	};

	const handleRedirectUser = (id) => {
		props.history.push('/user/' + id);
	};

	const handleRedirectPlaylist = (id) => {
		props.history.push('/playlist/' + id);
	};

	const decodeHtml = (html) => {
		var txt = document.createElement('textarea');
		txt.innerHTML = html;
		return txt.value;
	};

	if (playlist.type !== 'playlist') return null;

	return (
		<>
			<Card
				className='d-inline-block m-2 w-30 h-25 border-success rounded'
				bg='dark'
				text='success'
			>
				{playlist.images.length !== 0 ? (
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
								src={playlist.images[0].url}
								onLoad={handleImageLoaded}
								className='profile-pic '
							/>
						</div>
					</>
				) : (
					<div
						className='border border-secondary image-cropper rounded-0'
						style={{
							backgroundColor:
								playlist.primary_color || 'transparent',
						}}
					></div>
				)}

				<Card.Body>
					<Marquee
						className='text-center font-weight-bold span-link noselect'
						style={{ fontSize: '20px' }}
					>
						<p onClick={() => handleRedirectPlaylist(playlist.id)}>
							{playlist.name}
						</p>
					</Marquee>

					<Marquee className='text-white-50 mb-1'>
						<p>
							{decodeHtml(playlist.description) || (
								<span className='noselect'>&nbsp;</span>
							)}
						</p>
					</Marquee>

					<Marquee className='text-primary mb-1'>
						<p>
							<span
								className={
									'noselect' +
									(playlist.owner.type === 'user'
										? ' span-link'
										: '')
								}
								onClick={
									playlist.owner.type === 'user'
										? () =>
												handleRedirectUser(
													playlist.owner.id
												)
										: null
								}
							>
								{decodeHtml(playlist.owner.display_name)}
							</span>
						</p>
					</Marquee>

					<Marquee className='noselect text-capitalize text-warning mb-1'>
						<p>
							{playlist.tracks.total +
								(Number(playlist.tracks.total) === 1
									? ' track'
									: ' tracks')}
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

export default PlaylistSearchCard;
