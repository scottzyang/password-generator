import React, { useState } from 'react';

function random(n) {
  return Math.floor(Math.random() * n);
}

function Password() {
  const [password, setPassword] = useState('p@$$w0rd');
  const [name, setName] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);

  const generatePassword = () => {
    let newPassword = '';
    const charCodeRangeStart = 33;
    const charCodeRangeEnd = 126;

    for (let i = 0; i < 8; i++) {
      const randomCharCode = random(charCodeRangeEnd - charCodeRangeStart + 1) + charCodeRangeStart;
      newPassword += String.fromCharCode(randomCharCode);
    }

    setPassword(newPassword);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
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
      </div>
    </div>
  );
}

export default Password;
