import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type Props = {
  onClick: () => void;
  text: string;
  type: "submit" | undefined;
  variant?: "yellow" | "white";
};

export const Button: React.FC<Props> = ({ onClick, text, type, variant }) => (
  <button
    type={type}
    onClick={onClick}
    className={classNames(styles.button, {
      [styles.buttonYellow]: variant === "yellow",
      [styles.buttonWhite]: variant === "white",
    })}
  >
    {text}
  </button>
);
