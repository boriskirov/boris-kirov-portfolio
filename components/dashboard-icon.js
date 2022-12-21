import React from "react";
import { useState } from "react";

import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

export function DashboardIcon() {
  const StateMachine = "Dashboard";
  const Hover = "Hover";
  const { rive, RiveComponent } = useRive({
    src: "dashboard.riv",
    autoplay: true,
    stateMachines: StateMachine,
    artboard: "Artboard",
    animations: "Hover",
  });

  const [isHovered, setIsHovered] = useState(false); // Both onHoverInput and onPressedInput are boolean inputs. To transition
  // states we need to set the value property to true or false.

  const onHoverInput = useStateMachineInput(rive, StateMachine, Hover);
  function onMouseEnter() {
    onHoverInput.value = true;
    setIsHovered(true);
  }

  function onMouseLeave() {
    onHoverInput.value = false;
    setIsHovered(false);
  }

  return (
    <>
      <div className="center">
        <RiveComponent
          className="base-canvas-size"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>
    </>
  );
}
