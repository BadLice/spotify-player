import React, { useState, useEffect } from 'react';
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	Dropdown,
} from 'react-bootstrap';
import LoginButton from './login.button';
import { useParams } from 'react-router-dom';

const NavBarC = (props) => {
	const [searchType, setSeatchType] = useState({
		label: 'No filter',
		value: 'none',
	});

	const { type, query, offset } = useParams();
	const { search, history } = props;

	useEffect(() => {
		if (type && query && offset) {
			search({
				q: query,
				type: type,
				limit: 9,
				offset: offset * 9,
			});
		}
	}, [type, query, offset, search]);

	const handleSearch = (e) => {
		e.preventDefault();

		if (e.target.searchQuery.value.trim().length !== 0) {
			history.push(
				'/search/' +
					searchType.value +
					'/' +
					e.target.searchQuery.value.trim().replace(' ', '+') +
					'/' +
					0
			);
		}
	};

	const handleChangeSearchType = (type) => {
		setSeatchType(JSON.parse(type));
	};

	return (
		<Navbar bg='dark' expand='lg'>
			<Navbar.Brand>
				<Navbar.Brand className='text-white'>
					<span className='text-success border border-success rounded-pill p-2'>
						Spotify
					</span>
					<span>Player</span>
				</Navbar.Brand>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto' />
				<Form inline onSubmit={handleSearch}>
					{props.logged ? (
						<>
							<Dropdown
								name='searchType'
								onSelect={handleChangeSearchType}
								className='mr-2'
							>
								<Dropdown.Toggle
									variant={
										searchType.value === 'none'
											? 'dark'
											: 'success'
									}
									id='dropdown-basic'
								>
									{searchType.label}
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item
										eventKey={JSON.stringify({
											label: 'No filter',
											value: 'none',
										})}
									>
										No filter
									</Dropdown.Item>
									<Dropdown.Item
										eventKey={JSON.stringify({
											label: 'Track',
											value: 'track',
										})}
									>
										Track
									</Dropdown.Item>
									<Dropdown.Item
										eventKey={JSON.stringify({
											label: 'Artist',
											value: 'artist',
										})}
									>
										Artist
									</Dropdown.Item>
									<Dropdown.Item
										eventKey={JSON.stringify({
											label: 'Album',
											value: 'album',
										})}
									>
										Album
									</Dropdown.Item>
									<Dropdown.Item
										eventKey={JSON.stringify({
											label: 'Playlist',
											value: 'playlist',
										})}
									>
										Playlist
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<FormControl
								type='text'
								placeholder='Search'
								className='mr-sm-2'
								name='searchQuery'
							/>
							<Button type='submit'>Search</Button>
						</>
					) : (
						<LoginButton />
					)}
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBarC;
