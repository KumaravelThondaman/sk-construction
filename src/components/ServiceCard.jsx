// Reusable service card component with icon, title, and description
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-gold"
      data-aos="fade-up"
    >
      <div className="text-gold text-4xl mb-4">{icon}</div>
      <h3 className="text-primary-dark font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
