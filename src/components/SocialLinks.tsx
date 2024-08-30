import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100048702383958",
    icon: "/facebook.png",
  },
  {
    name: "Telegram",
    url: "https://t.me/aYasserM",
    icon: "/telegram.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ahmed-yasser-bb4006226/recent-activity/all/",
    icon: "/linkedin.png",
  },
];

export default function SocialLinks(): React.JSX.Element {
  return (
    <div className="flex gap-3 items-center hidden sm:flex">
      {socialLinks.map((socialLink) => {
        return (
          <>
            <Link href={socialLink.url} target="_blank">
              <Image
                src={socialLink.icon}
                alt={socialLink.name}
                width={28}
                height={28}
              ></Image>
            </Link>
          </>
        );
      })}
    </div>
  );
}
