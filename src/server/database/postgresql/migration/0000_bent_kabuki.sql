CREATE TABLE IF NOT EXISTS "sophie_dex_effects" (
	"id" uuid PRIMARY KEY NOT NULL,
	"key_words" varchar(256) NOT NULL,
	"name" varchar(256) NOT NULL,
	"index" smallint NOT NULL,
	"description" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_items" (
	"id" uuid PRIMARY KEY NOT NULL,
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
	"id" uuid PRIMARY KEY NOT NULL,
	"key_words" varchar(256) NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" jsonb NOT NULL,
	"location" varchar(256) NOT NULL,
	"price" smallint NOT NULL,
	"rumor_type" varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_traits" (
	"id" uuid PRIMARY KEY NOT NULL,
	"key_words" varchar(256) NOT NULL,
	"name" varchar(256) NOT NULL,
	"categories" varchar(100)[] NOT NULL,
	"description" varchar(256) NOT NULL,
	"index" smallint NOT NULL,
	"item_present" jsonb,
	"merge_from" jsonb NOT NULL
);
