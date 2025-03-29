import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bird, Earth, Globe, Leaf, PawPrint, Turtle, Fish, Shield } from 'lucide-react';
import { GiTigerHead, GiDeer, GiMonkey } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { Button } from "../components/ui/button";
import { cn } from '../lib/utils.ts';

const Index = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({
    stats: false,
    features: false,
    importance: false,
  });
  
  const [activeAnimal, setActiveAnimal] = useState(0);
  const animalImages = [
    '/animals/tiger.webp',
    '/animals/elephant.webp',
    '/animals/panda.webp',
    '/animals/turtle.webp',
  ];
  
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const importanceRef = useRef<HTMLDivElement>(null);

  // Animal image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAnimal(prev => (prev + 1) % animalImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [animalImages.length]);

  // Intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === statsRef.current && entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, stats: true }));
        } else if (entry.target === featuresRef.current && entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, features: true }));
        } else if (entry.target === importanceRef.current && entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, importance: true }));
        }
      });
    }, observerOptions);

    if (statsRef.current) observer.observe(statsRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (importanceRef.current) observer.observe(importanceRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (importanceRef.current) observer.unobserve(importanceRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 relative overflow-hidden">
        {/* Layered Background with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-nature-100/80 to-nature-200/50 z-0"></div>
          <motion.img
            src='/backgrounds/forest-canopy.webp' 
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ scale: 1.05 }}
            animate={{ 
              y: [0, -15, 0],
              scale: [1.05, 1.08, 1.05]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ opacity: 0.4 }}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent z-10"></div>
        </div>
        
        {/* Floating wildlife silhouettes */}
        <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
          <motion.div 
            className="absolute right-[10%] top-[15%]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Bird className="text-nature-600/30 h-16 w-16" />
          </motion.div>
          <motion.div 
            className="absolute left-[5%] bottom-[20%]"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          >
            <Turtle className="text-nature-700/20 h-24 w-24" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-nature-100 text-nature-800 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Leaf className="h-4 w-4 mr-1.5" />
              <span>AI-Powered Wildlife Conservation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Preserving Wildlife Through <br className="hidden md:block" />
              <span className="text-nature-600">Intelligent Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              WildSense leverages artificial intelligence to predict animal lifespans and 
              conservation status, empowering researchers and conservationists with vital data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-nature-600 hover:bg-nature-700 shadow-md">
                <Link to="/lifespan-predictor" className="flex items-center gap-2">
                  <PawPrint className="h-5 w-5" />
                  Try Lifespan Predictor
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-nature-600 text-nature-700 hover:bg-nature-100">
                <Link to="/conservation-status" className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Conservation Status Tool
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Animal Carousel */}
        <div className="max-w-screen-lg mx-auto mt-16 md:mt-24 relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-[16/9] relative overflow-hidden bg-nature-700">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeAnimal}
                  src={animalImages[activeAnimal]} 
                  alt="Wildlife" 
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-nature-900/80 to-transparent flex items-end p-8">
                <div className="text-white space-y-2">
                  <h3 className="text-2xl font-display font-medium">WildSense Dashboard</h3>
                  <p className="text-nature-100">Interactive wildlife conservation insights</p>
                </div>
              </div>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {animalImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveAnimal(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeAnimal === index ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                    aria-label={`View animal ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg">
            <Earth className="h-8 w-8 text-nature-600" />
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counter */}
      <section 
        ref={statsRef}
        className="py-20 md:py-28 px-6 bg-gradient-to-br from-muted to-white relative overflow-hidden"
      >
        {/* Background leaf pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <img 
            src="/patterns/leaf-pattern.svg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isVisible.stats ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <StatCard 
              icon={<Bird className="h-8 w-8 text-nature-600" />}
              title="40,000+"
              description="Species threatened with extinction worldwide"
              delay={0}
              isVisible={isVisible.stats}
            />
            <StatCard 
              icon={<GiDeer className="h-10 w-10 text-nature-600" />}
              title="50%"
              description="Of global biodiversity lost in the last century"
              delay={0.2}
              isVisible={isVisible.stats}
            />
            <StatCard 
              icon={<Globe className="h-8 w-8 text-nature-600" />}
              title="100+"
              description="Species becoming extinct every day"
              delay={0.4}
              isVisible={isVisible.stats}
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="py-20 md:py-28 px-6 relative"
      >
        {/* Side animal silhouette */}
        <div className="absolute right-0 top-1/4 opacity-10 pointer-events-none">
          <GiTigerHead className="h-80 w-80 text-nature-700" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              AI-Powered Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              WildSense combines cutting-edge AI technology with conservation science 
              to provide valuable insights for wildlife protection efforts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeatureCard 
              title="Lifespan Predictor"
              icon={<PawPrint className="h-6 w-6 text-nature-600" />}
              description="Our AI analyzes biological and environmental factors to estimate the expected lifespan of various wildlife species, helping researchers understand longevity patterns."
              link="/lifespan-predictor"
              linkText="Try the Predictor"
              image="/features/lifespan.webp"
              index={0}
              isVisible={isVisible.features}
            />
            <FeatureCard 
              title="Conservation Status"
              icon={<Shield className="h-6 w-6 text-nature-600" />}
              description="Evaluate the conservation status of wildlife species based on multiple risk factors, helping prioritize protection efforts for the most vulnerable populations."
              link="/conservation-status"
              linkText="Assess Conservation Status"
              image="/features/conservation.webp"
              index={1}
              isVisible={isVisible.features}
            />
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section 
        ref={importanceRef}
        className="py-20 md:py-28 px-6 bg-nature-100 relative overflow-hidden"
      >
        {/* Background animal tracks */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <img 
            src="/patterns/animal-tracks.svg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Wildlife Conservation Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The protection of wildlife is crucial for maintaining the delicate balance of our ecosystems 
              and ensuring a sustainable future for our planet.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isVisible.importance ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <ImportanceCard 
              title="Biodiversity"
              icon={<GiMonkey className="h-8 w-8" />}
              description="Wildlife contributes to the rich biodiversity that makes our planet resilient and adaptable to changes."
              image="/importance/biodiversity.webp"
              delay={0}
              isVisible={isVisible.importance}
            />
            <ImportanceCard 
              title="Ecosystem Balance"
              icon={<Fish className="h-7 w-7" />}
              description="Each species plays a vital role in maintaining the balance of their ecosystem, from pollination to pest control."
              image="/importance/ecosystem.webp"
              delay={0.2}
              isVisible={isVisible.importance}
            />
            <ImportanceCard 
              title="Human Well-being"
              icon={<MdOutlineFamilyRestroom className="h-8 w-8" />}
              description="Healthy ecosystems provide essential resources like clean air, water, medicine, and food security for human populations."
              image="/importance/human.webp"
              delay={0.4}
              isVisible={isVisible.importance}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-nature-600 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/patterns/topography-2.svg')] opacity-10"></div>
        
        {/* Wildlife silhouette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-full bg-[url('/silhouettes/wildlife-silhouette.svg')] bg-repeat-x bg-bottom opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Join the Conservation Movement
            </h2>
            <p className="text-lg text-nature-100 mb-8 max-w-2xl mx-auto">
              Start using our AI-powered tools today to contribute to wildlife conservation efforts 
              and make a positive impact on our planet's biodiversity.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-nature-700 hover:bg-nature-100 shadow-lg">
              <Link to="/about" className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                Learn More
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ 
  icon, 
  title, 
  description, 
  delay,
  isVisible 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number;
  isVisible: boolean;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
    >
      <motion.div 
        className="inline-flex items-center justify-center rounded-full bg-nature-100 p-3 mb-4"
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-3xl font-display font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

// Feature Card Component
const FeatureCard = ({ 
  title,
  icon, 
  description, 
  link, 
  linkText,
  image,
  index,
  isVisible 
}: { 
  title: string;
  icon: React.ReactNode;
  description: string; 
  link: string; 
  linkText: string;
  image: string;
  index: number;
  isVisible: boolean;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="rounded-2xl overflow-hidden card-hover bg-white shadow-md"
    >
      <div className="h-48 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center">
            <div className="bg-nature-500/80 rounded-full p-2 mr-3">
              {icon}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-display font-medium mb-3">{title}</h3>
        <p className="text-muted-foreground mb-5">{description}</p>
        <Button asChild variant="outline" className="bg-transparent border-nature-500 text-nature-700 hover:bg-nature-50">
          <Link to={link} className="flex items-center gap-2">
            {linkText}
            <motion.span 
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >→</motion.span>
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

// Importance Card Component
const ImportanceCard = ({ 
  title,
  icon,
  description,
  image,
  delay,
  isVisible 
}: { 
  title: string;
  icon: React.ReactNode;
  description: string;
  image: string;
  delay: number;
  isVisible: boolean;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="bg-white rounded-2xl shadow-sm overflow-hidden"
    >
      <div className="h-36 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 relative">
        <div className="absolute top-0 -mt-8 left-6 bg-nature-100 p-3 rounded-full border-4 border-white">
          {icon}
        </div>
        <h3 className="text-xl font-display font-medium mb-3 text-nature-700 pt-5">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

export default Index;