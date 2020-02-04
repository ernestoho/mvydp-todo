import { h } from 'preact';
import './A2H.css';
import { useEffect, useState } from 'preact/hooks';

const A2H = () => {
  const [prompt, setPrompt] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      setPrompt(e);
    });
  }, []);

  if (!prompt) {
    return '';
  }

  return (
    <button
      className="text-white bg-blue-800 hover:bg-blue-700 rounded-full shadow a2h"
      onClick={() => prompt.prompt()}
    >
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
        />
      </svg>
    </button>
  );
};

export default A2H;
