export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-secondary-background group flex flex-col gap-4 rounded-lg border border-neutral-800 px-4 py-6 hover:border-blue-800/30">
      <span className="text-4xl text-neutral-200 transition-colors group-hover:text-white">
        {icon}
      </span>
      <p className="font-bold text-white">{title}</p>
      <p className="text-sm font-medium text-neutral-400">{description}</p>
    </div>
  );
}
