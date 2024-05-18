import Header from "../header"
import MainSection from "./MainSection"
import FeaturedMembers from "./FeaturedMembers"
import PageSection from "./PageSection"

const Home = () => {
  return (
    <div className="pb-8">
        <Header />
        <MainSection />
        <PageSection
            title={'Log Your Workouts'} 
            imageSrc={'/workoutdetails.png'}
            imageAlt={'Workout Detail Image'}
            parentClassName={'bg-white'}
            titleClassName={'text-black'}
        />
        <PageSection
            title={'Meet Other Lifters'} 
            imageSrc={'/discover.png'}
            imageAlt={'Social Discovery Image'}
            parentClassName={'bg-black'}
            titleClassName={'text-white'}
        />
        <PageSection
            title={'Featured Members'} 
            parentClassName={'bg-white'}
            titleClassName={'text-black'}
            content={<FeaturedMembers />}
        />
    </div>
  )
}

export default Home