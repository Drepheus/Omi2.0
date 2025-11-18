import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function BlurText({ text, className = '', delay = 0 }: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(' ');

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => {
        const delayPerWord = 0.1;
        const startTime = index * delayPerWord + delay;
        
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={isInView ? { 
              opacity: 1, 
              filter: 'blur(0px)' 
            } : {}}
            transition={{
              duration: 0.4,
              delay: startTime,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}