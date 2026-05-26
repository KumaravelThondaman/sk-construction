import ProjectCard from '../components/ProjectCard';

// Projects/Portfolio page with grid layout of completed projects
const Projects = () => {
  const projects = [
    {
      title: 'Skyline Tower',
      category: 'Commercial',
      description: 'A 40-story commercial tower in downtown Manhattan with LEED Gold certification.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    },
    {
      title: 'Riverside Residences',
      category: 'Residential',
      description: 'Luxury waterfront apartments with modern amenities and stunning river views.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    },
    {
      title: 'Central Park Mall',
      category: 'Commercial',
      description: 'A 200,000 sq ft retail and entertainment complex serving the community.',
      image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=600&q=80',
    },
    {
      title: 'Green Valley Homes',
      category: 'Residential',
      description: 'Eco-friendly housing community with solar panels and sustainable materials.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    },
    {
      title: 'Metro Highway Bridge',
      category: 'Infrastructure',
      description: 'A 2km highway bridge connecting two districts with innovative engineering.',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80',
    },
    {
      title: 'Heritage Hotel Renovation',
      category: 'Renovation',
      description: 'Complete restoration of a 1920s hotel preserving historical architecture.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    },
    {
      title: 'Tech Innovation Center',
      category: 'Commercial',
      description: 'State-of-the-art research facility with advanced lab spaces and offices.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    },
    {
      title: 'Oakwood Family Homes',
      category: 'Residential',
      description: 'A planned community of 50 custom homes with shared green spaces.',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
    },
    {
      title: 'Industrial Warehouse Complex',
      category: 'Industrial',
      description: 'Modern logistics facility with automated systems and energy efficiency.',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80',
    },
  ];

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 39, 68, 0.8), rgba(15, 39, 68, 0.8)), url('https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=1920&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing our expertise across different sectors.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 text-sm font-medium rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
