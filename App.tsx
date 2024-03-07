import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { IconoirProvider } from "iconoir-react-native";

import Navigator from "@/navigation/Navigator";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <IconoirProvider>
        <Navigator />
        {/*<ReactQueryDevtools initialIsOpen />*/}
      </IconoirProvider>
    </QueryClientProvider>
  );
}

export default App;
