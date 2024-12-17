// TranslateDiv.js
import React, { useEffect, useState } from 'react';
import CustomDropdown from './CustomDropdown';

const TranslateDiv = () => {
  const [translateLoaded, setTranslateLoaded] = useState(false);

  useEffect(() => {
    if (!translateLoaded) {
      const script = document.createElement('script');
      script.src = "https://translate.googleapis.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'hi,en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false, // Prevent auto display
        }, 'google_translate_element');
        setTranslateLoaded(true);
      };

      // Clean up script if component is unmounted
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [translateLoaded]);

  const handleLanguageChange = (language) => {
    const langCode = language === 'English' ? 'en' : 'hi'; // Map languages to Google Translate language codes

    const translateElement = document.getElementById('google_translate_element');
    if (translateElement) {
      translateElement.classList.remove('hidden');

      const combo = document.querySelector('.goog-te-combo');
      if (combo) {
        combo.value = langCode; // Set the language value
        combo.dispatchEvent(new Event('change')); // Trigger the change event
      }
    }
  };

  return (
    <div>
      <CustomDropdown onSelect={handleLanguageChange} />
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
};

export default TranslateDiv;
