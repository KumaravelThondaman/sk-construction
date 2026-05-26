import { FaBullseye, FaEye, FaHistory } from 'react-icons/fa';

// About Us page with company history, mission, vision, and team
const About = () => {
  const teamMembers = [
    {
      name: 'Robert Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80',
      description: '30+ years in construction industry leadership.',
    },
    {
      name: 'Emily Carter',
      role: 'Chief Architect',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80',
      description: 'Award-winning architect with innovative designs.',
    },
    {
      name: 'David Williams',
      role: 'Project Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
      description: 'Expert in managing large-scale construction projects.',
    },
    {
      name: 'Lisa Thompson',
      role: 'Safety Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80',
      description: 'Ensuring highest safety standards on all sites.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 39, 68, 0.8), rgba(15, 39, 68, 0.8)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Discover our story, our values, and the team behind BuildPro Construction.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                alt="Construction site"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div data-aos="fade-left">
              <div className="flex items-center space-x-3 mb-4">
                <FaHistory className="text-gold text-2xl" />
                <h2 className="text-3xl font-bold text-primary-dark">Our Story</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 1995, BuildPro Construction started as a small family-owned business with
                a simple mission: to build quality structures that stand the test of time. Over the past
                25+ years, we have grown into one of the region's most trusted construction companies.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                From our first residential project to now managing multi-million dollar commercial
                developments, our commitment to excellence has never wavered. We've completed over 500
                projects, each one a testament to our dedication to craftsmanship and client satisfaction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, with a team of 150+ skilled professionals, we continue to push the boundaries
                of what's possible in modern construction while maintaining the personal touch that
                has defined us since day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-gold" data-aos="fade-up">
              <div className="flex items-center space-x-3 mb-4">
                <FaBullseye className="text-gold text-2xl" />
                <h3 className="text-2xl font-bold text-primary-dark">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional construction services that exceed client expectations through
                innovation, integrity, and unwavering commitment to quality. We build not just
                structures, but lasting relationships with every client we serve.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-gold" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center space-x-3 mb-4">
                <FaEye className="text-gold text-2xl" />
                <h3 className="text-2xl font-bold text-primary-dark">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative construction company, known for transforming
                communities through sustainable building practices and creating spaces that inspire
                generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of professionals brings decades of combined experience to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/30 transition-all duration-300" />
                </div>
                <h3 className="text-primary-dark font-bold text-lg">{member.name}</h3>
                <p className="text-gold font-medium text-sm">{member.role}</p>
                <p className="text-gray-500 text-sm mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
