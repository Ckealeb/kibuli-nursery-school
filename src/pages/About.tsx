import { Users, BookOpen, Clock, Heart } from "lucide-react";
const About = () => {
  return <div className="min-h-screen pt-24 bg-gradient-to-b from-white to-secondary/20">
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
            <p className="text-gray-600 leading-relaxed">Kibuli Nursery School was started in 1979 as a community school. It was rebranded in 2016, this involved change of name to Kibuli Muslim Nursery School, the motto, vision, mission and core values.  The School is exclusively dependent on FEES from pupils and a few donations through capital investments from Young Men Muslim Association, the custodian for the school.

We have a heart for the community around us and exist to take this passion to the people; not to only support from a distance, but to get involved in their daily lives. Together we build, work, educate, care and play and in doing so we not only uplift the community we serve, but we allow them to impact us as well. </p>
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
    </div>;
};
export default About;