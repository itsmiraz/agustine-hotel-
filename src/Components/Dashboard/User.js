import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/UserContext';

const User = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    return (
        <div>
            <div className=' text-center  pb-20 z-0 drop-shadow-lg p-5'>
                <h3 className='text-3xl text-gray-200 my-4 font-bold'> Your Information</h3>

                <div className="flex  flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
                    <img src={user?.photoURL ?
                        user.photoURL
                        :
                        'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'

                    } alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y divide-gray-700">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">
                                {user?.displayName ?
                                    <span>{user.displayName}</span>
                                    :
                                    <span>Anonymus</span>

                                }

                            </h2>
                            <p className="px-5 text-xs sm:text-base text-gray-400">{user?.email}</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default User;