import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home.component";
import LineGraph from './components/functional/LineGraph/LineGraph.component';
import Navigation from './components/functional/NavigationBar/NavigationBar.component';

const Detail = () => {
  return (
    <h1>TODO: Develop Detail page for sensor</h1>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="graph" element={<LineGraph />} />
      </Route>

    </Routes>
  );
};

export default App;