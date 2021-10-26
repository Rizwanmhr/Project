import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import ListIcon from '@material-ui/icons/List';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import CollectionsIcon from '@material-ui/icons/Collections';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
const LeftbarData = [
    
        {
            title:"Home Page",
            path:'/',
            icon:<HomeIcon />,
        },
        
        {
            title:"Friends",
            path:'/friends',
            icon:<PeopleIcon />,
        },
        
        {
            title:"Lists",
            path:'/lists',
            icon:<ListIcon />,
        },
        
        {
            title:"Camera",
            path:'/camera',
            icon:<AddAPhotoIcon />,
        },
        
        {
            title:"Videos",
            path:'/videos',
            icon:<VideoCallIcon />,
        },
        
        {
            title:"Apps",
            path:'/apps',
            icon:<AppsIcon />,
        },
        
        {
            title:"Collections",
            path:'/collections',
            icon:<CollectionsIcon />,
        },
        
        {
            title:"Market Place",
            path:'/marketplace',
            icon:<MarkunreadMailboxIcon />,
        },
        
        {
            title:"Settings",
            path:'/settings',
            icon:<SettingsIcon />,
        },
        
        {
            title:"Logout",
            path:'/logout',
            icon:<LockIcon />,
        },
    
];
export default LeftbarData;