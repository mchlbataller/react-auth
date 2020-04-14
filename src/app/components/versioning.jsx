import React from "react";

const Header = (props) => (
  <p className="text-2xl text-border-bottom"> {props.children} </p>
);

const Versioning = (props) => (
  <div className="mt-12">
    <p className="text-3xl font-bold">Changelog</p>
    <div className="mx-20 mt-5 p-5 text-gray-900 bg-gray-300 font-mono rounded-md">
      {props.children}
    </div>
  </div>
);

const VersionList = (props) => (
    <div>
        <ul className="list-disc list-inside">
            {props.children}
        </ul>
    </div>
)

export { Header, Versioning, VersionList };
