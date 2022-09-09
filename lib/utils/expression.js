export function isObjectExpression(node) {
  return !!(node && node.type === 'ObjectExpression');
}
