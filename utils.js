export const isPlainObject = (value) => {
  if (typeof value !== 'object') return false;

  const proto = Object.getPrototypeOf(Object(value));

  const cnst = Object.hasOwnProperty.call(proto, 'constructor') && proto.constructor;

  return typeof cnst === 'function' && cnst instanceof cnst;
};
