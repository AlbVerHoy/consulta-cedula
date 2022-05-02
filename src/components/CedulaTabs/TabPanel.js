import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const styles = {
	p: 3,
	borderLeft: 1,
	borderRight: 1,
	borderColor: 'divider',
};

const TabPanel = (props) => {
	const { title ,children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={styles}>
					<Typography>
						<div style={{ marginLeft: '10px' }}>
							<br />
							<h3>{title}</h3>
							<hr />
							{children}
						</div>
					</Typography>
				</Box>
			)}
		</div>
	);
};

export default TabPanel;
