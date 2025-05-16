import ImageTextSection from '@/components/reusable/ImageTextSection'
import ImagePlaceholder from '@/components/reusable/ImagePlaceholder'
import React from 'react'

const Pfps = () => {
  // Taxi/fleet vehicle icon
  const vehicleIcon = "M8 16.255A7.07 7.07 0 0 1 5.758 16H3.5A1.5 1.5 0 0 1 2 14.5v-1A1.5 1.5 0 0 1 3.5 12h12a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-2.258A7.07 7.07 0 0 1 11 16.255V18h2a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h2v-1.745zM3.5 13a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1.965c.032-.346.084-.685.156-1.016l.204-.984H3.5zm2.99 0l-.206.984A6.063 6.063 0 0 0 6.167 15h5.666a6.064 6.064 0 0 0-.117-1.016L11.51 13H6.49zm6.684 0l.204.984c.072.33.124.67.156 1.016H15.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2.326zM4.051 7.435l.928-4.274A1.5 1.5 0 0 1 6.441 2h5.118a1.5 1.5 0 0 1 1.462 1.16l.928 4.275A2.5 2.5 0 0 1 16 9.81v1.69a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 11.5V9.81a2.5 2.5 0 0 1 2.051-2.376zm1.88.064A1.503 1.503 0 0 1 5.527 8h6.946c-.168-.201-.28-.442-.323-.712L11.183 3H6.817l-.886 4.086a1.49 1.49 0 0 1-.167.414zM3 9.81v1.69A1.5 1.5 0 0 0 4.5 13h9a1.5 1.5 0 0 0 1.5-1.5V9.81a1.5 1.5 0 0 0-1.473-1.499c-.018.088-.042.175-.073.26A1.5 1.5 0 0 1 11.995 10h-6.99a1.5 1.5 0 0 1-1.459-1.14 2.544 2.544 0 0 1-.073-.351A1.5 1.5 0 0 0 3 9.81z";

  // Alternative car/fleet icon
  const fleetIcon = "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z";
  
  return (
    <div>
      <ImageTextSection
        title="Private Fleet Performance Solution"
        badge="FLEET OPTIMIZATION"
        imagePosition="right"
        className="bg-gradient-to-br from-blue-100 to-blue-200 py-20"
        borderStyle="glow"
        borderColor="blue"
        customImage={
          <ImagePlaceholder
            title="PFPS"
            subtitle="Fleet Performance Management"
            iconPath={fleetIcon}
            bgColor="#1e3a8a"
            accentColor="#60a5fa"
            height="100%"
            textColor="#ffffff"
          />
        }
        content={
          <div className="space-y-8">
            

            {/* Relevant Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">
                Relevant Services
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {/* Mobility Services */}
                <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Mobility Services</h4>
                    <p className="text-slate-600 text-sm">
                      Fleet performance optimization through advanced monitoring and predictive maintenance systems.
                    </p>
                  </div>
                </div>

                {/* Data Services */}
                <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Data Services</h4>
                    <p className="text-slate-600 text-sm">
                      Advanced analytics for route optimization, cost control, and demand forecasting.
                    </p>
                  </div>
                </div>

                {/* Strategic Advisory Services */}
                <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Strategic Advisory Services</h4>
                    <p className="text-slate-600 text-sm">
                      Tailored strategies for private fleet management and business optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            

            {/* Key Benefits */}
            <div className="mt-8">
              <h4 className="font-semibold text-blue-900 mb-3">Key Benefits</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-700">Reduced Operational Costs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-700">Optimized Routes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-700">Real-time Analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-700">Improved Fleet Utilization</span>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Pfps;