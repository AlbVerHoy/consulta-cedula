import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const RenderParragraphs = (paragraphs, spacing) => {
	let spaces = [];
	for (var i = 0; i < spacing; i++) {
		spaces.push(<br />);
	}

	return paragraphs.map((paragraph, i) => (
		<Box key={i}>
			<Box key={i + 'par'} className="paragraph">{paragraph}</Box>
			{spaces}
		</Box>
	));
};

export default function TextArea(props) {
	const { children, title, spacing } = props;
	return (
		<Container maxWidth="lg">
			<Box sx={{ boxSizing: 'border-box' }}>
				<h2>
					<strong>{title}</strong>
				</h2>
				{RenderParragraphs(children, spacing)}
			</Box>
		</Container>
	);
}
