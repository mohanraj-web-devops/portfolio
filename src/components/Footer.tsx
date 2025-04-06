
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-foreground">Mohan</span>
              <span className="text-primary">raj</span>
            </h3>
            <p className="text-muted-foreground">Backend Developer & DevOps Engineer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} All Rights Reserved
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Crafted with <span className="text-primary">{'<code />'}</span> and precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
