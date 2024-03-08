import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home.component";
import SensorDetail from "./routes/sensorDetail/sensorDetail.component";
import Navigation from './components/functional/NavigationBar/NavigationBar.component';

const About = () => {
  return (
    <h1>TODO: Develop a page for instructions about this project</h1>
  );
};



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sensor/:sensorId" element={<SensorDetail />} />
      </Route>

    </Routes>
  );
};

export default App;