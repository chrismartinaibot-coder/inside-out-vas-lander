import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import InsideOutHome from "./pages/InsideOutHome";
import ThankYou from "./pages/ThankYou";
import ThankYou2 from "./pages/ThankYou2";
import TermsAndConditions from "./pages/TermsAndConditions";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={InsideOutHome} />
      <Route path={"/thankyou"} component={() => <ThankYou fireScheduleEvent={false} />} />
      <Route path={"/thank-you"} component={() => <ThankYou fireScheduleEvent={true} />} />
      <Route path={"/thankyou2"} component={ThankYou2} />
      <Route path={"/terms-and-conditions"} component={TermsAndConditions} />
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
