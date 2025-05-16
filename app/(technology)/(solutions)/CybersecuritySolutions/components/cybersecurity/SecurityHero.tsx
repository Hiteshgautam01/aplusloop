"use client";

import React from "react";

const SecurityHero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white pt-24 pb-16 mb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-200 rounded-full mb-3">
          Comprehensive Security
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Advanced Cybersecurity Solutions
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mb-8">
          Protecting your organization against sophisticated cyber threats with
          integrated, comprehensive security solutions tailored to your needs.
        </p>
        <div className="h-1 w-20 bg-blue-500 rounded-full mb-8"></div>
        <p className="text-blue-200 max-w-3xl">
          Organizations face increasingly sophisticated cyber threats but often
          lack the resources, expertise, and tools to establish and manage an
          effective Security Operations Center (SOC). Our comprehensive
          solutions provide the security foundation you need.
        </p>
      </div>
    </section>
  );
};

export default SecurityHero;
