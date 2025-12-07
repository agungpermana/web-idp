// AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Import data from separate files or keep here
const principles = [
  {
    icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop",
    title: "Focus on customers",
    description: "We start with the customer and work backwards to earn and preserve customer trust. While we pay attention to competitors and listen to our advisors, our sole focus is to make our customers successful."
  },
  {
    icon: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop",
    title: "Move Fast",
    description: "We believe in our work's ability to change human lives. Because the cost of indecision can be more than the cost of a wrong decision, we emphasize high-speed decision making and execution while insisting on the highest standards."
  },
  {
    icon: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    title: "Dive deep",
    description: "We dive deep to understand the problem, enforce accountability, and drive clarity. We are flexible in using our skills to do whatever it takes to achieve our goal and no task is beneath us."
  }
];

const principles2 = [
  {
    icon: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=150&h=150&fit=crop",
    title: "Have grit",
    description: "We exhibit firmness of character and indomitable spirit when faced with challenges. We consistently back ourselves and inspire our teams to power through the low moments."
  },
  {
    icon: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=150&h=150&fit=crop",
    title: "Earn trust",
    description: "We build an environment of trust. We hyperfocus on inclusiveness, honest and direct communication, ownership, and being vocally self-critical. We care and watch out for each other. We're humble individually and proud together."
  },
  {
    icon: "https://images.unsplash.com/photo-1511984804822-e16ba72f5840?w=150&h=150&fit=crop",
    title: "Stay hungry",
    description: "We are eager to solve challenging problems and acquire new skills. We understand that staying on the bleeding edge is hard work and we are committed to invest in our continual development."
  }
];

const leadership = [
  {
    name: "Andrew Ng",
    title: "Executive Chairman and Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "https://www.linkedin.com/in/andrewyng/"
  },
  {
    name: "Dan Maloney",
    title: "CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "https://www.linkedin.com/in/danielwilliammaloney/"
  },
  {
    name: "Daniel Bibireata",
    title: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    linkedin: "https://www.linkedin.com/in/daniel-bibireata-7114264/"
  },
  {
    name: "Ron Baumert",
    title: "VP of Customer Success",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    linkedin: "https://www.linkedin.com/in/rbaumert/"
  },
  {
    name: "Stephen Halligan",
    title: "VP of Finance",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop",
    linkedin: "https://www.linkedin.com/in/stephenhalligan/"
  },
  {
    name: "Tony Li",
    title: "VP of Partners and Alliances",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    linkedin: "https://www.linkedin.com/in/tonyshili/"
  },
  {
    name: "John Meyer",
    title: "General Counsel",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&h=400&fit=crop",
    linkedin: "https://www.linkedin.com/in/john-meyer-a48013259/"
  }
];

