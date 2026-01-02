import { MainComponent } from "./components/main";
import { ProgressBarComponent } from "./components/progress-bar";
import { HeaderComponent } from "./components/header";
import { FooterComponent } from "./components/footer";

export default function App() {
  return (
    <div className="select-none">
      <HeaderComponent />
      <MainComponent />
      <MainComponent />
      <FooterComponent />
      <ProgressBarComponent />
    </div>
  );
}
