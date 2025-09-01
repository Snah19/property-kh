import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        } 
      }
    })
  ],
  callbacks: {
    async signIn({ profile }) {
      const { email, name, picture} = profile;

      const { data: existingUser} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/email/${email}`);

      if (!existingUser) await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/`, { email, username: name.slice(0, 20), image: picture });
      return true;
    },
    
    async session({ session }) {
      const { data: { _id } } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/email/${session.user.email}`);
      session.user.id = _id;
      return session;
    }
  },
};