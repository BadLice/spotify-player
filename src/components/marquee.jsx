import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

//tested only for p elements. dosent work sith span. don't know if it works for other elements.

const Marquee = (props) => {
	const test = useRef();
	const [isTooLong, setIsTooLong] = useState(false);

	const [customStyle, setCustomStyle] = useState({
		...props.style,
		whiteSpace: 'nowrap',
		overflow:
			!props.children.style ||
			!props.children.style.overflow ||
			props.children.style.overflow === 'visible'
				? 'hidden'
				: props.children.style.overflow,
	});

	const isOverflowing = (el) => {
		var res =
			el.clientWidth < el.scrollWidth ||
			el.clientHeight < el.scrollHeight;

		return res;
	};

	useEffect(() => {
		setIsTooLong(isOverflowing(test.current));

		if (isTooLong) {
			//reset overflow visible so text can be fully readable
			setCustomStyle((c) => ({ ...c, overflow: 'visible' }));
		}
	}, [isTooLong]);

	let children = React.cloneElement(props.children, {
		ref: test,
		style: customStyle,
		className: props.className,
	});

	if (props.children.type !== 'p')
		console.error(
			'the children of Marquee component must be a <p> element'
		);

	if (isTooLong) return <marquee>{children}</marquee>;
	else return children;
};

export default Marquee;
