'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText
        title={<>Insight about Metaversus?</>}
        textStyles="text-center"
      />
    </motion.div>
    <div className="mt-[50px] flex flex-col gap-[30px]">
      {insights.map((item, index) => (
        <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
      ))}
    </div>
  </section>
);

export default Insights;
