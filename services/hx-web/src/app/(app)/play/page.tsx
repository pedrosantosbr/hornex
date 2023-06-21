"use client";
import Button from "@/components/ui/button/button";
import InputLabel from "@/components/ui/form/input-label";
import Input from "@/components/ui/form/input";
import { ArrorLongLeftIcon } from "@/components/ui/icons/arrow-long-left-icon";
import Link from "next/link";
import UserSearchList from "@/components/users/user-search-list";
import BetPicker from "@/components/games/bet-picker";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDown } from "@/components/ui/icons/chevron-down";
import { useState } from "react";
import { Ethereum } from "@/components/ui/icons/ethereum";
import { CheckIcon } from "@/components/ui/icons/check-icon";

type PlayPageProps = {
  gameSlug: string;
};

const GameOptions = [
  {
    id: 1,
    name: "League of Legends",
    value: "league-of-legends",
    icon: <Ethereum />,
  },
  {
    id: 2,
    name: "Counter-Strike: Global Ofensive",
    value: "cs-go",
    icon: <Ethereum />,
  },
];

export default function PlayPage({ gameSlug }: PlayPageProps) {
  let [game, setGame] = useState(GameOptions[0]);

  return (
    <main className="px-auto container mx-auto mb-[100px] space-y-10 pt-6">
      {/* Page title */}
      <Link href="/">
        {" "}
        <div className="flex text-gray-300 hover:text-white">
          <ArrorLongLeftIcon className="mr-2 w-5" />
          <span className="text-sm font-medium tracking-tight">Voltar</span>
        </div>
      </Link>

      <h1 className="text-left text-xl font-bold tracking-tighter text-white md:text-2xl">
        Nova partida
      </h1>

      {/* Team */}
      <div className="block rounded-lg border border-gray-800 bg-gray-950 p-6">
        <h1 className="text-left text-xl font-bold tracking-tighter text-white ">
          Formar time
        </h1>
        <p className="!mt-0 mb-6 text-left tracking-tighter text-gray-400">
          Selecionar jogadores para formar um time e de um nome para sua equipe.
        </p>

        <form action="" className="space-y-4 md:space-y-6">
          <div>
            {/* Game */}
            <div className="shadow-card hover:shadow-large xs:p-6 xs:pb-8 mb-6 rounded-lg border border-gray-700 bg-gray-800 p-5 transition-shadow duration-200">
              <InputLabel title="Jogo" important />
              <p className="mb-5 text-sm leading-[1.8] dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                odio..
              </p>
              <div className="relative">
                <Listbox value={game} onChange={setGame}>
                  <Listbox.Button className="text-case-inherit letter-space-inherit flex h-10 w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 outline-none transition-shadow duration-200 hover:border-gray-900 hover:ring-1 hover:ring-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-gray-600 dark:hover:ring-gray-600 sm:h-10 sm:px-5">
                    <div className="flex items-center">
                      <span className="mr-2 ">
                        <CheckIcon className="h-6 w-6 text-green-400" />
                      </span>
                      {game.name}
                    </div>
                    <ChevronDown />
                  </Listbox.Button>
                  <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="shadow-large xs:p-2 absolute left-0 z-10 mt-1 grid w-full origin-top-right gap-0.5 rounded-lg border border-gray-200 bg-white p-1 outline-none dark:border-gray-700 dark:bg-gray-800">
                      {GameOptions.map((option) => (
                        <Listbox.Option key={option.id} value={option}>
                          {({ selected }) => (
                            <div
                              className={`flex cursor-pointer items-center rounded-md px-3 py-2 text-sm text-gray-900 transition dark:text-gray-100  ${
                                selected
                                  ? "bg-gray-200/70 font-medium dark:bg-gray-600/60"
                                  : "hover:bg-gray-100 dark:hover:bg-gray-700/70"
                              }`}
                            >
                              <span className="mr-2">
                                <CheckIcon className="h-6 w-6" />
                              </span>
                              {option.name}
                            </div>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </Listbox>
              </div>
            </div>
          </div>
          <div>
            <InputLabel
              title="Nome do time"
              subTitle="Você pode escolher qualquer nome que quiser"
            />
            <Input placeholder="Ex: Os vingadores" />
          </div>
          <div>
            <InputLabel
              title="Selectionar jogadores"
              subTitle="Você pode escolher qualquer nome que quiser"
            />
            <UserSearchList onSelect={(email) => console.log(email)} />
          </div>
        </form>
      </div>

      {/* Bet */}
      <div className="block rounded-lg border border-gray-800 bg-gray-950 p-6">
        <h1 className="text-left text-xl font-bold tracking-tighter text-white ">
          Aposta
        </h1>
        <p className="!mt-0 mb-6 text-left tracking-tighter text-gray-400">
          Selecione o valor da aposta para todos os membros do time.
        </p>

        <InputLabel
          title="Valor da aposta"
          subTitle="O valor selecionado será discontado da sua carteira no momento da criação da partida. Após o término da partida, o valor será devolvido para o vencedor."
          important
        />
        <BetPicker />
      </div>

      <div className="pb-6">
        <Button color="primary" shape="rounded">
          Criar partida
        </Button>
      </div>
    </main>
  );
}
