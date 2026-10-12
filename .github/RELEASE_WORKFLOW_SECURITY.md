# Release workflow security boundary

`build-iso.yml` is the validation workflow. It runs on pull requests and `main` with `contents: read` only. It validates scripts, health checks, and the Commander build; it does not build an ISO, access the signing-key secret, create releases, or attest artifacts.

`release.yml` is the release workflow. It runs only for `v*` tag pushes and is the only workflow granted `contents: write`, `attestations: write`, and `id-token: write`. It uses the protected `release` environment and the signing-key secret to build, attest, and publish a durable signed release.

Protect version tags and require release-environment approval in repository settings. Do not grant release permissions to pull-request workflows.
