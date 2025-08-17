
import React, { useState, FormEvent } from 'react';

interface FormProps {
  children: React.ReactNode;
  formName: string;
  submitButtonText: string;
  onValidate: () => boolean;
}

const Form: React.FC<FormProps> = ({ children, formName, submitButtonText, onValidate }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!onValidate()) {
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate success
    setStatus('success');
    setMessage('¡Enviado con éxito! Revisa tu correo.');

    setTimeout(() => {
        setStatus('idle');
        (e.target as HTMLFormElement).reset();
    }, 4000);

    // To handle actual form submission with Netlify, you would use:
    /*
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (response.ok) {
        setStatus('success');
        setMessage('¡Enviado con éxito! Revisa tu correo.');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Hubo un error. Intenta de nuevo.');
    } finally {
        setTimeout(() => setStatus('idle'), 4000);
    }
    */
  };

  return (
    <form name={formName} data-netlify="true" onSubmit={handleSubmit} className="relative">
      <input type="hidden" name="form-name" value={formName} />
      {children}
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full mt-4 w-full sm:w-auto font-semibold transition-transform transform hover:scale-105 hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando...' : submitButtonText}
      </button>
      {status === 'success' && <div className="mt-4 p-3 rounded-lg bg-green-500 text-white">{message}</div>}
      {status === 'error' && <div className="mt-4 p-3 rounded-lg bg-red-500 text-white">{message}</div>}
    </form>
  );
};

export default Form;
