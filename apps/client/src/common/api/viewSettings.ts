import type { ViewSettings } from '@getontime/types';
import axios from 'axios';

import { apiEntryUrl } from './constants';

const viewSettingsPath = `${apiEntryUrl}/view-settings`;

/**
 * HTTP request to fetch view settings
 * @returns
 */
export async function getViewSettings(): Promise<ViewSettings> {
  const res = await axios.get(viewSettingsPath);
  return res.data;
}

/**
 * HTTP request to update view settings
 * needs to update entire objects, not just a patch
 */
export async function postViewSettings(data: ViewSettings): Promise<ViewSettings> {
  const res = await axios.post(viewSettingsPath, data);
  return res.data;
}
