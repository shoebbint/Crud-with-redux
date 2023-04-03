import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import ShowPost from './CRUD/Posts/ShowPost';
import Header from './Components/LayOuts/Header';
import Footer from './Components/LayOuts/Footer';
import AddPost from './CRUD/Posts/AddPost';
import EditPost from './CRUD/Posts/EditPost';

function App() {
  return (
    <div className="App">
      <Header/>
<div className=''>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/posts' element={<ShowPost/>}/>
<Route path='/addpost' element={<AddPost/>}/>
<Route path='/showpost' element={<ShowPost/>}/>
<Route path='/editpost' element={<EditPost/>}/>

</Routes>
</div>
<Footer/>
    </div>
  );
}

export default App;
