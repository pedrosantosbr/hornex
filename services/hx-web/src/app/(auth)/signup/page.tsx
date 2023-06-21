"use client";

import Button from "@/components/ui/button/button";
import Input from "@/components/ui/form/input";
import InputLabel from "@/components/ui/form/input-label";

export default function SignInPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <div className="m-auto w-[450px] space-y-4 rounded-md border border-gray-800 bg-gray-950 p-6 sm:p-8 md:space-y-6">
        <h1 className="text-left text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
          Criar uma conta
        </h1>
        <form action="" className="mt-6 space-y-4 md:space-y-6">
          {/* Email */}
          <div>
            <InputLabel title="Email" important />
            <Input placeholder="jonh.doe@example.com" />
          </div>

          {/* Password */}
          <div>
            <InputLabel title="Senha" important />
            <Input type="password" placeholder="****" />
          </div>

          <div className="mb-6 flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Eu concordo com os{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                termos e condições
              </a>
            </label>
          </div>

          <Button
            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
            color="primary"
            shape="rounded"
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
