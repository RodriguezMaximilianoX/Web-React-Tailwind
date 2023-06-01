import Layout from "./containers/Layout";
import Home from "./pages/Home";
import Skills from "./pages/SkillsContainer";
import '../src/styles/App.css'



function App() {
  return (
    <div className="App box-border">
      <Layout>
        <Home />
        <Skills />
      </Layout>
    </div>
  );
}

export default App;
