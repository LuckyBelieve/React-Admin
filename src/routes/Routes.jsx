import {Route,Routes} from 'react-router-dom';
import Contacts from '../scenes/contacts/contacts';
import Dashboard from '../scenes/dashboard/Dashboard';
import Faq from '../scenes/faq/FAQ';
import Form from '../scenes/form/form';
import Geography from '../scenes/geography/geography';
import Invoices from '../scenes/invoices/invoices';
import Line from '../scenes/line/Line';
import Pie from '../scenes/pie/Pie';
import Team from '../scenes/team/Team';

export const Routers=()=>{
    return (
        <Routes>
            <Route to={'/'} element={<Dashboard/>}/>
            <Route to={'/contacts'} element={<Contacts/>}/>
            <Route to={'/Faq'} element={<Faq/>}/>
            <Route to={'/form'} element={<Form/>}/>
            <Route to={'/geography'} element={<Geography/>}/>
            <Route to={'/invoices'} element={<Invoices/>}/>
            <Route to={'/line'} element={<Line/>}/>
            <Route to={'/pie'} element={<Pie/>}/>
            <Route to={'/Team'} element={<Team/>}/>
        </Routes>
    )
}
