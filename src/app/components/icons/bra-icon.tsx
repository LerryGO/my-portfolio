import Image from "next/image";

export function BrazilIcon() {
  return (
    <Image
      aria-hidden
      src="/ic_br.png"
      alt="Brazil Flag"
      width={24}
      height={24}
      priority
    />
  );
}
