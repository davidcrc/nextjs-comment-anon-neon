import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Comment = {
    id: Generated<string>;
    comment: string;
    createdAt: Generated<Timestamp | null>;
    updatedAt: Timestamp | null;
    pageHandle: string;
};
export type Page = {
    handle: string;
};
export type DB = {
    Comment: Comment;
    Page: Page;
};
