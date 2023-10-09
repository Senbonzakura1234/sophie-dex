import 'server-only';

import type { AppleMediaConfig } from '@root/types/common';
import type { GithubUserInfo, LicenseInfo } from '@root/types/common/zod';
import type { NextResponse } from 'next/server';
import { env } from 'process';

export const appleMediaConfig: AppleMediaConfig = [
	{ url: 'iPhone_14_Pro_Max_landscape' },
	{
		url: 'iPhone_14_Pro_Max_landscape',
		media: { width: 430, height: 932, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_14_Pro_landscape',
		media: { width: 393, height: 852, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape',
		media: { width: 428, height: 926, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape',
		media: { width: 390, height: 844, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape',
		media: { width: 375, height: 812, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_11_Pro_Max__iPhone_XS_Max_landscape',
		media: { width: 414, height: 896, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_11__iPhone_XR_landscape',
		media: { width: 414, height: 896, ratio: 2, orientation: 'landscape' },
	},
	{
		url: 'iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape',
		media: { width: 414, height: 736, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape',
		media: { width: 375, height: 667, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape',
		media: { width: 320, height: 568, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '12.9__iPad_Pro_landscape',
		media: { width: 1024, height: 1366, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '11__iPad_Pro__10.5__iPad_Pro_landscape',
		media: { width: 834, height: 1194, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '10.9__iPad_Air_landscape',
		media: { width: 820, height: 1180, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '10.5__iPad_Air_landscape',
		media: { width: 834, height: 1112, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '10.2__iPad_landscape',
		media: { width: 810, height: 1080, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape',
		media: { width: 768, height: 1024, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '8.3__iPad_Mini_landscape',
		media: { width: 744, height: 1133, ratio: 2, orientation: 'landscape' },
	},
	{
		url: 'iPhone_14_Pro_Max_portrait',
		media: { width: 430, height: 932, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_14_Pro_portrait',
		media: { width: 393, height: 852, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait',
		media: { width: 428, height: 926, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait',
		media: { width: 390, height: 844, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait',
		media: { width: 375, height: 812, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_11_Pro_Max__iPhone_XS_Max_portrait',
		media: { width: 414, height: 896, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_11__iPhone_XR_portrait',
		media: { width: 414, height: 896, ratio: 2, orientation: 'portrait' },
	},
	{
		url: 'iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait',
		media: { width: 414, height: 736, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait',
		media: { width: 375, height: 667, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait',
		media: { width: 320, height: 568, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '12.9__iPad_Pro_portrait',
		media: { width: 1024, height: 1366, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '11__iPad_Pro__10.5__iPad_Pro_portrait',
		media: { width: 834, height: 1194, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '10.9__iPad_Air_portrait',
		media: { width: 820, height: 1180, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '10.5__iPad_Air_portrait',
		media: { width: 834, height: 1112, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '10.2__iPad_portrait',
		media: { width: 810, height: 1080, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait',
		media: { width: 768, height: 1024, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '8.3__iPad_Mini_portrait',
		media: { width: 744, height: 1133, ratio: 2, orientation: 'portrait' },
	},
];

export const defaultResponseConfig: Parameters<typeof NextResponse.json>[1] = {
	status: 200,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization',
	},
};

export const defaultGithubHeader: Parameters<typeof fetch>[1] = {
	headers: { Authorization: `Bearer ${env.GITHUB_TOKEN}`, 'X-GitHub-Api-Version': '2022-11-28' },
	next: { revalidate: 3e10 },
};

export const defaultGithubUserInfo: GithubUserInfo = {
	avatar_url: '-',
	bio: '-',
	blog: '-',
	company: '-',
	email: '-',
	html_url: '-',
	location: '-',
	login: '-',
	twitter_username: '-',
};

export const defaultLicenseInfo: LicenseInfo = {
	body: '-',
	conditions: [],
	description: '-',
	limitations: [],
	name: '-',
	permissions: [],
};
