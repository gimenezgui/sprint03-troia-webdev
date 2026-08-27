import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Solution from './components/Solution';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Solution />
        <Gallery />
      </main>

      <Footer />
    </>
  );
}