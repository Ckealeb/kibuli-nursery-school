
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationForm = ({ isOpen, onClose }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    email: "",
    phone: "",
    program: "nursery"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Registration Submitted",
      description: "We'll contact you soon to complete the enrollment process.",
    });
    
    // Close the dialog and reset form
    onClose();
    setFormData({
      childName: "",
      childAge: "",
      parentName: "",
      email: "",
      phone: "",
      program: "nursery"
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-quicksand text-primary">Register Your Child</DialogTitle>
          <DialogDescription>
            Fill out this form to begin the enrollment process. Our team will contact you to complete the registration.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">Child's Name</label>
              <input
                id="childName"
                name="childName"
                type="text"
                required
                value={formData.childName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">Child's Age</label>
              <input
                id="childAge"
                name="childAge"
                type="text"
                required
                value={formData.childAge}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Program</label>
            <select
              id="program"
              name="program"
              required
              value={formData.program}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="daycare">Daycare (6-35 months)</option>
              <option value="nursery">Nursery (3-4 years)</option>
              <option value="kindergarten">Kindergarten (3-6 years)</option>
              <option value="primary">Primary Class 1&2 (7-8 years)</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name</label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              required
              value={formData.parentName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 mt-4"
          >
            Submit Registration
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationForm;
