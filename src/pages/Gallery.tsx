
const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/536aad8d-3911-423e-8dac-8359e8bf0560.png",
      alt: "Students Praying",
      caption: "Our students learning to pray together"
    },
    {
      src: "/lovable-uploads/18081b71-0297-44e1-825a-3086dc2ad0c4.png",
      alt: "Outdoor Activities",
      caption: "Engaging in outdoor learning activities"
    },
    {
      src: "/lovable-uploads/a0a448a8-bddb-4dc3-ae05-8d1c07273686.png",
      alt: "Prayer Session",
      caption: "Students practicing Islamic prayers"
    },
    {
      src: "/lovable-uploads/6a9b5a05-7825-44f8-b1eb-038d0082dd23.png",
      alt: "Student Assembly",
      caption: "Morning assembly and activities"
    },
    {
      src: "/lovable-uploads/43660ab3-2109-4ff7-9380-612658600829.png",
      alt: "Prayer Time",
      caption: "Another view of our students during prayer"
    },
    {
      src: "/lovable-uploads/fecbdd0b-0527-45ef-a836-72bbb5c7ff65.png",
      alt: "School Grounds",
      caption: "Students and teachers on our school grounds"
    },
    {
      src: "/lovable-uploads/0b19860f-8a93-446b-b4fd-f031a38c69ce.png",
      alt: "Student Activities",
      caption: "Learning and playing together"
    },
    {
      src: "/lovable-uploads/8ab7ed39-c717-4131-a844-64ce3205e188.png",
      alt: "Outdoor Learning",
      caption: "Natural environment learning sessions"
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-gray-900 mb-6">
            Our School <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our nurturing learning environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-[8s] animate-zoom-out"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-quicksand font-semibold mb-2">
                    {image.alt}
                  </h3>
                  <p className="text-sm">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
