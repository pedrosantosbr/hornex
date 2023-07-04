import Navbar from "../Navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar />
      <main className="3xl:px-10 3xl:pt-0.5 relative min-h-[100vh] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 lg:px-8 xl:pb-24">
        {children}
      </main>
    </div>
  );
}
