CREATE TABLE IF NOT EXISTS "sophie_dex_users_to_effects" (
	"user_id" uuid NOT NULL,
	"effect_id" uuid NOT NULL,
	CONSTRAINT "sophie_dex_users_to_effects_user_id_effect_id_pk" PRIMARY KEY("user_id","effect_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_users_to_items" (
	"user_id" uuid NOT NULL,
	"item_id" uuid NOT NULL,
	CONSTRAINT "sophie_dex_users_to_items_user_id_item_id_pk" PRIMARY KEY("user_id","item_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_users_to_rumors" (
	"user_id" uuid NOT NULL,
	"rumor_id" uuid NOT NULL,
	CONSTRAINT "sophie_dex_users_to_rumors_user_id_rumor_id_pk" PRIMARY KEY("user_id","rumor_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sophie_dex_users_to_traits" (
	"user_id" uuid NOT NULL,
	"trait_id" uuid NOT NULL,
	CONSTRAINT "sophie_dex_users_to_traits_user_id_trait_id_pk" PRIMARY KEY("user_id","trait_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sophie_dex_users_to_effects" ADD CONSTRAINT "sophie_dex_users_to_effects_user_id_sophie_dex_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "sophie_dex_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sophie_dex_users_to_effects" ADD CONSTRAINT "sophie_dex_users_to_effects_effect_id_sophie_dex_effects_id_fk" FOREIGN KEY ("effect_id") REFERENCES "sophie_dex_effects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sophie_dex_users_to_items" ADD CONSTRAINT "sophie_dex_users_to_items_user_id_sophie_dex_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "sophie_dex_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sophie_dex_users_to_items" ADD CONSTRAINT "sophie_dex_users_to_items_item_id_sophie_dex_items_id_fk" FOREIGN KEY ("item_id") REFERENCES "sophie_dex_items"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sophie_dex_users_to_rumors" ADD CONSTRAINT "sophie_dex_users_to_rumors_user_id_sophie_dex_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "sophie_dex_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sophie_dex_users_to_rumors" ADD CONSTRAINT "sophie_dex_users_to_rumors_rumor_id_sophie_dex_rumors_id_fk" FOREIGN KEY ("rumor_id") REFERENCES "sophie_dex_rumors"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sophie_dex_users_to_traits" ADD CONSTRAINT "sophie_dex_users_to_traits_user_id_sophie_dex_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "sophie_dex_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sophie_dex_users_to_traits" ADD CONSTRAINT "sophie_dex_users_to_traits_trait_id_sophie_dex_traits_id_fk" FOREIGN KEY ("trait_id") REFERENCES "sophie_dex_traits"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
