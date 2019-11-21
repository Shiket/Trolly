import React from "react";
import Navigator from "./src/components/navigation/Navigator";
import Firebase, { FirebaseProvider } from "./src/firebase";

const App = () => {
  return (
    <FirebaseProvider value={Firebase}>
      <Navigator />
    </FirebaseProvider>
  );
};

export default App;