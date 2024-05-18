'use client'
import { useEffect, useState } from "react";
import { FeaturedMemberType } from "@/app/types/types";
import Image from "next/image";

const FeaturedMembers = () => {
    const [featuredMembers, setFeaturedMembers] = useState<Array<FeaturedMemberType> | null>(null);

    useEffect(() => {
        const getFeaturedMembers = async () => {
            // TODO - call an api to get members, mocked up data for now
            const featuredMembers = [{name: 'Dominic', username: 'dominicdigi', profilePictureUrl: 'https://scontent.cdninstagram.com/v/t51.2885-19/320496180_1195334418076356_3200600855973402689_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=1cIaj4K0u4gQ7kNvgHWhKIq&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYAKPovWWKeyqFEYaahjY41HbT3N6D5I9qCmrvZZoYMUUQ&oe=664EA49F&_nc_sid=10d13b'}]
            setFeaturedMembers(featuredMembers);
        }
        getFeaturedMembers(); 

    }, []);

    const followUser = (username: string) => {
        // navigate user to the user's profile page
        // could deep link into the mobile app
    }

    return (
        <div className="flex">
            {featuredMembers && featuredMembers.map((member, index) => {
                return (
                    <div key={index} className="flex items-center justify-center p-4 text-black">
                        <div className="flex flex-col">
                            <Image
                                src={member.profilePictureUrl}
                                width={100}
                                height={100}
                                alt="Featured Member Image"
                                className="rounded-full border-black border-2"
                            />
                            <p className="text-lg font-bold mt-2">{member.name}</p>
                            <p className="text-md text-gray-500">{`@${member.username}`}</p>
                        </div>
                        <button className="self-start mt-7 ml-3 bg-black rounded-lg text-white px-2 py-1" onClick={() => followUser(member.username)}>Follow</button>
                    </div>
                )
            })}
        </div>
    )
}

export default FeaturedMembers