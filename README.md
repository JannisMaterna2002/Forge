# Forge Call Queue – Demo App

📞 Forge Call Queue – Demo App
Diese Forge-Demo-App für Jira zeigt eingehende Anrufe in Echtzeit an. Über eine simulierte API (POST-Request) wird ein neuer Anruf erzeugt und im Jira-Frontend dargestellt. Die App speichert den letzten Anruf temporär und erlaubt es, ihn manuell per Klick auf „Annehmen“ zu entfernen.

Features:

Anzeige des aktuell eingehenden Anrufs
Simulierter POST-Endpunkt zur Anrufgenerierung (egressFunction)
Temporäre Speicherung via Forge storage
Automatisches Polling im Frontend (alle 5 Sekunden)
Einfacher „Annehmen“-Button zum Entfernen des Anrufs
Technologien:

Atlassian Forge (React UI + Custom Function)
Forge Storage API
Minimaler Backend/Frontend-Ansatz für Demo-Zwecke
See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Modify your app frontend by editing the `src/frontend/index.jsx` file.

- Modify your app backend by editing the `src/resolvers/index.js` file to define resolver functions. See [Forge resolvers](https://developer.atlassian.com/platform/forge/runtime-reference/custom-ui-resolver/) for documentation on resolver functions.

- Build and deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:
```
forge tunnel
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

