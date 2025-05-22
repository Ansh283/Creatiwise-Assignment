import { AppSidebar } from "./components/app-sidebar";
import { Dashboard } from "./components/Dashboard";
import { MobileSidebar } from "./components/mobile-sidebar";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <SidebarProvider>
      <div className="flex">
        {/* Desktop Sidebar */}
        <AppSidebar className="hidden lg:flex" />

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Mobile Header */}
          <div className="lg:hidden p-2 border-b flex items-center">
            <MobileSidebar />
            <h1 className="ml-2 text-lg font-semibold">Dashboard</h1>
          </div>

          {/* Main Content */}
          <main className="flex flex-col min-h-[calc(100vh-80px)]">
            <Dashboard />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
