"use client";

import { useId, useRef } from "react";
import type { Project } from "@/data/config";

/**
 * The only interactive piece of the page: a compact card that opens a native
 * <dialog> with the project details. Esc and the X button are handled by the
 * dialog itself; clicks on the backdrop land on the <dialog> element.
 */
export function ProjectCard({ project: p }: { project: Project }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="flex w-full items-center gap-4 rounded-2xl border border-line bg-surface p-5 text-left transition-colors hover:border-ink/30"
      >
        <ProjectIcon project={p} size={44} />
        <span className="min-w-0">
          <span className="block font-semibold tracking-tight">{p.name}</span>
          <span className="mt-0.5 block text-sm text-muted">{p.tagline}</span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={() => triggerRef.current?.focus()}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="project-dialog m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl border border-line bg-surface p-0 text-ink"
      >
        <div className="max-h-[85dvh] overflow-y-auto p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <ProjectIcon project={p} size={48} />
              <h3 id={titleId} className="text-2xl font-semibold tracking-tight">
                {p.name}
              </h3>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              autoFocus
              className="-mr-2 -mt-1 rounded-md p-2 text-muted transition-colors hover:text-ink"
            >
              <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="mt-5 leading-relaxed">{p.description}</p>

          <ul className="mt-4 list-disc space-y-1.5 pl-5 leading-relaxed text-muted marker:text-line">
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <p className="mt-5 text-sm">
            <span className="font-medium">Stack: </span>
            <span className="text-muted">{p.stack.join(", ")}</span>
          </p>

          {(p.demo || p.source) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
                >
                  Live demo
                </a>
              )}
              {p.source && (
                <a
                  href={p.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    p.demo
                      ? "rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink/40"
                      : "rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
                  }
                >
                  Source code
                </a>
              )}
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}

function ProjectIcon({ project: p, size }: { project: Project; size: number }) {
  const box = { width: size, height: size };
  if (p.logo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={p.logo} alt="" style={box} className="shrink-0 rounded-xl object-contain" />;
  }
  return (
    <span
      aria-hidden
      style={{ ...box, backgroundColor: p.color, fontSize: size * 0.45 }}
      className="grid shrink-0 place-items-center rounded-xl font-semibold text-white"
    >
      {p.name.charAt(0)}
    </span>
  );
}
