import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header";
import { MdOutlineNotificationsOff } from "react-icons/md";

const Notification = () => {
    const [notifications, setNotifications] = useState([]);

    // API 
    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get('/api/notifications');
                setNotifications(response.data);
            } catch (error) {
                console.error("Error fetching notifications:", error);
            }
        };
        fetchNotifications();
    }, []);

    return (
        <div className="">

           <Header title="Notification" />
            
            {/* Notification Empty Message */}
            {notifications.length === 0 ? (
                <div className="flex items-center justify-center min-h-screen bg-white">
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-full">
                                <MdOutlineNotificationsOff className="h-16 w-16 text-blue-700" />
                            </div>
                        </div>
                        <p className="text-gray-600">Your notification is empty.</p>
                    </div>
                </div>
            ) : (
                // Notification Card 
                notifications.map((notification, index) => (
                    <NotificationCard key={index} notification={notification} />
                ))
            )}
        </div>
    );
};

//  NotificationCard (NotificationCard.js)
const NotificationCard = ({ notification }) => {
    const { date, title, description, time, imageUrl } = notification;

    return (
        <div className="border-b py-4">
            <p className="text-gray-500 text-sm mb-1">{date}</p>
            <div className="flex items-start">
                <div className="mr-4">
                    <div className="bg-blue-300 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v5a1 1 0 00.293.707l1 1A1 1 0 007 15h6a1 1 0 00.707-.293l1-1A1 1 0 0015 13V8a6 6 0 00-6-6zM9 16h2v2H9v-2z" />
                        </svg>
                    </div>
                </div>
                <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                    <p className="text-gray-500 text-sm mt-1">{time}</p>
                </div>
                {imageUrl && (
                    <img src={imageUrl} alt="notification" className="w-12 h-12 object-cover rounded-md ml-2" />
                )}
            </div>
        </div>
    );
};

export default Notification;
