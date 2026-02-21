import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import SideNavCollapsible from "../components/SideNavCollapsible";
import Link from "next/link";

/**
 * Test page for the collapsible SideNav variant
 *
 * To use this variant in production:
 * 1. Replace `<SideNav />` with `<SideNavCollapsible />` in pages/_app.js
 * 2. Import the CSS file: import "../styles/nav-collapsible.css"
 * 3. Test the collapse/expand functionality
 */

const SideNavTest = () => (
  <Motion>
    <Metadata
      title="SideNav Collapsible Test"
      description="Test page for the collapsible sidebar navigation"
      image="https://www.boriskirov.me/meta-tag-playground.png"
      name="Boris Kirov"
    />
    <Main>
      <h1 className="heading2Xl">SideNav Collapsible Test</h1>

      <section style={{ marginTop: "32px" }}>
        <h2 className="headingL">Features</h2>
        <ul style={{ lineHeight: "1.8", marginTop: "16px" }}>
          <li>✓ Click the collapse button (←/→) at the top of the sidebar</li>
          <li>
            ✓ When collapsed, the sidebar shrinks to show only icons (80px)
          </li>
          <li>
            ✓ When expanded, the sidebar shows the full navigation with labels
          </li>
          <li>✓ Hover over icons in collapsed mode to see tooltips</li>
          <li>✓ Footer links and time indicator hide when collapsed</li>
          <li>✓ Smooth transition animation</li>
          <li>
            ✓ State persists during navigation (optional: can add localStorage)
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2 className="headingL">Implementation Details</h2>
        <p style={{ marginTop: "16px" }}>The collapsible nav uses:</p>
        <ul style={{ lineHeight: "1.8", marginTop: "12px" }}>
          <li>React state to track collapse/expand state</li>
          <li>Conditional rendering to hide/show text labels</li>
          <li>CSS transitions for smooth animations</li>
          <li>Grid layout adjustments for responsive sizing</li>
          <li>Accessibility attributes (aria-label, title tooltips)</li>
        </ul>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2 className="headingL">Next Steps</h2>
        <p style={{ marginTop: "16px" }}>To integrate this into your site:</p>
        <ol
          style={{ lineHeight: "1.8", marginTop: "12px", paddingLeft: "20px" }}
        >
          <li>Replace SideNav with SideNavCollapsible in pages/_app.js</li>
          <li>Import nav-collapsible.css in _app.js</li>
          <li>
            Optionally: Add localStorage to persist collapse state across
            sessions
          </li>
          <li>Test on different screen sizes</li>
        </ol>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2 className="headingL">Files Created</h2>
        <ul
          style={{
            lineHeight: "1.8",
            marginTop: "16px",
            fontFamily: "monospace",
            fontSize: "14px",
          }}
        >
          <li>components/SideNavCollapsible.js</li>
          <li>styles/nav-collapsible.css</li>
          <li>pages/sidenav-test.js (this page)</li>
        </ul>
      </section>

      <section
        style={{
          marginTop: "32px",
          paddingTop: "32px",
          borderTop: "1px solid var(--tag-color-bg)",
        }}
      >
        <h2 className="headingL">Customization Options</h2>
        <p style={{ marginTop: "16px" }}>You can customize:</p>
        <ul style={{ lineHeight: "1.8", marginTop: "12px" }}>
          <li>
            <strong>Collapsed width:</strong> Change 80px to your preferred size
          </li>
          <li>
            <strong>Button icons:</strong> Replace "←" and "→" with SVG icons
          </li>
          <li>
            <strong>Animation speed:</strong> Adjust 0.3s transition duration
          </li>
          <li>
            <strong>Persist state:</strong> Add localStorage in the component
          </li>
          <li>
            <strong>Auto-collapse on mobile:</strong> Add breakpoint for smaller
            screens
          </li>
        </ul>
      </section>
    </Main>
  </Motion>
);

export default SideNavTest;
