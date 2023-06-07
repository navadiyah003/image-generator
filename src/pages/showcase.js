import React from "react";
import Meta from "components/Meta";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import SectionHeader from "../components/SectionHeader";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Whatshot from '@material-ui/icons/Whatshot';
import StarBorder from '@material-ui/icons/StarBorder';
import Add from '@material-ui/icons/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  imageList: {
    width: '100%',
    display: 'block',
    borderRadius: 10,
  },
  container: {
    width: '68%',
    marginLeft: '18%'
  },
  header: {
    paddingTop: '2rem',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    borderRadius: 20,
    marginLeft: 10,
    textTransform: 'initial',
    padding: '8px 20px',
    color: "#94a3b8",
    '&:active': {
      color: 'white',
      backgroundColor: 'rgb(30 41 59/0.8)'
    }
  },
  imageHover: {
    position: 'absolute',
    display: 'block',
    bottom: 0,
    backgroundColor: '#0a0b15',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: '92%',
    opacity: 0,
    visibility: 'hidden'
  },
  imageHead: {
    position: 'relative',
    '&:hover $imageHover': {
      opacity: 1,
      visibility: 'visible'
    }
  },
  tag: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  path: {
    color: 'lightblue',
    fontSize: '12px',
    margin: '5px 0'
  },
  time: {
    color: 'gray',
    fontSize: '12px',
    margin: '5px 0'
  },
  text: {
    color: '#ffffffd9',
    margin: 0,
    fontWeight: 500,
    fontSize: '12px',
    display: '-webkit-box',
    maxWidth: ' 200px',
    lineClamp: 3,
    boxOrient: 'vertical',
    overflow: 'hidden'
  },
  detail: {
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    marginTop: '10px',
    justifyContent: 'space-between'
  },
  title: {
    margin: 0,
    fontWeight: 500
  },
  img: {
    borderRadius: '50%'
  },
  description: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  }
}));

function ShowcasePage(props) {
  const classes = useStyles();
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    const { user } = session;
    console.log(user);

    return (
      <>
        <Meta />
        <Box>
          <div className={classes.container}>
            <div className={classes.flex}>
              <SectionHeader title="Community Showcase" size="4" className={classes.header} />
              <div>
                <Button variant="text" className={classes.button} startIcon={<Whatshot />}>Recent</Button>
                <Button variant="text" className={classes.button} startIcon={<StarBorder />}>Top</Button>
                <Button variant="text" className={classes.button} startIcon={<Add />}>Create</Button>
              </div>
            </div>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1400: 4 }}
            >
              <Masonry columnsCount={4} gutter="20px">
                {itemData.map((data, i) => (
                  <div key={i} className={classes.imageHead}>
                    <img
                      className={classes.imageList}
                      src={`${data.img}?w=248&fit=crop&auto=format`}
                    />
                    <div className={classes.imageHover}>
                      <div className={classes.tag}>
                        <p className={classes.path}>/imagine</p>
                        <p className={classes.time}>5 months ago</p>
                      </div>
                      <p className={classes.text}>stunning city of stone inside a gray granite canyon, fusion of star wars and gothic revival architecture, by marc....</p>
                      <div className={classes.detail}>
                        <div className={classes.description}>
                          <img src="https://images.unsplash.com/photo-1549388604-817d15aa0110" width='20' height='20' alt="demo" className={classes.img} />
                          <h5 className={classes.title}>Owlglass</h5>
                        </div>
                        <MoreHorizIcon style={{color: 'gray'}} />
                      </div>
                    </div>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </Box>
      </>
    )
  }

  return <></>
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];

export default ShowcasePage;
