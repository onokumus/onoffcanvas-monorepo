import { ClassName, NAME } from "@onoffcanvas/core";
import classNames from "classnames";
import * as React from "react";
import { IProps } from "../common";

export interface IOnoffCanvasProps extends IProps {
  isOpen: boolean;
}

export class OnoffCanvas extends React.PureComponent<IOnoffCanvasProps, {}> {
  public static defaultProps: IOnoffCanvasProps = {
    isOpen: false,
  };
  public props: any;

  public render() {
    const { className, isOpen, children, ...rest } = this.props;
    const classes = classNames(NAME, isOpen && ClassName.SHOW, className);
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }
}
