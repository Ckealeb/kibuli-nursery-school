
import { School, GraduationCap, Smile } from "lucide-react";

const Index = () => {
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
