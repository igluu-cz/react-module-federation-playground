import Button from "component-app/Button";
import Dialog from "component-app/Dialog";
import ToolTip from "component-app/ToolTip";
import React, { useState } from "react";

export default function Home() {
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleClick = (ev) => {
    console.log(ev);
    setDialogVisible((prev) => !prev);
  };

  const handleSwitchVisible = (visible) => {
    setDialogVisible(visible);
  };

  return (
    <div>
      <h1>Open Dev Tool And Focus On Network,checkout resources details</h1>
      <p>
        react、react-dom js files are shared between application. So it should
        be loaded only once.
      </p>
      <p>
        components hosted on <strong>component-app</strong>
      </p>
      <p>
        payments page is hosted on <strong>payments-app</strong>
      </p>
      <p>
        You could make changes in applications and it should be properly
        propagated to the host
      </p>
      <h4>Buttons:</h4>
      <Button type="primary" />
      <Button type="warning" />
      <h4>Dialog:</h4>
      <button onClick={handleClick}>click me to open Dialog</button>
      <Dialog switchVisible={handleSwitchVisible} visible={dialogVisible} />
      <h4>hover me please!</h4>
      <ToolTip content="hover me please" message="Hello,world!" />
    </div>
  );
}
