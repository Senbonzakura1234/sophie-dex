import type { NextConfig } from 'next';

type NextPlugin = (param: NextConfig) => NextConfig;

export type ChainingPlugin = (param: { plugins: Array<NextPlugin>; rootConfig: NextConfig }) => NextConfig;
