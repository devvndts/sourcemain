import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"; // Corrected the import name
import { PrismaAdapter } from "@next-auth/prisma-adapter"; // Corrected the import path
import prisma from "@/libs/prismadb";
import bcrypt from "bcrypt";
export const authOptions: AuthOptions={
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: { // Corrected the credentials structure
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Invalid email or password"); // Corrected the error message
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user.hashedPassword) {
          throw new Error("Invalid email or password"); // Corrected the error message
        }
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword // Corrected the property name
        );
        if (!isCorrectPassword) {
          throw new Error("Invalid email or password"); // Corrected the error message
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/login'
  },
  debug:process.env.NODE_ENV ==='development',
  session:{
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  
}
export default NextAuth(authOptions);
