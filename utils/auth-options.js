import connectToMongoDB from "@/config/mongodb";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";

export const authOptions = {
  session: {
    strategy: "jwt", // ✅ Required for middleware to work properly
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      const { email, name, picture: image } = profile;
      const username = name.slice(0, 20);

      await connectToMongoDB();
      const userExists = await User.findOne({ email });

      if (!userExists) {
        await User.create({ email, username, image });
      }

      return true;
    },

    async session({ session, token }) {
      // Attach user ID from token
      await connectToMongoDB();
      const user = await User.findOne({ email: session.user.email });
      session.user.id = user._id.toString();
      return session;
    },
  },
};