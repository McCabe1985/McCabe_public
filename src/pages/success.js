import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
export default function success() {
  return (
    <Layout>
      <header className="success-heading-container">
        <h1 className="success-heading">Thankyou!</h1>
      </header>
      <div className="success-text-container">
        <p className="success-text">
          We have received your message and will endeavour to respond within 24
          hours.
        </p>
      </div>
      <Link className="orange-link" to="/">
        Go Back
      </Link>
    </Layout>
  );
}
