import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Login from './pages/Login';
import ManPage from './pages/ManPage';
import GlobalStyle from './components/GlobalStyles';
import { Route, Routes  } from 'react-router-dom';


function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Routes>
        <Route path='/kream.github.io' element={<Main></Main>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/ManPage' element={<ManPage></ManPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
