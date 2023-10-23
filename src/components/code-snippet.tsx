import mermaid from 'mermaid';
import { Highlight, themes } from 'prism-react-renderer';
import Prism from 'prismjs';
import { FC, useEffect, useState } from 'react';

// This is needed to add c# and rust support in prism.
// https://github.com/FormidableLabs/prism-react-renderer#custom-language-support
(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-rust');
require('prismjs/components/prism-csharp');
require('prismjs/components/prism-dart');
require('prismjs/components/prism-protobuf');

type Props = {
  code: string;
  language: string;
  caption?: string;
};

type MermaidProps = {
  code: string;
  caption?: string;
};

const replaceLanguages = (lang: string): string => {
  switch (lang) {
    case 'c#':
      return 'csharp';
    case 'c++':
      return 'cpp';
    default:
      return lang;
  }
};

export const CodeSnippet: FC<Props> = ({ code, language, caption }) => (
  <figure>
    <Highlight code={code} language={replaceLanguages(language)} theme={themes.shadesOfPurple}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={[className, 'relative my-8 whitespace-pre-wrap rounded p-4 text-xs'].join(' ')} style={style}>
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
    {caption && <figcaption className="-mt-6 mb-4 text-xs italic">{caption}</figcaption>}
  </figure>
);

export const MermaidDiagram: FC<MermaidProps> = ({ code, caption }) => {
  mermaid.initialize({ startOnLoad: false });
  const [svg, setSvg] = useState('');

  useEffect(() => {
    (async () => {
      const { svg } = await mermaid.render('diagram', code);
      setSvg(svg);
    })().catch((e) => console.error(e));
  }, []);

  return (
    <figure>
      {svg && <div className="grid place-items-center" dangerouslySetInnerHTML={{ __html: svg }} />}
      {caption && <figcaption className="mt-2 text-xs italic">{caption}</figcaption>}
    </figure>
  );
};
