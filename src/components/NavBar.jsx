import { React, useState } from "react";
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


const StyledToolBar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

});

const Search = styled("div") (({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%",
}));

const Icons = styled(Box) (({theme}) => ({
    display: "none",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    }
}));

const UserBox = styled(Box) (({theme}) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }
}));

const NavBar = () => {

    const[open, setOpen] = useState(false);


    return (
        <AppBar color="primary" position="sticky">
            <StyledToolBar>
                <Typography color="#EB9900" variant="h6" sx={{display: {xs: "none", sm:"block"}}}>BOLDBLOG</Typography>
                <FormatBoldIcon color="secondary" sx={{display: {xs: "block", sm:"none"}}}/>
                <Search>
                    <InputBase placeholder="search..."/>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon color="white" />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon color="white" />
                    </Badge>
                    <Avatar onClick={e => setOpen(true)} sx={{width: 30, height: 30}} src="https://i.ytimg.com/vi/Rg0WXEmLSLU/maxresdefault.jpg"/>
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                <Avatar sx={{width: 30, height: 30}} src="https://i.ytimg.com/vi/Rg0WXEmLSLU/maxresdefault.jpg"/>
                    <Typography variant="span">
                        Bill
                    </Typography>
                </UserBox>
            </StyledToolBar>
            <Menu 
            bgcolor="otherColor"
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}

export default NavBar;