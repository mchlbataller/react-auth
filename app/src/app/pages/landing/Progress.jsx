import React from "react";
import { Header, VersionList, Version } from "app/components/versioning";

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
    { version: 1.4, notes: "" },
];

const Progress = () => (
    <VersionList>
        {versionRecords.reverse().map((record) => (
            <Version key={record.version.toString()}>
                <Header>{record.version}</Header>
                <li>{record.notes}</li>
            </Version>
        ))}
    </VersionList>
);

export default Progress;
