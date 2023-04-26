import { tokens } from "./src/theme";
import {useTheme} from '@mui/material'

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    export const sidebarTheme =(themes)=>({
           ...(themes == "light" ?
           {
            sidebar: {
                backgroundColor:colors.primary[400],
                color:colors.grey[100],
              },
              menu: {
                menuContent: '#fbfcfd',
                icon: '#0098e5',
                hover: {
                  backgroundColor: '#c5e4ff',
                  color: '#44596e',
                },
                disabled: {
                  color: '#9fb6cf',
                },
            },
            
           }:{

           }
           )
    })