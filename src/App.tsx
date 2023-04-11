import AppRouter from "./Routes";
import { basename } from "./basename";

export function App() {
  console.log(basename);

  return <AppRouter />;
}
