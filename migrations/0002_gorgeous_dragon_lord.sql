ALTER TABLE "comment" RENAME COLUMN "userId" TO "userEmail";--> statement-breakpoint
ALTER TABLE "post" RENAME COLUMN "userId" TO "userEmail";--> statement-breakpoint
ALTER TABLE "comment" DROP CONSTRAINT "comment_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "post" DROP CONSTRAINT "post_userId_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comment" ADD CONSTRAINT "comment_userEmail_user_email_fk" FOREIGN KEY ("userEmail") REFERENCES "public"."user"("email") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post" ADD CONSTRAINT "post_userEmail_user_email_fk" FOREIGN KEY ("userEmail") REFERENCES "public"."user"("email") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
