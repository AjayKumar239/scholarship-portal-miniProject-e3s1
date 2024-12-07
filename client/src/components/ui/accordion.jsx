// src/components/ui/accordion.jsx
import React, { createContext, useContext, useState } from 'react';

const AccordionContext = createContext();

export const Accordion = ({
  children,
  type = 'multiple',
  collapsible = false,
  ...props
}) => {
  const [openItems, setOpenItems] = useState([]);

  const handleItemToggle = (value) => {
    if (type === 'multiple') {
      setOpenItems((prevItems) =>
        prevItems.includes(value)
          ? prevItems.filter((item) => item !== value)
          : [...prevItems, value]
      );
    } else {
      setOpenItems(prevItems =>
        prevItems.includes(value)
          ? []
          : [value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, handleItemToggle, collapsible }}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ children, value }) => {
  const { openItems, handleItemToggle, collapsible } = useContext(AccordionContext);
  const isOpen = openItems.includes(value);

  return (
    <div>
      <AccordionTrigger onClick={() => handleItemToggle(value)}>
        {children}
      </AccordionTrigger>
      {(isOpen || !collapsible) && (
        <AccordionContent>{children}</AccordionContent>
      )}
    </div>
  );
};

export const AccordionTrigger = ({ children, onClick }) => (
  <div
    className="bg-gray-100 px-6 py-4 cursor-pointer hover:bg-gray-200"
    onClick={onClick}
  >
    {children}
  </div>
);

export const AccordionContent = ({ children }) => (
  <div className="p-6">{children}</div>
);