import React from "react";
import func from "prop-types";
import string from "prop-types";
import styled from "styled-components";
import styles from "../styles/header.module.css";

const ToggleWrapper = styled.span`
  img {
    transition: all 1.15s ease;

    &:first-child {
      display: ${({ lightTheme }) => (lightTheme ? "none" : "initial")};
    }

    &:nth-child(2) {
      display: ${({ lightTheme }) => (lightTheme ? "initial" : "none")};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleWrapper
      className={`${styles.iconWrapper}`}
      lightTheme={isLight}
      onClick={toggleTheme}
    >
      <img
        className={`${styles.iconSize}`}
        src="/ToggleLight.svg"
        alt="Light Toggler"
        title="Light Side"
      />
      <img
        className={`${styles.iconSize}`}
        src="/Toggle.svg"
        alt="Dark Toggler"
        title="Dark Side"
      />
    </ToggleWrapper>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
