import type { Metadata } from "next";

export const cvMetadata: Metadata = {
  title: "Andres Rodriguez — CV",
  robots: { index: false, follow: false },
};

/**
 * Full-screen PDF viewer for the CV routes (/cv, /es/cv). Some mobile browsers
 * can't render a PDF inline, so "Open CV" (always visible) and the <object>
 * fallback both open the raw PDF in a new tab.
 */
export function CvViewer({ pdf, lang }: { pdf: string; lang: "en" | "es" }) {
  const openLink = (className: string) => (
    <a href={pdf} target="_blank" rel="noopener" className={className}>
      Open CV
    </a>
  );

  return (
    <main lang={lang} className="relative h-dvh w-full bg-bg">
      <object data={pdf} type="application/pdf" aria-label="Andres Rodriguez — CV" className="block h-full w-full">
        <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="text-muted">This browser can&apos;t display the PDF here.</p>
          {openLink("rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85")}
        </div>
      </object>
      {openLink(
        "fixed bottom-4 right-4 rounded-full border border-line bg-surface/95 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur transition-colors hover:border-ink/40",
      )}
    </main>
  );
}
