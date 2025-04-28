import React from "react";

export function MultimodalIntegration() {
  return (
    <section id="multimodal-integration" className="py-16 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Multi-modal Transit Integration
          </h2>
          <p className="text-lg mb-6 text-gray-600">
            Connecting public and private transportation systems for seamless
            mobility across different modes of transport, creating an integrated
            network for efficient travel.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-emerald-600">
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
                  Unified payment systems:
                </span>{" "}
                Enable passengers to use a single payment method across multiple
                transport types.
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-emerald-600">
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
                  Intelligent connections:
                </span>{" "}
                Optimize transfers between different modes of transport with
                real-time scheduling.
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-emerald-600">
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
                <span className="font-medium text-gray-800">Data sharing:</span>{" "}
                Facilitate information exchange between transit providers for
                improved service coordination.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#"
              className="text-emerald-600 font-medium hover:text-emerald-800 transition duration-300 flex items-center"
            >
              Explore integration solutions
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

        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-16 flex items-center px-6">
              <h3 className="text-white font-bold text-lg">
                Multi-modal Transit App
              </h3>
            </div>

            <div className="bg-white p-6">
              <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <svg
                      className="h-6 w-6 text-emerald-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Current Location
                    </p>
                    <p className="text-sm text-gray-600">
                      Downtown Transit Center
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <svg
                      className="h-6 w-6 text-emerald-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Destination</p>
                    <p className="text-sm text-gray-600">Airport Terminal 3</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-3">
                  Available Options:
                </h4>

                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 hover:border-emerald-300 transition cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <svg
                            className="h-5 w-5 text-blue-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">Bus + Train</span>
                      </div>
                      <span className="text-gray-600">38 min</span>
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-300 shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                          <svg
                            className="h-5 w-5 text-emerald-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">Express Shuttle</span>
                      </div>
                      <span className="text-emerald-600 font-medium">
                        25 min
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 hover:border-emerald-300 transition cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                          <svg
                            className="h-5 w-5 text-purple-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">Ride Share</span>
                      </div>
                      <span className="text-gray-600">19 min</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 rounded-full opacity-70 -z-10"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-100 rounded-full opacity-70 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
