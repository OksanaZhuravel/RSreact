import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Layout from './pages/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Form from './pages/Form/Form';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
