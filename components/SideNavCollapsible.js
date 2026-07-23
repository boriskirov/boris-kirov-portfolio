import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import Image from "next/image";
import { NAV } from "../lib/nav";
import { useShortcut } from "../lib/use-shortcut";
import LocalTime from "./CurrentTime";
import data from "./Footer/data";
import boris from "../public/boris.json";

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

  useShortcut({ alt: true, keyCode: 90 }, () => setIsCollapsed((c) => !c));

  return (
    <>
      {/* PRIMARY rail */}
      <aside className="s-rail border-r" data-collapsed={isCollapsed}>
        <div className="side-nav-content">
          <div className="flex-col">
            {/* Collapse toggle button */}
            <div className="nav-rail-header">
              <div className="s-subtitle nav-rail-title">
                <span className="nav-rail-title-text">
                  {boris.firstName} {boris.familyName}
                </span>
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
                    width={18}
                    height={18}
                    className="side-button"
                  />
                ) : (
                  <Image
                    src="/sidebar-expand.svg"
                    alt="Collapse"
                    width={18}
                    height={18}
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
          <div className="flex-col">
            <ul className="s-list">
              {data.map((footer) => (
                <li key={footer.name}>
                  <a
                    href={footer.url}
                    download={footer.download || undefined}
                    className="s-link nav-link-fill"
                    title={isCollapsed ? footer.name : ""}
                    {...(footer.targetBlank
                      ? { target: "_blank", rel: "noreferrer" }
                      : null)}
                  >
                    <Image
                      src={footer.icon}
                      alt={footer.name}
                      width={18}
                      height={18}
                      className="side-button"
                    />
                    <span className="s-link-label">{footer.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <hr />
            <LocalTime isCollapsed={isCollapsed} />
          </div>
        </div>
      </aside>

      {/* SECONDARY rail */}
      {(secondaryItem && secondaryItem.children?.length) || forceSecondary ? (
        <aside className="s-2-rail border-r" aria-label="Secondary">
          <nav>
            <h4 className="s-title nav-rail-header">{secondaryItem?.label}</h4>
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
            width={18}
            height={18}
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
          width={18}
          height={18}
          className="side-button"
        />
      )}
      <span className="s-link-label">{item.label}</span>
    </Link>
  );
}
