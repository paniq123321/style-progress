import { MainComponent } from "./components/main";
import { ProgressBarComponent } from "./components/progress-bar";
import { HeaderComponent } from "./components/header";

export default function App() {
  return (
    <div className="select-none">
      <HeaderComponent />
      <ProgressBarComponent />
      <MainComponent />
    </div>
  );
}
