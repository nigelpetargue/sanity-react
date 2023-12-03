import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className='bg-neutral-900 min-h-screen'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
