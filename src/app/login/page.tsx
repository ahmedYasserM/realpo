"use client";

import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const buttonData = [
  {
    name: "Google",
    src: "/google.png",
  },
  {
    name: "Github",
    src: "/githubDark.png",
  },
  {
    name: "Discord",
    src: "/discord.png",
  },
];

export default function LoginPage(): React.JSX.Element {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className="">Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="grid place-items-center min-h-dvh">
      <div className=" border-2 border-border grid lg:grid-cols-2 gap-8  rounded-lg sm:min-h-[500px] sm:w-[400px] lg:h-[600px] lg:w-[950px] xl:w-[1050px] min-h-[400px] overflow-hidden">
        <div className="relative w-full h-full hidden lg:inline-block">
          <Image src="/login.avif" alt="login" fill />
        </div>

        <div className="flex flex-col   justify-between items-center lg:mr-4 ">
          <h1 className="text-5xl mt-10 text-card-foreground sm:text-6xl xl:text-7xl ">
            Login
          </h1>

          <div className="flex flex-col gap-10 justify-center flex-1 ">
            {buttonData.map((data) => {
              return (
                <button
                  key={data.name}
                  className=" w-full bg-secondary rounded-lg py-4 px-6 sm:py-6 sm:px-8 lg:text-2xl flex gap-2 items-center justify-center whitespace-nowrap hover:translate-y-[-4px] duration-300 ease-in-out  "
                  onClick={() => signIn(data.name.toLowerCase())}
                >
                  <Image
                    src={data.src}
                    alt={data.name}
                    width={30}
                    height={30}
                  />
                  <span>Sign in with {data.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
