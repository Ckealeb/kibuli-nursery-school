
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(true);
  const location = useLocation();

  // Reset loading state when route changes
  useEffect(() => {
    setIsLoading(true);
    setShowAnimation(true);
    
    // Simulate page loading time (you can remove this in production)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  return showAnimation ? (
    <LoadingAnimation 
      isLoading={isLoading} 
      onAnimationComplete={handleAnimationComplete}
    />
  ) : null;
};

export default PageLoader;
