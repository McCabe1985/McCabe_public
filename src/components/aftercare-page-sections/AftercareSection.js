import React from "react";
import AftercareHeader from "./aftercare-header-section/AftercareHeader";
import AftercareStandardPackage from "./aftercare-packages-sections/aftercare-standard-package/AftercareStandardPackage";
import AftercareContentPackage from "./aftercare-packages-sections/aftercare-content-package/AftercareContentPackage";
import AftercareEZcommerceBoltOn from "./aftercare-packages-sections/aftercare-EZ-commerce-bolt-on/AftercareEZcommerceBoltOn";
export default function AftercareSection() {
  return (
    <section className="interior-content-container">
      <AftercareHeader />
      <AftercareStandardPackage />
      <AftercareContentPackage />
      <AftercareEZcommerceBoltOn />
    </section>
  );
}
