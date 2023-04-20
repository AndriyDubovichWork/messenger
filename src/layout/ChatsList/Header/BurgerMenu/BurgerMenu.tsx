import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from '@mui/material';
import style from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          width: 320,
          maxWidth: '100%',
          backdropFilter: 'blur(10px)',
        }}
      >
        <MenuItem
          sx={{
            backgroundColor: 'rgba(0,0,0,0)',
          }}
        >
          <ListItemIcon>
            <MenuIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
        </MenuItem>
        <MenuItem
          sx={{
            // backgroundColor: 'rgba(0,0,0,0)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <ListItemIcon>
            <MenuIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
        </MenuItem>
        <MenuItem
          sx={{
            // backgroundColor: 'rgba(0,0,0,0)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <ListItemIcon>
            <MenuIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default BurgerMenu;
