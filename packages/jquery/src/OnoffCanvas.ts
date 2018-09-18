import {
  ClassName,
  getSelectorFromElement,
  IOCDefault,
  OcDefault,
  Selector
} from "@onoffcanvas/core";
import $ from "jquery";
import { DATA_KEY } from "./index";

export class OnoffCanvas {
  private static each: any;
  public element: any;
  public config: any;
  private triggerElements: Element[];
  private $selector: any;
  constructor(element, config: IOCDefault) {
    this.element = element;
    this.config = { ...OcDefault, ...config };
    this.triggerElements = $.makeArray(
      document.querySelectorAll(
        `[data-toggle="collapse"][href="#${element.id}"],` +
          `[data-toggle="collapse"][data-target="#${element.id}"]`
      )
    );

    const triggers = [].slice.call(
      document.querySelectorAll(Selector.DATA_TOGGLE)
    );
    for (let i = 0, len = triggers.length; i < len; i++) {
      const elem = triggers[i];
      const selector = getSelectorFromElement(elem);
      const filterElement = [].slice
        .call(document.querySelectorAll(selector))
        .filter(foundElem => foundElem === element);
      if (selector !== null && filterElement.length > 0) {
        this.$selector = selector;
        this.triggerElements.push(elem);
      }
    }
    this.addAriaExpanded(triggers);
    this.toggle();
  }
  public toggle() {
    if ($(this.element).hasClass(ClassName.SHOW)) {
      this.hide();
    } else {
      this.show();
    }
  }
  public show() {
    if ($(this.element).hasClass(ClassName.SHOW)) {
      return;
    }
    $(this.element).addClass(ClassName.SHOW);
    this.addAriaExpanded(this.triggerElements);
  }
  public hide() {
    if (!$(this.element).hasClass(ClassName.SHOW)) {
      return;
    }
    $(this.element).removeClass(ClassName.SHOW);
    this.addAriaExpanded(this.triggerElements);
  }
  private addAriaExpanded(triggerElements) {
    const isOpen = $(this.element).hasClass(ClassName.SHOW);
    $(triggerElements).attr("aria-expanded", isOpen ? "true" : "false");
  }
  // tslint:disable-next-line:member-ordering
  public static JQI(config) {
    return this.each(function() {
      const $this = $(this);
      let data = $(this).data(DATA_KEY);
      const conf = {
        ...OcDefault,
        ...$this.data(),
        ...(typeof config === "object" && config ? config : {})
      };
      if (!data) {
        data = new OnoffCanvas(this, conf);
        $this.data(DATA_KEY, data);
      }
      if (typeof config === "string") {
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
}
