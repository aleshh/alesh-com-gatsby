import React from "react";

type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "paragraph"; lines: string[] }
  | { type: "list"; items: string[][] };

function parseInline(markdown: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern =
    /<span class="emoji">([\s\S]*?)<\/span>|\[([^\]]+)\]\(([^)]+)\)(?:\{target=(\\?[_a-z]+)\})?/g;

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
      const target = match[4]?.replace(/\\/g, "") || undefined;
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

function stripComments(markdown: string): string {
  return markdown.replace(/<!--[\s\S]*?-->/g, (match) => {
    const lineBreaks = match.match(/\r?\n/g)?.length || 0;

    return "\n".repeat(Math.max(1, lineBreaks));
  });
}

function parseBlocks(markdown: string): Block[] {
  const lines = stripComments(markdown).trim().split(/\r?\n/);
  const blocks: Block[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trimEnd();

    if (line.trim() === "") {
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      blocks.push({ type: "h1", text: line.slice(2).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[][] = [];

      while (index < lines.length) {
        const itemLine = lines[index].trimEnd();

        if (!itemLine.startsWith("- ")) {
          break;
        }

        const itemLines = [itemLine.slice(2).trim()];
        index += 1;

        while (index < lines.length) {
          const continuation = lines[index];
          const trimmed = continuation.trim();

          if (trimmed === "") {
            index += 1;

            while (index < lines.length && lines[index].trim() === "") {
              index += 1;
            }

            break;
          }

          if (
            continuation.trimStart().startsWith("- ") ||
            continuation.trimStart().startsWith("#")
          ) {
            break;
          }

          itemLines.push(trimmed);
          index += 1;
        }

        items.push(itemLines);
      }

      blocks.push({ type: "list", items });
      continue;
    }

    const paragraphLines = [line.trim()];
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

    blocks.push({ type: "paragraph", lines: paragraphLines });
  }

  return blocks;
}

function renderListItem(itemLines: string[], key: string): JSX.Element {
  const [firstLine, ...remainingLines] = itemLines;
  const imageMatch = firstLine.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*(.*)$/);

  if (!imageMatch) {
    return (
      <li className="project-item" key={key}>
        <div className="project-copy">{parseInline(itemLines.join(" "))}</div>
      </li>
    );
  }

  const [, alt, src, trailingText] = imageMatch;
  const bodyLines = [trailingText, ...remainingLines].filter(Boolean);

  return (
    <li className="project-item has-image" key={key}>
      <img alt={alt} loading="lazy" src={src} />
      <div className="project-copy">{parseInline(bodyLines.join(" "))}</div>
    </li>
  );
}

export function renderMarkdown(markdown: string): React.ReactNode[] {
  return parseBlocks(markdown).map((block, index) => {
    if (block.type === "h1") {
      return <h1 key={`h1-${index}`}>{parseInline(block.text)}</h1>;
    }

    if (block.type === "h2") {
      return <h2 key={`h2-${index}`}>{parseInline(block.text)}</h2>;
    }

    if (block.type === "list") {
      return (
        <ul className="project-list" key={`ul-${index}`}>
          {block.items.map((item, itemIndex) =>
            renderListItem(item, `li-${index}-${itemIndex}`)
          )}
        </ul>
      );
    }

    return <p key={`p-${index}`}>{parseInline(block.lines.join(" "))}</p>;
  });
}
