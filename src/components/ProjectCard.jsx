// Reusable project card for the portfolio grid
const ProjectCard = ({ image, title, category, description }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      data-aos="fade-up"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-primary-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-gold text-xs font-semibold uppercase tracking-wider">{category}</span>
        <h3 className="text-white font-bold text-lg mt-1">{title}</h3>
        <p className="text-gray-200 text-sm mt-2">{description}</p>
      </div>
      {/* Visible title bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary-dark/80 p-3 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-white font-semibold text-sm">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
