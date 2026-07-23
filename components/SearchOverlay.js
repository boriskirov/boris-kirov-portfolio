import { useState } from "react";
import { useShortcut } from "../lib/use-shortcut";
import Modal from "./Modal";
import SearchApp from "./SearchApp";

/**
 * Global search overlay. Registers the ⌥+F shortcut to open the modal
 * and Escape to close. Mounted once at the app level (pages/_app.js) so
 * the shortcut is available on every route without any visible affordance
 * in the header — users discover it through the Commands modal (⌥+/).
 *
 * The Modal internally renders to `document.body` via a React portal, so
 * the render position of this component in the tree doesn't matter.
 */
export default function SearchOverlay() {
  const [show, setShow] = useState(false);

  useShortcut({ alt: true, keyCode: 70 }, () => setShow(true));
  useShortcut({ key: "Escape" }, () => setShow(false));

  return (
    <Modal
      onClose={() => setShow(false)}
      show={show}
      title="SEARCH"
      body="Looking for something I've done in the past, just enter the keyword in the search box."
    >
      <SearchApp />
    </Modal>
  );
}
