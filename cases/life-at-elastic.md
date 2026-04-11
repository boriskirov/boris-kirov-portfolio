---
title: Life at Elastic
description: "The changelog of projects and initiatives I have contrbuted in Elastic as Observability Design Lead"
date: "2025-11-24"
type: "Changelog"
---

<link rel="stylesheet" href="../../styles.css">

![Life at Elastic](../../elastic-hero.png)

## TLDR;

At Elastic, a search company, I lead and contribute design expertise to some of the organization’s most significant product and engineering initiatives. While my core focus is Observability, I collaborate closely with Security, Search, Platform, and Elasticsearch to deliver cohesive, cross-functional outcomes.

My blend of product knowledge, technical depth, and design leadership allows me to shape early-stage initiatives, navigate ambiguity, and drive execution through to successful release. I regularly align stakeholders across disciplines and organizational levels to ensure clarity, momentum, and impact.

I have contributed to delivering numerous solutions to users, including:

- APM (Application performance monitoring)
- OpenTelemetry (OTel)
- Universal Profiling
- Synthetics
- GenAI, AI Assistance, Machine Learning
- Logs
- Infrastructure
- Streams
- Significant Events
- Design system (EUI) and process design

---

## Changelog

- ["Designing Log processing UX at Elastic Streams"](https://www.elastic.co/observability-labs) • 2025 • Blog post
- ["Introducing Streams for Observability: Your first stop for investigations"](https://www.elastic.co/observability-labs/blog/elastic-observability-streams-ai-logs-investigations) • 28.10.2025
- ["Elastic Redefines Observability with AI-Powered Streams"](https://ir.elastic.co/news/news-details/2025/Elastic-Redefines-Observability-with-AI-Powered-Streams/default.aspx) • 28.10.2025
- ["Goodbye log swamp, hello Streams"](https://www.elastic.co/elasticsearch/streams) • 25.10.2025
- ["Streams: A set of AI-driven capabilities that enable SREs using Elastic Observability to solve problems faster by automatically parsing, compressing, and surfacing insights from unstructured data with logs"](https://www.elastic.co/blog/whats-new-elastic-9-2-0) • 15.08.2024
- [Elastic: A Leader in the 2024 Gartner® Magic Quadrant™ for Observability Platforms](https://www.elastic.co/resources/observability/analyst-report/gartner-magic-quadrant-observability-platforms) • 09.02.2024
- [Elastic APM for iOS and Android Native apps](https://www.elastic.co/blog/elastic-apm-for-ios-and-android-native-apps) • 11.10.2023
- [Turbo-charging AI Ops with the Elastic Observability AI Assistant: ElasticON](https://www.youtube.com/watch?v=L_vYMzksZPs) • 12.09.2023
- ["Elastic AI Assistant and Profiling GA"](https://www.elastic.co/blog/whats-new-elastic-observability-8-10-0) • 12.09.2023

---

## History

I joined Elastic in 2022, back then our team was spread across different sub-products of observability. I started contributing and owning the area of APM (Application performance monitoring), where I collaborated closely with [Casper Huberts](https://www.formgeist.com/), who as of writing this post is a Senior Platform Manager. We started working on features like [Span links](https://deepwiki.com/elastic/apm/3.5-span-links-and-trace-continuation), [Service Map](https://www.elastic.co/docs/solutions/observability/apm/service-map), [Service Groups](https://www.elastic.co/docs/solutions/observability/apm/services#service-groups), [Trace Waterfall](https://www.elastic.co/docs/solutions/observability/apm/traces-ui), Comparisong tooling and [Mobile APM](https://www.elastic.co/observability-labs/blog/apm-ios-android-native-apps). The main purpose of all those features was to enhance the experience for the observability user, and also mature the Elastic Observability solution. With my previous experience as Platform and Design system contributor, my approach was always more holistic on not focused on custom solutions. This led to more focused and collaborative work with the Elastic Platform team and [EUI](https://eui.elastic.co/). My list of actual contributions can be also tracked in the [EUI Github repo]https://www.github.com/elastic/eui. Often my work would span from early concepts, collection requirements, ideation and research and transition to design, and often with contributions to the final state of every solution. My technical approach is applied from the beginning until the end of the cycle for a project. That allows for a realistic preparation, expectatiosn and fine-grained control at the end when we are preparing for release.

This approach has let me to position myself as a main contributor to many important and strategic initiatives in Elastic. Here are some of the main efforts that I contributed from a company standpoint after my first 1.5 years in Elastic as an APM contributor:

1. [Profiling](https://www.elastic.co/observability/universal-profiling) (March - August 2023)- leading the responsibility to bring [Profiler](https://prodfiler.com/) after acquision from Elastic to integrate in Kibana and Elastic infrastructure. As a designer there my responsibility spanned from understanding the product, figuring out the most effective and smooth transitional way to bring a solution into a shared infrastructure. Also adapt the a startup company that was now part of a bigger company.

   • Took part in the offsite and in person decision making about how to bring the product in Elastic

   • Craft pixel perfect designs to adapt a already existing product

   • Control and regulate design consistency by using Elastic EUI for integrating Profiling

   • Created and contributed to [Flamegraph](https://elastic.github.io/elastic-charts/storybook/?path=/story/components-tooltip--flamegraph&globals=toggles.showHeader:true;toggles.showChartTitle:false;toggles.showChartDescription:false;toggles.showChartBoundary:false;theme:light) visualisation in [Elastic charts](https://github.com/elastic/elastic-charts)

   ![Life at Elastic](../../profiling.png)

1. [AI Assistance and ML](https://www.elastic.co/docs/explore-analyze/ai-features) (Sep 2023 - Sep 2024)- After the successful integration of Profiling in Elastic, the next venture that found me was the collaboration the initiate the first AI Assistance experience in Observability. I was responsible to design the first prompt based interfaces across APM, Logs, Discover, Profiling. Later on this evolved in AI Assistant chat, development of the first skills and tools to start exploring root cause and incident management. The core and most important user case for observability. My involvement began as a small team of three developing the first prototypes and MVP concepts which few months later evolved into a full fledged team (something which would continue to happen in my career at Elastic quite often, participate and collaborate on MVP which often would lead into creating teams and investing in such strategic initiatives through the following fiscal year). AI Assistance and ML first MVP were build together with the amazingly smart individuals [Sean Heelan](https://sean.heelan.io/) (Teach Lead) and Dario Gieselaar (Principle Software Engineer II).

   • Craft pixel perfect designs for implementation for a cross solution use across Elastic Observability

   • Ideate, research and collaborate on long term value of AI in Observability

   • Build the first shared AI library in Elastic together with [Ryan Keairns](https://ryankeairns.com/)

   • Introduced the first Interactive Chat Interface in Elastic to facilitate cohesive communication for SREs, where users can chat and visualize relevant telemetry data in one place. This interface also integrates proprietary data and runbooks, providing additional context

   [Watch the Product Walkthrough](https://www.youtube.com/watch?v=n9Gbp5NFS8s)

1. Streams & Significant events- WIP (Sep 2024 - Currently)

![Life at Elastic](../../streams&sig.png)
Ken Exner (CPO) & Luca Wintergerst (PM) presenting Streams and Significant events at ElasticON - project I led from pitch to shipped solution together with Patri Pascual (Designer).
