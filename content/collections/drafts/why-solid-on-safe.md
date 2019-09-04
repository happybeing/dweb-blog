---
slug: 00?-???-???
title: Why Solid on SAFE?
date: 2019-??-??
author: happybeing
authortwitter: https://twitter.com/safepress
headerhtml: <div style='text-align: center; font-weight: bold; font-size: +4em;'><img src='/images/solidonsafelogo.png' description='safegit logo' style='text-flow: left; '>Solid on SAFE</div>
---
# Why Solid on SAFE?

TODO: link to this post from the end of about.md

## Why SAFE Network?

The SAFE (Secure Access For Everyone) Network is more than a decentralised Web, and quite different from other projects that aim to 'decentralise the Web'. It promises security and persistance of your data, access to information, communications and financial exchange by everyone without censorship or surveillance. New democratising business models where a single developer can scale an app without infrastructure costs and can earn rewards using a range of new business models. A perpetual Web of information that is accessible forever, in every version - an Internet archive for all published information. The knowledge of humanity preserved and accessible forever.

To understand the importance of preserving knowledge and the fragility of our current approach I recommend game developer [Jonathan Blow's keynote speech from devgamm moscow 2019](https://www.youtube.com/watch?v=q3OCFfDStgM). Jonathan explains how easily civilisations can lose vital knowledge across a generation, which can degrade them even to the extent of collapse, and explains why he believes this is a pressing problem for a society where everything now depends on software that is getting worse, instead of better. The SAFE Network aims to preserve and secure the knowledge of our civilisation in perpetuity.

The above list is not complete, but even those features may seem improbable hype, particularly in the context of over hyped projects which have come and gone while Maidsafe have been working towards their vision of [The Impossible Network](https://metaquestions.me/2017/08/12/the-impossible-network/), since 2006.

SAFE takes a different approach from the ground in order to *avoid* rather than *fix* the problems of centralisation, servers, bolted on security, and to provide scalable efficient planetary scale financial transactions without intermediaries.

I've been studying the SAFE Network since 2014 and as ever more decentralisation projects have emerged, this is the one that remains outstanding in all respects: vision, ambition, values and technical excellence. Similar projects have come an gone while Maidsafe have moved quietly and steadily towards their goal. Others continue, but having started with less ambition they are still partial solutions still trying to solve one thing or another with bolt on fixes for security, economics, scalability, censorship, reliability and so on.

Since 2016 I've been building on the alpha networks so I understand the principles, potential and the team building SAFE Network. It takes a while to understand the scope, ambition and technical promise of SAFE Network, but that's what sets it apart, so dig in! You can learn more at [Safenetwork.tech](https://safenetwork.tech), or for a quick intro try [10 Key Facts](https://safenetforum.org/t/10-key-facts-about-safe-network/12948?u=happybeing) and for a technical introduction: [A SAFE Network Primer](https://safenetworkprimer.com/).

I've learned about what can be built on this platform which brings new possibilities along with a need for new ways to design and implement apps. One of these innovations is to give users control of their data, reclaiming it from applications and service providers. This brought me to Linked Data (RDF) and another long term project, Tim Berners-Lee's Solid (Social Linked Data)

## Why Solid?

The Web has become centralised: a few large corporations handle most of the traffic. Information about everyone is routinely collected, sold and put to a wide range of uses that are damaging to individuals and important aspects of our society.

This is a long way from the open, inclusive vision of the Web's creator Tim Berners-Lee which lead him to give his inventions away rather than try to commercialise them.

Solid is Tim Berners-Lee's attempt to correct this, and when combined with the security, privacy and freedom of SAFE Network, I think there is a real chance that together we can make a more open, free and creative future.

Solid de-couples applications from data, which is important. This means that you can own the data you create with an app, but if a better app comes along you can use that without having to ask permission, or go through a difficult process of downloading and migrating your data from one app or service to another. Imagine transferring your social network from Facebook to a new social network. It just isn't possible, but if your data is stored under your control using Linked Data (RDF), then any app can read, edit and write it, so you can chop and change without losing access to the valuable data you have provided, and can stop using apps that no longer server your interests. Any app also becomes social, because your connections belong to you: your 'social graph' is your data.

This is a big change. Not only do you gain from being able to choose the apps, but it encourages app developers to compete on features that users want instead on focussing on locking users into their system and exploiting the value we all create when we use a service.

Solid brings independence and choice to you and incentivises developers and service providers to compete on quality because you can switch. At this stage though, Solid can't secure your data or avoid centralisation because it relies on too much of the existing web (including business models, service providers and servers).

## Why Solid on SAFE?

Solid alone is designed to operate on the existing Web and Internet which means that it can't address all of the problems we face. For example, it relies on personal data 'pods' which can be self hosted or rented as a service.

This is equivalent to something like WordPress. You can host it yourself or you can rent a WordPress blog from a service provider. With this come a number of issues.

Firstly anything that is self hosted is beyond most people, and even for people who can do this it is hard to keep the software running and secure. For popular blogs it is hard to scale. Even regularly updated software is vulnerable to hacking, malware in plugins and so on.

So most people will rent from a service provide who will look after all this for you. This is better in some ways, but leads to centralisation, vulnerability to censorship and surveillance etc.

Solid uses Web IDs which sit on top of the existing DNS, so like domains they are in theory able to be owned and controlled by users, but in practice that's not what happens. People sign up to providers for email, web hosting and so on using identities that belong to the provider (a gmail address, a WordPress subdomain etc.). The DNS itself is also brittle. It can be censored, domains stolen, expired, URIs and content lost forever. I believe we should expect the same to happen with Web IDs and pod storage hosting unless alternatives can be found which are not yet part of the Solid solution.

So many of the most pressing problems of the Internet are not addressed by using Solid pods in this form.

I support and participate in the Solid project and community, so I know that people are aware of these issues and do hope to find solutions. Solid on SAFE is my attempt to address them alongside any other approaches the Solid community can develop.

## What is Solid on SAFE?

At its core, Solid allows apps to access data stored at a location you control. To do so, apps use a standard protocol described in the [Solid Specification](https://github.com/solid/solid-spec#solid-specification). This includes identity based on Web URIs (Web IDs) and allows you fine grained control over which others (people and apps) can access your data or write to your storage location.

When a Solid app interacts with a Solid pod (where your data is stored) it uses standard Web protocols which can talk to any storage system that can understand the protocol. Enter the SAFE Network, a secure decentralised storage system which can be used with Solid apps, as an alternatice to server based Solid pods.

For a Solid app to work on SAFE Network what is needed is for the app to use a library that supports the Solid Web protocols, but which talks to SAFE Network instead of a pod server. This isn't trivial, but is proven to work and is the work I'm doing to help put Solid on SAFE!

So far I have early versions of Solid libraries which demonstrate this capability live on the SAFE alpha2 test network. You can read about this and try one app yourself in this post by community member JayBird: Solid Filemanager on SAFE.

In subsequent blog posts I plan to write about how Solid on SAFE has been imlemented, and how to get an existing Solid app running on SAFE Network.
___
DWeb Blog is live on the web at [dweb.happybeing.com](https://dweb.happybeing.com) and SAFE alpha2 Network at `safe://dweb` (to view it first [Join the DWeb](/#join-the-dweb))
