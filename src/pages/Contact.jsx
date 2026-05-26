import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useState } from 'react';

// Contact page with form, map embed, and contact details
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 39, 68, 0.8), rgba(15, 39, 68, 0.8)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us and let's discuss your vision.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <h2 className="text-2xl font-bold text-primary-dark mb-6">Send Us a Message</h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    {...register('phone', {
                      pattern: {
                        value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                        message: 'Invalid phone number',
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' },
                    })}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div data-aos="fade-left">
              <h2 className="text-2xl font-bold text-primary-dark mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark">Our Office</h4>
                    <p className="text-gray-600 text-sm">123 Construction Avenue<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <FaPhone className="text-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark">Phone</h4>
                    <p className="text-gray-600 text-sm">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <FaEnvelope className="text-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark">Email</h4>
                    <p className="text-gray-600 text-sm">info@buildpro.com<br />projects@buildpro.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <FaClock className="text-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark">Working Hours</h4>
                    <p className="text-gray-600 text-sm">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1637684801566!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
