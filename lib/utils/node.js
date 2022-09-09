export function getImportDeclarationSource(node) {
  return node.source.value;
}

export function getImportDeclarationIdentifier(node) {
  return node.specifiers[0].local.name;
}

export function getClassPropertyName(node) {
  return node.key.name;
}
