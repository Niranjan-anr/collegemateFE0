import React from 'react';

interface Step3Props {
  formData: { name: string; age: string; email: string; phone: string };
  onPrevious: () => void;
  onSubmit: () => void;
}

const Step3: React.FC<Step3Props> = ({ formData, onPrevious, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <button onClick={onPrevious}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
