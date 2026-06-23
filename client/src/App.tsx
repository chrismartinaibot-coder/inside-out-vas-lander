import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import InsideOutHome from "./pages/InsideOutHome";
import InsideOutHome1 from "./pages/InsideOutHome1";
import InsideOutHome2 from "./pages/InsideOutHome2";
import InsideOutHome3 from "./pages/InsideOutHome3";
import InsideOutHome4 from "./pages/InsideOutHome4";
import ThankYou from "./pages/ThankYou";
import ThankYou2 from "./pages/ThankYou2";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={InsideOutHome} />
      <Route path={"/1"} component={InsideOutHome1} />
      <Route path={"/2"} component={InsideOutHome2} />
      <Route path={"/3"} component={InsideOutHome3} />
      <Route path={"/4"} component={InsideOutHome4} />
      <Route path={"/thankyou"} component={() => <ThankYou fireScheduleEvent={false} />} />
      <Route path={"/thank-you"} component={() => <ThankYou fireScheduleEvent={true} />} />
      <Route path={"/thankyou2"} component={ThankYou2} />
      <Route path={"/terms-and-conditions"} component={TermsAndConditions} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
