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

  return (
    <div className="h-10 overflow-hidden">
      <div
        data-testid="role-animator-inner"
        className="transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${currentIndex * 2.5}rem)` }}
      >
        {roles.map((role) => (
          <div key={role} className="h-10 flex items-center justify-center">
            {role}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleAnimator;