'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  text: string | string[];
  as?: 'span' | 'div' | 'p';
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  initialDelay?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
  cursorClassName?: string;
  onSentenceComplete?: (sentence: string, index: number) => void;
};

export default function TextType({
  text,
  as: Tag = 'span',
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  initialDelay = 0,
  loop = true,
  showCursor = true,
  cursorCharacter = '|',
  className = '',
  cursorClassName = '',
  onSentenceComplete,
}: Props) {
  const lines = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const [shown, setShown] = useState('');
  const state = useRef({ i: 0, c: 0, deleting: false });
  const cb = useRef(onSentenceComplete);

  useEffect(() => {
    cb.current = onSentenceComplete;
  }, [onSentenceComplete]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const tInit = setTimeout(() => setShown(lines[0]), 0);
      return () => clearTimeout(tInit);
    }

    const s = state.current;
    let t: ReturnType<typeof setTimeout>;

    const step = () => {
      const cur = lines[s.i];
      if (!s.deleting) {
        if (s.c < cur.length) {
          s.c++;
          setShown(cur.slice(0, s.c));
          t = setTimeout(step, typingSpeed);
          return;
        }
        cb.current?.(cur, s.i);
        if (!loop && s.i === lines.length - 1) return;
        s.deleting = true;
        t = setTimeout(step, pauseDuration);
      } else {
        if (s.c > 0) {
          s.c--;
          setShown(cur.slice(0, s.c));
          t = setTimeout(step, deletingSpeed);
          return;
        }
        s.deleting = false;
        s.i = (s.i + 1) % lines.length;
        t = setTimeout(step, typingSpeed);
      }
    };

    t = setTimeout(step, initialDelay);
    return () => clearTimeout(t);
  }, [lines, typingSpeed, deletingSpeed, pauseDuration, initialDelay, loop]);

  return (
    <Tag className={`inline-flex items-center whitespace-pre-wrap ${className}`}>
      <span className="sr-only">{lines.join('. ')}</span>
      <span aria-hidden="true">{shown}</span>
      {showCursor && (
        <span aria-hidden="true" className={`ml-0.5 inline-block animate-[tt-blink_1s_steps(1)_infinite] ${cursorClassName}`}>
          {cursorCharacter}
        </span>
      )}
      <style>{`@keyframes tt-blink{0%,50%{opacity:1}50.01%,100%{opacity:0}}`}</style>
    </Tag>
  );
}