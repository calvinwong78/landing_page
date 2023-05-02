import { useState, useEffect } from 'react';
import './whatsapp.css';

function useWhatsAppLink(phone, message) {
    const [show, setShow] = useState(false);
  
    function toggle() {
      setShow(!show);
    }
  
    function handleWhatsAppClick() {
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  
    useEffect(() => {
      window.addEventListener('scroll', toggle);
  
      return () => {
        window.removeEventListener('scroll', toggle);
      };
    }, []);
  
    return { show, handleWhatsAppClick };
  }
  
  export default useWhatsAppLink;