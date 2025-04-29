import React from "react";

export function FleetOptimization() {
  return (
    <section id="fleet-optimization" className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Fleet Optimization
          </h2>
          <p className="text-lg mb-6 text-gray-600">
            Enhancing vehicle utilization and minimizing operational costs
            through advanced scheduling, routing, and monitoring tools.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-indigo-600">
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
                  Real-time tracking:
                </span>{" "}
                Monitor your entire fleet with GPS precision and get instant
                location updates.
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-indigo-600">
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
                  Route optimization:
                </span>{" "}
                Reduce fuel costs with AI-powered route planning that adapts to
                traffic conditions.
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-indigo-600">
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
                  Predictive maintenance:
                </span>{" "}
                Prevent breakdowns with data-driven maintenance scheduling.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#"
              className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300 flex items-center"
            >
              Learn more about our Fleet Optimization
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

        <div className="order-1 lg:order-2 bg-indigo-50 rounded-xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-100 rounded-full opacity-70"></div>
          <div className="absolute right-20 bottom-20 w-20 h-20 bg-indigo-200 rounded-full opacity-70"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <svg
                className="w-24 h-24 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                />
              </svg>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Optimize Your Entire Fleet
              </h3>
              <p className="text-gray-600">
                Smart solutions for vehicles of all sizes
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-between mb-4 pb-4 border-b border-gray-100">
                <span className="font-medium">Reduced Fuel Consumption</span>
                <span className="text-green-600">Up to 20%</span>
              </div>
              <div className="flex justify-between mb-4 pb-4 border-b border-gray-100">
                <span className="font-medium">
                  Improved Vehicle Utilization
                </span>
                <span className="text-green-600">Up to 35%</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Maintenance Cost Reduction</span>
                <span className="text-green-600">Up to 25%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
