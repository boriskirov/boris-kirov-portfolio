"use client"; // harmless in pages router; ensures hooks run on client

import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { NAV } from "../lib/nav";
import AmsterdamTime from "./current-time";
import Image from "next/image";
import data from "./Footer/footer-data";

const SECONDARY_PREFIXES = ["/posts", "/cases", "/codes"];

export default function SideNav() {
  const router = useRouter();
  const pathname = router.asPath || "/";

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

  return (
    <>
      {/* PRIMARY rail */}
      <aside className="s-rail border-r">
        <div className="side-nav-content">
          <div className="flex-column">
            <div className="s-subtitle">Boris Kirov</div>
            <nav aria-label="Primary">
              <ul className="s-list">
                {NAV.map((item) => (
                  <li key={item.id}>
                    <PrimaryLink
                      item={item}
                      active={activePrimary?.id === item.id}
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
                  <Link
                    rel="noopener noreferrer"
                    href={footer.url}
                    target="_blank"
                    className="s-link nav-link-fill"
                  >
                    <Image
                      src={footer.icon}
                      alt={footer.name}
                      width={24}
                      height={24}
                      className="side-button"
                    />
                    <span>{footer.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <hr />
            <AmsterdamTime />
          </div>
        </div>
      </aside>

      {/* SECONDARY rail */}
      {(secondaryItem && secondaryItem.children?.length) || forceSecondary ? (
        <aside className="s-2-rail border-r" aria-label="Secondary">
          <nav>
            <ul className="s-list">
              {(secondaryItem?.children ?? []).map((c) => {
                const isExternal = /^https?:\/\//.test(c.href);
                const active =
                  pathname === c.href || pathname.startsWith(c.href + "/");

                return (
                  <li key={c.href}>
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

function PrimaryLink({ item, active }) {
  // if item has children, clicking the primary just opens its own page
  if (item.children) {
    return (
      <Link
        href={item.href}
        className={`s-link ${active ? "is-active" : ""}`}
        aria-haspopup="menu"
        aria-expanded={active}
        aria-controls={`secondary-${item.id}`}
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
        <span>{item.label}</span>
      </Link>
    );
  }

  // direct link (no secondary)
  return (
    <Link href={item.href} className={`s-link ${active ? "is-active" : ""}`}>
      {Image && (
        <Image
          src={item.icon}
          alt={item.description}
          width={24}
          height={24}
          className="side-button"
        />
      )}
      <span>{item.label}</span>
    </Link>
  );
}
