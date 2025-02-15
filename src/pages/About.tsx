
import { Users, BookOpen, Clock, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-gray-900 mb-6">
            About <span className="text-primary">Kibuli Nursery School</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A place where every child's potential is nurtured and celebrated
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-3xl font-quicksand font-semibold text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2010, Kibuli Nursery School has been dedicated to
              providing exceptional early childhood education. Our journey began
              with a simple vision: to create a nurturing environment where
              children can learn, grow, and thrive.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-float">
            <h3 className="text-2xl font-quicksand font-semibold text-gray-900 mb-4">
              Key Facts
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Users className="text-primary w-6 h-6" />
                <span>Small class sizes (maximum 15 students)</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="text-primary w-6 h-6" />
                <span>Experienced, qualified teachers</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-primary w-6 h-6" />
                <span>Flexible scheduling options</span>
              </li>
              <li className="flex items-center gap-3">
                <Heart className="text-primary w-6 h-6" />
                <span>Nurturing, child-centered approach</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
