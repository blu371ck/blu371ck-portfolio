import React, { useState, useEffect } from "react";

const roles = ["Defender", "Analyst", "Responder", "Researcher"];

const RoleAnimator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const itemHeightRem = 5;

  return (
    <div className="overflow-hidden" style={{ height: `${itemHeightRem}rem` }} aria-live="polite" aria-atomic="true">
      <div
        data-testid="role-animator-inner"
        className="transition-transform duration-700 ease-in-out motion-reduce:transition-none motion-reduce:transform-none"
        style={{ transform: `translateY(-${currentIndex * itemHeightRem}rem)` }}
      >
        {roles.map((role, index) => (
          <div 
            key={role} 
            className="h-20 flex items-center justify-center text-htb-500"
            style={{ height: `${itemHeightRem}rem` }}
            aria-hidden={index !== currentIndex}
          >
            {role}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleAnimator;