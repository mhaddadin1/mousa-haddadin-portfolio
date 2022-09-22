import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Northwestern University</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Full Stack web development certificate
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Dec 2021 - May 2022</code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Community Pharmacy</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Chicago, Illinois
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Dec 2012 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Directed day-to-day operations by spearheading
              implementation of short-term and long-term strategies to achieve
              business plan and profitability goals.
              <br />• Analyzed inventory and pricing data that lead to
              purchasing recommendations that helped increase profitability.
              <br />• Developed and implemented onsite audits and formulated
              corrective action plans after determining non-conformance.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• People management
              <br />• Supervisory skills
              <br />• Business Development
              <br />• Exceptional patient care and interaction
              <br />• Inventory management.
              <br />• Project management.
              <br />• Risk management
              <br />• Cost reduction strategies
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
