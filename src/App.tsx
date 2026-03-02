/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PetProfile from './pages/PetProfile';
import VideoPage from './pages/VideoPage';
import SignIn from './pages/SignIn';
import TopRated from './pages/TopRated';
import TopPets from './pages/TopPets';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 flex flex-col font-sans text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet/:id" element={<PetProfile />} />
            <Route path="/video/:id" element={<VideoPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/top-rated" element={<TopRated />} />
            <Route path="/top-pets" element={<TopPets />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
