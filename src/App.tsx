import React from "react";

import { AvatarGroup } from "Components/AvatarGroup";
import { dataMock } from "Mocks";

function App() {
  return (
    // NOTES: Inline style just spacing temporary for sample the component looks like
    <main style={{ padding: 40 }}>
      <AvatarGroup
        items={dataMock.items}
        maxLength={4}
        size="md"
      />
    </main>
  );
}

export default App;
