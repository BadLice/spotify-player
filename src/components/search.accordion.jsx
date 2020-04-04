import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
const SearchAccordion = (props) => {
	const [show, setShow] = useState(true);
	return (
		<Accordion defaultActiveKey='0' className='mb-2 '>
			<Card
				className='mb-2 text-light'
				style={{ borderRadius: '0px', border: '0' }}
			>
				<Accordion.Toggle
					as={Card.Header}
					eventKey='0'
					className='bg-dark-3 border-bottom border-secondary mb-0 noselect'
					onClick={() => setShow(!show)}
				>
					<span>{props.toggle}</span>
					<span className='float-right pointer'>
						{show ? <>&#9661;</> : <>&#9654;</>}
					</span>
				</Accordion.Toggle>
				<Accordion.Collapse eventKey='0'>
					<Card.Body className='bg-transparent  bg-dark-2 '>
						{props.children}
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default SearchAccordion;
