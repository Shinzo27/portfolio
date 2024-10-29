interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  description: string[];
  companyLink?: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "June 2024",
    endDate: "July 2024",
    companyName: "Codsoft",
    jobTitle: "Full stack developer intern",
    description: [
      "Built a full stack application using React, Node.js, MongoDB and Tailwind CSS for a web-based platform.", 
      "Developed a responsive and user-friendly interface for managing tasks, projects, and team members.",
      "Implemented advanced features such as drag and drop functionality, task dependencies, and customizable task statuses.",
    ],
  },
  {
    startDate: "July 2024",
    endDate: "August 2024",
    companyName: "Prodigy Infotech",
    jobTitle: "Full stack developer intern",
    description: [
      "Developed a responsive and user-friendly interface for managing tasks, projects, and team members.",
      "Built a full stack application using React, Next.js, and Tailwind CSS for a web-based platform.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-4 w-full -z-10 pt-10">
      <h1 className="text-2xl font-bold">Work Experience</h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {workExperienceData.map((item, index) => (
          <li
            key={index}
            className={`mb-10 ms-4 ${
              index === workExperienceData.length - 1 ? "mb-0" : ""
            }`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.startDate} - {item.endDate || "Present"}
            </time>
            <h3 className="text-lg font-semibold text-white">
              {item.jobTitle} at {item.companyName}
            </h3>
            <div className="mb-4 text-base font-normal text-gray-400">
              <ul>
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
            {item.companyLink && (
              <a
                href={item.companyLink}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkExperience;
