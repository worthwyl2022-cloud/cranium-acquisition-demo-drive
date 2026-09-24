# Convertible Cranium Acquisition Drive: Architecture and Lineage

The acquisition appliance exposes three meaningful boundaries: **Cognition, Authority, Execution**.

The demonstration experience may bundle cognitive components, evidence views, documentation and offline assets. Those bundled components do not become independent authority sources. Protected decisions belong to the canonical `cranium-kernel` implementation represented by the bundled Core snapshot or an explicitly configured canonical Kernel.

Internal functions such as challenge, proofing, memory, remediation and governance remain implementation responsibilities within those boundaries rather than additional architectural planes.

## Snapshot rule

This drive is a buyer-facing distributable snapshot. Component revisions must be traceable to their source repositories. A snapshot must not be described as newer, more capable, or more secure than the evidence for the contained revisions establishes.

## Reality rule

Synthetic fixtures are permitted only when explicitly labeled as test fixtures. They are not operational evidence. Hypothetical case studies must be labeled hypothetical. Production, customer, compliance and security claims require traceable evidence.

## Construction evidence

`BUILD_ACQUISITION_ISO.sh` is the source-of-truth build entrypoint. The current Termux host does not provide `live-build`, so a fresh ISO artifact cannot honestly be claimed from this host. The source tree and build contract are validated independently.
