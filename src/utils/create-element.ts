const createElementAndAppendToBody = (selector: string) => {
  const wrapperElement = document.createElement("div");

  wrapperElement.setAttribute("id", selector);

  document.body.appendChild(wrapperElement);

  return wrapperElement;
};

export { createElementAndAppendToBody };
