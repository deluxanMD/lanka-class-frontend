import React, { useState } from 'react';

// Material UI
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  IconButton,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { makeStyles } from '@mui/styles';

// Assets
import ProfilePic from '../assets/images/profile_pic.jpg';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginLeft: theme.spacing(3),
  },
  appBarMenu: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    cursor: 'pointer',
    color: '#bdbdbd',
  },
}));

const Navbar = ({ activeMenu, handleActiveMenu }) => {
  const classes = useStyles();
  const menus = ['Calendar', 'Classroom', 'Syllabus', 'Grade'];

  const renderMenu = () => {
    return menus.map((menu, index) => {
      return (
        <Typography
          variant='body'
          component='span'
          className={classes.appBarMenu}
          style={{ color: activeMenu === index && '#3f50b5' }}
          onClick={() => handleActiveMenu(index)}
        >
          {menu}
        </Typography>
      );
    });
  };

  return (
    <AppBar color='white' position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6'>Lanka Class</Typography>
        <div className='menu'>{renderMenu()}</div>
        <div className={classes.icons}>
          <IconButton
            size='large'
            aria-label='show unread notifications'
            color='inherit'
          >
            <Badge badgeContent={4} color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar
            alt='Deluxan Mariathasan'
            src={ProfilePic}
            className={classes.avatar}
            sx={{ width: 30, height: 30 }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
