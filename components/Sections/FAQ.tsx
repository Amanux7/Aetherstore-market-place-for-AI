import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How do I get started with AetherStore?",
        answer: "Simply browse our curated collection of AI tools, select the ones that fit your workflow, and subscribe with a few clicks. All tools come with a 14-day free trial."
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer: "Yes, absolutely. You can cancel any subscription at any time from your dashboard. No questions asked, no hidden fees."
    },
    {
        question: "Do you offer team pricing?",
        answer: "Yes! We offer special pricing for teams of 5 or more. Contact our sales team for custom enterprise plans with dedicated support."
    },
    {
        question: "Are the tools integrated with each other?",
        answer: "Many of our tools offer API integrations and work seamlessly together. Check each tool's documentation for specific integration capabilities."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and offer invoice billing for enterprise customers. All payments are processed securely through Stripe."
    },
    {
        question: "Is there customer support?",
        answer: "Yes! We provide 24/7 email support and live chat during business hours. Enterprise customers get dedicated account managers."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ maxWidth: 800, margin: '0 auto' }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: 64 }}>
                        <h2 style={{
                            fontSize: 36,
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            marginBottom: 12,
                            color: 'white'
                        }}>
                            Frequently Asked Questions
                        </h2>
                        <p style={{
                            fontSize: 16,
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6
                        }}>
                            Everything you need to know about AetherStore
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                style={{
                                    background: 'linear-gradient(180deg, rgba(23, 23, 23, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%)',
                                    border: '1px solid var(--border-secondary)',
                                    borderRadius: 16,
                                    overflow: 'hidden'
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    style={{
                                        width: '100%',
                                        padding: '24px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        color: 'white'
                                    }}
                                >
                                    <span style={{ fontSize: 16, fontWeight: 600, paddingRight: 20 }}>
                                        {faq.question}
                                    </span>
                                    <div style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: '50%',
                                        background: openIndex === index ? 'var(--indigo-500)' : 'rgba(255, 255, 255, 0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        transition: 'all 0.2s'
                                    }}>
                                        {openIndex === index ? (
                                            <Minus style={{ width: 16, height: 16 }} />
                                        ) : (
                                            <Plus style={{ width: 16, height: 16 }} />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div style={{
                                                padding: '0 24px 24px',
                                                fontSize: 15,
                                                lineHeight: 1.6,
                                                color: 'var(--text-secondary)'
                                            }}>
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Contact */}
                    <div style={{
                        marginTop: 48,
                        textAlign: 'center',
                        padding: 32,
                        background: 'rgba(99, 102, 241, 0.05)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        borderRadius: 16
                    }}>
                        <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 16 }}>
                            Still have questions?
                        </p>
                        <button className="btn btn-primary">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
