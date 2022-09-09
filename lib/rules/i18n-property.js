import { getImportDeclarationSource, getImportDeclarationIdentifier, getClassPropertyName } from '../utils/node.js';
import { isObjectExpression } from '../utils/expression.js';

export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Ensure that we host i180n labels on a 1180 property only',
      category: 'Test',
      recommended: 'error'
    },
    messages: {
      invalidPropertyName: 'You should use "i18n" instead of "{{propertyName}}".'
    },
    schema: []
  },
  create(context) {
    function invalidRule(node, propertyName) {
      context.report({
        node,
        messageId: 'invalidPropertyName',
        data: { propertyName }
      });
    }

    const importedLabels = [];

    return {
      ImportDeclaration: function (node) {
        if (getImportDeclarationSource(node).startsWith('@salesforce/label/')) {
          importedLabels.push(getImportDeclarationIdentifier(node));
        }
      },

      ClassProperty: function (node) {
        if (!isObjectExpression(node)) {
          return;
        }

        const properties = node.value.properties;

        for (const objectProperty of properties) {
          const name = objectProperty.value.name;

          if (importedLabels.indexOf(name) >= 0) {
            const propertyName = getClassPropertyName(node);

            if (propertyName !== 'i18n') {
              invalidRule(node, propertyName);
            }
            break;
          }
        }
      }
    };
  }
};
