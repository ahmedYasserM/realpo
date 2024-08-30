"use client";

import { useSession, signOut } from "next-auth/react";
import SocialLinks from "./SocialLinks";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Header(): React.JSX.Element {
  const { status } = useSession();
  const router = useRouter();
  return (
    <nav className="h-20 border-b border-border container flex items-center justify-between">
      <SocialLinks />
      <div>
        {status === "authenticated" ? (
          <Button
            onClick={() => {
              signOut({ callbackUrl: "/", redirect: true });
            }}
          >
            SignOut
          </Button>
        ) : (
          <Button onClick={() => router.push("/login")}>SignIn</Button>
        )}
      </div>
    </nav>
  );
}
