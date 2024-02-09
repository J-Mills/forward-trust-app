import { useState } from "react";
import "./App.css";
import SubstanceUseSection from "./components/SubstanceUseSection";
import InputSection from "./components/InputSection";
import CheckboxSection from "./components/CheckboxSection";

function App() {
  const [firstName, setFirstName] = useState("");
  const [substances, setSubstances] = useState([{ substance: "", ageStarted: "", methods: [""], frequency: "", cost: "", dailyWeekly: "", sds: "" }]);
  const [naloxoneAdministered, setNaloxoneAdministered] = useState(false);
  const [firstParagraph, setFirstParagraph] = useState("");
  const [confidentiality, setConfidentiality] = useState("");
  const [mentalHealth, setMentalHealth] = useState("");
  const [physicalHealth, setPhysicalHealth] = useState("");
  const [substanceUse, setSubstanceUse] = useState("");
  const [housing, setHousing] = useState("");
  const [relationships, setRelationships] = useState("");
  const [recoveryPlan, setRecoveryPlan] = useState("");
  const [output, setOutput] = useState("");

  const generateOutput = () => {
    const substanceOutput = [];

    substances.forEach((substance) => {
      const methods = substance.methods.length <= 1 ? substance.methods[0] : substance.methods.slice(0, -1).join(", ") + " and " + substance.methods.slice(-1);
      substanceOutput.push(
        [
          `${firstName} started using ${substance.substance.toLowerCase()} at the age of ${substance.ageStarted}.`,
          `They have been ${methods} ${substance.substance.toLowerCase()} ${substance.frequency.toLowerCase()}`,
          `costing them £${substance.cost} ${substance.dailyWeekly}. Their SDS score is ${substance.sds}.`,
        ].join(" ")
      );
    });

    setOutput(substanceOutput.join("\n"));
  };

  const copyToClipboard = () => {
    const copyText = document.querySelector(".output"); // Select the output element using its class name
    if (copyText) {
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.textContent);
    }
  };
  return (
    <div className="container">
      <h1 className="header">Forward Trust Initial Assessment App</h1>
      <div className="content">
        <div className="input-section">
          <h2>Personal Information</h2>
          <div className="text-box-container">
            <h3>Client Name</h3>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
        </div>
        <SubstanceUseSection substances={substances} setSubstances={setSubstances} />
        <CheckboxSection title="Naloxone Administered?" value={naloxoneAdministered} onChange={(e) => setNaloxoneAdministered(e.target.value)} />
        <InputSection title="First Paragraph" placeholder="First Paragraph" value={firstParagraph} onChange={(e) => setFirstParagraph(e.target.value)} />
        <InputSection title="Confidentiality" placeholder="Confidentiality" value={confidentiality} onChange={(e) => setConfidentiality(e.target.value)} />
        <InputSection title="Mental Health" placeholder="Mental Health" value={mentalHealth} onChange={(e) => setMentalHealth(e.target.value)} />
        <InputSection title="Physical Health" placeholder="Physical Health" value={physicalHealth} onChange={(e) => setPhysicalHealth(e.target.value)} />
        <InputSection title="Substance Use" placeholder="Substance Use" value={substanceUse} onChange={(e) => setSubstanceUse(e.target.value)} />
        <InputSection title="Housing" placeholder="Housing" value={housing} onChange={(e) => setHousing(e.target.value)} />
        <InputSection title="Family and Relationships" placeholder="Family & Relationships" value={relationships} onChange={(e) => setRelationships(e.target.value)} />
        <InputSection title="Recovery Plan" placeholder="Recovery Plan" value={recoveryPlan} onChange={(e) => setRecoveryPlan(e.target.value)} />
        <div className="output-section">
          <h2>Output</h2>
          <button onClick={generateOutput}>Generate Output</button>
          <textarea className="output" rows="12" value={output} readOnly></textarea>
          <button onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
      </div>
    </div>
  );
}

export default App;
