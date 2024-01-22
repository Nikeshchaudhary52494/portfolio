import ContectMe from './ContectMe'
import Sidebar from './Sidebar'
import Header from './Header'
import MainSection from './MainSection'

const Layout = () => {
    return (
        <>
            <div className="h-screen fixed bg-[#14131A]">
                <div className='px-6 hidden md:block'>
                    <ContectMe />
                </div>
                <div className="flex w-full">
                    <div className='px-2 hidden md:block'>
                        <Sidebar />
                    </div>
                    <div className="flex-1 h-screen pb-20 md:pt-0 pt-5 overflow-y-scroll px-4 custom-scrollbar">
                        <Header />
                        <MainSection />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Layout