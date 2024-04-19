import './App.css';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import {store, persistor} from './redux/store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/home';
import { PersistGate } from 'redux-persist/integration/react';
import Forget from './components/forget';
import ForgetPage from './pages/forgetpage';
import RobotPage from './pages/robotpage';

function App() {
  return (
    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

    <Router> 
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/Forget" element={<ForgetPage/>} /> 
        <Route path="/Robot" element={<RobotPage/>} /> 
        <Route path="/*" element={<RegisterPage />} />  


      </Routes> 
    </Router> 
    </PersistGate>

    </Provider> 
  );
}

export default App;
