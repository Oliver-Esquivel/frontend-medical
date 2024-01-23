import React from "react";
import '../styles/Inputs.style.css';

const Inputscomponentes = ({ campos, onInputChange, columns = 1 }) => {

  const handleChange = (event, fieldName) => {
    const value = event.target.value;
    onInputChange(fieldName, value);
  };

  const groupFields = () => {
    const groupedFields = [];
    const fieldsPerGroup = Math.ceil(campos.length / columns);

    for (let i = 0; i < columns; i++) {
      const start = i * fieldsPerGroup;
      const end = start + fieldsPerGroup;
      groupedFields.push(campos.slice(start, end));
    }

    return groupedFields;
  };

  return (
    <div>
      {groupFields().map((group, index) => (
        <div key={index} className="inputscomponentes-group">
          {group.map((campo) => (
            <div key={campo}>
              <label htmlFor={campo} className="inputscomponentes-label">
                {campo}
              </label>
              <input
                id={campo}
                type="text"
                placeholder={campo}
                onChange={(e) => handleChange(e, campo)}
                className="inputscomponentes-input"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Inputscomponentes;
