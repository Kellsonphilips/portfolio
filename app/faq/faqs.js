import { useLanguage } from '@/components/LanguageContext';

export const useFaqs = () => {
  const { t } = useLanguage();
  return [
    { question: t('faq.q1.question'), answer: t('faq.q1.answer') },
    { question: t('faq.q2.question'), answer: t('faq.q2.answer') },
    { question: t('faq.q3.question'), answer: t('faq.q3.answer') },
    { question: t('faq.q4.question'), answer: t('faq.q4.answer') },
    { question: t('faq.q5.question'), answer: t('faq.q5.answer') },
    { question: t('faq.q6.question'), answer: t('faq.q6.answer') },
    { question: t('faq.q7.question'), answer: t('faq.q7.answer') },
    { question: t('faq.q8.question'), answer: t('faq.q8.answer') },
  ];
};

export const faqKeys = [
  { question: 'faq.q1.question', answer: 'faq.q1.answer' },
  { question: 'faq.q2.question', answer: 'faq.q2.answer' },
  { question: 'faq.q3.question', answer: 'faq.q3.answer' },
  { question: 'faq.q4.question', answer: 'faq.q4.answer' },
  { question: 'faq.q5.question', answer: 'faq.q5.answer' },
  { question: 'faq.q6.question', answer: 'faq.q6.answer' },
  { question: 'faq.q7.question', answer: 'faq.q7.answer' },
  { question: 'faq.q8.question', answer: 'faq.q8.answer' },
];