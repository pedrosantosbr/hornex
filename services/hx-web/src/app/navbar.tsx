import ProfileMenuItem from "@/components/profile/ProfileMenuItem";
import { LinkButton } from "@/components/ui/LinkButton";
import { EyeIcon } from "@/components/ui/icons/eye-icon";
import { ProfileIcon } from "@/components/ui/icons/profile-icon";
import Link from "next/link";
import { FC } from "react";

const HeaderRightArea: FC = () => {
  return (
    <div className="order-last flex shrink-0 items-center gap-4">
      {/* <div className="flex w-[100px]  items-center text-gray-400 ">
        <span className="mr-2 text-sm">R$ ****</span>
        <div className="cursor-pointer hover:text-white">
          <EyeIcon className="w-5" />
        </div>
      </div> */}
      <div className="flex items-center border-r border-gray-700 px-4">
        <span className="mr-4 text-xs">0.00 BRL</span>
        <LinkButton className="h-8 text-xs" href="/dashboard">
          Deposit
        </LinkButton>
      </div>
      <div className="flex items-center">
        <ProfileMenuItem />
        <div className="relative h-6 w-6 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
          <ProfileIcon className="absolute -left-1 h-8 w-8 text-gray-400 hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex h-16 w-full border-b border-slate-700 bg-slate-800 py-2">
      <div className="z-40 ml-auto flex justify-end px-6 lg:px-8">
        <HeaderRightArea />
      </div>
    </nav>
  );
}
