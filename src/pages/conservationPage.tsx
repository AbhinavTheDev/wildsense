import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import ConservationStatusPredictor from '../components/ConservationPredictor.tsx';

const ConservationStatusPage = () => {
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
            <Leaf className="h-4 w-4 mr-1.5" />
            <span>Conservation Status Predictor</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Conservation Status Predictor
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Evaluate the conservation status of wildlife species based on multiple risk factors, 
            helping prioritize protection efforts for vulnerable populations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ConservationStatusPredictor />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-20"
        >
          <div className="bg-nature-100 rounded-2xl p-8">
            <h2 className="text-2xl font-display font-semibold mb-6">Understanding Conservation Status</h2>
            <p className="text-muted-foreground mb-6">
              The IUCN Red List of Threatened Species is the world's most comprehensive inventory of the global conservation status of plant and animal species. 
              Here's what each status means:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="h-2 bg-green-500 rounded-full mb-3"></div>
                <h3 className="text-lg font-medium mb-1">Least Concern</h3>
                <p className="text-sm text-muted-foreground">
                  Species that are widespread and abundant, with no immediate threats to their population.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="h-2 bg-lime-500 rounded-full mb-3"></div>
                <h3 className="text-lg font-medium mb-1">Near Threatened</h3>
                <p className="text-sm text-muted-foreground">
                  Species that may be considered threatened in the near future if current trends continue.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="h-2 bg-yellow-500 rounded-full mb-3"></div>
                <h3 className="text-lg font-medium mb-1">Vulnerable</h3>
                <p className="text-sm text-muted-foreground">
                  Species facing a high risk of extinction in the wild due to declining numbers or habitat loss.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="h-2 bg-orange-500 rounded-full mb-3"></div>
                <h3 className="text-lg font-medium mb-1">Endangered</h3>
                <p className="text-sm text-muted-foreground">
                  Species facing a very high risk of extinction in the wild, with significantly declining populations.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="h-2 bg-red-500 rounded-full mb-3"></div>
                <h3 className="text-lg font-medium mb-1">Critically Endangered</h3>
                <p className="text-sm text-muted-foreground">
                  Species facing an extremely high risk of extinction in the wild, often with few remaining individuals.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="h-2 bg-purple-500 rounded-full mb-3"></div>
                <h3 className="text-lg font-medium mb-1">Extinct</h3>
                <p className="text-sm text-muted-foreground">
                  Species that survive only in captivity, cultivation, or outside their natural range.
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-muted-foreground">
              <p>
                <strong>Note:</strong> This tool provides an estimation based on the information you provide. 
                The actual conservation status determination involves rigorous scientific assessment by IUCN experts.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConservationStatusPage;