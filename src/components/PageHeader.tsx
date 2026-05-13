type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-12 border-b pb-10" style={{ borderColor: 'var(--border)' }}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: 'var(--accent-strong)', opacity: 0.8 }}>
        Zhifan Zhou
      </p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: 'var(--text)', letterSpacing: '-0.016em' }}>
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-7" style={{ color: 'var(--muted)' }}>
          {description}
        </p>
      ) : null}
    </header>
  );
}
