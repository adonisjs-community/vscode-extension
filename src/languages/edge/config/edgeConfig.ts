import { IndentAction } from "vscode";
import { EMPTY_ELEMENTS as HTML_EMPTY_ELEMENTS } from "../../html/config/html";

/**
 * Edge language configuration
 */
const EdgeLanguageConfig = {
  indentationRules: {
    increaseIndentPattern: /<(?!\?|(?:area|base|br|col|frame|hr|html|img|input|link|meta|param)\b|[^>]*\/>)([-_\.A-Za-z0-9]+)(?=\s|>)\b[^>]*>(?!.*<\/\1>)|<!--(?!.*-->)|\{[^}"']*$/,
    decreaseIndentPattern: /^\s*(<\/(?!html)[-_\.A-Za-z0-9]+\b[^>]*>|-->|\})/
  },

  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,

  onEnterRules: [
    {
      beforeText: new RegExp(
        `<(?!(?:${HTML_EMPTY_ELEMENTS.join(
          "|"
        )}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`,
        "i"
      ),
      afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
      action: { indentAction: IndentAction.IndentOutdent }
    },

    {
      beforeText: new RegExp(
        `<(?!(?:${HTML_EMPTY_ELEMENTS.join(
          "|"
        )}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
        "i"
      ),
      action: { indentAction: IndentAction.Indent }
    }
  ]
};

export default EdgeLanguageConfig;
