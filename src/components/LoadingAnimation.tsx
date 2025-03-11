
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingAnimationProps {
  isLoading: boolean;
  onAnimationComplete?: () => void;
}

const LoadingAnimation = ({ isLoading, onAnimationComplete }: LoadingAnimationProps) => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // When loading is complete, show welcome message
      const timer = setTimeout(() => {
        setShowWelcome(true);
        
        // Hide the animation after welcome is shown
        const welcomeTimer = setTimeout(() => {
          if (onAnimationComplete) onAnimationComplete();
        }, 2000);
        
        return () => clearTimeout(welcomeTimer);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, onAnimationComplete]);

  if (!isLoading && !showWelcome) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      animate={!isLoading && showWelcome ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        {isLoading ? (
          <motion.div
            className="w-40 h-40"
            animate={{ 
              x: [0, 100, 0], 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3, 
              ease: "linear" 
            }}
          >
            <img 
              src="/lovable-uploads/daa2510f-a44c-409e-b339-095808f5539f.png" 
              alt="Crawling Baby" 
              className="w-full h-full object-contain"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-quicksand font-bold text-primary"
          >
            Welcome!
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
