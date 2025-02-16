
import { ImageIcon } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      url: "/lovable-uploads/201e79ea-b6fe-4b78-b3b8-1ac5168927d9.png",
      title: "School Entrance",
      description: "The welcoming entrance of Kibuli Muslim Nursery School",
    },
    {
      url: "/lovable-uploads/68a68ed1-bfda-4ef6-a9d7-4dee1c374353.png",
      title: "Learning Environment",
      description: "Classroom equipped with educational materials and alphabet displays",
    },
    {
      url: "/lovable-uploads/daa2510f-a44c-409e-b339-095808f5539f.png",
      title: "Study Area",
      description: "Comfortable learning space with educational charts and materials",
    },
    {
      url: "/lovable-uploads/1dadfa6d-eaa9-4c38-ac81-b4f8e653be28.png",
      title: "Classroom Setup",
      description: "Well-organized classroom with learning materials and furniture",
    },
    {
      url: "/lovable-uploads/de8dfbd6-71dc-4f86-ba18-996d18b9bae4.png",
      title: "Educational Wall",
      description: "Wall displays featuring various professions and community roles",
    },
    {
      url: "/lovable-uploads/e94b44ee-1362-446d-bdf3-c57ced89fd19.png",
      title: "Learning Space",
      description: "Spacious classroom with educational posters and natural lighting",
    },
    {
      url: "/lovable-uploads/d5ced61b-032b-4bc2-b91f-d991b96927e0.png",
      title: "Playground Area",
      description: "Colorful outdoor play equipment for physical development",
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
