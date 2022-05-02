import React from 'react';

const RenderParragraphs = (paragraphs, spacing) => {
	let spaces = [];
	for (var i = 0; i < spacing; i++) {
		spaces.push(<br />);
	}

	return paragraphs.map((paragraph, i) => (
		<div key={i}>
			<p>{paragraph}</p>
			{spaces}
		</div>
	));
};

const TextArea = (props) => {
	const { children, title, spacing } = props;
	return (
		<div>
			<div className="textArea">
				<h2>
					<strong>{title}</strong>
				</h2>
				<p />
				{RenderParragraphs(children, spacing)}
			</div>
		</div>
	);
};

export default TextArea;
