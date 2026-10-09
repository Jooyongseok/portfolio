type SectionHeadingProps = {
  index: string;
  title: string;
  meta: string;
  id: string;
};

export function SectionHeading({ index, title, meta, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p>{index}</p>
      <h2 id={id}>{title}</h2>
      <p>{meta}</p>
    </div>
  );
}
