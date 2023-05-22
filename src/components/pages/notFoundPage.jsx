import { Links } from "../styles/links.style";
import DocumentMeta from 'react-document-meta';

function RouteNotFound() {

 const meta = {
  title: 'Holidaze | Page not found'
 }

    return (
      <>
        <DocumentMeta {...meta} />
        <main className="container d-flex flex-column justify-content-center align-items-center h-100">
          <div className="fs-4">Page not found</div>
          <Links className="fs-5" to='/'>Back to front page</Links>
        </main>
      </>
    )
  }

  export default RouteNotFound;