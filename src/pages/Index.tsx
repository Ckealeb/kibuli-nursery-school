import { School, GraduationCap, Smile, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Index = () => {
  const [api, setApi] = useState<any>();
  const images = [
    {
      url: "/lovable-uploads/201e79ea-b6fe-4b78-b3b8-1ac5168927d9.png",
      title: "School Entrance",
      description: "Welcome to Kibuli Muslim Nursery School",
    },
    {
      url: "/lovable-uploads/68a68ed1-bfda-4ef6-a9d7-4dee1c374353.png",
      title: "Learning Environment",
      description: "Interactive and engaging learning spaces",
    },
    {
      url: "/lovable-uploads/d5ced61b-032b-4bc2-b91f-d991b96927e0.png",
      title: "Play Area",
      description: "Safe and fun outdoor activities",
    },
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.next();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-quicksand font-bold text-gray-900">
              Welcome to{" "}
              <span className="text-primary">Kibuli Nursery School</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-quicksand max-w-3xl mx-auto">
              Where young minds bloom and dreams take flight
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-full font-quicksand hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Enroll Now
              </button>
              <button className="bg-white text-primary px-8 py-3 rounded-full font-quicksand border-2 border-primary hover:bg-primary/5 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Carousel setApi={setApi} className="relative w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-0 p-6 text-white">
                        <h3 className="text-2xl font-quicksand font-semibold mb-2">
                          {image.title}
                        </h3>
                        <p className="text-lg">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </section>

      {/* Welcome Message for Parents Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-gray-900 mb-4">
              Dear Parents & Guardians
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thank you for considering Kibuli Nursery School for your child's early education journey. 
              We understand that choosing the right nursery school is one of the most important decisions 
              you'll make for your child's future. Here, we create a nurturing environment where every 
              child feels safe, valued, and inspired to learn.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-secondary/10 p-6 rounded-xl hover:bg-secondary/20 transition-colors duration-200">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-gray-600 text-sm">
                  We believe in strong partnerships with parents to ensure the best possible care and education for your child.
                </p>
              </div>
              <div className="bg-secondary/10 p-6 rounded-xl hover:bg-secondary/20 transition-colors duration-200">
                <Smile className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Happy Learning</h3>
                <p className="text-gray-600 text-sm">
                  Our approach combines play-based learning with structured activities to make education fun and engaging.
                </p>
              </div>
              <div className="bg-secondary/10 p-6 rounded-xl hover:bg-secondary/20 transition-colors duration-200">
                <School className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safe Environment</h3>
                <p className="text-gray-600 text-sm">
                  Your child's safety and well-being are our top priorities, with trained staff and secure facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: School,
                title: "Quality Education",
                description:
                  "Expert teachers and modern learning methods for optimal development",
              },
              {
                icon: Smile,
                title: "Nurturing Environment",
                description:
                  "Safe and supportive space for children to grow and learn",
              },
              {
                icon: GraduationCap,
                title: "Holistic Development",
                description:
                  "Focus on academic, social, and emotional growth",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-secondary/10 hover:bg-secondary/20 transition-colors duration-200 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-quicksand font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
