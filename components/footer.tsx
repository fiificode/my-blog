import Link from "next/link";
import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from "./SocialIcons";

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className=" flex gap-6 items-center justify-center">
          <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
          <SocialLink
            href="#"
            aria-label="Follow on Instagram"
            icon={InstagramIcon}
          />
          <SocialLink
            href="#"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            href="#"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2024 fiificode, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
