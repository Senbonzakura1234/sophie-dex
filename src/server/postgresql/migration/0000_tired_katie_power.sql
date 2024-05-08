CREATE TABLE IF NOT EXISTS "sophie_dex_effects" (
	"id" text PRIMARY KEY NOT NULL,
	"key_words" varchar(256) NOT NULL,
	"name" varchar(256) NOT NULL,
	"index" smallint NOT NULL,
	"description" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_items" (
	"id" text PRIMARY KEY NOT NULL,
	"key_words" varchar(256) NOT NULL,
	"name" varchar(256) NOT NULL,
	"category" varchar(100) NOT NULL,
	"color" varchar(100) NOT NULL,
	"description" jsonb NOT NULL,
	"index" smallint NOT NULL,
	"level" smallint NOT NULL,
	"recipe_idea" jsonb,
	"recipe_type" varchar(100),
	"related_categories" varchar(100)[] NOT NULL,
	"trait_present" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_rumors" (
	"id" text PRIMARY KEY NOT NULL,
	"key_words" varchar(256) NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" jsonb NOT NULL,
	"location" varchar(256) NOT NULL,
	"price" smallint NOT NULL,
	"rumor_type" varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_traits" (
	"id" text PRIMARY KEY NOT NULL,
	"key_words" varchar(256) NOT NULL,
	"name" varchar(256) NOT NULL,
	"categories" varchar(100)[] NOT NULL,
	"description" varchar(256) NOT NULL,
	"index" smallint NOT NULL,
	"item_present" jsonb,
	"merge_from" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_users" (
	"id" text PRIMARY KEY NOT NULL,
	"username" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"github_profile" jsonb NOT NULL,
	"bookmarked_effect_list" text[50] NOT NULL,
	"bookmarked_item_list" text[50] NOT NULL,
	"bookmarked_rumor_list" text[50] NOT NULL,
	"bookmarked_trait_list" text[50] NOT NULL,
	"created_at" timestamp(6) with time zone DEFAULT now(),
	"updated_at" timestamp(6) with time zone,
	CONSTRAINT "sophie_dex_users_username_unique" UNIQUE("username")
);
