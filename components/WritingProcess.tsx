'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPencilAlt, FaComments, FaEdit, FaSitemap, FaRobot } from 'react-icons/fa';
import { IconType } from 'react-icons';

const stages = [
  {
    title: "Initial Story",
    icon: FaPencilAlt,
    color: "bg-sage-200",
    description: "Creating Nova Quantum",
    content: "Developed the original concept of Nova Quantum and her relationship with Qube. Wrote the first version of 'Stitches in Time: Nova Quantum's Fourth-Dimensional Love Story'.",
    metaStory: "A brilliant physicist accidentally contacts a fourth-dimensional being, challenging everything we know about love, consciousness, and reality.",
  },
  {
    title: "Feedback Loop",
    icon: FaComments,
    color: "bg-sage-300",
    description: "Gathering critiques",
    content: "Received feedback from a high school English teacher and a story contest judge, focusing on character development, pacing, and thematic exploration.",
    metaStory: "As Nova's perceptions evolve, she must navigate scientific skepticism and public fear.",
  },
  {
    title: "Revisions",
    icon: FaEdit,
    color: "bg-sage-400",
    description: "Implementing changes",
    content: "Made two major revisions, enhancing character development, improving pacing, and expanding on thematic elements.",
    metaStory: "Nova's journey becomes a mind-bending tale of cosmic love and discovery.",
  },
  {
    title: "Meta-Narrative",
    icon: FaSitemap,
    color: "bg-sage-500",
    description: "Creating layers",
    content: "Wrote a meta-narrative about the process of writing the Nova Quantum story, reflecting on the challenges of creative writing.",
    metaStory: "The writing process mirrors Nova's quantum quilting, becoming a story about writing a story.",
  },
  {
    title: "AI Collaboration",
    icon: FaRobot,
    color: "bg-sage-600",
    description: "Adding AI perspective",
    content: "Developed an additional layer of meta-narrative from the perspective of an AI language model.",
    metaStory: "The journey becomes fractal: a story about writing a story about writing a story.",
  }
];

interface StageIconProps {
  Icon: IconType;
  isActive: boolean;
  color: string;
}

const StageIcon: React.FC<StageIconProps> = ({ Icon, isActive, color }) => (
  <motion.div
    className={`rounded-full p-4 ${color} ${isActive ? 'text-sage-800' : 'text-sage-600'} shadow-lg`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={24} />
  </motion.div>
);

export default function WritingProcess() {
  const [activeStage, setActiveStage] = useState(0);
  const [showMeta, setShowMeta] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStage((prevStage) => (prevStage + 1) % stages.length);
    }, 8000);
    return () => clearTimeout(timer);
  }, [activeStage]);

  return (
    <section className="py-16 sparkle-bg">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-sage-800 font-display">The Meta Journey of Nova Quantum</h2>
        <div className="flex justify-center mb-8">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              className="mx-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveStage(index)}
            >
              <StageIcon Icon={stage.icon} isActive={index === activeStage} color={stage.color} />
            </motion.div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8 border border-sage-200"
          >
            <h3 className="text-3xl font-bold mb-4 text-sage-800">{stages[activeStage].title}</h3>
            <p className="text-gray-600 mb-4 text-lg">{stages[activeStage].description}</p>
            <p className="mb-6 text-lg">{stages[activeStage].content}</p>
            <button 
              onClick={() => setShowMeta(!showMeta)} 
              className="bg-sage-600 text-white px-6 py-3 rounded-full hover:bg-sage-700 transition duration-300 shadow-md"
            >
              {showMeta ? "Hide Meta Story" : "Show Meta Story"}
            </button>
            <AnimatePresence>
              {showMeta && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-6 bg-sage-50 rounded-lg overflow-hidden border border-sage-200"
                >
                  <p className="italic text-lg text-sage-800">{stages[activeStage].metaStory}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}