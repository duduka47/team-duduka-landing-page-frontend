export default function PortfolioLink({
  link = '#',
  title,
  description,
  image,
  svg = false,
}: {
  link?: string;
  title: string;
  description: string;
  image?: string | React.ReactNode;
  svg?: boolean;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full max-w-md flex-col gap-8 rounded-lg border border-neutral-900 transition-colors duration-300 ease-in-out hover:border-neutral-600"
    >
      <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-gray-950">
        {image ? (
          svg ? (
            image
          ) : (
            <img
              src={image as string}
              alt={title}
              className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          )
        ) : (
          <p className="text-2xl transition-transform duration-300 ease-in-out group-hover:scale-105">
            😀
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 p-4">
        <p className="text-lg font-bold text-white">{title}</p>
        <p className="text-sm font-semibold text-neutral-500">{description}</p>
      </div>
    </a>
  );
}
