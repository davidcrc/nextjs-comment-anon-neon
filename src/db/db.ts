import { DB as Database } from "./types"; // this is the Database interface we defined earlier
import { Kysely } from "kysely";
import { NeonDialect } from "kysely-neon";

// console.log("hmm", process.env.DATABASE_URL);

export const db = new Kysely<Database>({
  dialect: new NeonDialect({
    connectionString: process.env.DATABASE_URL,
  }),
});
