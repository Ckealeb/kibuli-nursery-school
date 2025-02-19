
const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/201e79ea-b6fe-4b78-b3b8-1ac5168927d9.png",
      alt: "School Entrance",
      caption: "Our welcoming school entrance"
    },
    {
      src: "/lovable-uploads/68a68ed1-bfda-4ef6-a9d7-4dee1c374353.png",
      alt: "Learning Environment",
      caption: "Interactive learning spaces"
    },
    {
      src: "/lovable-uploads/d5ced61b-032b-4bc2-b91f-d991b96927e0.png",
      alt: "Play Area",
      caption: "Safe and fun play areas"
    },
    {
      src: "/lovable-uploads/daa2510f-a44c-409e-b339-095808f5539f.png",
      alt: "Activity Room",
      caption: "Engaging activity spaces"
    },
    {
      src: "/lovable-uploads/de8dfbd6-71dc-4f86-ba18-996d18b9bae4.png",
      alt: "Library",
      caption: "Well-stocked library"
    },
    {
      src: "/lovable-uploads/3bd4ee51-7dc3-4eb5-966e-0ec880b8fdc0.png",
      alt: "School Programs",
      caption: "Our comprehensive educational programs"
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
