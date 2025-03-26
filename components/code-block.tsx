'use client';

import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  node: any;
  className: string;
  children: any;
}

export function CodeBlock({
  node,
  className,
  children,
  ...props
}: CodeBlockProps) {

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // check if the node property has a language type to distinguish between code and code block. code should be undefined
  if (node.properties.className) {
    return (
      <div className="not-prose relative flex flex-col">
        <pre
          {...props}
          className="text-sm w-full overflow-x-auto p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl dark:text-zinc-50 text-zinc-900 relative"
        >
          <code className="whitespace-pre-wrap break-words">{children}</code>
        </pre>
        <Button
          onClick={copyToClipboard}
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          <Copy size={16} />
        </Button>
      </div>
    );
  } else {
    return (
      <code
        className={`${className} text-sm bg-zinc-100 dark:bg-zinc-800 py-0.5 px-1 rounded-md`}
        {...props}
      >
        {children}
      </code>
    );
  }
}
