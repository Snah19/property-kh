"use client";

import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";
import getTotalUnreadMessages from "@/actions/get-total-unread-messages";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(0);
  const {data: session} = useSession();

  useEffect(() => {
    if (session && session.user) {
      getTotalUnreadMessages().then(res => {
          if (res.count) setUnreadCount(res.count);
      });
    }
  }, [getTotalUnreadMessages, session]);

  return (
    <NotificationContext.Provider value={{unreadCount, setUnreadCount}}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => useContext(NotificationContext);