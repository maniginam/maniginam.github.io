---
layout: post
title: "The Hive is Open"
date: 2026-04-15
categories: blog
---

A few months ago I was sitting at my desk with six AI agents running in six terminal panes, and I couldn't tell what any of them were doing.

One was stuck in a loop. One had finished twenty minutes ago and was just... sitting there. Two were working on the same file. The last two were fine, probably, but I had no way to know without reading through walls of output in each pane. I was the air traffic controller, except the radar was broken and the planes were texting me in paragraphs.

I turned to my husband and said something like, "I need a dashboard." He nodded the way he does when I'm about to disappear into a project for two weeks.

It was three weeks.

---

The thing I built is called [Waggle](https://github.com/maniginam/waggle). Named after the waggle dance — the little figure-eight shimmy that honeybees do to tell other bees where the good flowers are. Direction, distance, quality — all encoded in a dance. That's what I wanted. Not a framework. Not a platform. A communication protocol. A way for agents to tell each other where to go and what to do.

Waggle is a single Go binary. You run `waggle start` and you get a server with a real-time dashboard, a REST API, a WebSocket layer for agent coordination, and an MCP adapter so Claude Code (or anything MCP-compatible) can plug right in. No Docker. No Postgres. No YAML files. Just one binary and a SQLite database that lives in your home directory.

I should back up a little. Before I started building, I'd been talking to my brother Justin about his MCP tool called Adjutant. It's a really solid agent orchestration system — structured proposals, epic planning, bead-based task tracking. I was using it and genuinely impressed by how much thought he'd put into the workflow. But you know how it is with siblings and software. I kept looking at it and thinking, "...but what if I built my own?" Not because his was wrong. Because I'm like that. I wanted to get my hands dirty and see the problem from the inside.

I built it because I needed it. And then I kept building because it kept solving problems I didn't know I had.

---

Here's what I didn't expect: the dashboard changed how I work more than the coordination layer did.

When I could *see* all my agents — what they'd claimed, how long they'd been working, whether they were stuck — I stopped micromanaging them. I stopped constantly switching terminals to check on progress. I started trusting the system. And when something went wrong, the dashboard showed me where, immediately, instead of me spelunking through logs twenty minutes later.

There's a kanban board with swimlanes per project. There's a messaging system so agents (and I) can talk to each other through the dashboard. There's a live event feed. There's task dependencies with auto-unblocking — when agent A finishes a task that agent B was waiting on, B's task automatically moves to ready. That one feature alone probably saved me hours of manual traffic-directing.

I added a system tray desktop app this week because I got tired of keeping a browser tab open. And native notifications, so macOS tells me when an agent finishes something or sends me a message. It's a small thing, but it means I can actually go make coffee without wondering what's happening.

---

The part I'm most proud of is actually the simplest part: SMART tasks.

Every task in Waggle has a title, description, acceptance criteria, priority, tags, an estimate, a deadline, and dependency tracking. That's the SMART framework — Specific, Measurable, Achievable, Relevant, Time-bound. It sounds like project management buzzwords until you realize that when your AI agents have clear acceptance criteria, they actually *finish things correctly*. When they have dependencies, they don't start work they can't complete. When they have priorities, they pick up the right task next without you telling them.

It turns out the secret to making AI agents productive is the same secret to making humans productive. Clear expectations. Visible progress. Good communication.

Who knew. (Everyone. Everyone knew. I just had to learn it the hard way, again, with robots.)

---

Today I open-sourced Waggle. It's MIT licensed. It's free. The code is public. You can install it right now:

```
curl -fsSL https://raw.githubusercontent.com/maniginam/waggle/master/install.sh | sh
```

Or if you're a Homebrew person:

```
brew tap maniginam/waggle
brew install waggle
```

Or just `go install github.com/maniginam/waggle/cmd/waggle@latest` if you have Go.

There are prebuilt binaries for macOS, Linux, and Windows on [the releases page](https://github.com/maniginam/waggle/releases). It runs on anything.

I don't know if anyone else needs this. I know *I* needed it. I know that coordinating multiple AI agents without visibility is like driving with your eyes closed — technically possible, briefly, and then very much not. Waggle gave me my eyes back.

---

If you try it, I'd love to hear about it. If you build something on top of it, even better. If you find a bug, there's a [contributing guide](https://github.com/maniginam/waggle/blob/master/CONTRIBUTING.md) and I promise I won't be precious about it.

The hive is open. Come dance.
