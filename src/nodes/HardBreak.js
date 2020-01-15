// @flow
import Node from "./Node";

export default class HardBreak extends Node {
  get name() {
    return "hard_break";
  }

  get schema() {
    return {
      inline: true,
      group: "inline",
      selectable: false,
      parseDOM: [{ tag: "br" }],
      toDOM: () => ["br"],
    };
  }

  get markdownToken() {
    return "hardbreak";
  }

  toMarkdown(state, node, parent, index) {
    for (let i = index + 1; i < parent.childCount; i++)
      if (parent.child(i).type !== node.type) {
        state.write("\\\n");
        return;
      }
  }

  parseMarkdown() {
    return { node: "hard_break" };
  }
}