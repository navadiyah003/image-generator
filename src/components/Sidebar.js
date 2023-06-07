import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from "react";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Typography } from '@material-ui/core';
import { textAlign } from '@mui/system';
import { NavigateBefore } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import NoteAltTwoToneIcon from '@mui/icons-material/NoteAltTwoTone';

const useStyles = makeStyles((theme) => ({
    listItemRoot: {
        borderRadius: '10px',
        marginTop: '8px',
        "&.Mui-selected": {
            backgroundColor: '#172b51',
        },
        '&:hover': {
            backgroundColor: '#101b34',
        }
    },
}));

const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(11)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        backgroundColor: '#0B0B15',
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidebar() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter();
    const { data: session } = useSession();
    const { user } = session ? session : '';

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleChange = () => {
        setOpen(!open);
    }

    const handleNavigation = (index, obj) => {
        router.push(obj.navLink);
        setSelectedIndex(index);

    }

    const sidebarDetails = [
        {
            label: 'Home',
            icon: <HomeTwoToneIcon sx={{ color: "#7fc1d4" }} />,
            navLink: '/home',
            divider: false,
            action: handleNavigation
        },
        {
            label: 'Community Showcase',
            icon: <Groups2OutlinedIcon sx={{ color: "#7fc1d4" }} />,
            navLink: '/showcase',
            divider: false,
            action: handleNavigation
        },
    ]

    return (
        <Drawer
            PaperProps={{
                sx: {
                    backgroundColor: '#0B0B15',
                    color: "#A93953",
                    width: open ? '280px !important' : ''
                }
            }}
            variant="permanent"
            open={open}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: "100%", p: 1 }}
            >
                <Box>
                    <DrawerHeader>
                        <Box sx={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }} onClick={handleChange}>
                            <img src="/static/galleria.png" width="30" height="30" alt="Galleria.ai"
                                style={{ borderRadius: '5px', marginRight: open ? '10px' : 0 }} />
                            <p style={{ fontSize: '18px', display: open ? 'block' : 'none' }}>
                                Galleria.ai
                            </p>
                        </Box>
                    </DrawerHeader>
                    <List sx={{ padding: '12px' }}>
                        {sidebarDetails.map((text, index) => (
                            <>
                                <ListItem key={index} selected={selectedIndex === index} sx={{ display: 'block', color: 'white' }} divider={text.divider} classes={{ root: classes.listItemRoot }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 35,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                            width: '100%'
                                        }}
                                        onClick={() => handleNavigation(index, text)}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 1 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {text.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={text.label} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                            </>
                        ))}
                    </List>
                </Box>
                <Box>
                    {user?.image && (
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Image
                                src={user.image}
                                alt="user"
                                width={38}
                                height={38}
                                style={{ borderRadius: '50%' }}
                            />
                        </Box>
                    )}
                </Box>
            </Box>
        </Drawer>
    )
}
