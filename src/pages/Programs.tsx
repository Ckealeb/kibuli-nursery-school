
import { Brain, Music, Palette, Shapes, GraduationCap } from "lucide-react";

const Programs = () => {
  const programs = [{
    icon: Brain,
    title: "Daycare",
    age: "6-35 months",
    description: "Nurturing care program providing a safe, stimulating environment for infants and toddlers with age-appropriate activities, sensory play, and dedicated caregivers",
    bgColor: "bg-[#F2FCE2]/80"
  }, {
    icon: Music,
    title: "Nursery",
    age: "3-4 years",
    description: "Interactive learning environment focusing on social skills, basic numeracy, literacy foundations, creative arts, and Islamic values through play-based activities",
    bgColor: "bg-[#FEF7CD]/80"
  }, {
    icon: Palette,
    title: "Kindergarten 1&2",
    age: "3-6 years",
    description: "Comprehensive program developing cognitive skills, emotional intelligence, and academic readiness through structured learning and creative exploration",
    bgColor: "bg-[#D3E4FD]/80"
  }, {
    icon: GraduationCap,
    title: "Class 1&2",
    age: "7-8 years",
    description: "Advanced learning program focusing on core subjects, critical thinking, and character development, preparing students for higher primary education",
    bgColor: "bg-[#FEC6A1]/80"
  }, {
    icon: Shapes,
    title: "Special Activities",
    age: "All Ages",
    description: "Enrichment programs including art, music, physical education, swimming, computing, and nature exploration to develop well-rounded individuals",
    bgColor: "bg-[#FFDEE2]/80"
  }];

  return (
    <div className="min-h-screen pt-24 relative">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive early childhood education programs designed for every stage of development. 
            We provide a dual curriculum of theology and secular studies using the 21st century learning approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`${program.bgColor} backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <program.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-quicksand font-semibold text-gray-900 mb-2">
                {program.title}
              </h3>
              <p className="text-primary font-medium mb-4">{program.age}</p>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;

