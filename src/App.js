import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import {useState, useEffect } from "react";
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from "./components/About";
import Detail from "./components/Detail";
import Form from './components/Form';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '9b821dc054a4.2c27b5a577f845ec9327';

function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();

   const [access, setAccess] = useState(false);
   const EMAIL = 'fervolpato1991@gmail.com';
   const PASSWORD = 'unaPassword123';
   const navigate = useNavigate();

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [access]);
   
   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response=> response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = (id) =>{
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }
   return (
      
      <div className='App'>
         {location.pathname ==="/" ? <Form login={login}/> : <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path="home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="detail/:detailId" element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
