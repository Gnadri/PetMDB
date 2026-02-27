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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
