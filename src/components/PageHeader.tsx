interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div className="section-container pb-8 sm:pb-10 lg:pb-14">
      <div className="max-w-3xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="heading-xl mb-4 sm:mb-5 text-balance">{title}</h1>
        {subtitle && (
          <p className="body-md max-w-2xl text-pretty">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
