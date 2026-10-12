# Canonical Kernel Snapshot Provenance

The bundled `cranium-kernel` source in this buyer-facing appliance is an exact tracked snapshot of the canonical Kernel repository.

- Source repository: `worthwyl2022-cloud/cranium-kernel`
- Source commit: `c2bd6d38a71f1ae124beec73df68b8af91a23bc0`
- Short pin: `c2bd6d3`
- Snapshot path: `ecosystem/cranium-kernel`
- Production authority: `cranium-kernel@c2bd6d3`
- Snapshot rule: the bundled source must match the pinned canonical commit and is subordinate to the canonical repository. It must not issue a competing authority definition.

A release build must verify the snapshot content against this pin and include the same commit in its release manifest/evidence package.
