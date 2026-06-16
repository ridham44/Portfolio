import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import GlassLoader from './components/GlassLoader';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <GlassLoader />;
    }
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Particles />
                <CustomCursor />
                <ScrollToTop />

                <div className="bg-orbs">
                    <div className="bg-orb orb-1" />
                    <div className="bg-orb orb-2" />
                    <div className="bg-orb orb-3" />
                </div>

                <div
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Navbar />

                    <main style={{ flex: 1 }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}
