CREATE TABLE IF NOT EXISTS "sophie_dex_accounts" (
	"user_id" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"provider_account_id" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"expires_in" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	"created_at" timestamp(6) with time zone DEFAULT now(),
	"updated_at" timestamp(6) with time zone,
	CONSTRAINT "sophie_dex_accounts_provider_provider_account_id_pk" PRIMARY KEY("provider","provider_account_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_authenticators" (
	"credential_iD" text NOT NULL,
	"userId" text NOT NULL,
	"provider_account_id" text NOT NULL,
	"credential_public_key" text NOT NULL,
	"counter" integer NOT NULL,
	"credential_device_type" text NOT NULL,
	"credential_backed_up" boolean NOT NULL,
	"transports" text,
	"created_at" timestamp(6) with time zone DEFAULT now(),
	"updated_at" timestamp(6) with time zone,
	CONSTRAINT "sophie_dex_authenticators_userId_credential_iD_pk" PRIMARY KEY("userId","credential_iD"),
	CONSTRAINT "sophie_dex_authenticators_credential_iD_unique" UNIQUE("credential_iD")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_effects" (
	"id" text PRIMARY KEY NOT NULL,
	"key_words" text NOT NULL,
	"name" text NOT NULL,
	"module_id" text NOT NULL,
	"index" smallint NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_items" (
	"id" text PRIMARY KEY NOT NULL,
	"key_words" text NOT NULL,
	"name" text NOT NULL,
	"module_id" text NOT NULL,
	"category" text NOT NULL,
	"color" text NOT NULL,
	"description" jsonb NOT NULL,
	"index" smallint NOT NULL,
	"level" smallint NOT NULL,
	"recipe_idea" jsonb,
	"recipe_type" text,
	"related_categories" text[] NOT NULL,
	"trait_present" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_profiles" (
	"id" text PRIMARY KEY NOT NULL,
	"profile_id" integer NOT NULL,
	"login" text NOT NULL,
	"avatar_url" text DEFAULT '' NOT NULL,
	"type" text NOT NULL,
	"name" text,
	"company" text,
	"blog" text,
	"location" text,
	"email" text,
	"hireable" boolean,
	"bio" text,
	"twitter_username" text,
	"public_repos" integer NOT NULL,
	"followers" integer NOT NULL,
	"following" integer NOT NULL,
	"github_created_at" text NOT NULL,
	"github_updated_at" text NOT NULL,
	"private_gists" integer,
	"owned_private_repos" integer,
	"suspended_at" text,
	"collaborators" integer,
	"two_factor_authentication" boolean,
	"created_at" timestamp(6) with time zone DEFAULT now(),
	"updated_at" timestamp(6) with time zone,
	CONSTRAINT "sophie_dex_profiles_login_unique" UNIQUE("login")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_rumors" (
	"id" text PRIMARY KEY NOT NULL,
	"key_words" text NOT NULL,
	"name" text NOT NULL,
	"module_id" text NOT NULL,
	"description" jsonb NOT NULL,
	"location" text NOT NULL,
	"price" smallint NOT NULL,
	"rumor_type" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_sessions" (
	"session_token" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"expires" timestamp NOT NULL,
	"created_at" timestamp(6) with time zone DEFAULT now(),
	"updated_at" timestamp(6) with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_traits" (
	"id" text PRIMARY KEY NOT NULL,
	"key_words" text NOT NULL,
	"name" text NOT NULL,
	"module_id" text NOT NULL,
	"categories" text[] NOT NULL,
	"description" text NOT NULL,
	"index" smallint NOT NULL,
	"item_present" jsonb,
	"merge_from" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"email_verified" timestamp,
	"image" text,
	"bookmarked_effect_list" text[] NOT NULL CHECK (array_length("bookmarked_effect_list", 1) <= 1000),
	"bookmarked_item_list" text[] NOT NULL CHECK (array_length("bookmarked_item_list", 1) <= 1000),
	"bookmarked_rumor_list" text[] NOT NULL CHECK (array_length("bookmarked_rumor_list", 1) <= 1000),
	"bookmarked_trait_list" text[] NOT NULL CHECK (array_length("bookmarked_trait_list", 1) <= 1000),
	"created_at" timestamp(6) with time zone DEFAULT now(),
	"updated_at" timestamp(6) with time zone,
	CONSTRAINT "sophie_dex_users_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_verification_tokens" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	"created_at" timestamp(6) with time zone DEFAULT now(),
	"updated_at" timestamp(6) with time zone,
	CONSTRAINT "sophie_dex_verification_tokens_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sophie_dex_accounts" ADD CONSTRAINT "sophie_dex_accounts_user_id_sophie_dex_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."sophie_dex_users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sophie_dex_authenticators" ADD CONSTRAINT "sophie_dex_authenticators_userId_sophie_dex_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."sophie_dex_users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sophie_dex_sessions" ADD CONSTRAINT "sophie_dex_sessions_user_id_sophie_dex_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."sophie_dex_users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
