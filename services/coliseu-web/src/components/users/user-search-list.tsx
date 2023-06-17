import { useState } from "react";
import cn from "classnames";
import { SearchIcon } from "@/components/ui/icons/search";
import Input from "../ui/form/input";
import { ProfileIcon } from "../ui/icons/profile-icon";
import { XMarkIcon } from "../ui/icons/x-mark-icon";

export const collectionList = [
  {
    name: "Iron flower",
    value: "iron-flower",
  },
  {
    name: "Creative web",
    value: "creative-web",
  },
  {
    name: "Art in binary",
    value: "art-in-binary",
  },
  {
    name: "Sound of wave",
    value: "sound-of-wave",
  },
  {
    name: "Pixel art",
    value: "pixel-art",
  },
];

interface CollectionSelectTypes {
  onSelect: (value: string) => void;
}

export default function UserSearchList({ onSelect }: CollectionSelectTypes) {
  let [searchKeyword, setSearchKeyword] = useState("");
  let coinListData = collectionList;
  if (searchKeyword.length > 0) {
    coinListData = collectionList.filter(function (item) {
      const name = item.name;
      return (
        name.match(searchKeyword) ||
        (name.toLowerCase().match(searchKeyword) && name)
      );
    });
  }
  function handleSelectedCoin(value: string) {
    onSelect(value);
    setSearchKeyword("");
  }
  return (
    <div className="shadow-large relative w-full  rounded-lg text-sm">
      <div className="relative">
        <SearchIcon className="absolute left-6 h-full text-gray-700 dark:text-white" />
        <Input
          inputClassName="pl-14"
          type="search"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
      <ul
        role="listbox"
        className={cn(
          "absolute top-12 z-30 mt-1 w-full rounded bg-gray-800 py-3 transition-all",
          {
            hidden: searchKeyword.length === 0,
          }
        )}
      >
        {coinListData.length > 0 ? (
          coinListData.map((item, index) => (
            <li
              key={index}
              role="listitem"
              tabIndex={index}
              onClick={() => handleSelectedCoin(item.value)}
              className="mb-1 flex cursor-pointer items-center gap-3 px-6 py-1.5 outline-none  hover:bg-gray-700 focus:bg-gray-600"
            >
              <div className="flex flex-col">
                <span className="text-sm tracking-tight text-white">
                  {item.name}
                </span>
                <span className="text-xs font-medium tracking-tight text-gray-400">
                  email@example.com
                </span>
              </div>
            </li>
          ))
        ) : (
          // FIXME: need coin not found svg from designer
          <li className="px-6 py-5 text-center">
            <h3 className="mb-2 text-sm text-gray-600 dark:text-white">
              Ops! not found
            </h3>
          </li>
        )}
      </ul>
      <div className="flex flex-wrap py-3">
        <SelectedPlayer name="jonh" email="doe" onRemove={() => {}} />
      </div>
    </div>
  );
}

type SelectedPlayerProps = {
  name: string;
  email: string;
  onRemove: () => void;
};
const SelectedPlayer = ({ name, email, onRemove }: SelectedPlayerProps) => (
  <div className="mb-2 mr-2 flex h-12 items-center rounded-full border border-sky-800 bg-sky-900 p-2 text-white">
    <div className="flex justify-items-stretch">
      {/* Atom: ProfileComponent */}
      <div className="relative h-7 w-7 overflow-hidden rounded-full bg-gray-600">
        <ProfileIcon className="absolute -left-1 h-9 w-9 text-gray-400" />
      </div>
      <div className="mx-3 flex flex-col justify-center">
        <h4 className=" text-xs font-bold leading-[10px] tracking-tight text-sky-200">
          Pedro Henrique
        </h4>
        <span className="text-xs font-medium leading-tight text-sky-100">
          pedro@email.com
        </span>
      </div>
      <div className="block h-6 w-6 self-center">
        <button onClick={onRemove}>
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
);
