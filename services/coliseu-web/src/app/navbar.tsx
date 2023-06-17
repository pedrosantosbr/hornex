import { EyeIcon } from "@/components/ui/icons/eye-icon";
import { FC } from "react";

const HeaderRightArea: FC = () => {
  return (
    <div className="order-last flex shrink-0 items-center gap-4">
      <div className="flex w-[100px]  items-center text-gray-400 ">
        <span className="mr-2 text-sm">R$ ****</span>
        <div className="cursor-pointer hover:text-white">
          <EyeIcon className="w-5" />
        </div>
      </div>
      <span className="cursor-pointer text-sm text-gray-400 hover:text-white">
        0 convites
      </span>
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className="w-full py-2">
      <div className="container mx-auto flex items-center justify-end py-2">
        <HeaderRightArea />
      </div>
    </nav>
  );
}
