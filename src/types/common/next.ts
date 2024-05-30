import type { NextConfig } from 'next';

export type NextPlugin = (param: NextConfig) => NextConfig;

export type ChainingPlugin = (param: { plugins: Array<NextPlugin>; rootConfig: NextConfig }) => NextConfig;
