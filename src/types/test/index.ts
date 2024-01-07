export type ShallowInspect<TObject> = {
	[TKey in keyof TObject]: TObject[TKey];
} & NonNullable<unknown>;

export type DeepInspect<TObject> = {
	[TKey in keyof TObject]: DeepInspect<TObject[TKey]>;
} & NonNullable<unknown>;

export type Foo = { foo: string; fee: number };
export type Bar = { bar: Array<number>; buzz: string };
export type Baz = { baz: boolean };
export type Boo = {
	boo: Foo;
	baa: { bee: Bar };
};

export type ComplexUnion = Foo & Bar & Baz & Boo;

export type ShallowInspectedUnion = ShallowInspect<ComplexUnion>;

export type DeepInspectedUnion = DeepInspect<ComplexUnion>;
