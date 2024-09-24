import Image from "next/image";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div>

      <h1>Welcome to Home Page.</h1>
      <p>Thanks for visting my new born Website.</p>
      <Navbar />
      <Footer />

    </div>
      );
}
