import {
  OcDefault,
  Selector,
  selectorArray,
  uniqueArr
} from "@onoffcanvas/core";
import OnoffCanvas from "./index";
/**
 * Auto init all OnoffCanvas elements
 *
 * @static
 * @param {boolean} [escKey]
 * @memberof OnoffCanvas
 */
OnoffCanvas.autoinit = (options = OcDefault) => {
  const ocNodeList = document.querySelectorAll(`${Selector.DATA_TOGGLE}`);
  const ocListArr = [].slice.call(ocNodeList);
  const selectorArr = selectorArray(ocListArr);
  const newOcArr = uniqueArr(selectorArr);
  for (const element of newOcArr) {
    newOnoffCanvas(element, options);
  }
};
function newOnoffCanvas(element, options) {
  const newOnoffcanvas = new OnoffCanvas(
    document.querySelector(element),
    options
  );
}
export default OnoffCanvas;
