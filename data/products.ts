export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  features: string[];
  gradient: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nebula AI',
    description: 'Generative design assistant that transforms sketches into photorealistic rendering in real-time.',
    price: 49,
    category: 'Design',
    features: ['Real-time rendering', 'Style transfer', '3D model export'],
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    id: '2',
    name: 'SonicForge',
    description: 'Professional voice cloning and audio synthesis engine for content creators.',
    price: 29,
    category: 'Audio',
    features: ['Voice cloning', 'Noise reduction', 'Multi-language'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: '3',
    name: 'CodeStream',
    description: 'Intelligent code completion and refactoring agent that learns your codebase style.',
    price: 99,
    category: 'Development',
    features: ['Context awareness', 'Refactoring', 'Test generation'],
    gradient: 'from-emerald-400 to-teal-500'
  },
  {
    id: '4',
    name: 'DataSense',
    description: 'Automated data analysis and visualization tool that finds hidden patterns instantly.',
    price: 79,
    category: 'Analytics',
    features: ['Auto-visualization', 'Trend forecasting', 'SQL generation'],
    gradient: 'from-amber-400 to-orange-500'
  },
  {
    id: '5',
    name: 'CopyMind',
    description: 'Marketing copy generator optimized for high conversion rates.',
    price: 39,
    category: 'Marketing',
    features: ['SEO optimization', 'Tone matching', 'A/B testing ideas'],
    gradient: 'from-rose-400 to-red-500'
  },
  {
    id: '6',
    name: 'VideoVault',
    description: 'AI-powered video editor that automatically cuts silence and adds captions.',
    price: 59,
    category: 'Video',
    features: ['Silence removal', 'Auto-captions', 'Transition effects'],
    gradient: 'from-indigo-400 to-violet-500'
  }
];
