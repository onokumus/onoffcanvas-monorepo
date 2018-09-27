import {
  ClassName,
  getSelectorFromElement,
  IOcOption,
  NAME,
  OcAction,
  OcEvent,
  OcOption,
  Selector
} from "@onoffcanvas/core";
import $ from "jquery";

// tslint:disable-next-line:interface-name
export interface JQuery<TElement = HTMLElement> {
  onoffcanvas(action: OcAction): this;
  onoffcanvas(options?: IOcOption): this;
  on(events: OcEvent, handler: JQuery.EventHandler<TElement>): this;
}

const JQUERY_NO_CONFLICT = $.fn[NAME];
/** @internal */
class OnoffCanvas {
  /** @internal */
  private static each: any;
  /** @internal */
  private element: HTMLElement;
  /** @internal */
  private config: IOcOption | OcAction;
  /** @internal */
  private triggerElements: Element[];
  /** @internal */
  private $selector: any;

  constructor(element: HTMLElement, config: IOcOption | OcAction) {
    this.element = element;
    this.config = {
      ...OcOption,
      ...(typeof config === "object" && config ? config : {})
    };
    this.triggerElements = $.makeArray(
      document.querySelectorAll(
        `${Selector.DATA_TOGGLE}[href="#${element.id}"],` +
          `${Selector.DATA_TOGGLE}[data-target="#${element.id}"]`
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
  /** @internal */
  private addAriaExpanded(triggerElements) {
    const isOpen = $(this.element).hasClass(ClassName.SHOW);
    $(triggerElements).attr("aria-expanded", isOpen ? "true" : "false");
  }
  // tslint:disable-next-line:member-ordering
  public static JQI(config: IOcOption | OcAction): JQuery {
    return this.each(function() {
      const $this = $(this);
      let data = $(this).data(NAME);
      const conf = {
        ...OcOption,
        ...$this.data(),
        ...(typeof config === "object" && config ? config : {})
      };
      if (!data) {
        data = new OnoffCanvas(this, conf);
        $this.data(NAME, data);
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

$(document).on("click.onoffcanvas.data-api", Selector.DATA_TOGGLE, function(
  event
) {
  event.preventDefault();
  const $trigger = $(this);
  const selector = getSelectorFromElement(this);
  const selectors = [].slice.call(document.querySelectorAll(selector));
  $(selectors).each(function() {
    const $target = $(this);
    const data = $target.data(NAME);
    const config = data ? "toggle" : $trigger.data();
    OnoffCanvas.JQI.call($target, config);
  });
});
$.fn[NAME] = OnoffCanvas.JQI;
$.fn[NAME].Constructor = OnoffCanvas;
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT;
  return OnoffCanvas.JQI;
};
/** @internal */
export default OnoffCanvas;
