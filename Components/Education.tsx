interface EducationItem {
  startDate: string;
  endDate?: string;
  collegeName?: string;
  schoolName?: string;
  address?: string;
  courseName: string;
}

const EducationData: EducationItem[] = [
  {
    startDate: "July 2020",
    endDate: "May 2023",
    collegeName: "Babu Madhav Institute Of Information And Technology",
    courseName: "Bsc. Infomation Technology",
    address: "Bardoli, Gujarat",
  },
  {
    startDate: "2023",
    endDate: "2025",
    schoolName: "Jain University",
    address: "Bangaluru, Karnataka",
    courseName: "Msc. Computer Science And Information Technology",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col gap-4 w-full -z-10 pt-10  ">
      <h1 className="text-2xl font-bold">Education</h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {EducationData.map((item, index) => (
          <li
            key={index}
            className={`mb-10 ms-4 ${
              index === EducationData.length - 1 ? "mb-0" : ""
            }`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              {item.startDate} - {item.endDate || "Present"}
            </time>
            <h3 className="text-lg font-semibold text-white">
              {item.courseName} at {item.collegeName || item.schoolName}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.address}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Education;
