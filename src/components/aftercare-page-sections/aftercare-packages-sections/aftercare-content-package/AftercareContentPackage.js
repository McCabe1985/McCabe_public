import React from "react";
import AftercareContentPackageImg from "./aftercare-content-package-parts/AftercareContentPackageImg";
import AftercareContentPackageText from "./aftercare-content-package-parts/AftercareContentPackageText";
export default function AftercareContentPackage() {
  return (
    <section
      id="content-management"
      className="interior-section-container img-left"
    >
      <AftercareContentPackageImg />
      <AftercareContentPackageText />
    </section>
  );
}
