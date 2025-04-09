export const A4Page = ({
  show_base64,
  children,
  className,
  id,
}: {
  show_base64?: boolean;
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <div
      id={id ?? undefined}
      className={`relative w-[215.9mm] h-[279.4mm] font-sans text-[#4a5744] z-10 overflow-hidden bg-white mx-auto ${show_base64 ? "" : "shadow-[0_0_16px_rgba(0,0,0,0.4)]"} ${className}`}
    >
      {children}
    </div>
  );
};
