export interface IOcOption {
  /**
   * Hides the onoffcanvas when click outside the onoffcanvas
   *
   * @type {boolean}
   * @default true
   * @memberof IOCDefault
   */
  createDrawer?: boolean;

  /**
   * Hides the onoffcanvas when escape key is pressed.
   *
   * @type {boolean}
   * @default true
   * @memberof IOCDefault
   */
  hideByEsc?: boolean;
}

export type OcAction = "toggle" | "show" | "hide";

export type OcEvent = "show.onoffcanvas" | "hide.onoffcanvas";
