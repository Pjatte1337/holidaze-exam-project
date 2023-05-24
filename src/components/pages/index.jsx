import { Hidden } from "../styles/hidden";
import React from "react";
import Search from "../search";
import DocumentMeta from "react-document-meta";

function Home() {
  const meta = {
    title: "Holidaze | Home",
  };

  return (
    <>
      <DocumentMeta {...meta} />
      <main className="container d-flex flex-column p-5">
        <Hidden>
          <h1>Front page</h1>
        </Hidden>
        <Search />
      </main>
    </>
  );
}

export default Home;
