import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Quiz } from './components/Quiz/Quiz';
import { Blog } from './Blog/Blog';
function App() {
  return (
    
   <div className='app'>
   <div className='main-header'>
    <a class = "menu" href ="/">Main</a>
    <a class = "menu" href ="/login">Регистрация</a>
    <a class = "menu" href ="/quiz">Quiz</a>
    <a class = "menu" href ="/blog">Блог</a>
    </div>

     <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Main/>}/>
        <Route path ="quiz" element = {<Quiz/>}/>
        <Route path ="/blog" element = {<Blog/>}/>
      </Routes>
    </BrowserRouter>
 
  <Footer year = {new Date().getFullYear()}/>

  </div>
  );
}

export default App;
