import './App.css';
import { Allpage } from './components/allPage/AllPage';
import { ActivePage } from './components/activePage/ActivePage';
import { NavBar } from './components/navBar/NavBar';
import Box from '@mui/material/Box';
import { InputField } from './components/inputField/InputField';
import { CompletedPage } from './components/completedPage/CompletedPage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Box
    sx={{ p: 2, 
          border: '1px solid grey',
          margin:"50px auto 0 auto",
          width:500,
          display:'flex',
          alignItems:"center",
          flexDirection:"column" }}
    >
      
        <InputField/>
        <Routes>
          <Route path='/' element={<Allpage/>}></Route>
          <Route path='/complete' element={<CompletedPage/>}></Route>
          <Route path='/active' element={<ActivePage/>}></Route>
      </Routes>
        <NavBar/>
    </Box>
  );
}
 
export default App;
