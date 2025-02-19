import React, { useState } from 'react';

const RegisterScreen = ({ onContinue }: { onContinue: () => void }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de registro
    onContinue();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/stars.jpg')" }}>
      <div className="text-center bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
        <img src="/LOGO.png" alt="Space Health Logo" className="w-32 h-32 mx-auto mb-4 animate-rotate" />
        <h1 className="text-4xl font-bold mb-8 text-white">Regístrate en Space Health</h1>
        <form onSubmit={handleRegister} className="mb-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-4 py-2 rounded-md text-gray-900"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-md text-gray-900"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 rounded-md text-gray-900"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirmar Contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="px-4 py-2 rounded-md text-gray-900"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button type="submit" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-gray-500 text-white">
              Registrarse
            </button>
            <button type="button" onClick={onContinue} className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-500 text-white">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
