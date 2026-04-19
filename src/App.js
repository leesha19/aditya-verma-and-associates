import './styles/global.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
