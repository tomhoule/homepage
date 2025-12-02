+++
title = "My Talks at GraphQL Conf 2025 in Amsterdam"
date = "2025-12-02"
slug = "graphql-conf-amsterdam"
draft = false
tags = ["graphql", "talks"]
aliases = ["/2025/graphql-conf-amsterdam/"]
+++

I had a fantastic time at GraphQL Conf in Amsterdam last September. It’s always nice to connect with the community face-to-face, and I was impressed by the liveliness of the GraphQL community, as a first time GraphQL conf attendee and speaker. I loved the vibe and hearing about the challenges everyone is solving.

I had a busy conference schedule this year, presenting a deep-dive workshop and two lightning talks focused on pushing the boundaries of GraphQL federation. If you couldn't make it to Amsterdam, or just want a refresher, here is a quick look at what I presented.

### The Federated GraphQL Subscriptions Zoo

Subscriptions require a different mindset than queries and mutations, and federation adds infrastructure layers that complicate things further. In this lightning talk, I went into the challenges of scaling and, more specifically, translation across the "zoo" of available protocols—from mapping WebSocket init payloads to HTTP headers, to handling SSE and multipart streams. Subscriptions mediated by some persistence layer (a message queue, typically) emerged as the overall best choice, with only Grafbase allowing the amount of control you need to implement them properly.

{{< youtube smqavgkzwlI >}}

### Authorization in Federated GraphQL

My second talk focused on leveraging the unique position of the federation gateway for authorization. Because the gateway sits early in the request lifecycle and sees the entire graph, it’s a convenient place to make auth decisions. More than that, since subgraphs only see fragments of the original query, it's often the only component where you have the context you need to make a proper access control decision. I covered how to use out-of-the-box Federation directives like `@authenticated` and `@policy`, as well as implementing fine-grained authorization using WebAssembly extensions in the Grafbase gateway.

{{< youtube hZQZrXk8dUE >}}

### Workshop: Beyond GraphQL Federation

I finished by co-hosting a workshop alongside Benjamin Rabier. Our goal was to demonstrate that federation is a fantastic pattern for combining APIs, and it shouldn't be limited to just GraphQL subgraphs.

We looked at how to use [Composite Schemas](https://github.com/graphql/composite-schemas-spec/), WebAssembly extensions based on the Component Model (WASI preview 2), and the Grafbase Gateway to federate non-GraphQL sources. We live demoed integrating REST APIs, a Postgres database, Kafka, and gRPC services directly into a federated graph without needing to write dedicated GraphQL servers in front of them.

{{< youtube lFrm-nR-TXs >}}

