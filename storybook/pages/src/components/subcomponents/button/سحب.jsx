import React from "react";
import PropTypes from "prop-types";
import { Secondary } from "../../../storybook/Button.stories";
import clsx from "clsx";
import TailwindWrapper from "../../../../tailwind.wrapper";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  // const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  const getButtonSize = (size) => {
    switch (size) {
      // shorthands are added to speed up stuff
      case "small" || "md":
        return "size-sm";
      case "large || lg":
        return "size-lg";
      default:
        return "size-md";
    }
  };

  const base = "px-4 py-2 bg-white text-green-500 hover:bg-green-600 hover:text-white rounded-md transition-colors";
  const styles = clsx({ "bg-white": primary }, getButtonSize, base);
  return (
    <>
      <button type="button" className={base} {...props}>
        {label}
      </button>
      {/* <p style={{ color: "green" }}>hello</p> */}
    </>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default (props) => {
  return (
    <TailwindWrapper>
      <Button {...props} />
    </TailwindWrapper>
  );
};
// exporting default will add tailwind otherwise it will not be specified within the app and up to the client
