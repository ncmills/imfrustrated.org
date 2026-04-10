// IndexNow integration. Filename of the key file in /public IS the key value.

export const INDEXNOW_KEY = "imf-2f7d4a9b6c1e8d3a5f9c2e7b4d8a1f6c";
export const INDEXNOW_HOST = "imfrustrated.org";
export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/indexnow-${INDEXNOW_KEY}.txt`;
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

export function buildIndexNowPayload(urls: string[]): IndexNowPayload {
  return {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls,
  };
}

export async function submitToIndexNow(urls: string[]): Promise<{
  ok: boolean;
  status: number;
  submitted: number;
}> {
  if (urls.length === 0) return { ok: true, status: 200, submitted: 0 };
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(buildIndexNowPayload(urls)),
  });
  return { ok: res.ok, status: res.status, submitted: urls.length };
}
