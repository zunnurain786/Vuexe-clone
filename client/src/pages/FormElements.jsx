import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./FormElements.css"; // Import your custom CSS file

const FormElements = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Form Elements Layout", 10, 10);
    doc.autoTable({
      head: [["Form Elements Layout"]],
      body: [["Placeholder for form elements layout"]],
    });
    doc.save("form-elements-layout.pdf");
  };

  return (
    <div className="form-elements-layout">
      <div className="form-element">
        <label htmlFor="text-input">Text Input</label>
        <input type="text" id="text-input" placeholder="Enter text" />
      </div>
      <div className="form-element">
        <label htmlFor="number-input">Number Input</label>
        <input type="number" id="number-input" placeholder="Enter number" />
      </div>
      <div className="form-element">
        <label htmlFor="checkbox-input">Checkbox</label>
        <input type="checkbox" id="checkbox-input" />
      </div>
      <div className="form-element">
        <label htmlFor="radio-input">Radio Button</label>
        <input type="radio" id="radio-input" name="radio-group" />
      </div>
      <div className="form-element">
        <label htmlFor="select-input">Select Dropdown</label>
        <select id="select-input">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
      <button onClick={downloadPDF} className="download-btn">
        Download PDF
      </button>
    </div>
  );
};

export default FormElements;
