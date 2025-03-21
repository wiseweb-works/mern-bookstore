import { BrowserRouter, Route, Routes } from 'react-router';
import { Footer, Navbar } from '../components';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
          <Routes>
            <Route path="/" element={<div>Home</div>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
