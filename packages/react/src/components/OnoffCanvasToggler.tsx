import classNames from "classnames";
import * as React from "react";
import { IProps } from "../common";

export interface IOnoffCanvasTogglerProps extends IProps {
  isAnimated?: boolean;
  isOpen?: boolean;
}

export class OnoffCanvasToggler extends React.PureComponent<
  IOnoffCanvasTogglerProps,
  {}
> {
  public static defaultProps: IOnoffCanvasTogglerProps = {
    isAnimated: false,
    isOpen: false
  };
  public render() {
    const { className, isAnimated, isOpen, children, ...rest } = this.props;
    const classes = classNames(
      "onoffcanvas-toggler",
      isAnimated && "is-animated",
      className
    );
    return (
      <button
        type="button"
        className={classes}
        aria-expanded={isOpen}
        {...rest}
      >
        {children}
      </button>
    );
  }
}
