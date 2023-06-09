import { Links } from "../styles/links";
import DocumentMeta from "react-document-meta";

function Booked() {
  const name = localStorage.getItem("Name");

  const meta = {
    title: "Holidaze | Booking Successful",
  };

  return (
    <>
      <DocumentMeta {...meta} />
      <main className="container d-flex flex-column justify-content-center align-items-center h-100">
        <h1>Your booking was successful!</h1>
        <p className="fs-5">
          You can view and edit a your booking on your{" "}
          <Links to={`/profile/${name}`}>Profile</Links>.
        </p>
      </main>
      ;
    </>
  );
}

export default Booked;
