import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import BasicInfo from "../sign-up/basic-info";
import CommunicationInfo from "../sign-up/communication-info";
import ContactInfo from "../sign-up/contact-info";

import "./step-wizard.css";

export default function StepWizard(props: any) {
  const [steps, setSteps] = useState([
    {
      key: "firstStep",
      label: "Basic Details",
      isDone: true,
      component: BasicInfo,
    },
    {
      key: "secondStep",
      label: "Contact Details",
      isDone: false,
      component: ContactInfo,
    },
    {
      key: "thirdStep",
      label: "Communication Details",
      isDone: false,
      component: CommunicationInfo,
    },
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = (event: any) => {
    const index = steps.findIndex((x) => x.key === activeStep.key);
    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = true;
        return x;
      })
    );
    setTimeout(() => {
      setActiveStep(steps[index + 1]);
    }, 500);
  };

  const handleBack = () => {
    const index = steps.findIndex((x) => x.key === activeStep.key);
    if (index === 0) return;

    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = false;
        return x;
      })
    );
    setActiveStep(steps[index - 1]);
  };

  const btnType: string =
    steps[steps.length - 1].key !== activeStep.key ? "button" : "Submit";

  console.log("btnType  btnType", btnType);

  return (
    <div className="step-wizard">
      <div className="box">
        <div className="steps">
          <ul className="nav">
            {steps.map((step, i) => {
              return (
                <li
                  key={i}
                  className={`${activeStep.key === step.key ? "active" : ""} ${
                    step.isDone ? "done" : ""
                  }`}
                >
                  <div>
                    Step {i + 1}
                    <br />
                    <span>{step.label}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {steps.map((step, i) => {
          return (
            <div
              className={"step-component-" + i}
              style={{
                display: activeStep.key === step.key ? "block" : "none",
              }}
              key={`${i}_index`}
            >
              {step.component()}
            </div>
          );
        })}
        <div className="btn-component">
          {/* <input
            type="button"
            value="Back"
            onClick={handleBack}
            disabled={steps[0].key === activeStep.key}
          /> */}

          <Button
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleBack}
            disabled={steps[0].key === activeStep.key}
          >
            Back
          </Button>

          {/* <input
            type="button"
            value={
              steps[steps.length - 1].key !== activeStep.key ? "Next" : "Submit"
            }
            onClick={handleNext}
          /> */}

          {steps[steps.length - 1].key !== activeStep.key ? (
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleNext}
            >
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onSubmit={(event) => props.handleSubmit(event)}
            >
              Sign Up
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
