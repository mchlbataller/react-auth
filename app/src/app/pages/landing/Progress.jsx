import React from "react";
import { Header, VersionList, Version } from "app/components/versioning";
import versionRecords from "app/assets/versions";

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
