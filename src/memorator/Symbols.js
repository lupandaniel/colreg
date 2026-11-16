import './memorator.css';

/**
 * Shared building blocks of the "memoratoare" (rich text + light / shape symbols).
 */

/** "**bold** text" -> text with <strong> segments. */
export function rich(text) {
  return String(text)
    .split('**')
    .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

const COLOR_NAMES = { W: 'alb', R: 'roșu', G: 'verde', Y: 'galben', B: 'negru' };

export function Dot({ c, flash }) {
  return (
    <i
      className={`lc-dot lc-${c}${flash ? ' lc-flash' : ''}`}
      title={COLOR_NAMES[c]}
      aria-label={COLOR_NAMES[c]}
    />
  );
}

function Chip({ kind, count = 1 }) {
  const chip = <span className={`lc-chip lc-chip-${kind}`}>{kind}</span>;
  if (count === 1) return chip;
  return (
    <span className="lc-stack">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={`lc-chip lc-chip-${kind}`}>
          {kind}
        </span>
      ))}
    </span>
  );
}

const SHAPES = ['ball', 'dia', 'cyl', 'coneUp', 'coneDn', 'cylR', 'coneUpG', 'ballR'];

function Shape({ kind }) {
  return <i className={`lc-shape lc-${kind}`} />;
}

/** Vertical stripes of a buoy body, top to bottom: B black, Y yellow, R red, G green, W white. */
function Bands({ colors }) {
  return (
    <span className="lc-bands">
      {colors.split('').map((c, i) => (
        <i key={i} className={`lc-band lc-band-${c}`} />
      ))}
    </span>
  );
}

/**
 * Token syntax:
 *   M, M2, M3, B, S, T      masthead (x1/x2/x3), sidelights, sternlight, towing light
 *   dot:W                   single all-round light (W/R/G/Y)
 *   stack:RW                all-round lights, top to bottom
 *   flash:Y                 flashing all-round light
 *   flagA                   International Code flag "A"
 *   +                       plus sign
 *   txt:...                 free text chip
 *   ball dia cyl coneUp coneDn cylR coneUpG ballR     day shapes / topmarks
 *   shapes:ball,dia,ball    vertical stack of shapes
 *   bands:BYB               buoy body stripes, top to bottom
 */
export function Token({ token }) {
  if (token === '+') return <span className="lc-plus">+</span>;
  if (token === 'flagA') return <i className="lc-flagA" title="Pavilion A" />;
  if (/^M[23]?$/.test(token)) return <Chip kind="M" count={token.length > 1 ? Number(token[1]) : 1} />;
  if (['B', 'S', 'T'].includes(token)) return <Chip kind={token} />;
  if (SHAPES.includes(token)) return <Shape kind={token} />;
  if (token.startsWith('dot:')) return <Dot c={token.slice(4)} />;
  if (token.startsWith('flash:')) return <Dot c={token.slice(6)} flash />;
  if (token.startsWith('bands:')) return <Bands colors={token.slice(6)} />;
  if (token.startsWith('stack:')) {
    return (
      <span className="lc-stack">
        {token
          .slice(6)
          .split('')
          .map((c, i) => (
            <Dot key={i} c={c} />
          ))}
      </span>
    );
  }
  if (token.startsWith('shapes:')) {
    return (
      <span className="lc-stack">
        {token
          .slice(7)
          .split(',')
          .map((s, i) => (
            <Shape key={i} kind={s} />
          ))}
      </span>
    );
  }
  if (token.startsWith('txt:')) return <span className="lc-chip lc-chip-txt">{token.slice(4)}</span>;
  return null;
}

export function Tokens({ tokens }) {
  return (
    <div className="lc-symbols">
      {tokens.map((token, i) => (
        <Token key={i} token={token} />
      ))}
    </div>
  );
}
