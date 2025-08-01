import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { X, Instagram, Youtube, MessageCircle, Link, DollarSign, Cpu } from 'lucide-react'
import './App.css'

// Import images
import dolphinMain from './assets/dolphin_main.png'
import dolphinAboutUs from './assets/dolphin_about_us.webp'
import dolphinPresale from './assets/dolphin_presale.webp'
import dolphinTokenomicsChart from './assets/dolphin_tokenomics_chart.jpeg'
import dolphinRoadmap from './assets/dolphin_roadmap.webp'
import dolphinFaq from './assets/dolphin_faq.webp'
import teamDolphinIT from './assets/team_dolphin_it.png'
import teamCryptoAdvisor from './assets/team_crypto_advisor.png'
import teamDolphinMarketing from './assets/team_dolphin_2.png'
import teamDolphinCPA from './assets/team_dolphin_1.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'web3', label: 'Web3 & NFT' },
    { id: 'dao', label: 'DAO' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'about', label: 'About Us' },
    { id: 'team', label: 'Team' },
    { id: 'how-to-buy', label: 'How To Buy' },
    { id: 'tokenomics', label: 'Tokenomics' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'faq', label: 'FAQ' },
    { id: 'whitepaper', label: 'Whitepaper' }
  ]

  // Team members data
  const teamMembers = [
    {
      name: '',
      role: 'IT Specialist',
      description: 'Our IT Specialist ensures that all our technological operations run smoothly and efficiently. With a keen eye for detail and a deep understanding of complex systems, they are the backbone of our digital infrastructure, ensuring robust security and seamless functionality.',
      image: teamDolphinIT
    },
    {
      name: '',
      role: 'Crypto Advisor',
      description: 'Our Crypto Advisor provides invaluable insights into the cryptocurrency landscape, helping us navigate the complexities of the blockchain world. Their expertise in crypto economics and market trends ensures that Dolphin remains a leader in the token economy.',
      image: teamCryptoAdvisor
    },
    {
      name: '',
      role: 'Digital Marketing Specialist',
      description: 'The Digital Marketing Specialist crafts and executes effective marketing strategies to enhance our online presence and engage with our audience. Their innovative approach and deep understanding of digital trends help us connect with the right audience and drive our growth.',
      image: teamDolphinMarketing
    },
    {
      name: '',
      role: 'CPA Certified Public Accountant',
      description: 'Our Certified Public Accountant brings professional financial expertise and regulatory compliance knowledge to the Dolphin project. With extensive experience in financial auditing, tax planning, and corporate finance, they ensure our financial operations meet the highest standards of transparency and accountability.',
      image: teamDolphinCPA
    }
  ]

  // Roadmap data
  const roadmapData = [
    {
      quarter: 'Q3 2025',
      items: [
        'Launch of Dolphin NFT Marketplace with exclusive collections',
        'Implementation of DAO governance platform with voting mechanisms',
        'Strategic partnerships with major DeFi protocols and Web3 platforms',
        'Launch of Dolphin Staking Program with attractive APY rewards'
      ]
    },
    {
      quarter: 'Q4 2025',
      items: [
        'Integration with major metaverse platforms for virtual experiences',
        'Launch of Dolphin Academy - Educational platform for crypto newcomers',
        'Cross-chain bridge development for multi-blockchain compatibility',
        'Tier 1 exchange listings (Binance, Coinbase, Kraken)',
        'Launch of Dolphin Mobile App with wallet integration'
      ]
    },
    {
      quarter: 'Q1 2026',
      items: [
        'Dolphin DeFi Suite launch (Lending, Borrowing, Yield Farming)',
        'AI-powered trading bot integration for DOL holders',
        'Launch of Dolphin Launchpad for incubating new projects',
        'Real-world utility partnerships (Payments, E-commerce integration)',
        'Community-driven venture capital fund establishment'
      ]
    },
    {
      quarter: 'Q2 2026',
      items: [
        'Global expansion with regional community hubs worldwide',
        'Dolphin Gaming Ecosystem with Play-to-Earn mechanics',
        'Enterprise blockchain solutions powered by DOL token',
        'Carbon-neutral blockchain initiative and environmental partnerships',
        'IPO preparation and traditional finance market entry strategy'
      ]
    }
  ]

  // FAQ data
  const faqData = [
    {
      question: 'What is Dolphin Solana?',
      answer: 'Dolphin Solana is a meme-based cryptocurrency project built on the Solana blockchain that combines humor, community power, and Web3 innovations such as NFTs and DAO governance.'
    },
    {
      question: 'What makes Dolphin Solana different from other meme coins?',
      answer: 'Dolphin Solana isn\'t just a meme — it\'s a Web3-powered ecosystem with real use cases, DAO integration, and a fun approach to digital ownership using NFTs and community voting mechanisms.'
    },
    {
      question: 'What is the utility of the $DOLPHIN token?',
      answer: 'Access to exclusive NFTs, Participation in community governance (DAO), Staking rewards and giveaways, Voting on key project decisions.'
    },
    {
      question: 'What is a DAO and how is it used in Dolphin Solana?',
      answer: 'A DAO (Decentralized Autonomous Organization) is a community-led entity with no central authority. In Dolphin Solana, holders of the token can vote on project proposals, roadmap changes, and treasury decisions.'
    },
    {
      question: 'What are NFTs in this project?',
      answer: 'Dolphin NFTs are collectible cartoon-style dolphins with varying rarity. They grant access to exclusive features, giveaways, and may be used in future Web3 gaming and metaverse experiences.'
    },
    {
      question: 'How is the token supply distributed?',
      answer: 'Please refer to the Tokenomics section for detailed distribution.'
    },
    {
      question: 'Where can I buy $DOLPHIN tokens?',
      answer: 'Soon, $DOLPHIN will be available for presale on Smith Tool, followed by listings on DEX platforms like Raydium and Jupiter.'
    },
    {
      question: 'Is the liquidity locked?',
      answer: 'Yes, a portion of the liquidity pool will be locked to protect investors and ensure long-term trust not less than 4 month.'
    }
  ]

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-900/95 backdrop-blur-sm border-b border-purple-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={dolphinMain} alt="Dolphin Logo" className="w-10 h-10 rounded-full" />
              <span className="text-white font-bold text-xl">Dolphin</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-purple-600 text-white'
                      : 'text-purple-200 hover:bg-purple-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-200 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-purple-800 rounded-lg mt-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                      activeSection === item.id
                        ? 'bg-purple-600 text-white'
                        : 'text-purple-200 hover:bg-purple-700 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                DOLPHIN
                <br />
                <span className="text-4xl lg:text-5xl">Solana: More than just a "Meme Coin" for laughs...</span>
              </h1>
              <p className="text-xl mb-6">
                It's a meme coin with purpose, a smile, and real utility 😄🐬
              </p>
              <p className="text-lg mb-8">Its idea is to empower token holders to:</p>
              <ul className="text-lg space-y-2 mb-8">
                <li>• Participate</li>
                <li>• Enjoy</li>
                <li>• And Benefit</li>
              </ul>
              <p className="text-lg mb-8">
                from Web3, NFT, and DAO technologies, even if they're not experts.
              </p>
              
              {/* Social Media Links */}
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">Follow Us:</span>
                <div className="flex space-x-2">
                  <a href="#" className="bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors">
                    <X className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-pink-600 text-white p-2 rounded hover:bg-pink-700 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={dolphinMain} alt="Dolphin Main" className="w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Web3 Section */}
      <section id="web3" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🌐 What is Web3, simply put?</h2>
            <p className="text-xl text-purple-200">Web3 is the new generation of the internet, where:</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Web2 (Old)</h3>
              <ul className="text-white space-y-2">
                <li>• You are just a user</li>
                <li>• The company owns your data</li>
                <li>• No income from your usage</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Web3 (New)</h3>
              <ul className="text-white space-y-2">
                <li>• You are also an owner and contributor</li>
                <li>• You own your data and wallet</li>
                <li>• You can earn by participating and interacting</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-6">🎯 In Dolphin Solana, token holders can use Web3 to get:</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-lg text-center">
              <h4 className="text-xl font-bold text-white">1. Exclusive Content</h4>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-lg text-center">
              <h4 className="text-xl font-bold text-white">2. NFT Privileges</h4>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-lg text-center">
              <h4 className="text-xl font-bold text-white">3. Voting Rights (DAO)</h4>
            </div>
          </div>
        </div>
      </section>

      {/* NFT Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🖼️ What are NFTs and why does Dolphin use them?</h2>
            <p className="text-xl text-purple-200 mb-8">NFT = Unique Digital Ownership.</p>
            <p className="text-lg text-purple-200">In Dolphin Solana, NFTs will be:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">As VIP Access Cards</h3>
              <p className="text-white mb-4">Granting you access to:</p>
              <ul className="text-white space-y-2">
                <li>• Exclusive Competitions 🎯</li>
                <li>• Private Chats 🎤</li>
                <li>• Tokens and Rewards 🎁</li>
                <li>• Market Analysis Tools 🧠</li>
                <li>• Satirical Entertainment Content 🎬</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">✅ Token holders can easily buy or earn these NFTs.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAO Section */}
      <section id="dao" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🏛️ What is DAO and why is it important?</h2>
            <p className="text-xl text-purple-200 mb-4">DAO = Self-governing Community.</p>
            <p className="text-lg text-purple-200 mb-8">Instead of the "project team" deciding everything...</p>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-6">The community (token holders) votes on:</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-2">✅ What features to prioritize</h4>
              <p className="text-gray-600">The community chooses which tools, utilities, or NFT drops should come first.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-2">✅ How to spend the treasury</h4>
              <p className="text-gray-600">Token holders vote on funding allocations for marketing, development, or liquidity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-2">✅ Which partnerships to form</h4>
              <p className="text-gray-600">Decide on collaborations with Web3 projects, influencers, and exchanges.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-2">✅ When to launch new phases</h4>
              <p className="text-gray-600">Community-driven input determines timing for roadmap milestones like DAO upgrades or token burns.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-white">🎯 This means you are not just an "investor", you are a partner and decision-maker.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🎯 How does the token holder actually benefit?</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-500 to-purple-600">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-bold">Feature</th>
                  <th className="px-6 py-4 text-left text-white font-bold">What do you get?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">👛 Owning the token</td>
                  <td className="px-6 py-4">You get special NFTs or access to Web3 features.</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">🗳️ Participating in DAO</td>
                  <td className="px-6 py-4">You vote on project decisions.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">🎁 Airdrops and Giveaways</td>
                  <td className="px-6 py-4">You get rewards for participation and activity.</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">🧠 Educational and Entertainment Content</td>
                  <td className="px-6 py-4">Through the NFT or the project's dedicated Web3 platform.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">📈 Project Future</td>
                  <td className="px-6 py-4">If Dolphin succeeds and expands, the token's value will rise significantly.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src={dolphinAboutUs} alt="About Us Dolphin" className="w-full max-w-md mx-auto" />
            </div>
            <div className="lg:w-1/2 text-white">
              <h2 className="text-4xl font-bold mb-6">About Dolphin Solana</h2>
              <p className="text-lg mb-6">
                At Dolphin Solana, we believe that cryptocurrencies can be more than just an investment; they can be a fun and rewarding experience. Inspired by the playful and intelligent spirit of the dolphin, we strive to build a community where everyone can participate, enjoy, and benefit from the exciting world of Web3.
              </p>
              <p className="text-lg">
                We combine the appeal of a meme coin with real utility, offering DOL token holders a unique opportunity for digital ownership, participation in decision-making, and access to exclusive content and valuable rewards. Join us on this journey to redefine what a meme coin can be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Meet our team</h2>
            <p className="text-lg text-purple-200">
              At Dolphin, we are proud to introduce a diverse team of professionals dedicated to driving innovation and success in the blockchain and e-commerce spaces. Each team member brings unique expertise and a passion for excellence, ensuring that Dolphin remains at the forefront of industry advancements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <img src={member.image} alt={member.role} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.role}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presale Section */}
      <section id="how-to-buy" className="py-16 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src={dolphinPresale} alt="Presale Dolphin" className="w-full max-w-md mx-auto" />
            </div>
            <div className="lg:w-1/2 text-white">
              <h2 className="text-4xl font-bold mb-6">PRESALE & PUBLIC SALE</h2>
              <h3 className="text-2xl font-bold mb-4">PRESALE ON SMITH TOOLS</h3>
              <h3 className="text-2xl font-bold mb-8">COMING SOON - STAY TUNED!</h3>
              
              <div className="bg-white/10 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold mb-4">🛠️ About Smith Tools</h4>
                <p className="mb-4">Smith Tools is a premier platform for secure and transparent presale operations in the cryptocurrency space. It provides investors with:</p>
                <ul className="space-y-2">
                  <li>✅ <strong>Trust & Security:</strong> Advanced security protocols to protect your investments</li>
                  <li>✅ <strong>Transparency:</strong> Complete visibility into presale processes and fund allocation</li>
                  <li>✅ <strong>Safety:</strong> Verified smart contracts and audited presale mechanisms</li>
                  <li>✅ <strong>User-Friendly:</strong> Simple and intuitive interface for seamless participation</li>
                </ul>
              </div>
              
              <p className="text-lg mb-6">
                For now, ensure you have set up a cryptocurrency wallet that supports Solana-based tokens, such as:
              </p>
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  SOLFLARE WALLET
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  PHANTOM WALLET
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Tokenomics</h2>
            <p className="text-lg text-purple-200">Dolphin (DOL) token distribution is as follows:</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src={dolphinTokenomicsChart} alt="Tokenomics Chart" className="w-full max-w-md mx-auto rounded-lg" />
            </div>
            <div className="lg:w-1/2 text-white">
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-lg">30% Pre-sales on Smith Tool</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-lg">20% Liquidity pool DEX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-lg">15% Team & Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-lg">13% Marketing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-lg">10% Airdrop</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-lg">12% Burned on old smart contract</span>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Token Details</h3>
                <ul className="space-y-2">
                  <li><strong>Name:</strong> Dolphin</li>
                  <li><strong>Symbol:</strong> DOL</li>
                  <li><strong>Network:</strong> Solana</li>
                  <li><strong>Total Supply:</strong> 77,777,777.7</li>
                  <li><strong>Contract Address:</strong> GPfzbTska6x6KyZH8FVimjcH3YxgN5kvVwDc8f8dsaZN</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Roadmap</h2>
            <img src={dolphinRoadmap} alt="Roadmap" className="w-full max-w-md mx-auto mb-6 rounded-lg" />
            <p className="text-lg text-purple-200">
              Our roadmap outlines our strategic milestones and objectives for the Dolphin project. Here's what you can expect in the coming months:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {roadmapData.map((quarter, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">{quarter.quarter}:</h3>
                <ul className="text-purple-200 space-y-2">
                  {quarter.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions (FAQ)</h2>
            <img src={dolphinFaq} alt="FAQ" className="w-full max-w-md mx-auto mb-6 rounded-lg" />
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-purple-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <img src={dolphinMain} alt="Contact Dolphin" className="w-32 h-32 mx-auto mb-6 rounded-full" />
            <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-lg text-purple-200 mb-4">Have questions or feedback? We'd love to hear from you!</p>
            <p className="text-lg text-purple-200">
              Have questions or feedback? We'd love to hear from you! Reach out to us at{' '}
              <a href="mailto:info@dolphinmemetokens.com" className="text-blue-400 hover:text-blue-300 underline">
                info@dolphinmemetokens.com
              </a>{' '}
              to connect with the team!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src={dolphinMain} alt="Dolphin Logo" className="w-8 h-8 rounded-full" />
            <span className="text-white font-bold text-lg">Dolphin Meme Token</span>
          </div>
          <p className="text-purple-200 text-sm">
            © 2025 Dolphin Meme Token. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

