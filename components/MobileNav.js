// components/MobileNav.js
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NAV } from "../lib/nav";
import Image from "next/image";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(() => new Set()); // which primary groups are expanded
  const { asPath: pathname = "/" } = useRouter();

  // Find active primary item by matching section root OR any child's subtree
  const activePrimary = useMemo(() => {
    for (const item of NAV) {
      if (pathname === item.href || pathname.startsWith(item.href + "/"))
        return item;
      if (
        item.children?.some(
          (c) => pathname === c.href || pathname.startsWith(c.href + "/")
        )
      )
        return item;
    }
    return null;
  }, [pathname]);

  // Ensure active section is expanded by default (on route change)
  useEffect(() => {
    if (activePrimary?.id && !expanded.has(activePrimary.id)) {
      const next = new Set(expanded);
      next.add(activePrimary.id);
      setExpanded(next);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePrimary?.id]);

  const toggle = (id) => {
    const next = new Set(expanded);
    next.has(id) ? next.delete(id) : next.add(id);
    setExpanded(next);
  };

  return (
    <>
      {/* Top bar only on mobile; CSS hides this on desktop */}
      <div className="mobile-topbar">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-sheet"
          className="footer-button"
        >
          <Image src={"/home.svg"} alt={"Home"} width={24} height={24} />
        </button>
      </div>

      {/* Keep the sheet mounted; visibility controlled by .open class in CSS */}
      <div
        id="mobile-nav-sheet"
        className={`mobile-sheet ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="mobile-sheet-inner">
          <button
            className="close footer-button"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            type="button"
          >
            <Image src={"/close.svg"} alt={"Home"} width={24} height={24} />
          </button>

          <div className="block">
            <ul className="m-list">
              {NAV.map((item) => {
                const isGroup = !!item.children?.length;
                const isExpanded = expanded.has(item.id);

                if (!isGroup) {
                  // Primary LEAF: close the drawer when navigating
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="m-link"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                // Primary GROUP: toggle expand; do NOT close the drawer
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      className="m-link m-link-button"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`mob-sec-${item.id}`}
                    >
                      <span>{item.label}</span>
                      {/* <span className={`chev ${isExpanded ? "open" : ""}`}>
                        {" "}
                        ▼
                      </span> */}
                    </button>

                    {isExpanded && (
                      <ul id={`mob-sec-${item.id}`} className="m-sublist">
                        {/* Small leaf for the section root (Overview) — does NOT close */}
                        <li>
                          <Link href={item.href} className="m-sublink">
                            Overview
                          </Link>
                        </li>

                        {/* Children: CLOSE drawer only on leaf click */}
                        {item.children.map((c) => {
                          const isExternal = /^https?:\/\//.test(c.href);
                          const active =
                            pathname === c.href ||
                            pathname.startsWith(c.href + "/");
                          return (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className={`m-sublink ${
                                  active ? "is-active" : ""
                                }`}
                                target={isExternal ? "_blank" : undefined}
                                rel={
                                  isExternal ? "noopener noreferrer" : undefined
                                }
                                onClick={() => setIsOpen(false)}
                              >
                                {c.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
