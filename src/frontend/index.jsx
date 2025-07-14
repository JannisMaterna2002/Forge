import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, Button, Stack, Strong } from '@forge/react';
import { invoke } from '@forge/bridge';
import { delete as del } from '@forge/storage';

const handleAccept = async (callId) => {
  console.log(`Call ${callId} angenommen`);

  await invoke('deleteCall', { id: callId });

  // Lokal aus Liste entfernen
  setCalls(prev => prev.filter(call => call.id !== callId));
};


const App = () => {
  const [calls, setCalls] = useState([]);

 const loadCalls = async () => {
  try {
    const result = await invoke('getCalls');
    console.log('🟢 Frontend: Anrufe empfangen:', result);
    setCalls(result);
  } catch (err) {
    console.error('❌ Fehler beim Laden der Anrufe:', err);
  }
};


  useEffect(() => {
    loadCalls();
    const interval = setInterval(loadCalls, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Stack spacing="medium">
      <Text>
        <Strong>Eingehende Anrufe</Strong>
      </Text>
      {calls.length === 0 && <Text>Keine Anrufe aktuell</Text>}
      {calls.map(call => (
        <Stack key={call.id} direction="horizontal" spacing="medium">
          <Text>{call.caller}</Text>
          <Text>{call.number}</Text>
          <Text>{call.time}</Text>
          <Button onClick={() => handleAccept(call.id)}>Annehmen</Button>
        </Stack>
      ))}
    </Stack>
  );
};

ForgeReconciler.render(<App />);
