import React from 'react';
import { Header, Versioning, VersionList } from 'app/components/versioning';

const Progress = () => (
    <Versioning>
        <VersionList>
            <Header>v1.0.0</Header>
            <li> Test</li>
        </VersionList>
    </Versioning>
)

export default Progress