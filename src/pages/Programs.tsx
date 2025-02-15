
import { Brain, Music, Palette, Shapes } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Brain,
      title: "Early Learning",
      age: "Ages 2-3",
      description:
        "Foundation program focusing on basic skills, social development, and creative expression",
    },
    {
      icon: Music,
      title: "Pre-Kindergarten",
      age: "Ages 3-4",
      description:
        "Comprehensive program incorporating music, movement, and early literacy",
    },
    {
      icon: Palette,
      title: "Kindergarten Prep",
      age: "Ages 4-5",
      description:
        "Advanced program preparing children for successful transition to primary school",
    },
    {
      icon: Shapes,
      title: "Special Activities",
      age: "All Ages",
      description:
        "Enrichment programs including art, music, physical education, and nature exploration",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive early childhood education programs designed for every
            stage of development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
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
