import React from "react";
import Meta from "components/Meta";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import {useRouter} from "next/router";


const HomeLoginComponent = () => {
    const { data: session } = useSession();
    const router = useRouter();

    if (session) {
        router.push('/showcase')
        // const {user} = session

        // return (
        //     <>
        //         {user?.image && (
        //             <Image
        //                 src={user.image}
        //                 alt=""
        //                 width={38}
        //                 height={38}
        //                 style={{borderRadius: '50%'}}
        //             />
        //         )}
        //         Hello, {user?.name}!<br />
        //         <button onClick={() => signOut()}>Sign out</button>
        //     </>
        // )
    }

    return (
        <>
            <Typography style={{
                fontSize: '30px',
                margin: '10px 0',
                fontFamily: "'Stick No Bills', sans-serif",

            }}>Galleria.ai</Typography>
            <img
                style={{borderRadius: '10px'}}
                src="/static/galleria.png" width="100" height="100" alt="Galleria.ai"/>

            <Box sx={{ mt: 5, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <Button
                    startIcon={<PersonAddAlt1Icon />}
                    style={{ border: '2px solid white', width: '200px'}}
                    variant="contained">Join the Beta</Button>

                <Button
                    onClick={() => signIn()}
                    style={{ border: '2px solid white', width: '200px', marginTop: '10px'}}
                    variant="outlined">Sign in with Discord</Button>
            </Box>
        </>
    )
}

function IndexPage(props) {

    return (
        <>
            <Meta/>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                flexDirection: 'column',
            }}>
                <HomeLoginComponent />
            </Box>
        </>
    );
}

export default IndexPage;
