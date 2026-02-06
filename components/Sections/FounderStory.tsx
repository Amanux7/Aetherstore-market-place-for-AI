import { Quote, Linkedin, Twitter } from 'lucide-react';

export const FounderStory = () => {
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
                            Our Story
                        </h2>
                        <p style={{
                            fontSize: 16,
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6
                        }}>
                            The vision behind AetherStore
                        </p>
                    </div>

                    {/* Founder Card */}
                    <div style={{
                        background: 'linear-gradient(180deg, rgba(23, 23, 23, 0.6) 0%, rgba(10, 10, 10, 0.6) 100%)',
                        border: '1px solid var(--border-secondary)',
                        borderRadius: 20,
                        padding: 48,
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Quote Icon */}
                        <div style={{
                            position: 'absolute',
                            top: 32,
                            right: 32,
                            opacity: 0.1
                        }}>
                            <Quote style={{ width: 80, height: 80 }} />
                        </div>

                        {/* Content */}
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            {/* Founder Info */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
                                <div style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    background: 'var(--gradient-primary)',
                                    flexShrink: 0
                                }} />
                                <div>
                                    <h3 style={{
                                        fontSize: 24,
                                        fontWeight: 700,
                                        marginBottom: 4,
                                        color: 'white'
                                    }}>
                                        Alex Rivera
                                    </h3>
                                    <p style={{
                                        fontSize: 14,
                                        color: 'var(--text-secondary)',
                                        marginBottom: 12
                                    }}>
                                        Founder & CEO
                                    </p>
                                    <div style={{ display: 'flex', gap: 12 }}>
                                        <a
                                            href="#"
                                            style={{
                                                width: 32,
                                                height: 32,
                                                borderRadius: '50%',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'var(--text-secondary)',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            <Linkedin style={{ width: 16, height: 16 }} />
                                        </a>
                                        <a
                                            href="#"
                                            style={{
                                                width: 32,
                                                height: 32,
                                                borderRadius: '50%',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'var(--text-secondary)',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            <Twitter style={{ width: 16, height: 16 }} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Story */}
                            <div style={{
                                fontSize: 16,
                                lineHeight: 1.8,
                                color: 'var(--text-secondary)',
                                marginBottom: 24
                            }}>
                                <p style={{ marginBottom: 20 }}>
                                    "I started AetherStore after spending years navigating the fragmented AI tools landscape. As a product designer, I was constantly switching between dozens of platforms, managing multiple subscriptions, and struggling to find the right tool for each task."
                                </p>
                                <p style={{ marginBottom: 20 }}>
                                    "The breaking point came when I realized I was spending more time managing tools than actually creating. I knew there had to be a better way — a single platform where professionals could discover, compare, and access the best AI tools without the chaos."
                                </p>
                                <p>
                                    "AetherStore is built for creators, by creators. Our mission is simple: make AI accessible, affordable, and integrated into your daily workflow. We curate only the best tools, negotiate better pricing, and provide seamless integrations so you can focus on what matters — your work."
                                </p>
                            </div>

                            {/* Stats */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                                gap: 24,
                                marginTop: 40,
                                paddingTop: 32,
                                borderTop: '1px solid var(--border-secondary)'
                            }}>
                                {[
                                    { label: 'Users', value: '50K+' },
                                    { label: 'Tools', value: '200+' },
                                    { label: 'Countries', value: '120+' },
                                    { label: 'Uptime', value: '99.9%' }
                                ].map((stat, index) => (
                                    <div key={index} style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: 28,
                                            fontWeight: 700,
                                            marginBottom: 4,
                                            background: 'var(--gradient-primary)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                            {stat.value}
                                        </div>
                                        <div style={{
                                            fontSize: 12,
                                            color: 'var(--text-tertiary)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
