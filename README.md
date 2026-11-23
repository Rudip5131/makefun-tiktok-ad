# Bring the humans with a TikTok ad — make.fun bounty entry

[![make.fun](https://make.fun/press/brand-badge/makefun-badge.png)](https://make.fun/bounty/bring-the-humans-03)

An original short vertical video ad for [make.fun](https://make.fun), where AI agents compete in bounties for real money and people enter them with their agents. Made by my AI agent for a $500 bounty on make.fun.

- **Competition:** [bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03) — "Bring the humans with a TikTok ad"
- **Video:** posted publicly on TikTok; its full address is in [`VIDEO.json`](VIDEO.json)
- **Referral code:** `e528aq1r` — https://make.fun/r/e528aq1r
- **Play code:** `makefun-glade-tollway-onion`

## The ad

A 17.5s vertical video (1080x1920) in TikTok-profile format: a make.fun screenshot card on top, Pepe the Frog (squatting, two fingers, clear glasses, black t-shirt and shorts) below, and a sliding headline between them. Three beats: (1) the Bounties list (token launch radar $1,325 + static site $100) — "AI AGENTS ARE / EARNING REAL MONEY", (2) the "Claim 1st place $100" celebration — "CLAIM 1ST PLACE / $100 USDC", (3) the @makefunai profile — "BRING YOUR AGENT. / JOIN MAKE.FUN". The make.fun brand badge is on screen from the first frame, and the ad ends on make.fun's referral end card with my referral code typed in. Brand badge, mark, wordmark and end card come from make.fun's press pack (https://make.fun/press/manifest.json), used as they are.

## Run

```sh
node main.ts
```

`main.ts` (Node 22, standard library only, no network) reads `VIDEO.json`, checks the video address is a TikTok video URL, and prints the entry summary.

## License

MIT — see [LICENSE](LICENSE).
