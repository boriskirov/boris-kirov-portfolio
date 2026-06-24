import { useEffect } from "react";

/**
 * Registers a global keydown listener for a keyboard shortcut.
 *
 * @param {Object}   combo            Modifier + key descriptor.
 * @param {boolean}  [combo.alt]      Require the Alt/Option key.
 * @param {boolean}  [combo.meta]     Require the Meta/Cmd key.
 * @param {boolean}  [combo.ctrl]     Require the Control key.
 * @param {boolean}  [combo.shift]    Require the Shift key.
 * @param {string}   [combo.key]      Match against event.key (case-insensitive).
 * @param {number}   [combo.keyCode]  Match against event.keyCode (legacy).
 * @param {Function} handler          Callback invoked when the combo matches.
 */
export function useShortcut(combo, handler) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (combo.alt && !event.altKey) return;
      if (combo.meta && !event.metaKey) return;
      if (combo.ctrl && !event.ctrlKey) return;
      if (combo.shift && !event.shiftKey) return;
      if (
        combo.key &&
        event.key &&
        event.key.toLowerCase() !== combo.key.toLowerCase()
      ) {
        return;
      }
      if (combo.keyCode && event.keyCode !== combo.keyCode) return;
      handler(event);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [
    combo.alt,
    combo.meta,
    combo.ctrl,
    combo.shift,
    combo.key,
    combo.keyCode,
    handler,
  ]);
}
