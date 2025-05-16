import ImageTextSection from '@/components/reusable/ImageTextSection';
import ImagePlaceholder from '@/components/reusable/ImagePlaceholder';
import React from 'react'

const Cmes = () => {
  // Icon for transportation/mobility
  const mobilityIcon = "M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zM12 20c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z M12 12c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z";
  
  // Alternative shuttle/bus icon
  const shuttleIcon = "M4 16v2a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2h6v2a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2h.05A2.5 2.5 0 0 0 22 13.5V9.67a1 1 0 0 0-.53-.88L19 7.22V6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v.3L5.9 5.04a2 2 0 0 0-1.8 0A1.5 1.5 0 0 0 3 6.5V13.5A2.5 2.5 0 0 0 5.5 16H4zm13-10h1v1h-1V6zM5 6.5a.5.5 0 0 1 .3-.46l10.1 1.26v1.4H5V6.5zm-.5 7A1.5 1.5 0 0 1 3 12V10h17v2a1.5 1.5 0 0 1-1.5 1.5h-14z";

  return (
    <ImageTextSection
      title="Corporate Mobility Efficiency Solution"
      badge="ENTERPRISE MOBILITY"
      imagePosition="left"
      className="bg-gradient-to-br from-white to-blue-50 py-20"
      borderStyle="corner"
      borderColor="blue"
      customImage={
        <ImagePlaceholder
          title="CMES"
          subtitle="Smart Employee Transportation"
          iconPath={shuttleIcon}
          bgColor="#f0f9ff"
          accentColor="#0369a1"
          height="100%"
        />
      }
      content={
        <div className="space-y-8">
          {/* Problem Statement */}
          {/* <div className="bg-red-50 border border-red-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-red-800 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Problem
            </h3>
            <p className="text-red-600">
              Inefficient employee transportation leads to higher costs, decreased productivity, and employee dissatisfaction.
            </p>
          </div> */}

          {/* Relevant Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              Relevant Services
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {/* Mobility Services */}
              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Mobility Services</h4>
                  <p className="text-slate-600 text-sm">
                    Operational efficiency and fleet optimization through smart routing and scheduling systems.
                  </p>
                </div>
              </div>

              {/* Data Services */}
              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Data Services</h4>
                  <p className="text-slate-600 text-sm">
                    Route planning and efficiency analysis using real-time data and predictive analytics.
                  </p>
                </div>
              </div>

              {/* Business Process Improvement */}
              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Business Process Improvement Services</h4>
                  <p className="text-slate-600 text-sm">
                    Streamlining workflows for shuttle management and transportation operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          {/* <div className="bg-green-50 border border-green-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-green-800 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Solution
            </h3>
            <p className="text-green-700">
              Delivering cost-effective and efficient transportation solutions for employees through optimized routes and schedules, leveraging real-time data and advanced analytics to reduce costs and improve service quality.
            </p>
          </div> */}

          {/* Key Benefits */}
          <div className="mt-8">
            <h4 className="font-semibold text-slate-800 mb-3">Key Benefits</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-600">Cost Reduction</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-600">Improved Efficiency</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-600">Real-time Tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-600">Employee Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Cmes;