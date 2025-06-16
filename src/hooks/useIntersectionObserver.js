// src/hooks/useIntersectionObserver.js
import { useState, useEffect, useCallback } from 'react';

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback(([entry]) => {
    setIsVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    const elements = document.querySelectorAll('.fade-in'); // Select elements with the fade-in class

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [handleIntersection, options]);

  return isVisible;
};

export default useIntersectionObserver;
