
interface DashboardLayoutProps {
  children: React.ReactNode;
};

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <main className="h-full">
        <div className="flex gap-x-3">
          <div className="flex-1">
            {children}
          </div>
        </div>
    </main>
  );
};

export default DashboardLayout;