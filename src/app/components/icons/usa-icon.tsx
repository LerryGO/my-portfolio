import Image from "next/image";
export function UsaIcon() {
  return (
    <Image
      aria-hidden
      src="/ic_usa.png"
      alt="USA Flag"
      width={24}
      height={24}
      priority
    />
  );
}
