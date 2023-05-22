CREATE TABLE IF NOT EXISTS "effects" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"keyWords" varchar(256) NOT NULL,
	"index" smallint NOT NULL,
	"description" varchar(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS "items" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"keyWords" varchar(256) NOT NULL,
	"index" smallint NOT NULL,
	"description" jsonb NOT NULL,
	"color" varchar(100) NOT NULL,
	"relatedCategories" varchar(100)[] NOT NULL,
	"category" varchar(100) NOT NULL,
	"level" smallint NOT NULL,
	"recipeType" varchar(100),
	"recipeIdea" jsonb,
	"traitPresent" jsonb
);

CREATE TABLE IF NOT EXISTS "rumors" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"keyWords" varchar(256) NOT NULL,
	"description" jsonb NOT NULL,
	"location" varchar(256) NOT NULL,
	"price" smallint NOT NULL,
	"rumorType" varchar(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS "traits" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"keyWords" varchar(256) NOT NULL,
	"index" smallint NOT NULL,
	"description" varchar(256) NOT NULL,
	"categories" varchar(100)[] NOT NULL,
	"mergeFrom" jsonb[2][] NOT NULL,
	"itemPresent" jsonb
);
