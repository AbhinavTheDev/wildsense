import { motion } from 'framer-motion';
import { Bird } from 'lucide-react';
import LifespanPredictor from '../components/LifespanPredictor.tsx';

const LifespanPredictorPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-nature-100 text-nature-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Bird className="h-4 w-4 mr-1.5" />
            <span>AI based Prediction Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Wildlife Lifespan Predictor
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered tool estimates the expected lifespan of wildlife species based on 
            biological and environmental factors. Enter the details below to get a prediction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <LifespanPredictor />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-20 bg-muted rounded-2xl p-8"
        >
          <h2 className="text-2xl font-display font-semibold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="bg-nature-100 text-nature-800 w-8 h-8 rounded-full flex items-center justify-center font-medium mb-4">1</div>
              <h3 className="text-lg font-medium mb-2">Input Species Data</h3>
              <p className="text-muted-foreground">
                Enter basic information about the wildlife species, including its biological
                characteristics and environmental factors.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="bg-nature-100 text-nature-800 w-8 h-8 rounded-full flex items-center justify-center font-medium mb-4">2</div>
              <h3 className="text-lg font-medium mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our machine learning model analyzes the data, comparing it with extensive datasets
                of wildlife lifespan information.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="bg-nature-100 text-nature-800 w-8 h-8 rounded-full flex items-center justify-center font-medium mb-4">3</div>
              <h3 className="text-lg font-medium mb-2">Prediction Results</h3>
              <p className="text-muted-foreground">
                Receive an estimated lifespan prediction based on the provided information
                and comparable species data.
              </p>
            </div>
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            <p className="mb-1">
              <strong>Disclaimer:</strong> This tool provides estimates based on available data and statistical models. 
            </p>
            <p>
              Actual lifespans may vary due to individual circumstances, environmental conditions, and other factors not included in the model.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LifespanPredictorPage;
