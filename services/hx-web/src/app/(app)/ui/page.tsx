import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Card from "@/components/ui/card/Card";

export default function UIPage() {
  return (
    <div className="container py-8">
      <PageTitle title="UI Components" />

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <Card title="Tournament 001" subtitle="Subtitle example">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              culpa.
            </p>
          </Card>
        </div>
        <div className="col-span-4">
          <Card title="Info" subtitle="Subtitle example">
            <div className="py-6">
              <ol className="relative ml-4 border-l border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                <li className="mb-7 ml-3">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-200 ring-2 ring-white dark:bg-green-900 dark:ring-green-600">
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <div className="pl-4">
                    <h3 className="text-sm font-medium leading-5">
                      Registration Open
                    </h3>
                    <p className="text-xs">Step for teams get enrolled</p>
                  </div>
                </li>
                <li className="mb-7 ml-3">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white dark:bg-gray-700 dark:ring-gray-600">
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <div className="pl-4">
                    <h3 className="text-sm font-medium leading-tight">
                      Results tracking
                    </h3>
                    <p className="text-xs">
                      In this step we track the matches results
                    </p>
                  </div>
                </li>
                <li className="mb-7 ml-3">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white dark:bg-gray-700 dark:ring-gray-600">
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <div className="pl-4">
                    <h3 className="text-sm font-medium leading-tight">
                      Review
                    </h3>
                    <p className="text-xs">Step details here</p>
                  </div>
                </li>
                <li className="ml-3">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white dark:bg-gray-700 dark:ring-gray-600">
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <div className="pl-4">
                    <h3 className="text-sm font-medium leading-tight">
                      Confirmation
                    </h3>
                    <p className="text-xs">Step details here</p>
                  </div>
                </li>
              </ol>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
