import React from "react";

export function OperationalEfficiency() {
  return (
    <section id="operational-efficiency" className="py-16 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg overflow-hidden">
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-200 rounded-full opacity-50"></div>
          <div className="absolute left-20 top-20 w-20 h-20 bg-indigo-200 rounded-full opacity-60"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <svg
                className="w-24 h-24 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Streamlined Operations
              </h3>
              <p className="text-gray-600">
                Automate processes to reduce manual tasks
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="font-bold text-2xl text-blue-600 mb-1">85%</div>
                <p className="text-sm text-gray-600">Reduced paperwork</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="font-bold text-2xl text-blue-600 mb-1">40%</div>
                <p className="text-sm text-gray-600">
                  Time saved on dispatching
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="font-bold text-2xl text-blue-600 mb-1">60%</div>
                <p className="text-sm text-gray-600">Less manual data entry</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="font-bold text-2xl text-blue-600 mb-1">30%</div>
                <p className="text-sm text-gray-600">Lower operational costs</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Operational Efficiency
          </h2>
          <p className="text-lg mb-6 text-gray-600">
            Implementing technologies to streamline workflows, automate
            processes, and improve real-time decision-making for fleet
            management.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="ml-3 text-gray-600">
                <span className="font-medium text-gray-800">
                  Automated scheduling:
                </span>{" "}
                AI-powered dispatch systems that optimize driver assignments.
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="ml-3 text-gray-600">
                <span className="font-medium text-gray-800">
                  Digital documentation:
                </span>{" "}
                Eliminate paper-based processes with digital forms and automated
                compliance reporting.
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="ml-3 text-gray-600">
                <span className="font-medium text-gray-800">
                  Real-time analytics:
                </span>{" "}
                Make data-driven decisions with comprehensive dashboards and
                reports.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-800 transition duration-300 flex items-center"
            >
              Learn more about Operational Efficiency
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
