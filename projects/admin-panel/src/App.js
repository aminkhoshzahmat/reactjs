import "antd/dist/antd.css";
import Header from "./components/generic/Header";
import Footer from "./components/generic/Footer";
import { Layout } from "antd";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header></Header>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
