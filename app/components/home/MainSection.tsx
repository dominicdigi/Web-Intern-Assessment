import Image from "next/image"

const MainSection = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center pb-6 mt-6">
        <div className="flex flex-col md:w-[40%] w-full md:items-start items-center">
            <h1 className='flex flex-col'>
                <span className='md:text-9xl text-6xl md:text-start text-center'>Lift Card</span>
                <span className='md:text-5xl text-3xl mt-2 md:text-start text-center'>The Social Media Fitness App</span>
            </h1>
            <div className="mt-4">
                <a 
                    className="my-4"
                    href='https://apps.apple.com/us/app/lift-card-social-fitness-app/id6449883528'
                    target="_blank"
                >
                    <Image
                        src="/appstore.png"
                        width={300}
                        height={90}
                        alt="Apple App Store Logo"
                        className="my-4"
                    />
                </a>
                <a>
                    <Image
                        src="/googleplay.png"
                        width={300}
                        height={90}
                        alt="Google Play Store Logo"
                    />
                </a>
            </div>
        </div>
        <div className="flex md:w-[25%] w-full md:items-start items-center md:justify-normal justify-center md:pl-8 md:mt=0 mt-8">
            <Image
                src="/logworkout.png"
                width={300}
                height={90}
                alt="App Home Page"
                className="rounded-lg border-gray-400 border-2"
            />
        </div>
    </div>
  )
}

export default MainSection