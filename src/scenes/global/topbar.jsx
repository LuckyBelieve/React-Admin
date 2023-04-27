import {ColorModeContext,tokens} from '../../theme'
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from 'react';
import { DarkModeOutlined, LightModeOutlined, Notifications, Person2Outlined, Search, Settings} from "@mui/icons-material"
const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext);
    return (  
        <Box sx={styles.navContainer}>
            <Box
            borderRadius={3}
            backgroundColor={colors.primary[400]}
            >
                <InputBase sx={{ml:2,flex:1}} placeholder="Search"/>
                <IconButton>
                    <Search/>
                </IconButton>
            </Box>
            <Box>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlined/>
                        ):(
                        <LightModeOutlined/>
                    )}
                </IconButton>
                <IconButton>
                    <Notifications/>
                </IconButton>
                <IconButton>
                    <Settings/>
                </IconButton>
                <IconButton>
                    <Person2Outlined/>
                </IconButton>
            </Box>
        </Box>
    );
}
/** @type {import("@mui/material").SxProps} */
const styles = {
    navContainer:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center", 
        position:'relative',
        left:"",
        p:2
    },

}
 
export default TopBar;