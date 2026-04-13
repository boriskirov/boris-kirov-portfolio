"use client"; // harmless in pages router; ensures hooks run on client

import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { NAV } from "../lib/nav";
import AmsterdamTime from "./current-time";
import Image from "next/image";
import data from "./Footer/footer-data";
import { useEffect, useCallback } from "react";

const SECONDARY_PREFIXES = ["/posts", "/cases", "/codes"];

export default function SideNavCollapsible() {
  const router = useRouter();
  const pathname = router.asPath || "/";
  const [isCollapsed, setIsCollapsed] = useState(true);

  // 1) Which primary is active?
  const activePrimary = useMemo(() => {
    for (const item of NAV) {
      // match section root
      if (
        item.href &&
        (pathname === item.href || pathname.startsWith(item.href + "/"))
      ) {
        return item;
      }
      // match any child's subtree
      if (
        item.children?.some(
          (c) => pathname === c.href || pathname.startsWith(c.href + "/"),
        )
      ) {
        return item;
      }
    }
    return null;
  }, [pathname]);

  // 2) Which item should supply the secondary rail?
  //    Prefer the active primary if it has children; otherwise find the item whose child matches this path.
  const secondaryItem = useMemo(() => {
    if (activePrimary?.children?.length) return activePrimary;
    return (
      NAV.find((item) =>
        item.children?.some(
          (c) => pathname === c.href || pathname.startsWith(c.href + "/"),
        ),
      ) || null
    );
  }, [activePrimary, pathname]);

  // 3) Force-open secondary for specific prefixes (e.g. direct deep links)
  const forceSecondary = SECONDARY_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p + "/"),
  );

  function Shortcut() {
    // handle what happens on key press
    const handleKeyPress = useCallback((event) => {
      // keyCode is not dependant on the combination changes that may happen with the primary key
      if (event.altKey === true && event.keyCode === 90) {
        setIsCollapsed(!isCollapsed);
      }
    }, []);

    useEffect(() => {
      // attach the event listener
      document.addEventListener("keydown", handleKeyPress);

      // remove the event listener
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, [handleKeyPress]);
  }

  return (
    <>
      {/* PRIMARY rail */}
      <aside className="s-rail border-r" data-collapsed={isCollapsed}>
        <Shortcut />
        <div className="side-nav-content">
          <div className="flex-column">
            {/* Collapse toggle button */}
            <div className="nav-rail-header">
              <div className="s-subtitle nav-rail-title">
                <span className="nav-rail-title-text">Boris Kirov</span>
              </div>
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="collapse-toggle-button"
                aria-label={
                  isCollapsed ? "Expand navigation" : "Collapse navigation"
                }
                title={
                  isCollapsed
                    ? "Expand sidebar (⌥ + Z)"
                    : "Collapse sidebar (⌥ + Z)"
                }
              >
                {isCollapsed ? (
                  <Image
                    src="/sidebar-collapse.svg"
                    alt="Expand"
                    width={24}
                    height={24}
                    className="side-button"
                  />
                ) : (
                  <Image
                    src="/sidebar-expand.svg"
                    alt="Collapse"
                    width={24}
                    height={24}
                    className="side-button"
                  />
                )}
              </button>
            </div>

            <nav aria-label="Primary">
              <ul className="s-list">
                {NAV.map((item) => (
                  <li key={item.id}>
                    <PrimaryLink
                      item={item}
                      active={activePrimary?.id === item.id}
                      isCollapsed={isCollapsed}
                      aria-label={item.label}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex-column">
            <ul className="s-list">
              {data.map((footer) => (
                <li key={footer.name}>
                  {footer.targetBlank ? (
                    <a
                      href={footer.url}
                      rel="noreferrer"
                      target="_blank"
                      download={footer.download || undefined}
                      className="s-link nav-link-fill"
                      title={isCollapsed ? footer.name : ""}
                    >
                      <Image
                        src={footer.icon}
                        alt={footer.name}
                        width={24}
                        height={24}
                        className="side-button"
                      />
                      <span className="s-link-label">{footer.name}</span>
                    </a>
                  ) : (
                    <a
                      href={footer.url}
                      download={footer.download || undefined}
                      className="s-link nav-link-fill"
                      title={isCollapsed ? footer.name : ""}
                    >
                      <Image
                        src={footer.icon}
                        alt={footer.name}
                        width={24}
                        height={24}
                        className="side-button"
                      />
                      <span className="s-link-label">{footer.name}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <hr />
            <AmsterdamTime isCollapsed={isCollapsed} />
          </div>
        </div>
      </aside>

      {/* SECONDARY rail */}
      {(secondaryItem && secondaryItem.children?.length) || forceSecondary ? (
        <aside className="s-2-rail border-r" aria-label="Secondary">
          <nav>
            <h4 className="s-title nav-rail-header">{secondaryItem?.label}</h4>
            <ul className="s-list">
              {(secondaryItem?.children ?? []).map((c, item) => {
                const isExternal = /^https?:\/\//.test(c.href);
                const active =
                  pathname === c.href || pathname.startsWith(c.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={c.href}
                      className={`s-link ${active ? "is-active" : ""}`}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      <span>{c.label}</span>
                      {isExternal && (
                        <span className="nav-external-indicator">↗</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      ) : (
        // spacer so the main column width is stable
        <aside className="s-spacer" aria-hidden="true" />
      )}
    </>
  );
}

function PrimaryLink({ item, active, isCollapsed }) {
  // if item has children, clicking the primary just opens its own page
  if (item.children) {
    return (
      <Link
        href={item.href}
        className={`s-link ${active ? "is-active" : ""}`}
        aria-haspopup="menu"
        aria-expanded={active}
        aria-controls={`secondary-${item.id}`}
        title={isCollapsed ? item.label : ""}
      >
        {Image && (
          <Image
            src={item.icon}
            alt={item.description}
            width={24}
            height={24}
            className="side-button"
          />
        )}
        <span className="s-link-label">{item.label}</span>
      </Link>
    );
  }

  // direct link (no secondary)
  return (
    <Link
      href={item.href}
      className={`s-link ${active ? "is-active" : ""}`}
      title={isCollapsed ? item.label : ""}
    >
      {Image && (
        <Image
          src={item.icon}
          alt={item.description}
          width={24}
          height={24}
          className="side-button"
        />
      )}
      <span className="s-link-label">{item.label}</span>
    </Link>
  );
}
