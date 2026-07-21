import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import { useShortcut } from "../lib/use-shortcut";

const SHORTCUTS = [
  { action: "Expand & Collapse sidebar", keys: "⌥ + Z" },
  { action: "Change fonts", keys: "⌥ + S" },
  { action: "Search for content", keys: "⌥ + F" },
  { action: "Open commands panel", keys: "⌥ + /" },
];

function Commands() {
  const [showCommandsModal, setShowCommandsModal] = useState(false);

  useShortcut({ alt: true, keyCode: 191 }, () => setShowCommandsModal(true));
  useShortcut({ key: "Escape" }, () => setShowCommandsModal(false));

  return (
    <div className="flex">
      <div>
        <button
          type="button"
          title="Commands (⌥ + /)"
          className="footer-button"
          onClick={() => setShowCommandsModal(true)}
        >
          <Image
            src="/commands.svg"
            alt="Commands icon"
            width={24}
            height={24}
          />
        </button>

        <Modal
          onClose={() => setShowCommandsModal(false)}
          show={showCommandsModal}
          title="Commands"
          body="List of commands that allow you to customise the experience on my personal space. You can also open a global search to look for specific things."
          TitleTag="h3"
          titleClassName="headingM"
          footer={null}
        >
          <hr />
          <table width="100%">
            <tbody>
              <tr>
                <td width="326" height="56">
                  <p>Action</p>
                </td>
                <td width="326" height="56" align="right">
                  <p>Shortcut</p>
                </td>
              </tr>
              {SHORTCUTS.map(({ action, keys }) => (
                <tr key={action}>
                  <td width="326" height="56">
                    <p>{action}</p>
                  </td>
                  <td width="225" align="right">
                    <p>
                      <kbd className="tag shortcut">{keys}</kbd>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal>
      </div>
    </div>
  );
}

export default Commands;
