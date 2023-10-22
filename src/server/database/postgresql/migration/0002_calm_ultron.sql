ALTER TABLE "effects" RENAME TO "sophie-dex_effects";--> statement-breakpoint
ALTER TABLE "items" RENAME TO "sophie-dex_items";--> statement-breakpoint
ALTER TABLE "rumors" RENAME TO "sophie-dex_rumors";--> statement-breakpoint
ALTER TABLE "traits" RENAME TO "sophie-dex_traits";--> statement-breakpoint
ALTER TABLE "sophie-dex_traits" ALTER COLUMN "merge_from" SET DATA TYPE jsonb;