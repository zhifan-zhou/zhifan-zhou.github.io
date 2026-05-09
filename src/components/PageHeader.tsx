type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-10 border-b border-stone-200 pb-8">
      <p className="mb-3 text-sm font-medium text-sky-700">Zhifan Zhou</p>
      <h1 className="text-3xl font-semibold text-stone-950 sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600">
          {description}
        </p>
      ) : null}
    </header>
  );
}
