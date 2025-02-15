
import { Calendar, ClipboardCheck, MessageSquare, Send } from "lucide-react";

const Admissions = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Submit Application",
      description:
        "Complete our online application form with your child's information",
    },
    {
      icon: Calendar,
      title: "Schedule Visit",
      description:
        "Book a tour of our facility and meet our dedicated teaching staff",
    },
    {
      icon: MessageSquare,
      title: "Assessment",
      description:
        "Brief assessment to understand your child's developmental needs",
    },
    {
      icon: Send,
      title: "Enrollment",
      description:
        "Complete enrollment process and prepare for your child's journey",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-gray-900 mb-6">
            Join Our <span className="text-primary">Family</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your child's educational journey with Kibuli Nursery School
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-quicksand font-semibold text-gray-900">
              Admission Process
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-primary/10 rounded-full p-3">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-quicksand font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-quicksand font-semibold mb-6">
              Request Information
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent's Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
