CREATE TABLE IF NOT EXISTS "sophie_dex_users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"username" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"github_profile" jsonb,
	"created_at" timestamp(6) with time zone DEFAULT now(),
	"updated_at" timestamp(6) with time zone,
	CONSTRAINT "sophie_dex_users_username_unique" UNIQUE("username"),
	CONSTRAINT "sophie_dex_users_email_unique" UNIQUE("email")
);
