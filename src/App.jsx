import TopBar from './scenes/global/topbar';
import {ThemeProvider,CssBaseline,IconButton} from '@mui/material';
import {ColorModeContext,useMode} from "./theme";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Contacts from './scenes/contacts/contacts';
import Dashboard from './scenes/dashboard/Dashboard';
import Faq from './scenes/faq/FAQ';
import Form from './scenes/form/form';
import Geography from './scenes/geography/geography';
import Invoices from './scenes/invoices/invoices';
import Line from './scenes/line/Line';
import Pie from './scenes/pie/Pie';
import Team from './scenes/team/Team';
import { MenuOutlined } from '@mui/icons-material';
import Sidebar from './scenes/global/Sidebar';

function App() {
  const [theme,colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className="app">
          <Router>
            <Sidebar/>
            <div className="content">
              <TopBar/>
            <Routes>
              <Route path={'/'} element={<Dashboard/>}/>
              <Route path={'/contacts'} element={<Contacts/>}/>
              <Route path={'/Faq'} element={<Faq/>}/>
              <Route path={'/form'} element={<Form/>}/>
              <Route path={'/geography'} element={<Geography/>}/>
              <Route path={'/invoices'} element={<Invoices/>}/>
              <Route path={'/line'} element={<Line/>}/>
              <Route path={'/pie'} element={<Pie/>}/>
              <Route path={'/team'} element={<Team/>}/>
            </Routes>
            </div>
            </Router>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
