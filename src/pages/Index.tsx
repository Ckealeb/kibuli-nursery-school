import { School, GraduationCap, Smile, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import RegistrationForm from "@/components/RegistrationForm";
import { Link } from "react-router-dom";

const Index = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const images = [{
    url: "/lovable-uploads/201e79ea-b6fe-4b78-b3b8-1ac5168927d9.png",
    title: "School Entrance",
    description: "Welcome to Kibuli Muslim Nursery School"
  }, {
    url: "/lovable-uploads/68a68ed1-bfda-4ef6-a9d7-4dee1c374353.png",
    title: "Learning Environment",
    description: "Interactive and engaging learning spaces"
  }, {
    url: "/lovable-uploads/24be7b19-0246-445d-a075-dd738c896cb2.png",
    title: "Graduation Ceremony",
    description: "Celebrating our students' achievements"
  }];

  useEffect(() => {
    if (!api) return;
    api.scrollTo(0); // Reset to first slide when component mounts
    const interval = setInterval(() => {
      const isLastSlide = api.selectedScrollSnap() === api.slideNodes().length - 1;
      if (isLastSlide) {
        api.scrollTo(0); // Loop back to the first slide
      } else {
        api.scrollNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 transition-all duration-[8s] animate-zoom-out">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-quicksand font-bold text-gray-900">
              Welcome to{" "}
              <span className="text-primary">Kibuli Muslim Nursery School</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-quicksand max-w-3xl mx-auto">
              Where young minds bloom and dreams take flight
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowRegistrationForm(true)}
                className="bg-primary text-white px-8 py-3 rounded-full font-quicksand hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Enroll Now
              </button>
              <Link 
                to="/about"
                className="bg-white text-primary px-8 py-3 rounded-full font-quicksand border-2 border-primary hover:bg-primary/5 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Modal */}
      <RegistrationForm
        isOpen={showRegistrationForm}
        onClose={() => setShowRegistrationForm(false)}
      />

      {/* Image Slider Section */}
      <section className="py-12 px-4 transition-all duration-[8s] animate-zoom-out">
        <div className="max-w-6xl mx-auto">
          <Carousel setApi={setApi} className="relative w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                    <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
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
      <section className="py-20 px-4 bg-white transition-all duration-[8s] animate-zoom-out">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-gray-900 mb-4">
              Dear Parents & Guardians
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-lg px-[20px]"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thank you for considering Kibuli Muslim Nursery School for your child's early education journey. We understand that choosing the right nursery school is one of the most important decisions you'll make for your child's future. Here, we create a nurturing environment where every child feels safe, valued, and inspired to learn.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-xl transition-colors duration-200 bg-blue-200 hover:bg-blue-100">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Vision</h3>
                <p className="text-xl text-sky-950">A Knowledgeable, Cultured and Devout child.</p>
              </div>
              <div className="p-6 rounded-xl transition-colors duration-200 bg-blue-300 hover:bg-blue-200">
                <Smile className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-sm text-cyan-950">Nurturing and empowering learners to become devout, literary and responsible global citizens by providing quality holistic education.</p>
              </div>
              <div className="p-6 rounded-xl transition-colors duration-200 bg-blue-400 hover:bg-blue-300">
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
      <section className="py-20 px-4 bg-white transition-all duration-[8s] animate-zoom-out">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              icon: School,
              title: "Quality Education",
              description: "Expert teachers and modern learning methods for optimal development"
            }, {
              icon: Smile,
              title: "Nurturing Environment",
              description: "Safe and supportive space for children to grow and learn"
            }, {
              icon: GraduationCap,
              title: "Holistic Development",
              description: "Focus on academic, social, and emotional growth"
            }].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl transition-colors duration-200 bg-sky-300 hover:bg-sky-200"
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
