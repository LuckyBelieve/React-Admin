import {useState} from 'react';
import {useTheme,Box,Typography, IconButton, Avatar} from '@mui/material'
import {Link,useLocation} from 'react-router-dom';
import { SideBox,UserBox } from '../../muiComponents/muiComponent';
import { tokens } from '../../theme';
import { Sidebar,Menu,MenuItem,useProSidebar} from "react-pro-sidebar";
import {HomeOutlined,PeopleOutlined ,ContactsOutlined,ReceiptOutlined,PersonOutlined,CalendarTodayOutlined,HelpOutlined,BarChartOutlined,PieChartOutlined,TimelineOutlined,MenuOutlined,MapOutlined} from 
'@mui/icons-material'

const SideNav = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const {collapsed} = useProSidebar()
    const {collapseSidebar,toggleSidebar,broken} = useProSidebar()
    // const location = useLocation()
    return (
        <Box>
            
        </Box>
    )
}     
export default SideNav;