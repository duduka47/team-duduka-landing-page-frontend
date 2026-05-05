export default function StepCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex w-full max-w-4xl flex-col gap-4 rounded-lg border border-neutral-800 p-4 transition-colors duration-300 ease-in-out hover:border-blue-400">
      <p className="text-4xl font-bold text-blue-400">0{index}</p>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold text-white">{title}</p>
        <p className="text-sm font-semibold text-neutral-500">{description}</p>
      </div>
    </div>
  );
}
