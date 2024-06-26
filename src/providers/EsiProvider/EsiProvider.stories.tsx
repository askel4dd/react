import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { fullFit } from "../../../.storybook/fits";

import { EveDataProvider } from "@/providers/EveDataProvider";
import { ShipSnapshotProvider } from "@/providers/ShipSnapshotProvider";

import { EsiContext, EsiProvider } from "./";

const meta: Meta<typeof EsiProvider> = {
  component: EsiProvider,
  tags: ["autodocs"],
  title: "Provider/EsiProvider",
};

export default meta;
type Story = StoryObj<typeof EsiProvider>;

const TestEsi = () => {
  const esi = React.useContext(EsiContext);

  if (!esi.loaded) {
    return (
      <div>
        Esi: loading
        <br />
      </div>
    );
  }

  return (
    <div>
      Esi: loaded
      <br />
      <pre>{JSON.stringify(esi, null, 2)}</pre>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <EveDataProvider>
      <ShipSnapshotProvider initialFit={fullFit}>
        <EsiProvider>
          <TestEsi />
        </EsiProvider>
      </ShipSnapshotProvider>
    </EveDataProvider>
  ),
};
