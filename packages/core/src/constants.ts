import { IOCDefault } from "./interface";

const NAME = "onoffcanvas";
const EVENT_KEY = `.${NAME}`;
const EventName = {
  HIDE: `hide${EVENT_KEY}`,
  SHOW: `show${EVENT_KEY}`,
};
const ClassName = {
  SHOW: "is-open",
};
const Selector = {
  DATA_TOGGLE: '[data-toggle="onoffcanvas"]',
};
const OcDefault: IOCDefault = {
  createDrawer: true,
  hideByEsc: true,
};

export { NAME, EVENT_KEY, EventName, ClassName, Selector, OcDefault };
