import { useEffect } from 'react';
import { Tokens, rich } from './Symbols';

/**
 * Generic "memorator" page, rendered from a data object:
 *
 *   { title, subtitle, sections: [{ title, blocks: [...] }] }
 *
 * Block types:
 *   { type: 'table', head: [...], rows: [[cell, ...], { group: 'text' }], boldFirst?: true }
 *   { type: 'list', items: [...], ordered?: true }
 *   { type: 'facts', items: [{ value, text }] }          big value + explanation
 *   { type: 'pairs', items: [[term, definition], ...] }
 *   { type: 'cards', items: [{ title, sub?, tokens?, text }] }
 *   { type: 'tip', text }   { type: 'warn', title?, text }
 *   every block except 'warn' accepts an optional `title` (small heading above it)
 *
 * A table cell is a string (`**bold**` supported), an array of symbol tokens (see Symbols.js),
 * or `{ t: [tokens], x: 'text' }` for symbols followed by text.
 */

function Cell({ cell }) {
  if (Array.isArray(cell)) return <Tokens tokens={cell} />;
  if (cell && typeof cell === 'object') {
    return (
      <div className="mm-cell-mixed">
        {cell.t && <Tokens tokens={cell.t} />}
        {cell.x && <span>{rich(cell.x)}</span>}
      </div>
    );
  }
  return <>{rich(cell ?? '')}</>;
}

function Block({ block }) {
  switch (block.type) {
    case 'table':
      return (
        <div className="table-scroll">
          <table className={`exam-table mm-table${block.boldFirst ? ' mm-bold-first' : ''}`}>
            <thead>
              <tr>
                {block.head.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) =>
                row.group ? (
                  <tr key={i} className="mm-group-row">
                    <td colSpan={block.head.length}>{row.group}</td>
                  </tr>
                ) : (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>
                        <Cell cell={cell} />
                      </td>
                    ))}
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      );
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag className="mm-list">
          {block.items.map((item, i) => (
            <li key={i}>{rich(item)}</li>
          ))}
        </Tag>
      );
    }
    case 'facts':
      return (
        <ul className="lc-distances">
          {block.items.map((item, i) => (
            <li key={i}>
              <span className="lc-dist-val">{item.value}</span>
              <span className="lc-dist-text">{rich(item.text)}</span>
            </li>
          ))}
        </ul>
      );
    case 'pairs':
      return (
        <dl className="mm-pairs">
          {block.items.map(([term, def], i) => (
            <div key={i} className="mm-pair">
              <dt>{rich(term)}</dt>
              <dd>{rich(def)}</dd>
            </div>
          ))}
        </dl>
      );
    case 'cards':
      return (
        <div>
          {block.items.map((item, i) => (
            <article key={i} className="lc-vessel">
              <header>
                <strong>{rich(item.title)}</strong>
                {item.sub && <span className="lc-sub">{item.sub}</span>}
              </header>
              {item.tokens && <Tokens tokens={item.tokens} />}
              {item.text && <p className="lc-note">{rich(item.text)}</p>}
            </article>
          ))}
        </div>
      );
    case 'tip':
      return <p className="lc-tip">{rich(block.text)}</p>;
    case 'warn':
      return (
        <div className="mm-warn">
          <strong>{block.title || 'Atenție, din banca de întrebări'}</strong>
          <ul className="mm-list">
            {(Array.isArray(block.text) ? block.text : [block.text]).map((t, i) => (
              <li key={i}>{rich(t)}</li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

export default function MemoratorPage({ data }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <div className="lc">
      <section className="exam-card">
        <h2>{data.title}</h2>
        {data.subtitle && <p className="exam-subtitle">{data.subtitle}</p>}
      </section>
      {data.sections.map((section, i) => (
        <section key={i} className="exam-card">
          <h3>{section.title}</h3>
          <div className="mm-blocks">
            {section.blocks.map((block, j) => (
              <div key={j}>
                {block.title && block.type !== 'warn' && (
                  <h4 className="mm-block-title">{block.title}</h4>
                )}
                <Block block={block} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
