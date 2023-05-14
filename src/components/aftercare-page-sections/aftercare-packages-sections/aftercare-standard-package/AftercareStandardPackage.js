import React from "react";
import AftercareStandardPackageImg from "./aftercare-standard-package-parts/AftercareStandardPackageImg";
import AftercareStandardPackageText from "./aftercare-standard-package-parts/AftercareStandardPackageText";
export default function AftercareStandardPackage() {
  return (
    <section id="maintenance" className="interior-section-container img-right">
      <AftercareStandardPackageText />
      <AftercareStandardPackageImg />
    </section>
  );
}
