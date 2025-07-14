import Resolver from '@forge/resolver';
import { storage } from '@forge/api';

const resolver = new Resolver();

resolver.define('getCalls', async () => {
  console.log('➡️ Resolver: getCalls aufgerufen');
  const call = await storage.get('lastCall');
  console.log('📞 Gespeicherter Call aus Storage:', call);
  return call ? [call] : [];
});

resolver.define('deleteCall', async ({ payload }) => {
  console.log('🗑️ deleteCall aufgerufen mit Payload:', payload);

  const existing = await storage.get('lastCall');
  console.log('📦 Aktueller gespeicherter Call:', existing);

  if (existing?.id === payload.id) {
    await storage.delete('lastCall');
    console.log('✅ Call gelöscht');
  } else {
    console.log('❌ Keine Übereinstimmung gefunden – nichts gelöscht');
  }
});

export const handler = resolver.getDefinitions();

export async function egressFunction(req) {
  const call = {
    id: Date.now().toString(),
    caller: 'Max Mustermann',
    number: '+49 170 123456',
    time: new Date().toISOString()
  };

  await storage.set('lastCall', call);

  console.log('📥 Neuer Call in Storage gespeichert:', call);

  return {
    statusCode: 200,
    contentType: 'application/json',
    body: JSON.stringify(call)
  };
}
