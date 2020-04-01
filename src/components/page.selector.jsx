import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

const PageSelector = props => {
	let active = props.offset + 1;
	let items = [];
	for (
		let number = props.offset + 1 - 2;
		number <= props.offset + 1 + 2;
		number++
	) {
		number > 0 &&
			items.push(
				<Pagination.Item
					key={number}
					active={number === active}
					onClick={() => console.log('ciao')}
				>
					{number}
				</Pagination.Item>
			);
	}

	return (
		<Pagination className='mx-auto' style={{ width: '200px' }}>
			<Pagination.Prev disabled={props.offset === 0} />
			{items}
			<Pagination.Next onClick={() => props.next(props.nextLink)} />
		</Pagination>
	);
};

export default PageSelector;
