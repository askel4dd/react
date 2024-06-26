import React from "react";

import { ShipSnapshotContext } from "@/providers/ShipSnapshotProvider";

import styles from "./ShipFit.module.css";

export interface ShipFitProps {
  radius: number;
}

export const Hull = () => {
  const shipSnapshot = React.useContext(ShipSnapshotContext);

  const hull = shipSnapshot?.currentFit?.ship_type_id;
  if (hull === undefined) {
    return <></>;
  }

  return (
    <div className={styles.hull}>
      <img src={`https://images.evetech.net/types/${hull}/render?size=1024`} />
    </div>
  );
};
