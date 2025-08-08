import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { div } from "motion/react-client";
import {Menu } from "lucide-react";


const NavBar = () => {
   
const links = [
    {label: "Home", href: "#home"},
    {label: "About", href: "#about"},
    {label: "Skills", href: "#skills"},
    {label: "Education", href: "/Hero.jsx"},
    {label: "Projects", href: "#projects"},
    {label: "Experience", href: "#experience"},
    {label: "Contact", href: "#contact"},
];
const [radius, setRadius] = useState(0);
const [selectedIndex, setSelectedIndex] = useState(0);


useEffect(() => {
    const calculateRadius = () => {
        const width = window.innerWidth*0.6;
        setRadius(width);
    };
    calculateRadius();
    window.addEventListener("resize", calculateRadius);
    return () => window.removeEventListener("resize", calculateRadius);
}, []);
const getlinkposition = (index,totallinks) => {
   // Calculate base angle for equal spacing around circle
    const angleStep = 360 / 16;
    const baseAngle = index * angleStep;
    
    // Calculate rotation offset to center the selected item
    const selectedAngle = selectedIndex * angleStep;
    const centerOffset = 0; // 0 degrees is right side (center position)
    
    // Apply rotation to center selected item - this rotates all items
    const angle = baseAngle - selectedAngle + centerOffset;
    const angleinRadians = angle * (Math.PI / 180);
    
    const circleradius = radius - 850;
    const x = circleradius * Math.cos(angleinRadians);
    const y = circleradius * Math.sin(angleinRadians);
    
    // Keep text rotation consistent (always horizontal)
    const rotationAngle = -angle;
    
    return {x, y, rotation: rotationAngle};
}

return (
    <nav className=" bg-transparent fixed h-full top-0 right-0 w-1/4 shadow-lg z-10">
      <div className="absolute top-1/2  -right-10 transform -translate-y-1/2">
        {links.map((link, index) => {
          const position = getlinkposition(index, links.length);
          return (
            <motion.a
              key={link.label}
              href={link.href}
              className="absolute text-white font-medium text-lg whitespace-nowrap"
              style={{
                right: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)',
                transformOrigin: 'center',
                rotate: `${position.rotation}deg`,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {link.label.toUpperCase()}
            </motion.a>
          );
        })}
      </div>
    </nav>
  );
    
}

export default NavBar;