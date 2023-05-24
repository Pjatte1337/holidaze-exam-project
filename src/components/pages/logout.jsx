import { Links } from "../styles/links.style";
import DocumentMeta from "react-document-meta";

function Logout() {

 const meta = {
  title: 'Holidaze | Logged out'
 }

    return (
    <>
      <DocumentMeta {...meta} />
      <main className="container d-flex flex-column justify-content-center align-items-center h-100">
        <h1>
          You have been logged out!
        </h1>
        <Links className="fs-5" to="/">Back to front page</Links>
      </main>
    </>
    )
  }

  export default Logout;