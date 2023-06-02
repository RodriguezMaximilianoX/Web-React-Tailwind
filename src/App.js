import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./containers/Layout";
import Home from "./pages/Home";
import SkillsContainer from "./pages/SkillsContainer";
import '../src/styles/App.css'
import AboutMe from "./pages/AboutMe";



function App() {
  return (
    <div className="App box-border h-screen">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/skills' element={ <SkillsContainer /> } />
            <Route exact path='/aboutme' element={ <AboutMe /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
