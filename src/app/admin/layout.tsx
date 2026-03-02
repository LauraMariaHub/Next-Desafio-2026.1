import AdminSidebar from "@/components/admin-sidebar";
import Footer from "@/components/footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <section>
      <AdminSidebar />
      <section className="px-4 py-4 sm:px-20 sm:ml-72 bg-[#06434F] min-h-screen">
        {children}
      </section>
      <Footer />
    </section>
  );
}
