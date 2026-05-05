export default function HowItWorksCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 text-lg font-bold text-white">
        {index}
      </div>
      <p className="text-center text-lg font-bold text-white">{title}</p>
      <p className="text-center text-sm font-semibold text-neutral-500">
        {description}
      </p>
    </div>
  );
}
