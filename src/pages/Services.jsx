import { Link } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaTools,
  FaHardHat,
  FaPaintRoller,
  FaRoad,
} from "react-icons/fa";

// Services page with detailed service listings
const Services = () => {
  const services = [
    {
      icon: <FaHome className="text-4xl" />,
      title: "Residential Construction",
      description:
        "From custom luxury homes to affordable housing, we build residential properties that combine style, comfort, and durability. Our team works closely with homeowners to create spaces that truly feel like home.",
      features: [
        "Custom Home Design",
        "Multi-Family Housing",
        "Green Building",
        "Smart Home Integration",
      ],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80",
    },
    {
      icon: <FaBuilding className="text-4xl" />,
      title: "Commercial Projects",
      description:
        "We deliver state-of-the-art commercial buildings designed for maximum functionality and visual impact. Our expertise spans office complexes, retail spaces, and mixed-use developments.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Warehouses",
        "Mixed-Use Developments",
      ],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80",
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: "Renovations & Remodeling",
      description:
        "Transform your existing space with our expert renovation services. Whether it's a kitchen remodel, bathroom upgrade, or complete home transformation, we bring new life to your property.",
      features: [
        "Kitchen Remodeling",
        "Bathroom Upgrades",
        "Basement Finishing",
        "Structural Modifications",
      ],
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=500&q=80",
    },
    {
      icon: <FaHardHat className="text-4xl" />,
      title: "Industrial Construction",
      description:
        "Specialized in building industrial facilities that meet strict safety and operational standards. We handle everything from manufacturing plants to processing facilities.",
      features: [
        "Manufacturing Plants",
        "Storage Facilities",
        "Processing Centers",
        "Clean Rooms",
      ],
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&q=80",
    },
    {
      icon: <FaPaintRoller className="text-4xl" />,
      title: "Interior Design",
      description:
        "Our interior design team creates beautiful, functional spaces that reflect your personality and lifestyle. From concept to execution, we handle every detail.",
      features: [
        "Space Planning",
        "Material Selection",
        "Furniture Design",
        "Lighting Design",
      ],
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=80",
    },
    {
      icon: <FaRoad className="text-4xl" />,
      title: "Infrastructure Development",
      description:
        "Building the foundations of communities through roads, bridges, and public infrastructure projects. We contribute to sustainable urban development.",
      features: [
        "Road Construction",
        "Bridge Building",
        "Drainage Systems",
        "Public Facilities",
      ],
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500&q=80",
    },
  ];

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 39, 68, 0.8), rgba(15, 39, 68, 0.8)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your unique
            needs and exceed expectations.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center mb-16 last:mb-0`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="text-gold mb-3">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 mb-8">
            Every project is unique. Contact us to discuss your specific
            requirements and get a tailored proposal.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
