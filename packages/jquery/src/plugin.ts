import { getSelectorFromElement, NAME, Selector } from "@onoffcanvas/core";
import $ from "jquery";
import OnoffCanvas, { DATA_KEY } from "./index";
// tslint:disable-next-line:no-shadowed-variable
const Plugin = ($ => {
  const JQUERY_NO_CONFLICT = $.fn[NAME];
  $(document).on(
    "click.bs.onoffcanvas.data-api",
    Selector.DATA_TOGGLE,
    function(event) {
      event.preventDefault();
      const $trigger = $(this);
      const selector = getSelectorFromElement(this);
      const selectors = [].slice.call(document.querySelectorAll(selector));
      $(selectors).each(function() {
        const $target = $(this);
        const data = $target.data(DATA_KEY);
        const config = data ? "toggle" : $trigger.data();
        OnoffCanvas.JQI.call($target, config);
      });
    }
  );
  $.fn[NAME] = OnoffCanvas.JQI;
  $.fn[NAME].Constructor = OnoffCanvas;
  $.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return OnoffCanvas.JQI;
  };
  return OnoffCanvas;
})($);
export default Plugin;
