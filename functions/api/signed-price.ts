import { Signature, PrivateKey, isReady, Field } from 'snarkyjs';

export async function onRequest(context) {
  // Contents of context object
  // const {
  //   request, // same as existing Worker API
  //   env, // same as existing Worker API
  //   params, // if filename includes [id] or [[path]]
  //   waitUntil, // same as ctx.waitUntil in existing Worker API
  //   next, // used for middleware or to fetch assets
  //   data, // arbitrary space for passing data between middlewares
  // } = context;

  await isReady;

  const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=mina-protocol&vs_currencies=usd`);
  const data = await res.json();
  const price = JSON.stringify(data, null, 2);
  return new Response(price);

}
