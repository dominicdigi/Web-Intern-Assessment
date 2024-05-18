import Image from "next/image";
interface PageSectionProps {
    parentClassName?: string;
    titleClassName?: string;
    title: string;
    imageSrc?: string;
    imageAlt?: string;
    content?: JSX.Element | null;
}

const PageSection = ({parentClassName, titleClassName, title, imageSrc, imageAlt, content}: PageSectionProps) => {
  return (
    <div className={`flex w-full py-6 ${parentClassName || ''}`}>
        <div className="flex md:flex-row flex-col w-full items-center justify-center">
            <div className="md:w-[40%] w-full">
                <h2 className={`text-5xl font-bold md:text-start text-center ${titleClassName || ''}`}>{title}</h2>
            </div>
            <div className="flex md:w-[25%] w-full md:pl-8 md:items-start items-center md:justify-normal justify-center md:mt=0 mt-8">
                {content ? 
                    content
                    : 
                    <Image
                        src={imageSrc || ''}
                        width={300}
                        height={90}
                        alt={imageAlt || ''}
                        className="rounded-lg border-gray-400 border-2"
                    />
                }
            </div>
        </div>
    </div>
  )
}

export default PageSection