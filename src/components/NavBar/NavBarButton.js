import React from 'react';
import Button from '@mui/material/Button';
import onClickUrl from '../../functions/functions';

const NavBarButton = (props) => {
	const {onClick, url, children} = props;
	return (
		<Button
			className="navBarButton"
			color="inherit"
			href='https://www.gob.mx/'
			onClick={onClickUrl(props.url ?? 'https://www.gob.mx/')}>
			{children}
		</Button>
	);
};

export default NavBarButton;
