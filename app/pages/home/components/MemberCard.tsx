export default function MemberCard({
  name,
  role,
  formation,
  image,
}: {
  name: string;
  role: string;
  formation: string;
  image?: string;
}) {
  return (
    <div className="bg-secondary-background flex h-96 w-full flex-col items-center justify-center gap-12 rounded-xl border border-neutral-900 px-4 py-8 transition-all duration-300 hover:scale-105 hover:border-blue-950">
      <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gray-950">
        <img
          src={image}
          alt={name}
          className="rounded-full transition-transform duration-300 w-36 h-36 object-cover ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="text-base text-blue-600">{role}</p>
        <p className="text-xs text-gray-500">{formation}</p>
      </div>
    </div>
  );
}
