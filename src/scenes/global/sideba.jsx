import {useState} from 'react';
import {useTheme,Box,Typography, IconButton, Avatar} from '@mui/material'
import {Link,useLocation} from 'react-router-dom';
import { SideBox,UserBox } from '../../muiComponents/muiComponent';
import { tokens } from '../../theme';
import { sidebarData } from './sidebarData';
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
        <Sidebar 
        breakPoint='md'
        style={{
            border:"none",
            height:"100%",
            width:"20%"
        }}>
        <Box sx={{
            // width:"100%",/
            height:"100%",
            backgroundColor:colors.primary[400],
            border:`2px solid ${colors.grey[700]}`
            
        }}>
            <SideBox>
                {!collapsed && <Typography variant='h4'>ADMINS</Typography>}
                <IconButton onClick={()=>broken ? toggleSidebar():collapseSidebar()}>
                    <MenuOutlined/>
                </IconButton>
            </SideBox>
            <UserBox>
                <Avatar 
                sx={{
                    width:"30%",
                    height:"30%"

                }}
                src='src/assets/metime.jpg'/>
                {!collapsed && <Typography color={colors.grey[100]} variant='h4'>Lucky Believe</Typography>}
                {!collapsed && <Typography color={colors.greenAccent[400]} variant='h6'>VP Fancy Admin</Typography>}
            </UserBox>
            <Box>
                <ul style={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    gap:"10px",
                    padding:"10px"
                }}>
                {sidebarData.map((data,key)=>(
                    <li style={{
                        display:"flex",
                        gap:"10px",
                        cursor:"pointer",
                        width:"100%"
                    }} key={key} onClick={()=>{
                        window.location.pathname = data.link
                    }}>
                        <div style={{
                            flex:"30%",
                            display:"grid",
                            placeItems:"center"
                        }}>{data.icon}</div>
                        {!collapsed && <Typography flex={"70%"}  variant='h7'>{data.title}</Typography>}
                    </li>
                ))}
                </ul>
            </Box>
        </Box>
        </Sidebar>
    )
}     
export default SideNav;