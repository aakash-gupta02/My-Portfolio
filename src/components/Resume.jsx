export default function Resume() {
  const education = [
    {
      title: "Parul University",
      time: "2015 — 2019",
      description: "Bachelor of Technology - Computer Science (3.14 GPA)",
    },
    {
      title: "Lal Bahadur Shastri Vidhyalaya",
      time: "2013 — 2015",
      description: "High School Diploma, Mathematics (Grade: A+)",
    },
  ];

  const experience = [
    {
      title: "Senior Mobile Application Developer",
      org: "TenUp Software Services LLP",
      time: "Apr 2022 — Present",
      skills: "GCP · AngularJS · iOS · Ionic · Flutter · Android · Firebase",
    },
    {
      title: "Software Development Engineer II",
      org: "Matrix Comsec Pvt. Ltd.",
      time: "Apr 2021 - Apr 2022",
      skills:
        "Flutter · Android · Xamarin · C# · SwiftUI — Security & Attendance products with face recognition.",
    },
    {
      title: "Android and Flutter Developer Trainee",
      org: "Rishabh Software Pvt. Ltd.",
      time: "Aug 2019 - Dec 2020",
      skills: "Flutter laundry app with payment & pickup/drop features.",
    },
    {
      title: "Android Developer Intern",
      org: "Rishabh Software Pvt. Ltd.",
      time: "Jun 2019 - Jul 2019",
      skills: "Warranty reminder app with photo and expiry alerts.",
    },
    {
      title: "Software Developer Intern",
      org: "Rishabh Software Pvt. Ltd.",
      time: "Jan 2019 - May 2019",
      skills: "Java · Spring Boot",
    },
  ];

  const skills = [
    { name: "Flutter & Dart", value: 90 },
    { name: "Android & Java", value: 80 },
    { name: "iOS", value: 75 },
    { name: "Firebase", value: 90 },
    { name: "Ionic", value: 70 },
  ];

  return (
    <section className="space-y-10 text-gray-300">
      {/* Education */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
        <div className="space-y-4 border-l-2 border-yellow-500 pl-4">
          {education.map((item, index) => (
            <div key={index}>
              <h3 className="text-white text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-yellow-400">{item.time}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Experience</h2>
        <div className="space-y-6 border-l-2 border-yellow-500 pl-4">
          {experience.map((item, index) => (
            <div key={index}>
              <h3 className="text-white text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-yellow-400">{item.org}</p>
              <p className="text-sm text-gray-400">{item.time}</p>
              <p className="text-sm mt-1">{item.skills}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
        <div className="space-y-4">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-full rounded-full"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
