import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search'
import CachedIcon from '@mui/icons-material/Cached';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@mui/icons-material/Launch';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CallMadeIcon from '@mui/icons-material/CallMade';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { styled } from '@mui/system';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #94a3b8;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  padding: 10px 18px;
  margin: 2px;
  border: none;
  border-radius: 7px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  &:hover {
    background-color:rgb(30 41 59/0.8)
  }

  &:focus {
    background-color:rgb(30 41 59/0.8);
    color: white
  }

  &.${tabUnstyledClasses.selected} {
    // background-color: #fff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 400px;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  align-content: space-between;
  // box-shadow: 0px 4px 8px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);


const useStyles = makeStyles((theme) => ({
  container: {
    width: '68%',
    marginLeft: '18%'
  },
  inputSearch: {
    backgroundColor: '#0c0f18',
    color: 'red',
    padding: '10px 20px',
    width: '100%',
    margin: '30px 0',
    borderRadius: '30px',
    border: 'none'
  },
  headerBlock: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center'
  },
  card: {
    background: 'linear-gradient(to bottom, #1c6753, #0a0b15)',
    borderRadius: '25px 25px 0 0',
    height: '400px',
    position: 'relative'
  },
  profile: {
    position: 'absolute',
    bottom: '50px',
    left: '50px',
    width: '100%'
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileImg: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    marginRight: '15px'
  },
  profileHeading: {
    margin: 0,
    fontSize: '24px'
  },
  profileText: {
    margin: 0,
    fontWeight: 500
  },
  button: {
    backgroundColor: '#047857',
    borderRadius: '30px',
    padding: '7px 25px',
    marginLeft: 'auto',
    marginRight: '100px',
    textTransform: 'capitalize',
    fontSize: '16px'
  },
  tab: {
    display: 'flex',
    gap: '10px',
    marginTop: '50px',
    justifyContent: 'space-between'
  },
  chip: {
    fontSize: '16px',
    border: 'none',
    padding: '20px 10px',
    borderRadius: '20px',
    color: '#919fb4',
    fontWeight: 500,
    cursor: 'pointer',
    '&:hover': {
      color: 'white',
      backgroundColor: 'rgb(30 41 59/0.8)'
    },
    '&:active': {
      color: 'white',
      backgroundColor: 'rgb(30 41 59/0.8)'
    }
  },
  chipActive: {
    fontSize: '16px',
    backgroundColor: 'rgb(30 41 59/0.8)',
    padding: '20px 10px',
    borderRadius: '20px',
    fontWeight: 500
  },
  hotIcon: {
    color: 'red'
  },
  group: {
    display: 'flex',
    gap: '10px'
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    gap: '10px',
    cursor: 'pointer',
    marginRight: '20px'
  },
  nav: {
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  bottom: {
    display: 'flex',
    alignItems: 'center',
  },
  emoji: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    padding: 0
  },
  footer: {
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '50px'
  },
  discord: {
    textAlign: 'center',
    display: 'block',
    fontSize: '20px',
    color: '#63b3ed',
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}));

function home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.headerBlock}>
          <TextField className={classes.inputSearch} style={{ color: 'red' }} placeholder='Search prompts or users' InputProps={{
            disableUnderline: true,
            endAdornment: (<InputAdornment position="start"><SearchIcon style={{ color: "#393c45" }} /></InputAdornment>)
          }} />
          <CachedIcon style={{ fontSize: '25px' }} />
          <NorthWestIcon />
        </div>
        <div className={classes.card}>
          <div className={classes.profile}>
            <div className={classes.heading}>
              <img src='https://images.unsplash.com/photo-1549388604-817d15aa0110' className={classes.profileImg} />
              <div>
                <h2 className={classes.profileHeading}>Profile Name</h2>
                <p className={classes.profileText}>0 Following</p>
              </div>
              <Button variant="text" className={classes.button} endIcon={<LaunchIcon />}>Purchase Plan</Button>
            </div>
          </div>
        </div>
        <div className={classes.tab}>
          <div className={classes.group}>
            <TabsUnstyled defaultValue={0}>
              <TabsList>
                <Tab><WhatshotIcon style={{ color: "#ef4444", width: '18px', marginRight: '5' }} /> Hot</Tab>
                <Tab><ElectricBoltIcon style={{ width: '18px', color:'#eab308', marginRight: '5' }} /> New</Tab>
                <Tab><WatchLaterOutlinedIcon style={{ width: '18px', color: '#4299e1', marginRight: '5' }} /> Oldest</Tab>
                <Tab><StarBorderOutlinedIcon style={{ width: '18px', color: '#f97316', marginRight: '3' }} /> Top</Tab>
              </TabsList>
              <TabPanel value={0}></TabPanel>
              <TabPanel value={1}></TabPanel>
              <TabPanel value={2}></TabPanel>
            </TabsUnstyled>
            {/* <Chip label="Hot" className={classes.chipActive} avatar={<WhatshotIcon style={{ color: "#ef4444", width: '18px' }} />} />
            <Chip label="New" variant='outlined' className={classes.chip} avatar={<ElectricBoltIcon style={{ width: '18px' }} />} />
            <Chip label="Oldest" variant='outlined' className={classes.chip} avatar={<WatchLaterOutlinedIcon style={{ width: '18px' }} />} />
            <Chip label="Top" variant='outlined' className={classes.chip} avatar={<StarBorderOutlinedIcon style={{ width: '18px' }} />} /> */}
          </div>
          <div className={classes.bottom}>
            <ul className={classes.list}>
              <li className={classes.nav}>All</li>
              <li className={classes.nav}>Grid</li>
              <li className={classes.nav}>Upscales</li>
            </ul>
            <button className={classes.emoji}>
              😶
            </button>
            <button className={classes.emoji}>
              😒
            </button>
            <button className={classes.emoji}>
              😄
            </button>
            <button className={classes.emoji}>
              😍
            </button>
          </div>
        </div>
        <p className={classes.footer}>When you generate an image, it will appear here.</p>
        <a className={classes.discord}>Join the Discord to start creating! <CallMadeIcon style={{ fontSize: '18px' }} /></a>
      </div >
    </>
  )
}

export default home