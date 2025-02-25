import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
      </main>
    </div>
  );
}
