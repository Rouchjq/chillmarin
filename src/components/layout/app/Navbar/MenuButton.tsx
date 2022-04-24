import { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FaUserPlus, FaSignOutAlt, FaCog } from 'react-icons/fa';

const Hamburguer = require('../../../../assets/icons/Nav-Menu.svg');

const ImgButton = styled.div`
	& > img {
		filter: opacity(0.4) drop-shadow(0 0 0 rgb(56, 40, 207));
	}
`;

export default function MenuButton() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: MouseEvent) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => setAnchorEl(null);
	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
				<Tooltip title="Account settings">
					{/* @ts-ignore */}
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
					>
						<ImgButton>
							<img src={Hamburguer.default} alt="Menu" />
						</ImgButton>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem>
					<Avatar /> Profile
				</MenuItem>
				<MenuItem>
					<Avatar /> My account
				</MenuItem>
				<Divider />
				<MenuItem>
					<ListItemIcon>
						<FaUserPlus />
					</ListItemIcon>
					Add another account
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<FaCog />
					</ListItemIcon>
					Settings
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<FaSignOutAlt />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
}