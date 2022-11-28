import { useCookie, eventHandler } from 'h3';
import { createClient } from '@supabase/supabase-js';
import { u as useRuntimeConfig } from './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

const serverSupabaseClient = (event) => {
  const { supabase: { url, key, client: clientOptions, cookies: cookieOptions } } = useRuntimeConfig().public;
  if (!event.context._supabaseClient) {
    const supabaseClient = createClient(url, key, clientOptions);
    const token = useCookie(event, `${cookieOptions.name}-access-token`);
    supabaseClient.auth.setAuth(token);
    event.context._supabaseClient = supabaseClient;
    event.context._token = token;
  }
  return event.context._supabaseClient;
};

const test = eventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const { data } = await client.from("pray").select();
  return { pray: data };
});

export { test as default };
//# sourceMappingURL=test.mjs.map
