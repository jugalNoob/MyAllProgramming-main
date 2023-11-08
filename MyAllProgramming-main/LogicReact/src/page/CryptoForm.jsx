import React, { useState } from 'react';
import { SHA256 } from 'crypto-js';
import CryptoJS from 'crypto-js';

function CryptoForm() {
  const [generatedData, setGeneratedData] = useState(null);

  const Randomes = () => {
    let hex = `xyz${Math.random().toString(36).slice(2).padEnd(21, '@gmail.com')}`;
    console.log("Random Data:", hex);

    const hashedSecret = SHA256(hex).toString();
    console.log("emailHash:", hashedSecret);

    const key = "hello mom";
    const encrypted = CryptoJS.AES.encrypt(hex, key).toString();
    console.log("email encryption:", encrypted);

    const decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
    console.log("Decrypted Data:", decrypted);

    const password = 'MyPassword';
    const salt = CryptoJS.lib.WordArray.random(128 / 8);
    const keySize = 256 / 32; // 256-bit key
    const iterations = 1000; // Number of iterations
    const derivedKey = CryptoJS.PBKDF2(password, salt, { keySize, iterations }).toString();
    console.log("Derived Key Length:", derivedKey.length);

    setGeneratedData({
      hex,
      hashedSecret,
      encrypted,
      decrypted,
      derivedKey,
    });
  }

  return (
    <div>
      <button onClick={Randomes}>Generate and Encrypt</button>
      {generatedData && (
        <div>
          <h2>Generated Data:</h2>
          <p>Hex: {generatedData.hex}</p>
          <p>Email Hash: {generatedData.hashedSecret}</p>
          <p>Email Encryption: {generatedData.encrypted}</p>
          <p>Decrypted Data: {generatedData.decrypted}</p>
          <p>Derived Key Length: {generatedData.derivedKey.length}</p>
        </div>
      )}
    </div>
  )
}

export default CryptoForm;
