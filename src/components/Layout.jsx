import ContectMe from './ContectMe'
import Sidebar from './Sidebar'
import Header from './Header'
import MainSection from './MainSection'

const Layout = () => {
    return (
        <>
            <div className="h-screen bg-[#14131A]">
                <div className='px-2'>
                    <ContectMe />
                </div>
                <div className="flex">
                    <div className='w-48 px-2 hidden md:block'>
                        <Sidebar />
                    </div>
                    <div className="flex-1 overflow-auto px-4">
                        <Header />
                        <MainSection />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout