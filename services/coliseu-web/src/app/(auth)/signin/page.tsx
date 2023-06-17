"use client";

import Button from "@/components/ui/button/button";
import Input from "@/components/ui/form/input";
import InputLabel from "@/components/ui/form/input-label";

export default function SignInPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <div className="m-auto w-[450px] space-y-4 rounded-md border border-gray-800 bg-gray-950 p-6 sm:p-8 md:space-y-6">
        <h1 className="text-left text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
          Entrar na sua conta
        </h1>
        <form action="" className="mt-6 space-y-4 md:space-y-6">
          {/* Email */}
          <div>
            <InputLabel title="Seu email" important />
            <Input placeholder="jonh.doe@example.com" />
          </div>

          {/* Password */}
          <div>
            <InputLabel title="Sua senha" important />
            <Input type="password" placeholder="****" />
          </div>

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-sm font-medium text-gray-400 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>

          <Button
            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
            color="primary"
            shape="rounded"
          >
            Entrar
          </Button>

          <p className="text-sm font-light text-gray-400">
            Não possui uma conta?{" "}
            <a href="#" className="font-medium text-blue-300 hover:underline">
              Registre-se
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
