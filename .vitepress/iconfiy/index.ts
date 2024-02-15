import { MarkdownIt, RuleInline } from "markdown-it";

const delimiter = "::";

export default function insertPlugin(md: MarkdownIt) {
  const tokenize: RuleInline = (state, silent) => {
    let pos = state.pos;
    const ch = state.src[pos];

    if (ch !== delimiter) {
      return false;
    }

    const start = pos;
    pos++;
    const max = state.posMax;

    while (pos < max && state.src[pos] === delimiter) {
      pos++;
    }

    const marker = state.src.slice(start, pos);

    let matchEnd = pos;
    let matchStart = state.src.indexOf("::", matchEnd);

    while (matchStart !== -1) {
      matchEnd = matchStart + 1;

      while (matchEnd < max && state.src[matchEnd] === delimiter) {
        matchEnd++;
      }

      if (matchEnd - matchStart === marker.length) {
        if (!silent) {
          let token = state.push("mark_begin", "mark", 1);
          token.markup = marker;
          token.attrSet("class", "bass");

          token = state.push("text", "", 0);
          token.content = state.src
            .slice(pos, matchStart)
            .replace(/[ \n]+/g, " ")
            .trim();

          token = state.push("mark_end", "mark", -1);

          console.log("token: ", state.tokens);
        }

        state.pos = matchEnd;
        return true;
      }

      matchStart = state.src.indexOf(delimiter, matchEnd);
    }

    if (!silent) {
      state.pending += marker;
    }
    state.pos += marker.length;
    return true;
  };

  md.inline.ruler.before("emphasis", "mark", tokenize);
}
