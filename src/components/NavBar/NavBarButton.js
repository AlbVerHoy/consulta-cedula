import React from 'react';
import Button from '@mui/material/Button';
import onClickUrl from '../../functions/functions';

const NavBarButton = (props) => {
	return (
		<Button
			className="navBarButton"
			color="inherit"
			onClick={onClickUrl(props.url ?? 'https://www.gob.mx/')}>
			{props.children}
		</Button>
	);
};

export default NavBarButton;
