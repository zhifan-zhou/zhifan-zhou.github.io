type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-12 border-b border-stone-200 pb-10">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
        Zhifan Zhou
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 max-w-3xl text-base leading-7 text-stone-600">
          {description}
        </p>
      ) : null}
    </header>
  );
}
