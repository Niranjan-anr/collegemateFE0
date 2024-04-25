import React, { useState } from 'react';

interface Step1Props {
  onNext: (data: { name: string; age: string }) => void;
  formData: { name: string; age: string };
}

const Step1: React.FC<Step1Props> = ({ onNext, formData }) => {
  const [name, setName] = useState(formData.name);
  const [age, setAge] = useState(formData.age);
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!name.trim() || !age.trim()) {
      setError('Please fill in all the fields');
      return;
    }
    setError('');
    onNext({ name, age });
  };

  return (
    <div>
      <h2>Step 1: Personal Details</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;
