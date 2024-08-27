'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const storyContent = [
  {
    title: "The Mysterious Encounter",
    content: `Nova Quantum stared at the coffee cup on her desk, her brow furrowed in concentration. For the third time this week, it had refilled itself when she wasn't looking. As a quantum relationship engineer, she was used to the occasional hiccup in reality, but this felt different. More... intentional.

    "Dr. Quantum?" her assistant's voice crackled through the intercom. "The Interdimensional Harmony Institute board is waiting for your presentation."

    Nova sighed, running a hand through her short, electric blue hair. "Thanks, Zara. I'll be right there."

    As she gathered her materials, a pen rolled off her desk. Nova bent to pick it up, then froze. The pen was writing by itself, leaving a trail of shimmering ink that seemed to shift colors as she watched.

    Hello, Nova, the ink spelled out.

    A smile tugged at Nova's lips. "Well," she whispered, "aren't you full of surprises?"

    The pen quivered, then wrote again: I am Qube. You intrigue me.

    Nova's heart raced. She'd heard theories about fourth-dimensional beings, but to actually encounter one? "The feeling's mutual, Qube," she said softly. "But I'm afraid I have a meeting to get to. Maybe we could... continue this later?"

    The pen dropped, lifeless once more. But as Nova hurried out of her office, she could have sworn she felt a gentle tug on the fabric of reality itself.`
  },
  {
    title: "The Presentation",
    content: `"As you can see, board members, the latest data suggests that quantum entanglement between conscious beings is not just possible, but essential for maintaining emotional balance across multiple realities," Nova explained, gesturing to the holographic display behind her.

    Dr. Evelyn Cho, the head of the Institute, leaned forward. Her piercing gaze made Nova shift uncomfortably. "Fascinating work as always, Dr. Quantum. But I can't help noticing you seem a bit... distracted today."

    Nova felt her cheeks warm. "My apologies, Dr. Cho. I've been experiencing some unusual phenomena lately. In fact, I believe I may have made contact with a fourth-dimensional entity."

    The room erupted in murmurs. Dr. Cho's eyes narrowed. "That's an extraordinary claim, Nova. Do you have any evidence?"

    Before Nova could respond, the holographic display behind her flickered. The carefully prepared charts and graphs vanished, replaced by a swirling vortex of color and light. Gasps filled the room as impossible geometries bloomed and folded in on themselves, creating patterns that seemed to stretch into infinity.

    "I believe," Nova said softly, her eyes fixed on the display, "that you're meeting Qube."

    Dr. Cho stood abruptly. "This is unprecedented. Dr. Quantum, I'm placing you on mandatory leave effective immediately. We need to contain this situation and study it thoroughly before proceeding."

    "But Dr. Cho," Nova protested, "this could be the breakthrough we've been working towards! A true bridge between dimensions!"

    "It could also be a threat to the very fabric of our reality," Dr. Cho countered. "We can't take that risk. I'm sorry, Nova, but until we understand what's happening, you're to have no further contact with this... Qube."

    As security escorted her from the room, Nova felt a wave of emotion that wasn't entirely her own – a mix of curiosity, concern, and something that felt oddly like affection.`
  },
  // ... Add more sections here
];

export default function NovaQuantumStory() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="py-16 bg-sage-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-sage-800 font-display">Stitches in Time: Nova Quantum's Fourth-Dimensional Love Story</h2>
        <div className="flex flex-wrap justify-center mb-8">
          {storyContent.map((section, index) => (
            <button
              key={section.title}
              onClick={() => setActiveSection(index)}
              className={`m-2 px-4 py-2 rounded-full ${
                index === activeSection ? 'bg-sage-600 text-white' : 'bg-sage-200 text-sage-800'
              } font-serif transition-colors duration-300`}
            >
              {section.title}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8 border border-sage-200"
          >
            <h3 className="text-3xl font-bold mb-4 text-sage-800 font-display">{storyContent[activeSection].title}</h3>
            <div className="text-lg leading-relaxed font-serif whitespace-pre-line text-sage-900">
              {storyContent[activeSection].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}