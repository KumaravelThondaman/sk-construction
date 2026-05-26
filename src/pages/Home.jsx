import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaHome, FaTools, FaHardHat, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import ServiceCard from '../components/ServiceCard';

// Home page with hero section, services highlights, and testimonials
const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: <FaHome />,
      title: 'Residential Construction',
      description: 'Custom homes built with precision and care, tailored to your lifestyle and preferences.',
    },
    {
      icon: <FaBuilding />,
      title: 'Commercial Projects',
      description: 'State-of-the-art commercial buildings designed for functionality and aesthetic appeal.',
    },
    {
      icon: <FaTools />,
      title: 'Renovations',
      description: 'Transform your existing space with our expert renovation and remodeling services.',
    },
    {
      icon: <FaHardHat />,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery within budget.',
    },
  ];

  const testimonials = [
    {
      name: 'John Anderson',
      role: 'Homeowner',
      text: 'BuildPro transformed our vision into a stunning reality. Their attention to detail and commitment to quality is unmatched.',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Business Owner',
      text: 'The commercial space they built for us exceeded all expectations. Professional, timely, and within budget.',
    },
    {
      name: 'Michael Roberts',
      role: 'Property Developer',
      text: 'Working with BuildPro has been a pleasure. Their expertise in construction management saved us both time and money.',
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 39, 68, 0.7), rgba(15, 39, 68, 0.7)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')`,
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building <span className="text-gold">Tomorrow's</span> World Today
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            With over 25 years of experience, BuildPro Construction delivers excellence
            in residential, commercial, and industrial construction projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white hover:border-gold hover:text-gold text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Welcome to <span className="text-gold">BuildPro</span> Construction
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We are a full-service construction company dedicated to delivering outstanding
              results. From concept to completion, we bring your vision to life with integrity,
              innovation, and craftsmanship.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12" data-aos="fade-up" data-aos-delay="200">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '25+', label: 'Years Experience' },
              { number: '150+', label: 'Team Members' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4">
                <p className="text-3xl md:text-4xl font-bold text-gold">{stat.number}</p>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of construction services to meet all your building needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our <span className="text-gold">Clients</span> Say
            </h2>
          </div>

          <div className="relative" data-aos="fade-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 text-center">
              <FaQuoteLeft className="text-gold text-3xl mx-auto mb-6" />
              <p className="text-white text-lg md:text-xl italic mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-gold font-semibold">{testimonials[currentTestimonial].name}</p>
              <p className="text-gray-300 text-sm">{testimonials[currentTestimonial].role}</p>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="text-white hover:text-gold transition-colors p-2"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              {/* Dots */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-gold' : 'bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="text-white hover:text-gold transition-colors p-2"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gold">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today for a free consultation and let us bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-dark hover:bg-primary text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
