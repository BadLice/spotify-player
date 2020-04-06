import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { useEffect } from 'react';
import { useRef } from 'react';

const SearchAccordion = (props) => {
	const arrowRef = useRef();
	const [show, setShow] = useState(true);
	const [toggle, setToggle] = useState(true);
	const [rotate, setRotate] = useState(false);

	const handleClick = () => {
		setShow(!show);
		setRotate(true);
	};

	const rotatingDone = () => {
		setToggle(show);
		setRotate(false);
	};

	useEffect(() => {
		let arrowDom = arrowRef.current;
		arrowDom.addEventListener('animationend', rotatingDone);
		return () => {
			arrowDom.removeEventListener('animationend', rotatingDone);
		};
	}, [show]);

	return (
		<Accordion defaultActiveKey='0' className='mb-2 '>
			<Card
				className='mb-2 text-light'
				style={{ borderRadius: '0px', border: '0' }}
			>
				<Accordion.Toggle
					as={Card.Header}
					eventKey='0'
					className='bg-dark-3 border-bottom border-secondary mb-0 noselect pointer'
					onClick={() => handleClick()}
				>
					<span>{props.toggle}</span>
					<span
						className={
							'mt-1 float-right ' +
							(rotate
								? toggle
									? ' rotate-back'
									: ' rotate'
								: !toggle || ' rotated')
						}
						ref={arrowRef}
						style={{ fontSize: '11px' }}
					>
						<>&#9654;</>
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
