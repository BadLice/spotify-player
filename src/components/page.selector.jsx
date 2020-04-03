import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useParams } from 'react-router-dom';
const PageSelector = props => {
	const { type, query } = useParams();
	const handleSearch = offset => {
		let opt = { ...props.searchOptions };
		opt.offset = opt.limit * offset;
		props.history.push('/search/' + type + '/' + query + '/' + offset);
	};

	if (!props.searchOptions) {
		return <></>;
	}
	let offset = props.searchOptions.offset / props.searchOptions.limit;

	let active = offset + 1;
	let items = [];
	for (let number = offset + 1 - 2; number <= offset + 1 + 2; number++) {
		number > 0
			? items.push(
					<Pagination.Item
						key={number}
						active={number === active}
						onClick={() => handleSearch(number - 1)}
					>
						{number}
					</Pagination.Item>
			  )
			: items.push(
					<Pagination.Item key={number} disabled>
						&nbsp;
					</Pagination.Item>
			  );
	}

	return (
		<Pagination className='mx-auto' style={{ width: '200px' }}>
			<Pagination.Prev
				disabled={offset === 0}
				onClick={() => handleSearch(active - 2)}
			/>
			{items}
			<Pagination.Next onClick={() => handleSearch(active)} />
		</Pagination>
	);
};

export default PageSelector;
