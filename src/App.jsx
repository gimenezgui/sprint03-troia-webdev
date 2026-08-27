import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Solution from './components/Solution';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Solution />
      </main>

      <Footer />
    </>
  );
}