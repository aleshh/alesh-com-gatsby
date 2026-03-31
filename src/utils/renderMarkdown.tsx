import React from "react";

function parseInline(markdown: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern =
    /<span class="emoji">([\s\S]*?)<\/span>|\[([^\]]+)\]\(([^)]+)\)(?:\{target=([_a-z]+)\})?/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null = pattern.exec(markdown);

  while (match) {
    if (match.index > lastIndex) {
      nodes.push(markdown.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      nodes.push(
        <span className="emoji" key={`emoji-${match.index}`}>
          {match[1]}
        </span>
      );
    } else if (match[2] !== undefined) {
      const target = match[4] || undefined;
      const rel = target === "_blank" ? "noreferrer" : undefined;

      nodes.push(
        <a
          href={match[3]}
          key={`md-link-${match.index}`}
          rel={rel}
          target={target}
        >
          {match[2]}
        </a>
      );
    }

    lastIndex = pattern.lastIndex;
    match = pattern.exec(markdown);
  }

  if (lastIndex < markdown.length) {
    nodes.push(markdown.slice(lastIndex));
  }

  return nodes;
}

function parseBlocks(markdown: string): string[][] {
  const lines = markdown.trim().split(/\r?\n/);
  const blocks: string[][] = [];

  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trimEnd();

    if (line.trim() === "") {
      index += 1;
      continue;
    }

    if (line.startsWith("# ") || line.startsWith("## ")) {
      blocks.push([line.trim()]);
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];

      while (index < lines.length) {
        const itemLine = lines[index].trimEnd();

        if (!itemLine.startsWith("- ")) {
          break;
        }

        let item = itemLine.slice(2).trim();
        index += 1;

        while (index < lines.length) {
          const continuation = lines[index];

          if (
            continuation.trim() === "" ||
            continuation.trimStart().startsWith("- ") ||
            continuation.trimStart().startsWith("#")
          ) {
            break;
          }

          item += ` ${continuation.trim()}`;
          index += 1;
        }

        items.push(item);

        while (index < lines.length && lines[index].trim() === "") {
          index += 1;
        }
      }

      blocks.push(items.map((item) => `- ${item}`));
      continue;
    }

    const paragraphLines: string[] = [line.trim()];
    index += 1;

    while (index < lines.length) {
      const nextLine = lines[index].trimEnd();

      if (
        nextLine.trim() === "" ||
        nextLine.startsWith("# ") ||
        nextLine.startsWith("## ") ||
        nextLine.startsWith("- ")
      ) {
        break;
      }

      paragraphLines.push(nextLine.trim());
      index += 1;
    }

    blocks.push(paragraphLines);
  }

  return blocks;
}

export function renderMarkdown(markdown: string): React.ReactNode[] {
  return parseBlocks(markdown).map((block, index) => {
    const firstLine = block[0];

    if (firstLine.startsWith("# ")) {
      return <h1 key={`h1-${index}`}>{parseInline(firstLine.slice(2))}</h1>;
    }

    if (firstLine.startsWith("## ")) {
      return <h2 key={`h2-${index}`}>{parseInline(firstLine.slice(3))}</h2>;
    }

    if (firstLine.startsWith("- ")) {
      return (
        <ul key={`ul-${index}`}>
          {block.map((item, itemIndex) => (
            <li key={`li-${index}-${itemIndex}`}>
              {parseInline(item.slice(2))}
            </li>
          ))}
        </ul>
      );
    }

    return <p key={`p-${index}`}>{parseInline(block.join(" "))}</p>;
  });
}
