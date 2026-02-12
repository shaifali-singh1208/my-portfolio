import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import GitHubContributions from "./components/GitHubContributions";
import SectionSeparator from "./components/SectionSeparator";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Navigation />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <main>
                  <Home />
                  <SectionSeparator />
                  <About />
                  <SectionSeparator variant="accent" />
                  <Skills />
                  <SectionSeparator />
                  <Projects />
                  <SectionSeparator variant="secondary" />
                  <GitHubContributions />
                  {/* <SectionSeparator /> */}
                 
                  <SectionSeparator variant="secondary" />
                  <Contact />
                </main>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          {/* <ChatWidget /> */}
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;