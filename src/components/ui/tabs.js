import React, { useState } from "react";

export default function Tabs({ children }) {
  const [active, setActive] = useState("calculator");

  return (
    <div>
      <div className="tabs-list grid grid-cols-4 gap-2 mb-4">
        {React.Children.map(children, (child) => {
          if (child.type.name === "TabsTrigger") {
            return React.cloneElement(child, {
              isActive: child.props.value === active,
              onClick: () => setActive(child.props.value),
            });
          }
          return null;
        })}
      </div>
      <div className="tabs-content">
        {React.Children.map(children, (child) => {
          if (child.type.name === "TabsContent") {
            return child.props.value === active ? child : null;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export function TabsList({ children }) {
  return <div>{children}</div>;
}

export function TabsTrigger({ children, value, isActive, onClick }) {
  return (
    <button
      className={`p-2 border rounded ${
        isActive ? "bg-blue-500 text-white" : "bg-gray-200"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }) {
  return <div>{children}</div>;
}
