import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPassword } from './features/passwords/passwordSlice';
import PasswordsStrengthMeter from './PasswordsStrengthMeter';
import './Password.css';

function random(n) {
  return Math.floor(Math.random() * n);
}

function Password() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('p@$$w0rd');
  const [name, setName] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);

  const generatePassword = () => {
    let newPassword = '';
    const charCodeRangeStart = 33;
    const charCodeRangeEnd = 126;

    for (let i = 0; i < passwordLength; i++) {
      const randomCharCode = random(charCodeRangeEnd - charCodeRangeStart + 1) + charCodeRangeStart;
      newPassword += String.fromCharCode(randomCharCode);
    }

    setPassword(newPassword);
  };

  return (
    <div className="password-container">
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <PasswordsStrengthMeter password={password} />
      <input
        type="text"
        placeholder="Enter name or description"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <div>
        <label>Password Length:</label>
        <input
          type="number"
          min="1"
          value={passwordLength}
          onChange={(e) => setPasswordLength(Math.max(1, parseInt(e.target.value)))}
        />
      </div>
      <div>
        <button onClick={generatePassword}>Generate</button>
        <button onClick={() => dispatch(addPassword({ name, password }))}>Save</button>
      </div>
    </div>
  );
}

export default Password;
