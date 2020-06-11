const versionRecords = [
    {
        version: 1.0,
        notes: "Added authentication function using JSON Web Tokens",
    },
    {
        version: 1.1,
        notes: "Integrated app with Tailwind CSS, usage in components",
    },
    { version: 1.2, notes: "Revamped authentication page design" },
    { version: 1.3, notes: "Enabled offline mode with service-workers" },
    {
        version: 1.4,
        notes: [
            "Enabled logging in reauthentication endpoint",
            "Replaced HOC-based Login code to React Hooks-based code",
            "Added new versioning mechanisms",
            "Introduced usage of environment variables",
        ],
    },
    {
        version: "2.0 - Firebase",
        notes: ["Site is now responsive: can be viewed in mobiles"],
    },
];

export default versionRecords;
