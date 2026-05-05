export default function Logo() {
  return (
    <div className="flex gap-2">
      <svg
        width="36"
        height="40"
        viewBox="0 0 36 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Linhas conectando os nós */}
        <line
          x1="8"
          y1="12"
          x2="28"
          y2="8"
          stroke="#3b82f6"
          strokeWidth="1.2"
        />
        <line
          x1="28"
          y1="8"
          x2="18"
          y2="32"
          stroke="#ef4444"
          strokeWidth="1.2"
        />
        <line
          x1="18"
          y1="32"
          x2="8"
          y2="12"
          stroke="#3b82f6"
          strokeWidth="1.2"
        />

        {/* Nós circulares com tamanhos diferentes */}
        <circle cx="8" cy="12" r="3.5" fill="#3b82f6" />
        <circle cx="28" cy="8" r="2.5" fill="#3b82f6" />
        <circle cx="18" cy="32" r="4" fill="#ef4444" />
      </svg>
      <div className="flex flex-col text-white">
        <span className="mt-1 block text-[9px] font-thin tracking-[0.25em] opacity-70">
          TEAM
        </span>
        <span className="-mt-2 block text-xl font-black tracking-tight">
          DUDUKA
        </span>
      </div>
    </div>
  );
}
