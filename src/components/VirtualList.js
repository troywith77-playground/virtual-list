import * as React from 'react';

const N = 100;
const rowHeight = 50;
const containerHeight = 500;
const totalHeight = N * rowHeight;

export default function VirtualList() {
	const [scrollTop, setScrollTop] = React.useState(0);

	const items = [];

	const startIndex = Math.floor(scrollTop / rowHeight);
	const endIndex = Math.min(
		N - 1,
		startIndex + Math.ceil(containerHeight / rowHeight)
	);

	for (let i = startIndex; i <= endIndex; i++) {
		items.push(
			<li key={i} style={{ backgroundColor: i % 2 ? '#eee' : '' }}>
				Row Item {i + 1}
			</li>
		);
	}

	function handleScroll(e) {
		setScrollTop(e.target.scrollTop);
	}

	return (
		<div
			style={{ height: containerHeight, overflowY: 'scroll' }}
			onScroll={handleScroll}
		>
			<ol style={{ height: totalHeight, paddingTop: startIndex * rowHeight }}>
				{items}
			</ol>
		</div>
	);
}
