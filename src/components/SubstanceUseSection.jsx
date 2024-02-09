/* eslint-disable */
import React from "react";

function SubstanceUseSection({ substances, setSubstances }) {
  const addSubstance = () => {
    setSubstances([...substances, { substance: "", ageStarted: "", methods: [""], frequency: "", cost: "", dailyWeekly: "", sds: "", otherDetails: "" }]);
  };

  const addAdditionalMethod = (index) => {
    const updatedSubstances = [...substances];
    updatedSubstances[index].methods.push("");
    setSubstances(updatedSubstances);
  };

  const handleSubstanceChange = (index, key, value) => {
    const updatedSubstances = [...substances];
    updatedSubstances[index][key] = value;
    // Reset otherDetails when the substance is changed
    if (key === "substance" && value !== "Other") {
      updatedSubstances[index].otherDetails = "";
    }
    setSubstances(updatedSubstances);
  };

  const handleMethodChange = (substanceIndex, methodIndex, value) => {
    const updatedSubstances = [...substances];
    updatedSubstances[substanceIndex].methods[methodIndex] = value;
    setSubstances(updatedSubstances);
  };

  const handleOtherDetailsChange = (index, value) => {
    const updatedSubstances = [...substances];
    updatedSubstances[index].otherDetails = value;
    setSubstances(updatedSubstances);
  };

  const removeMethod = (substanceIndex, methodIndex) => {
    const updatedSubstances = [...substances];
    updatedSubstances[substanceIndex].methods.splice(methodIndex, 1);
    setSubstances(updatedSubstances);
  };

  const removeSubstance = (index) => {
    const isConfirmed = window.confirm("Are you sure you want to remove this substance?");
    if (isConfirmed) {
      const updatedSubstances = [...substances];
      updatedSubstances.splice(index, 1);
      setSubstances(updatedSubstances);
    }
  };

  return (
    <div className="input-section">
      <h2>Substance Use Information</h2>
      {substances.map((substance, substanceIndex) => (
        <div key={substanceIndex} className="text-box-container">
          <h3>Substance {substanceIndex + 1}</h3>
          <select value={substance.substance} onChange={(e) => handleSubstanceChange(substanceIndex, "substance", e.target.value)}>
            <option value="" disabled hidden>
              Select Substance
            </option>
            <option value="Alcohol">Alcohol</option>
            <option value="Heroin">Heroin</option>
            <option value="Crack">Crack</option>
            <option value="Cocaine">Cocaine</option>
            <option value="Benzos">Benzos</option>
            <option value="Ecstasy/MDMA">Ecstasy/MDMA</option>
            <option value="Cannabis">Cannabis</option>
            <option value="Amphetamines">Amphetamines</option>
            <option value="NPS (Spice)">NPS (Spice)</option>
            <option value="Other">Other</option>{" "}
          </select>
          {substance.substance === "Other" && (
            <input type="text" placeholder="Enter details" value={substance.otherDetails} onChange={(e) => handleOtherDetailsChange(substanceIndex, e.target.value)} />
          )}
          <input type="text" placeholder="Age Started" value={substance.ageStarted} onChange={(e) => handleSubstanceChange(substanceIndex, "ageStarted", e.target.value)} />
          {substance.methods.map((method, methodIndex) => (
            <div className="method-input-container" key={methodIndex}>
              <select value={method} onChange={(e) => handleMethodChange(substanceIndex, methodIndex, e.target.value)}>
                <option value="" disabled hidden>
                  Select Method
                </option>
                <option value="drinking">Drinking</option>
                <option value="snorting">Snorting</option>
                <option value="injecting">Injecting</option>
                <option value="smoking">Smoking</option>{" "}
              </select>
              <button className="remove-method" onClick={() => removeMethod(substanceIndex, methodIndex)}>
                Remove Method
              </button>
            </div>
          ))}
          <button onClick={() => addAdditionalMethod(substanceIndex)}>Add Additional Method</button>
          <select type="text" placeholder="Frequency" value={substance.frequency} onChange={(e) => handleSubstanceChange(substanceIndex, "frequency", e.target.value)}>
            <option value="" disabled hidden>
              Select Frequency
            </option>
            <option value="Daily">Daily</option>
            <option value="3+ times per week">3+ times per week</option>
            <option value="Once per week">Once per week</option>
            <option value="Less than once per week">Less than once per week</option>
          </select>
          <input type="text" placeholder="Cost" value={substance.cost} onChange={(e) => handleSubstanceChange(substanceIndex, "cost", e.target.value)} />
          <select type="text" placeholder="Cost Daily/Weekly" value={substance.dailyWeekly} onChange={(e) => handleSubstanceChange(substanceIndex, "dailyWeekly", e.target.value)}>
            <option value="" disabled hidden>
              Select Cost Daily/Weekly
            </option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
          <input type="text" placeholder="SDS" value={substance.sds} onChange={(e) => handleSubstanceChange(substanceIndex, "sds", e.target.value)} />
          <button className="remove-substance" onClick={() => removeSubstance(substanceIndex)}>
            Remove Substance
          </button>
        </div>
      ))}
      <button onClick={addSubstance}>Add Substance</button>
    </div>
  );
}

export default SubstanceUseSection;
