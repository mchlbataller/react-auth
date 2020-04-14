import React from 'react';
import { Header, VersionList, Version } from 'app/components/versioning';

const Progress = () => (
    <VersionList>
        <Version> <Header>v1.2</Header> <li> Revamped authentication page UI</li></Version>
        <Version> <Header>v1.1</Header> <li> Integrated with Tailwind</li></Version>
        <Version> <Header>v1.0</Header> <li> Added Authentication</li> </Version>
    </VersionList>
)

export default Progress