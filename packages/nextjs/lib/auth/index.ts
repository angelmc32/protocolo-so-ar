// import { User } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { RandomWordOptions } from "random-word-slugs";
import { SiweMessage } from "siwe";

// import prisma from "../../../services/prisma";

const usernameSlugOptions: RandomWordOptions<3> = {
    format: "camel",
    partsOfSpeech: ["adjective", "noun", "adjective"],
    categories: {
        adjective: ["color", "appearance"],
        noun: ["animals"],
    },
};

export const authOptions: NextAuthOptions = {
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.address = token.sub;
      session.user.name = token.sub;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Ethereum",
      credentials: {
        message: {
          label: "Message",
          type: "text",
          placeholder: "0x0",
        },
        signature: {
          label: "Signature",
          type: "text",
          placeholder: "0x0",
        },
      },
      async authorize(credentials:any , req:any ) {
        // let user: User;
        try {
          const siwe = new SiweMessage(JSON.parse(credentials?.message || "{}"));
          const nextAuthUrl = new URL(process.env.NEXTAUTH_URL ?? "");

            return {
                // id: user.id,
                id: '0',
            };
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};