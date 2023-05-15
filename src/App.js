import Layout from "./containers/Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import '../src/styles/App.css'



function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <Skills />
      </Layout>
    </div>
  );
}

export default App;
