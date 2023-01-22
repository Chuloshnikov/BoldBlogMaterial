import React from "react";
import { Box, List, ListItem, ListItemButton,  ListItemText, ListItemIcon, Switch } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import NightlightIcon from '@mui/icons-material/Nightlight';



const SideBar = ( { mode, setMode }) => {
    return (
        <Box flex={1}  p={2} color="grey" bgcolor="#F0EAD6" sx={{ display: {xs: "none", sm: "block"}}}>
        <Box position="fixed">
            <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                    </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="pages">
                    <ListItemIcon>
                    <ArticleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                    </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#groups">
                    <ListItemIcon>
                    <PeopleAltIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                    </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#marketplace">
                    <ListItemIcon>
                        <LocalGroceryStoreIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Marketplace" />
                    </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#friends">
                    <ListItemIcon>
                        <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                    </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#profile">
                    <ListItemIcon>
                        <AccountBoxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                    </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#settings">
                    <ListItemIcon>
                        <SettingsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                    </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#">
                    <ListItemIcon>
                        <NightlightIcon/>
                    </ListItemIcon>
                    <Switch
                    onChange={e => setMode(mode === "light" ? "dark" : "light")}
                    />
                    </ListItemButton>
            </ListItem>
            </List>
            </Box>
        </Box>
    )
}

export default SideBar;