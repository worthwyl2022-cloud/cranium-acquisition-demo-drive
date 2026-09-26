# Canonical Kernel Snapshot Provenance

The bundled `cranium-kernel` source in this appliance is a tracked snapshot of the canonical Kernel repository.

- Source repository: `worthwyl2022-cloud/cranium-kernel`
- Source commit: 25d4da3445a073042ff570d0b056cfbeab9970f1
- Snapshot path: `ecosystem/cranium-kernel`
- Snapshot rule: this appliance snapshot is subordinate to the canonical repository and must not issue a competing authority definition.
- Cognitive Subconscious source: `src/authority/cognitiveSubconscious.ts`
- COMA source: `src/kernel/coma.ts`
- Miracle Memory source: `src/memory/`

A release build should regenerate this file from the exact commit bundled into the appliance and include the commit in its release manifest/evidence package.
