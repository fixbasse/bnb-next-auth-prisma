import Footer from '@/components/footer/Footer'
import HostDashboard from '@/components/Host/dashboard/HostDashboard'
import HostingNavbar from '@/components/Host/hostNavbar/HostingNavbar'
import getCurrentUser from '../../action/getCurrentUser'

const HostingPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return null;

  return (
    <>
      <title>
        Host Dashboard - {currentUser.name}
      </title>

      <HostingNavbar />
      <HostDashboard
        currentUser={currentUser}
      />
      <Footer />
    </>
  )
}

export default HostingPage