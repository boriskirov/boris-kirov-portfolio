import * as React from "react";
import { useRouter } from "next/router";
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from "kbar";

export default function CommandBar(props) {
  const router = useRouter();

  const actions = [
    {
      id: "copy",
      name: "Copy URL",
      shortcut: ["u"],
      keywords: "copy-url",
      section: "Action",
      perform: () => navigator.clipboard.writeText(window.location.href),
    },
    {
      id: "about",
      name: "About",
      shortcut: ["g", "a"],
      keywords: "go-about",
      section: "Section",
      perform: () => router.push("/about"),
    },
    {
      id: "glossary",
      name: "Glossary",
      shortcut: ["g", "g"],
      keywords: "go-glossary",
      section: "Section",
      perform: () => router.push("/playground/my-glossary"),
    },
    {
      id: "toolbox",
      name: "Toolbox",
      shortcut: ["g", "t"],
      keywords: "go-toolbox",
      section: "Section",
      perform: () => router.push("/playground/my-stack"),
    },
    {
      id: "writings",
      name: "Writings",
      shortcut: ["g", "w"],
      keywords: "go-writings",
      section: "Section",
      perform: () => router.push("/writings"),
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator className="kbar-blur">
            <KBarSearch
              className="kbar-input"
              placeholder="Type a command or search…"
            />
            <RenderResults className="cmd-head" />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {props.children}
    </KBarProvider>
  );
}

function RenderResults() {
  const groups = useMatches();
  const flattened = React.useMemo(
    () =>
      groups.reduce((acc, curr) => {
        acc.push(curr.name);
        acc.push(...curr.actions);
        return acc;
      }, []),
    [groups]
  );

  return (
    <KBarResults
      items={flattened}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="cmd-category">{item}</div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(({ action, active }, ref) => {
  return (
    <div ref={ref} className="cmd-card" tabindex="0">
      <small className="cmd-action">{action.name}</small>
      {action.shortcut?.length ? (
        <div>
          {action.shortcut.map((shortcut) => (
            <kbd key={shortcut} className="cmd-key">
              <code>{shortcut}</code>
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  );
});