const investors = [
  { logo: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=200&h=100&fit=crop", name: "Tech Ventures" },
  { logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=100&fit=crop", name: "Capital Partners" },
  { logo: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=200&h=100&fit=crop", name: "Insight Capital" },
  { logo: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=200&h=100&fit=crop", name: "Future Funds" },
  { logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=100&fit=crop", name: "AI Ventures" },
  { logo: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=200&h=100&fit=crop", name: "Growth Capital" },
  { logo: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=200&h=100&fit=crop", name: "Global Investors" },
  { logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=100&fit=crop", name: "Innovation Fund" },
  { logo: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=200&h=100&fit=crop", name: "Strategic Partners" },
  { logo: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=200&h=100&fit=crop", name: "Tech Angels" },
  { logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=100&fit=crop", name: "Venture Collective" },
  { logo: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=200&h=100&fit=crop", name: "Future Forward" }
];

const awards = [
  {
    company: "Forbes",
    description: "America's Best Startup Employers 2025",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    alt: "Forbes award logo",
    link: "#"
  },
  {
    company: "Will Reed Top 10",
    description: "The Culture List",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
    alt: "AI 100 logo",
    link: "#"
  },
  {
    company: "The Channel CO:",
    description: "10 Hottest AI Software Companies In 2023",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop",
    alt: "Fast Company award logo",
    link: "#"
  },
  {
    company: "AI Magazine",
    description: "Top 10: AI Startups",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    alt: "AI Magazine award logo",
    link: "#"
  },
  {
    company: "Fast Company",
    description: "15 Tech Startups to Watch in 2022",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
    alt: "Fast Company award logo",
    link: "#"
  },
  {
    company: "CB Insights",
    description: "Advanced Manufacturing 50",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop",
    alt: "CB Insights: Advanced Manufacturing 50",
    link: "#"
  },
  {
    company: "Vision Systems Design",
    description: "Innovation Award at Automate 2022",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    alt: "Vision Systems Innovators Award logo",
    link: "#"
  }
];

// Leader Card Component
const LeaderCard = ({ leader }) => (
  <div className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4">
      <img 
        src={leader.image}
        alt={`Photo of ${leader.name}`}
        className="rounded-full object-cover w-full h-full border-4 border-white shadow-lg"
        loading="lazy"
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
    <h3 className="font-bold text-lg mb-1 text-gray-800">{leader.name}</h3>
    <p className="mb-2">
      <a 
        href={leader.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 inline-flex items-center justify-center transition-colors duration-200"
      >
        <span className="mr-2 bg-blue-100 p-1 rounded">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </span>
        {leader.title}
      </a>
    </p>
  </div>
);

// Award Card Component
const AwardCard = ({ award }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
    <div className="relative overflow-hidden rounded-lg mb-4 flex-shrink-0">
      <img 
        src={award.image}
        alt={award.alt}
        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{award.company}</h3>
      <p className="text-gray-600 mb-4">{award.description}</p>
    </div>
    <a 
      href={award.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
    >
      Learn More
      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
);

const AboutUs = () => {
  return (
    <div id="main-content" className="font-sans min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              LandingAI helps companies across all{" "}
              <Link to="/industries" className="text-cyan-300 hover:text-white font-semibold underline decoration-2 underline-offset-4 transition-colors duration-200">
                industries
              </Link>{" "}
              take advantage of their vast set of vision data to build, deploy and scale Visual AI solutions.
            </p>
          </div>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Founding Story */}
        <section className="grid md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="order-1">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Our Founding Story</h2>
            </div>
            <div className="space-y-5 text-gray-600">
              <p className="leading-relaxed">
                LandingAI is redefining intelligent document processing with Agentic Document Extraction (ADE), 
                an API-first Agentic Document Intelligence platform that turns messy, multi-modal documents 
                and dark data into structured, auditable intelligence.
              </p>
              <p className="leading-relaxed">
                ADE enables enterprises to accelerate analytics, automation, and compliance by embedding 
                intelligent document extraction directly into their systems through secure, scalable APIs.
              </p>
              <p className="leading-relaxed">
                Founded by Andrew Ng, co-founder of Coursera and founding lead of Google Brain, LandingAI 
                combines deep learning innovation with enterprise-grade reliability and governance to help 
                organizations operationalize AI for the documents that drive their business.
              </p>
            </div>
          </div>
          <div className="order-2">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Our team collaborating"
                className="rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </section>

        {/* Team Culture */}
        <section className="grid md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="order-2 md:order-1">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Team culture and collaboration"
                className="rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-wider text-green-600 uppercase">Our Culture</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Team Culture</h2>
            </div>
            <div className="space-y-5 text-gray-600">
              <p className="leading-relaxed">
                We are a diverse team of passionate visionaries who are dedicated to democratizing the power of AI. 
                We are inspired by the promise of the next generation of AI in shaping the way we live, work, and play. 
                Our culture is fast-paced, collaborative, and constantly learning.
              </p>
              <p className="leading-relaxed">
                Our work environment is open so our teams feel the freedom to identify the best solutions 
                to the many questions that most are not asking.
              </p>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="mb-24 bg-gradient-to-br from-gray-50 to-blue-50 p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase">Our Foundation</span>
                <p className="text-2xl font-bold text-gray-800 mt-2">LandingAI Principles</p>
              </div>
              <div className="md:col-span-2">
                <div className="text-gray-600">
                  <p className="leading-relaxed">
                    LandingAI Principles (LAPs) are a codification of our way of work. Similar to our DNA, 
                    these principles guide us in our work and provide us with a framework for our decision 
                    making – be it customer engagement, product development, hiring and talent management, 
                    business operations, or sales &amp; support.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    These principles are intended to align our thought process as leaders of the organization 
                    and influence our way of working with people and teams across locations and with businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {principles.map((principle, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <img 
                    src={principle.icon}
                    alt={principle.title}
                    className="rounded-full object-cover w-full h-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Second Row of Principles */}
          <div className="grid md:grid-cols-3 gap-8">
            {principles2.map((principle, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <img 
                    src={principle.icon}
                    alt={principle.title}
                    className="rounded-full object-cover w-full h-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">Leadership Team</span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Meet Our Leadership
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {leadership.slice(0, 4).map((leader, index) => (
              <LeaderCard key={index} leader={leader} />
            ))}
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {leadership.slice(4, 7).map((leader, index) => (
              <LeaderCard key={index} leader={leader} />
            ))}
          </div>
        </section>

        {/* Investors Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-green-600 uppercase">Our Supporters</span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mt-2">
              Investors
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {investors.slice(0, 6).map((investor, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-32 h-16">
                  <img 
                    src={investor.logo}
                    alt={investor.name}
                    className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {investors.slice(6, 12).map((investor, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-32 h-16">
                  <img 
                    src={investor.logo}
                    alt={investor.name}
                    className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-24 bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase">Recognition</span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
              Awards and Recognition
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {awards.slice(0, 3).map((award, index) => (
              <AwardCard key={index} award={award} />
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {awards.slice(3, 6).map((award, index) => (
              <AwardCard key={index} award={award} />
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {awards.slice(6, 9).map((award, index) => (
              <AwardCard key={index} award={award} />
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default AboutUs;