
import { ImageIcon } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      title: "Outdoor Activities",
      description: "Children exploring nature and learning through play",
    },
    {
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      title: "Arts and Crafts",
      description: "Creative expression through various art mediums",
    },
    {
      url: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      title: "Learning Time",
      description: "Engaging classroom activities and learning sessions",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Glimpses of joy, learning, and growth at Kibuli Nursery School
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.url}
                  alt={image.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-quicksand font-semibold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm">{image.description}</p>
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
