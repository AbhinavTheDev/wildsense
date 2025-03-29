import { motion } from 'framer-motion';
import { Heart, Globe, Leaf, Bird, Shield, Camera, PawPrint, TreeDeciduous, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { useState, useRef, useEffect } from 'react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState({
    vision: false,
    conservation: false,
    tools: false,
    team: false,
    join: false
  });

  const visionRef = useRef<HTMLDivElement>(null);
  const conservationRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const joinRef = useRef<HTMLDivElement>(null);

  // Intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === visionRef.current && entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, vision: true }));
        } else if (entry.target === conservationRef.current && entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, conservation: true }));
        } else if (entry.target === toolsRef.current && entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, tools: true }));
        } else if (entry.target === teamRef.current && entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, team: true }));
        } else if (entry.target === joinRef.current && entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, join: true }));
        }
      });
    }, observerOptions);

    if (visionRef.current) observer.observe(visionRef.current);
    if (conservationRef.current) observer.observe(conservationRef.current);
    if (toolsRef.current) observer.observe(toolsRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    if (joinRef.current) observer.observe(joinRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero section */}
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center bg-nature-100 text-nature-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Globe className="h-4 w-4 mr-1.5" />
            <span>Our Mission</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 relative">
            About WildSense
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-nature-500 rounded-full" />
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Harnessing the power of artificial intelligence to advance wildlife conservation 
            and promote biodiversity protection worldwide.
          </p>
          
          {/* Icon strip with subtle animation */}
          <div className="flex justify-center gap-6 text-nature-600/50 mb-12">
            {[PawPrint, Bird, TreeDeciduous, Leaf, Shield, Camera].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Icon className="h-6 w-6" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="page-container">
        {/* Vision Section with single strategic image */}
        <motion.div
          ref={visionRef}
          initial={{ opacity: 0 }}
          animate={isVisible.vision ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-nature-100/50 to-transparent rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="max-w-3xl flex-1">
                <h2 className="text-2xl font-display font-semibold mb-6 inline-flex items-center">
                  <span className="bg-nature-600 text-white p-1.5 rounded-lg mr-3">
                    <Leaf className="h-5 w-5" />
                  </span>
                  Our Vision
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    WildSense was created with a simple yet profound vision: to leverage cutting-edge 
                    artificial intelligence to support conservation efforts for the world's most vulnerable 
                    wildlife species.
                  </p>
                  <p>
                    We believe that by providing conservationists, researchers, and wildlife enthusiasts 
                    with predictive tools and data-driven insights, we can contribute to more effective 
                    conservation strategies and a deeper understanding of our planet's biodiversity.
                  </p>
                  <p>
                    Our AI-powered tools analyze complex biological and environmental factors to provide 
                    valuable predictions about species lifespans and conservation status, helping to 
                    prioritize protection efforts where they're needed most.
                  </p>
                </div>
              </div>
              
              {/* Strategic single image */}
              <motion.div 
                className="flex-shrink-0 w-full md:w-72 h-72 rounded-2xl overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible.vision ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <img 
                  src="/importance/wildlife-conservation.webp" 
                  alt="Wildlife conservation vision" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Conservation Importance Section */}
        <motion.div
          ref={conservationRef}
          initial={{ opacity: 0 }}
          animate={isVisible.conservation ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-semibold mb-2 relative inline-block">
              Why Wildlife Conservation Matters
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-nature-500 rounded-full" />
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Leaf className="h-6 w-6 text-nature-600" />,
                title: "Ecosystem Balance",
                description: "Every species plays a vital role in its ecosystem. When one species disappears, it can disrupt the entire ecological balance.",
              },
              {
                icon: <Bird className="h-6 w-6 text-nature-600" />,
                title: "Biodiversity",
                description: "The rich variety of life on Earth—biodiversity—provides countless benefits, from medicines to climate regulation.",
              },
              {
                icon: <Heart className="h-6 w-6 text-nature-600" />,
                title: "Human Well-being",
                description: "Healthy ecosystems provide essential services like clean air, water, and food security for human populations.",
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.conservation ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="bg-nature-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium mb-2 text-nature-800">{item.title}</h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          ref={toolsRef}
          initial={{ opacity: 0 }}
          animate={isVisible.tools ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="bg-muted rounded-2xl p-8">
            <h2 className="text-2xl font-display font-semibold mb-6 flex items-center">
              <span className="bg-nature-600 text-white p-1.5 rounded-lg mr-3">
                <Camera className="h-5 w-5" />
              </span>
              Our AI-Powered Tools
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Lifespan Predictor",
                  description: "Estimates the expected lifespan of wildlife species based on biological characteristics, habitat conditions, and environmental factors.",
                  link: "/lifespan-predictor",
                  linkText: "Try the Predictor",
                  icon: <PawPrint className="h-5 w-5" />,
                },
                {
                  title: "Conservation Status Predictor",
                  description: "Assesses the conservation status of wildlife species based on multiple risk factors to prioritize protection efforts.",
                  link: "/conservation-status",
                  linkText: "Assess Status",
                  icon: <Shield className="h-5 w-5" />,
                },
              ].map((tool, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible.tools ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-nature-100 rounded-full p-3">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">{tool.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                  <Button asChild variant="default" className="w-full bg-nature-600 hover:bg-nature-700">
                    <Link to={tool.link} className="flex items-center justify-center gap-2">
                      {tool.icon}
                      {tool.linkText}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section with Square Profile Images */}
        <motion.div
          ref={teamRef}
          initial={{ opacity: 0 }}
          animate={isVisible.team ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-semibold mb-2 relative inline-block">
              Meet Our Team
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-nature-500 rounded-full" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              A passionate group of developers and conservationists committed to leveraging technology 
              for the protection of wildlife.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Abhinav",
                role: "Lead Developer",
                bio: "Full-stack developer with a passion for conservation and AI applications. Focused on creating accessible tools for researchers and individuals.",
                github: "https://github.com/AbhinavDev",
                linkedin: "https://linkedin.com/in/say-hi-to-abhinav",
                email: "abhinavmittal774@outlook.com",
                image: "/team/abhinav.webp"
              },
              {
                name: "Keshav Gaur",
                role: "ML Engineer",
                bio: "Specializes in machine learning models for wildlife behavior analysis and prediction. Passionate about using AI for building real world impactful softwares.",
                github: "https://github.com/keshavvgaur",
                linkedin: "https://www.linkedin.com/in/keshav-gaur-714529314/",
                image: "/team/keshav.webp"
              },
              {
                name: "Naman Goyal",
                role: "ML Engineer",
                bio: "Specializes in machine learning and research for analyzing researches and get insights from it and implementing in our model.",
                github: "https://github.com/Naman16161",
                linkedin: "https://www.linkedin.com/in/naman-goyal-1612aa332/",
                image: "/team/naman.webp"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.team ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Square profile image with circular crop */}
                <div className="pt-6 px-6 flex justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-nature-100 shadow-md">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-700"
                    />
                  </div>
                </div>
                
                {/* Name and role */}
                <div className="text-center pt-4 px-6">
                  <h3 className="text-lg font-medium text-nature-800">{member.name}</h3>
                  <p className="text-sm text-nature-600 mb-2">{member.role}</p>
                </div>
                
                {/* Divider */}
                <div className="mx-6 h-px bg-muted my-3"></div>
                
                {/* Bio */}
                <div className="px-6 pb-4 flex-grow">
                  <p className="text-muted-foreground text-sm mb-5">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-5">
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-nature-700 transition-colors hover:scale-110"
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-nature-700 transition-colors hover:scale-110"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    {!member.email ? (
                      <></>
                    ): (<a 
                    href={`mailto:${member.email}`} 
                    className="text-muted-foreground hover:text-nature-700 transition-colors hover:scale-110"
                  >
                    <Mail className="h-5 w-5" />
                  </a>)}
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Movement Section */}
        <motion.div
          ref={joinRef}
          initial={{ opacity: 0 }}
          animate={isVisible.join ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="relative rounded-2xl p-10 overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 -z-10">
              <img 
                src="/backgrounds/forest-canopy.webp" 
                alt="" 
                className="w-full h-full object-cover brightness-[0.3] filter"
              />
            </div>
            
            <div className="relative z-10 text-white">
              <div className="mb-6 bg-white/10 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                <TreeDeciduous className="h-6 w-6" />
              </div>
              
              <h2 className="text-2xl font-display font-semibold mb-4">Join the Conservation Movement</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                By using WildSense tools and sharing our resources, you're contributing to a global 
                effort to protect and preserve our planet's precious biodiversity. Together, we can 
                make a difference for wildlife conservation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-nature-700 hover:bg-nature-100">
                  <Link to="/lifespan-predictor" className="flex items-center gap-2">
                    <PawPrint className="h-5 w-5" />
                    Try Our Tools
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-green-400/20 hover:text-white">
                  <a 
                    href="https://www.worldwildlife.org/how-to-help" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Heart className="h-5 w-5" />
                    More Ways to Help
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;