import {
  ClassName,
  EventName,
  IOCDefault,
  OcDefault,
  Selector
} from "@onoffcanvas/core";
/**
 *
 * @export
 * @class OnoffCanvas
 */
export default class OnoffCanvas {
  public static autoinit: (options?) => void;
  public element: any;
  public config: any;
  public triggerElements: NodeListOf<Element>;
  public drawer: HTMLDivElement;
  /**
   * Creates an instance of OnoffCanvas.
   *
   * @constructor
   * @param {HTMLElement | string} element
   * @param {IOCDefault} [options]
   * @memberof OnoffCanvas
   */
  constructor(element: HTMLElement | string, options: IOCDefault) {
    this.element =
      typeof element === "string" ? document.querySelector(element) : element;
    this.config = { ...OcDefault, ...options };
    this.triggerElements = document.querySelectorAll(`${
      Selector.DATA_TOGGLE
    }[href="#${this.element.id}"],
      ${Selector.DATA_TOGGLE}[data-target="#${this.element.id}"]`);
    this.addAriaExpanded(this.triggerElements);
    const triggers = [].slice.call(this.triggerElements);
    for (const trigger of triggers) {
      trigger.addEventListener("click", event => {
        if (event.currentTarget.tagName === "A") {
          event.preventDefault();
        }
        this.toggle();
      });
    }
    this.drawer = document.createElement("div");
    this.drawer.classList.add("onoffcanvas-drawer");
    document.documentElement.appendChild(this.drawer);
  }
  public on(event, handle) {
    this.listen(event, handle);
    return this;
  }
  /**
   * Show/Hide OnoffCanvas element
   *
   * @returns {void}
   * @memberof OnoffCanvas
   */
  public toggle() {
    if (this.element.classList.contains(ClassName.SHOW)) {
      this.hide();
    } else {
      this.show();
    }
  }
  /**
   * Show OnoffCanvas element
   *
   * @returns {void}
   * @memberof OnoffCanvas
   */
  public show() {
    if (this.element.classList.contains(ClassName.SHOW)) {
      return;
    }
    this.element.classList.add(ClassName.SHOW);
    this.addAriaExpanded(this.triggerElements);
    this.emit(EventName.SHOW, this.element);
    if (this.config.createDrawer) {
      this.drawer.classList.add("is-open");
      this.drawer.addEventListener("click", this.hide.bind(this));
    }
    if (this.config.hideByEsc) {
      window.addEventListener("keydown", event => {
        if (event.keyCode === 27) {
          this.hide();
        }
      });
    }
  }
  /**
   * Hide OnoffCanvas element
   *
   * @returns {void}
   * @memberof OnoffCanvas
   */
  public hide() {
    if (!this.element.classList.contains(ClassName.SHOW)) {
      return;
    }
    if (this.config.createDrawer) {
      this.drawer.classList.remove("is-open");
      this.drawer.removeEventListener("click", this.hide.bind(this));
    }
    this.element.classList.remove(ClassName.SHOW);
    this.addAriaExpanded(this.triggerElements);
    this.emit(EventName.HIDE, this.element);
  }
  public listen(event, handle) {
    this.element.addEventListener(event, handle, false);
    return this;
  }
  public emit(evtType, target, shouldBubble = false) {
    let evt;
    if (typeof CustomEvent === "function") {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble
      });
    } else {
      evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(evtType, shouldBubble, false);
    }
    this.element.dispatchEvent(evt);
    return this;
  }
  public addAriaExpanded(triggerElements) {
    const isOpen = this.element.classList.contains(ClassName.SHOW);
    Array.prototype.forEach.call(triggerElements, (el, i) => {
      el.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
}
