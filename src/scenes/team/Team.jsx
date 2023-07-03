import {Typography,Box,useTheme} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import { tokens } from '../../theme';
import {mockDataTeam} from '../../data/mockData';
import Header from '../../components/Header';
import {AdminPanelSettingsOutlined,LockOpenOutlined,SecurityOutlined} from '@mui/icons-material'


const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field:"id",
            headerName:"ID"
        },
        {
            field:"name",
            headerName:"name",
            flex:1,
            cellClassName:"name-column--cell"
        },
        {
            field:"age",
            headerName:"Age",
            type:"number",
            headerAlign:"left",
            align:"left"
            
        },
        {
            field:"phone",
            headerName:"Phone number",
            flex:1,
        },
        {
            field:"email",
            headerName:"Email",
            flex:1,
        },
        {
            field:"access",
            headerName:"Access Level",
            flex:1,
            renderCell:({row:{access}})=>{
                return (
                    <Box
                    width={"60%"}
                    m={"0 auto"}
                    p={"5px"}
                    display={"flex"}
                    justifyContent={"center"}
                    backgroundColor={
                        access === "admin" ?
                        colors.greenAccent[600]
                        :colors.greenAccent[700]
                    }
                    borderRadius={"5px"}
                    >
                        {access === "admin" && <AdminPanelSettingsOutlined/>}
                        {access === "manager" && <SecurityOutlined/>}
                        {access === "user" && <LockOpenOutlined/>}
                        <Typography color={colors.grey[100]}>
                            {access}
                        </Typography>
                        
                    </Box>
                )
            }
        },
    ]
    return (
        <Box m={"20px"}>
            <Header title={"TEAM"} subtitle={"Managing the team Members"}/>
            <Box 
            // m={"30px 0 0 0"}
            // height={"75vh"}
            >
                <DataGrid
                rows={mockDataTeam}
                columns={columns}
                pageSize={[25]}
                rowPerPageOptions={[25]}
                checkboxSelection
                autoHeight
                rowHeight={40}
                />
            </Box>
        </Box>
    );
}
 
export default Team;