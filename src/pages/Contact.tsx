import { MapPin, Phone, Mail, Clock, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 School Lane, Kibuli, Kampala",
      link: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+256 123 456 789",
      link: "tel:+256123456789",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@kibulimuslim.com",
      link: "mailto:info@kibulimuslim.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Monday - Friday: 7:00 AM - 5:00 PM",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      title: "Instagram",
      handle: "@kibulimuslimnursery",
      link: "https://instagram.com/kibulimuslimnursery",
    },
    {
      icon: Twitter,
      title: "X (Twitter)",
      handle: "@kibulimuslimnursery",
      link: "https://x.com/kibulimuslimnursery",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-gray-900 mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to answer any questions you may have about our programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:bg-primary/5 transition-colors duration-200"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-quicksand font-semibold mb-2">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.content}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-quicksand font-semibold mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-primary/5"
                  >
                    <social.icon className="w-5 h-5" />
                    <span>{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-quicksand font-semibold mb-6">
              Send us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mb-20 animate-fade-up">
          <h2 className="text-3xl font-quicksand font-semibold text-gray-900 text-center mb-8">
            Find Us on the Map
          </h2>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7576476927447!2d32.58847661475355!3d0.3005799997749881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8080541c6d%3A0x7cc24c1ec387b817!2sKibuli%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1646825738292!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kibuli Nursery School Location"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
