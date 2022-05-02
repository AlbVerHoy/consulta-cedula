import React from 'react';
import Button from '@mui/material/Button';

const openInNewTab = (url) => {
	const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
	if (newWindow) newWindow.opener = null;
};

const onClickUrl = (url) => {
	return () => openInNewTab(url);
};

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
