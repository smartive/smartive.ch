import mermaid from 'mermaid';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/shadesOfPurple';
import { FC, useEffect, useState } from 'react';

// This is needed to add c# and rust support in prism.
// https://github.com/FormidableLabs/prism-react-renderer#faq
import Prism from 'prism-react-renderer/prism';
(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-rust');
require('prismjs/components/prism-csharp');

type Props = {
  code: string;
  language?: Language;
  caption?: string;
};

type MermaidProps = {
  code: string;
  caption?: string;
};

const replaceLanguages = (lang: string): Language => {
  switch (lang) {
    case 'c#':
      return 'csharp' as Language;
    case 'c++':
      return 'cpp';
    default:
      return lang as Language;
  }
};

export const CodeSnippet: FC<Props> = ({ code, language, caption }) => (
  <figure>
    <Highlight {...defaultProps} code={code} language={replaceLanguages(language)} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={[className, 'my-8 rounded p-4 whitespace-pre-wrap text-xs relative'].join(' ')} style={style}>
          {language && <div className="absolute right-4 top-2">{language}</div>}
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} key={key} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
    {caption && <figcaption className="italic -mt-6 mb-4 text-xs">{caption}</figcaption>}
  </figure>
);

export const MermaidDiagram: FC<MermaidProps> = ({ code, caption }) => {
  mermaid.initialize({ startOnLoad: false });
  const [svg, setSvg] = useState('');

  useEffect(() => {
    (async () => {
      const { svg } = await mermaid.render('diagram', code);
      setSvg(svg);
    })();
  }, []);

  return (
    <figure>
      {svg && <div className="grid place-items-center" dangerouslySetInnerHTML={{ __html: svg }} />}
      {caption && <figcaption className="italic mt-2 text-xs">{caption}</figcaption>}
    </figure>
  );
};
