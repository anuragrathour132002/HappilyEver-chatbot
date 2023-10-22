import React from 'react';



const ActionProvider = ({  children }) => {
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
          
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;