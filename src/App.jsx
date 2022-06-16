import { Layout } from './Components/Layout';
import {Routes, Route} from 'react-router-dom';

import {Dashboard} from './Pages/Dashboard';
import {Calendar} from './Pages/Calendar';
import {Announcement} from './Pages/Announcement';
import {Courses} from './Pages/Courses';
import {Messages} from './Pages/Messages';
import {Forum} from './Pages/Forum';
import {Notfoundpage} from './Pages/Notfoundpage';

function App() {
    return (
        <div className='main'>
            <Layout>
                <Routes>
                    <Route path='/Dashboard' element={<Dashboard/>} />
                    <Route path='/Calendar' element={<Calendar/>} />
                    <Route path='/Announcement' element={<Announcement/>} />
                    <Route path='/Courses' element={<Courses/>} />
                    <Route path='/Messages' element={<Messages/>} />
                    <Route path='/Forum' element={<Forum/>} />
                    <Route path='*' element={<Notfoundpage/>} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
