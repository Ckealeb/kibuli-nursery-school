
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(true);
  const location = useLocation();

  // Reset loading state when route changes
  useEffect(function() {
    setIsLoading(true);
    setShowAnimation(true);
    
    // Simulate page loading time
    const timer = setTimeout(function() {
      setIsLoading(false);
    }, 1000);
    
    return function() { 
      clearTimeout(timer);
    };
  }, [location.pathname]);

  const handleAnimationComplete = function() {
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
