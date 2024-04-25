import React, { useState } from 'react';

interface Step2Props {
  onNext: (data: { email: string; phone: string }) => void;
  onPrevious: () => void;
  formData: { email: string; phone: string };
}

const Step2: React.FC<Step2Props> = ({ onNext, onPrevious, formData }) => {
  const [email, setEmail] = useState(formData.email);
  const [phone, setPhone] = useState(formData.phone);
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!email.trim() || !phone.trim()) {
      setError('Please fill in all the fields');
      return;
    }
    setError('');
    onNext({ email, phone });
  };

  return (
    <div>
      <h2>Step 2: Contact Information</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={onPrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;
