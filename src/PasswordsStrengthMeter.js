import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordsStrengthMeter = ({ password }) => {
  const passwordResult = zxcvbn(password);

  return (
    <div className="password-strength-meter">
      <p>Password Strength: {passwordResult.score}/4</p>
      <div className={`bar strength-${passwordResult.score}`}></div>
      <p>Estimated time to crack: {passwordResult.crack_times_display.offline_slow_hashing_1e4_per_second}</p>
    </div>
  );
};

export default PasswordsStrengthMeter;
