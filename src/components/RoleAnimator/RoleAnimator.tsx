import React, { useState, useEffect } from "react";

const roles = ["Defender", "Analyst", "Responder", "Researcher"];

const RoleAnimator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    // Height is now h-20 to match the larger text size (text-5xl)
    <div className="h-20 overflow-hidden">
      <div
        data-testid="role-animator-inner"
        className="transition-transform duration-700 ease-in-out"
        // 5rem = h-20
        style={{ transform: `translateY(-${currentIndex * 5}rem)` }}
      >
        {roles.map((role) => (
          <div key={role} className="h-20 flex items-center justify-center">
            {role}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleAnimator;