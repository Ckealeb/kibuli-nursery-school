
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Gallery from "./pages/Gallery";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Get the base name from the URL if deployed to GitHub Pages
// This helps with routing when deployed to a specific repository
const getBasename = function() {
  // Return empty string if running locally
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return '';
  }
  // Extract repository name for GitHub Pages
  var pathArray = window.location.pathname.split('/');
  var repoName = pathArray[1]; // Repository name will be the first part of the path
  return repoName ? '/' + repoName : '';
};

const App = function() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={getBasename()}>
          <PageLoader />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
