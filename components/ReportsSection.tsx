type Report = {
  title: string;
  description: string;
  href: string;
};

type ReportsSectionProps = {
  title: string;
  description: string;
  reports: Report[];
  charityHeading: string;
  charityLines: string[];
  charityText: string;
};

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path d="M7 3h7l4 4v14H7V3Z" strokeLinejoin="round" />
      <path d="M14 3v4h4" strokeLinejoin="round" />
    </svg>
  );
}

export default function ReportsSection({
  title,
  description,
  reports,
  charityHeading,
  charityLines,
  charityText,
}: ReportsSectionProps) {
  return (
    <section className="bg-sand py-20">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <h2 className="font-display text-3xl text-ink md:text-4xl">{title}</h2>
          <p className="text-sm text-ink/60 md:text-right">{description}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reports.map((report) => (
            <div key={report.title} className="flex flex-col border-2 border-ink bg-cream p-7">
              <span className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wide text-terracotta">
                <DocIcon />
                PDF Report
              </span>
              <h3 className="mt-4 font-display text-xl text-ink">{report.title}</h3>
              <p className="mt-3 flex-1 text-sm text-ink/60">{report.description}</p>
              <a
                href={report.href}
                className="mt-6 inline-flex w-fit items-center gap-3 border-2 border-ink bg-ink px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-cream transition hover:bg-forest-dark"
              >
                Download
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M2 2h8v8" strokeLinecap="square" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 border-t border-ink/10 pt-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl text-ink">{charityHeading}</h3>
            <div className="mt-3 space-y-1 text-sm text-ink/70">
              {charityLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <p className="text-sm text-ink/70">{charityText}</p>
        </div>
      </div>
    </section>
  );
}