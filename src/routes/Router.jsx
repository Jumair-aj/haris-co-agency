import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
// import About from '@/pages/About';
// import Contact from '@/pages/Contact';
// import NotFound from '@/pages/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

