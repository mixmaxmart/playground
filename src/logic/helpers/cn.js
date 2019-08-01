export function cn(c, s) {
  const prefix = "my";
  // const root = c.name ? prefix + "-" + c.name : "";
  // // const item = c.item ? root + "__" + c.item : "";
  // const state = c.state ? root + "--" + c.state : "";
  // // const className = root + " " + item + " " + state;
  // const className = root + " " + state;

  const root = c ? prefix + "-" + c : "";
  const state = s ? root + "--" + s : "";

  const className = root + " " + state;
  return className;
}
