"use client";

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  return (
    <div
      className="prose dark:prose-invert max-w-none bg-white dark:bg-slate-800 p-4 rounded-lg border border-purple-200 dark:border-purple-900/50"
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
};
