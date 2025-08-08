import MessageCard from "@/components/message-card";
import connectToMongoDB from "@/config/mongodb";
import Message from "@/models/message";
import { getSessionUser } from "@/utils/get-session-user";

const NotificationPage = async () => {
  await connectToMongoDB();
  const { userId } = await getSessionUser();
  const readMessages = await Message.find({ recipient_id: userId, is_read: true }).sort({ createdAt: -1 }).populate("sender_id", "username").populate("property_id", "title").lean();
  const unreadMessages = await Message.find({ recipient_id: userId, is_read: false }).sort({ createdAt: -1 }).populate("sender_id", "username").populate("property_id", "title").lean();
  const messages = [...unreadMessages, ...readMessages];

  console.log(messages);

  return (
    <section className="container mx-auto py-6 px-4">
      <h1 className="mb-4 text-3xl font-bold">Notifications</h1>
      {readMessages.length === 0 && unreadMessages.length === 0 ? (
        <p className="text-center">No noticiations</p>
      ): (
        <ul className="space-y-4">
          {messages.map(({ _id, is_read, property_id: {title}, body, email, phone_number, createdAt }) => (
            <li key={_id.toString()}>
              <MessageCard _id={_id.toString()} is_read={is_read} title={title} body={body} email={email} phone_number={phone_number} createdAt={createdAt} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default NotificationPage;