// components/MobileNav.js
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NAV } from "../lib/nav";
import Image from "next/image";
import Header from "./Header";

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
          (c) => pathname === c.href || pathname.startsWith(c.href + "/"),
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
          <Image
            src={"/home.svg"}
            alt={"Home"}
            width={18}
            height={18}
            className="icon"
          />
        </button>
        <Header />
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
            <Image
              src={"/close.svg"}
              alt={"Close"}
              width={18}
              height={18}
              className="icon"
            />
          </button>

          <div className="mobile-nav-section">
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
                        {item.icon && (
                          <Image
                            src={item.icon}
                            alt=""
                            width={18}
                            height={18}
                            className="icon"
                          />
                        )}
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                // Primary GROUP: native <details> accordion. The React
                // `expanded` set is the source of truth; `onToggle` syncs
                // state when the user clicks the summary. The chevron is
                // supplied by the site-wide `details summary` rule in
                // base.css (right-chevron closed → down-chevron open).
                return (
                  <li key={item.id}>
                    <details
                      open={isExpanded}
                      onToggle={(e) => {
                        if (e.currentTarget.open !== isExpanded) {
                          toggle(item.id);
                        }
                      }}
                    >
                      <summary
                        className="m-link m-link-button"
                        aria-controls={`mob-sec-${item.id}`}
                      >
                        {item.icon && (
                          <Image
                            src={item.icon}
                            alt=""
                            width={18}
                            height={18}
                            className="icon"
                          />
                        )}
                        {item.label}
                      </summary>
                      <ul id={`mob-sec-${item.id}`} className="m-sublist">
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
                    </details>
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
