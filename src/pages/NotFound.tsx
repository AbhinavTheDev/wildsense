import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Bird } from "lucide-react";
import { Button } from "../components/ui/button.tsx";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="flex justify-center mb-6">
          <Bird className="h-16 w-16 text-nature-500" />
        </div>
        <h1 className="text-6xl font-display font-bold mb-4 text-nature-600">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This page seems to have wandered into the wilderness.
        </p>
        <Button asChild size="lg" className="bg-nature-600 hover:bg-nature-700">
          <Link to="/">Return to Home</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
