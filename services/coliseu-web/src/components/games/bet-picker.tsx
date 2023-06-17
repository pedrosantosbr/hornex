import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const bets = [
  {
    name: "Conservador",
    amount: 5,
  },
  {
    name: "Moderado",
    amount: 10,
  },
  {
    name: "Arriscado",
    amount: 20,
  },
  {
    name: "Maluco",
    amount: 150,
  },
];

export default function BetPicker() {
  const [selected, setSelected] = useState(bets[0]);

  return (
    <div className="block">
      <div className="w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {bets.map((bet) => (
              <RadioGroup.Option
                key={bet.name}
                value={bet}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
                  ${
                    checked
                      ? "bg-opacity-75 bg-gradient-to-br from-sky-950 to-sky-800 text-white"
                      : "bg-opacity-75 bg-gradient-to-br from-slate-950 to-slate-800"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-white"
                            }`}
                          >
                            {bet.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-200"
                            }`}
                          >
                            <span>{`R$ ${bet.amount},00`}</span>{" "}
                            {/* <span aria-hidden="true">&middot;</span>{" "}
                            <span>jogador</span> */}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
