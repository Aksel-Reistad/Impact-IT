import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeSide from './Sider/HomeSide.jsx';
import AnsatSide from './Sider/AnsatSide.jsx';
import UtstyrSide from './Sider/UtstyrSide.jsx';
// import Navbar from './componenter/Navbar.jsx';

function App() {
  return (

    <Router>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/HomeSide" element={<HomeSide />} />
      <Route path="/AnsatSide" element={<AnsatSide />} />
      <Route path="/UtstyrSide" element={<UtstyrSide />} />
    </Routes>
  </Router>

);

  
}

export default App;
