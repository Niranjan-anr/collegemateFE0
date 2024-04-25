import React, { useState } from 'react';
import Step1 from './Persnoldetails';
import Step2 from './Contanctinfo';
import Step3 from './Confirmation';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<{ name: string; age: string; email: string; phone: string }>({ name: '', age: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (data: { name?: string; age?: string; email?: string; phone?: string }) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://collegemate-5a0e5-default-rtdb.firebaseio.com/data.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form data submitted successfully');
        setSubmitted(true);
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
  

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNext} formData={formData} />}
      {step === 2 && <Step2 onNext={handleNext} onPrevious={handlePrevious} formData={formData} />}
      {step === 3 && <Step3 formData={formData} onPrevious={handlePrevious} onSubmit={handleSubmit} />}
      {submitted && <p>Registered Successfully!</p>}
    </div>
  );
};

export default MultiStepForm;
