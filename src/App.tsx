import  { motion, useAnimation } from 'framer-motion';
import { Instagram, Phone, Code, Users, Zap } from 'lucide-react';
import { useEffect } from 'react';

function App() {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: { duration: 10, repeat: Infinity, ease: "linear" }
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 opacity-90"></div>
      
      <div className="relative z-10">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 gap-4"
        >
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/a9861e1b-75f1-4322-83b2-027d17a3b000/public"
            alt="SEM;COLON Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-2xl"
          />
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://unstop.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-400 to-blue-600 px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-sm sm:text-lg shadow-lg hover:shadow-blue-400/50 transition-all duration-300"
          >
            REGISTER NOW !!
          </motion.a>
        </motion.header>

        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                textShadow: [
                  "0 0 10px #3b82f6",
                  "0 0 20px #60a5fa", 
                  "0 0 10px #3b82f6"
                ]
              }}
              transition={{ 
                delay: 0.3, 
                duration: 0.8,
                textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent"
              style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))' }}
            >
              SEM;COLON 11.0
            </motion.h1>
            
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-blue-100 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
            >
              <div className="flex items-center gap-2">
                <Code className="w-6 h-6 sm:w-8 sm:h-8" />
                <span>CODE, COLLABORATE, CONQUER</span>
                <Users className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
            </motion.div>
            
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-blue-50 px-4"
            >
              Step into SEM;COLON 11.0 where innovation meets mastery. It's not just about coding: it's about pushing boundaries, collaborations & reaching new levels of excellence.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotateX: 10 }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 40px rgba(59, 130, 246, 0.6)",
                  "0 0 20px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-block bg-blue-700/50 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 rounded-2xl border border-blue-400/30 mx-4"
            >
              <motion.h2 
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-200 mb-2 flex flex-col sm:flex-row items-center justify-center gap-2"
              >
                <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
                <span>Prestige Event</span>
                <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100">Celebrating our 11th year of excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              animate={{
                y: [0, -5, 0],
                boxShadow: [
                  "0 10px 20px rgba(59, 130, 246, 0.2)",
                  "0 15px 30px rgba(59, 130, 246, 0.3)",
                  "0 10px 20px rgba(59, 130, 246, 0.2)"
                ]
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="bg-blue-800/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-blue-400/20 text-center"
            >
              <Instagram className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-200">Follow Us</h3>
              <a
                href="https://www.instagram.com/srm_hackathon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100 transition-colors font-semibold text-base sm:text-lg break-all"
              >
                @srm_hackathon
              </a>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: -10,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              animate={{
                y: [0, -5, 0],
                boxShadow: [
                  "0 10px 20px rgba(59, 130, 246, 0.2)",
                  "0 15px 30px rgba(59, 130, 246, 0.3)",
                  "0 10px 20px rgba(59, 130, 246, 0.2)"
                ]
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="bg-blue-800/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-blue-400/20 text-center"
            >
              <Phone className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-200">Contact</h3>
              <div className="space-y-2">
                <motion.a 
                  whileHover={{ scale: 1.1, x: 10 }}
                  href="tel:9182791286" 
                  className="block text-blue-300 hover:text-blue-100 transition-colors font-semibold text-base sm:text-lg"
                >
                  9182791286
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1, x: 10 }}
                  href="tel:291863239" 
                  className="block text-blue-300 hover:text-blue-100 transition-colors font-semibold text-base sm:text-lg"
                >
                  291863239
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0,
            }}
            animate={{
              y: [-20, (typeof window !== 'undefined' ? window.innerHeight : 800) + 20],
              x: [
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)
              ],
              scale: [0, Math.random() * 2 + 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute w-4 h-4 bg-blue-300/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
 