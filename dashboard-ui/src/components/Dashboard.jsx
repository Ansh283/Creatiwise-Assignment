import React from "react";
import { DataTable } from "./data-table";
import { Input } from "./ui/input";

export function Dashboard() {
  const [search, setSearch] = React.useState("");

  const data = [
    {
      id: 1,
      header: "Executive Summary",
      type: "Narrative",
      status: "Done",
      target: "90%",
      limit: "100%",
      reviewer: "Eddie Lake",
    },
    {
      id: 2,
      header: "Technical Approach",
      type: "Design",
      status: "In Progress",
      target: "60%",
      limit: "90%",
      reviewer: "Assign reviewer",
    },
    {
      id: 3,
      header: "Capabilities",
      type: "Table of Contents",
      status: "Not Started",
      target: "0%",
      limit: "100%",
      reviewer: "Assign reviewer",
    },
    {
      id: 4,
      header: "Performance Metrics",
      type: "Technical Approach",
      status: "Done",
      target: "100%",
      limit: "100%",
      reviewer: "Emily Whalen",
    },
    {
      id: 5,
      header: "Project Plan",
      type: "Narrative",
      status: "In Progress",
      target: "75%",
      limit: "90%",
      reviewer: "Assign reviewer",
    },
    {
      id: 6,
      header: "Risk Assessment",
      type: "Narrative",
      status: "Not Started",
      target: "10%",
      limit: "100%",
      reviewer: "Assign reviewer",
    },
    {
      id: 7,
      header: "Design Specs",
      type: "Design",
      status: "Done",
      target: "100%",
      limit: "100%",
      reviewer: "Jamik Tashpulatov",
    },
    {
      id: 8,
      header: "Budget Summary",
      type: "Capabilities",
      status: "In Progress",
      target: "50%",
      limit: "100%",
      reviewer: "Assign reviewer",
    },
    {
      id: 9,
      header: "User Feedback",
      type: "Focus Documents",
      status: "Not Started",
      target: "0%",
      limit: "100%",
      reviewer: "Assign reviewer",
    },
    {
      id: 10,
      header: "Release Notes",
      type: "Narrative",
      status: "Done",
      target: "100%",
      limit: "100%",
      reviewer: "Eddie Lake",
    },
    
  ];
return (
  <div className="w-full p-4  ">
    <div className="text-lg font-bold pb-3">ARTICLES</div>
    {/* ✅ Search Bar (Always visible) */}
    <div className="mb-4 ">
      <Input
        placeholder="Search documents..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {/* ✅ Table view for screen ≥ 1237px */}
    <div className="hidden min-[1380px]:block w-300">
      <DataTable
        data={data}
        globalFilter={search}
        onGlobalFilterChange={setSearch}
      />
    </div>

    {/* ✅ Card view for screen < 1237px */}
    <div className="block min-[1380px]:hidden space-y-4 ">
      {data
        .filter((item) =>
          Object.values(item)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .map((item, index) => (
          <div
            key={index}
            className={`
              border rounded-xl shadow 
              bg-white dark:bg-gray-900 
              p-4 sm:p-6 md:p-10 
              text-sm sm:text-base md:text-lg
              space-y-2
              w-[150%] sm:w-[200%] md:w-[200%]
              mx-auto
            `}
          >
            <div className="font-semibold text-base sm:text-lg md:text-xl">
              {item.header}
            </div>
            <div className="text-muted-foreground space-y-1">
              <p>
                <span className="font-medium">Type:</span> {item.type}
              </p>
              <p>
                <span className="font-medium">Status:</span> {item.status}
              </p>
              <p>
                <span className="font-medium">Target:</span> {item.target}
              </p>
              <p>
                <span className="font-medium">Limit:</span> {item.limit}
              </p>
              <p>
                <span className="font-medium">Reviewer:</span>{" "}
                {item.reviewer}
              </p>
            </div>
          </div>
        ))}
    </div>
  </div>
);
}