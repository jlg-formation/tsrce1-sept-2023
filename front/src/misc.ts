export const querySelector = <T extends Element>(
  selector: string,
  type?: new () => T
): T => {
  const elt = document.querySelector(selector);
  if (elt === null) {
    throw new Error(`Cannot find selector ${selector}`);
  }
  if (type && !(elt instanceof type)) {
    throw new Error(`Selector ${selector} is not of type ${type}`);
  }
  return elt as T;
};

export const setAttributeNbr = (
  elt: Element,
  key: string,
  value: number
): void => {
  elt.setAttributeNS(null, key, value + "");
};
