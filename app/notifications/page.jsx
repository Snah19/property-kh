import MessageList from "@/components/message-list";
import { Wobble } from 'ldrs/react';
import { Suspense } from "react";

export const metadata = {
  title: "Notifications",
};

const NotificationPage = async () => {
  return (
    <section className="container mx-auto py-6 px-4">
      <h1 className="mb-4 text-3xl font-bold">Notifications</h1>
      <Suspense fallback={ <div className="text-center"><Wobble size="45" speed="0.9" color="gray" /></div> }>
        <MessageList />
      </Suspense>
    </section>
  );
};

export default NotificationPage;