---
slug: 004-why-solid-on-safe
title: 'Why Solid on Safe?'
date: 2019-10-22
author: happybeing
authormastodon: https://fosstodon.org/@happyborg
headerhtml: "<div style='text-align: right; font-weight: normal; font-size: 8pt; color: rgb(100, 100, 100);'>Solid on Safe image by <a href='https://forum.safenetwork.bg/u/dimitar/'>@dimitar</a><br/></div><div style='text-align: center; font-weight: bold; font-size: +4em;'><img src='/images/solidonsafelogo.png' description='Solid logo' style='text-flow: left; '><br/>Why Solid on Safe?</div>"
---
# Why Safe Network?

The Safe (Secure Access For Everyone) Network is more than a decentralised Web, and quite different from other projects that aim to 'decentralise the Web'. It promises security and persistence of your data, access to information, communications and financial exchange for everyone without censorship or surveillance. It enables new and more democratic business models where for example, a single developer can scale an app without infrastructure costs and can earn rewards using a range of innovative payment options. It also creates a *Perpetual Web* of information in which every version of a piece of data is accessible forever: an Internet archive of all published information, the knowledge of humanity preserved and accessible forever.

To understand the importance of preserving knowledge and the fragility of our situation I recommend [Jonathan Blow's keynote speech from devgamm moscow 2019](https://www.youtube.com/watch?v=q3OCFfDStgM). Jonathan shows how easily civilisations can lose vital knowledge across a generation, and that this can degrade them even to the extent of collapse. He argues that this is a pressing problem for a society where everything now depends on software that is getting worse rather than better. Enter the Safe Network which aims to preserve and secure the knowledge of our civilisation in perpetuity, which will reduce the danger from information being lost over the generations.

The above list of features is not complete, but even these could seem improbable in view of the number of over hyped projects which have come and gone since 2006 when Maidsafe began working towards their vision of [The Impossible Network](https://metaquestions.me/2017/08/12/the-impossible-network/). However, Safe can achieve its goals because it tackles the problems from the ground up. This approach avoids rather than attempts to fix the problems of centralisation, servers and bolted on security, and all whilst providing scalable and energy efficient financial transactions on a planetary scale, without intermediaries. Alternative decentralisation projects tend to be only partial solutions which don't attempt to address all of the problems, and often include 'bolted on' fixes rather than creating an underlying design which prevents problems from arising in the first place.

I've been studying the Safe Network since 2014 and as ever more decentralisation projects have emerged, this is the one that remains outstanding in important respects: vision, ambition, values and technical excellence. Projects with similar aims have come an gone, but Maidsafe have moved quietly and steadily towards their goal.

Having started building on Safe test networks in 2016, I’ve come to understand the principles, potential and the people behind Safe. It takes a while to appreciate the full scope, ambition and technical promise of the project, but these are the things that set it apart and which make it well worth digging in!

One way to sum up MaidSafe's persistent, diligent approach is to say that rather than following the Silicon Valley maxim 'move fast and break things', Maidsafe 'move slowly and fix things'. You can learn more at [SafeNetwork.tech](https://safenetwork.tech), or for a quick intro try [10 Key Facts](https://safenetforum.org/t/10-key-facts-about-safe-network/12948?u=happybeing). For a technical introduction there is [A Safe Network Primer](https://safenetworkprimer.com/).

One of the key innovations of Safe is the potential to let users control their own data rather than trusting it to applications, corporations and service providers. This idea in turn brought me to Linked Data (or RDF), and consequently to another long-term project, Solid (Social Linked Data), which is the brainchild of Sir Tim Berners-Lee.

# Why Solid?

The Web began as a decentralised network of computers belonging to individuals and organisations, with information flowing relatively evenly between them. Over time the network and the services it offers have become centralised, so that now a few large corporations control most of the services and the data which we all co-create. Information about everyone is routinely collected, sold and used for profit in ways that are damaging to individuals and society.

This is a long way from the open, inclusive vision of the Web's creator Tim Berners-Lee, which in fact lead him to give his inventions away rather than try to commercialise them.

Solid is his attempt to correct this centralisation of the Web, and when combined with the security, privacy and freedom of Safe Network, together they offer a way to create a more open, free and creative future.

## Solid Separates Our Data from Apps and Services
One of the key features of Solid is that it de-couples applications from data. This is important because it means that you now own the data you create with any given app, and that if a better app comes along you can start using the better app instead. With Solid you can switch apps without having to ask permission or go through a difficult process of downloading and migrating your data from the old app to the new one. Your data stays where it is, in storage which you own and control.

Imagine for example, trying to transfer your data from Facebook to a new social network. Currently this isn't feasible. But if your data is stored under your control using a Linked Data format (RDF), then any app can read, edit and write it. So if your current social networking app starts behaving badly, you can just stop using it and start using a new one that suits your needs or which has better features. In practice, using this model any app becomes social, because your connections belong to you: your 'social graph' is your data and if you don't want a company like Facebook looking at it, you can use something else.

This is a big change. Not only do we users gain from being able to switch easily from one app to another, it encourages app developers to compete by providing the features that users want. It not longer makes sense to build an app, in a way which locks users into a service in order to exploit the value we all create while using it, because users can easily switch to an app which doesn't do this.

In short, Solid restores our freedom to choose the apps we use by preventing 'lock-in' to a given app or service.

For these reasons, Solid can bring independence and choice to you as the service user, and provides incentives for developers and service providers to compete purely on quality. At this stage though, Solid can't secure your data or avoid centralisation because it relies on too much of the existing Web including its business models, service providers and servers.

# Why Solid on Safe?

Solid is designed to operate on the existing Web and Internet which, for the reasons mentioned, means that it can't address all of the problems we face. For example, it relies on personal data 'pods' which must either be self hosted or rented as a service.

This is similar to something like WordPress blogging software, which you can either host yourself or rent from a service provider. With both these options though, there are a number of drawbacks.

Firstly, hosting something yourself is difficult, time consuming and likely to perform less well than a professionally hosted service. Setting up is complex, ongoing maintenance is time consuming, and for a popular blog it becomes hard to keep up with demand. Even regularly updated software is vulnerable to hacking, malware in plugins etc. which all means it takes time and expertise to keep it running. So self hosting is not practical or cost effective for all but a very small percentage of us.

As a result, most people will rent from a service provider who looks after all this for you. This is better in some ways, but leads to centralisation of data, difficulty moving away, vulnerability to censorship and surveillance etc.

Secondly, Solid uses Web IDs which sit on top of the existing Domain Name System (DNS). Like domain names used to identify websites and email addresses, they can in theory be owned and controlled by users, but unfortunately in practice that's not usually what happens. Instead, most people will sign up to email providers, web hosting services and so on, using identities that belong to the provider rather than to themselves (a gmail address, a WordPress subdomain, an Amazon seller account etc.). The providers design their services to make this attractive, rather than make it easier for us to manage our own identities. They do this because it benefits them in various ways, one of which is to make it harder for us to move to a different provider. So this is one area where Solid does not avoid 'lock-in', and makes it hard for users to move from one pod service provider to another, which will inevitably lead to centralisation in the pod service market.

Another problem is that the DNS itself is brittle. It can be censored, domains stolen, expired, URIs and content lost forever, which all carries across to WebIDs which are fundamental to the usefulness of Solid.

There are further problems in common with the current Web. For example, there is currently no way to prevent service providers snooping on your data, or shutting down a service causing your data to be lost.

I support and participate in the Solid project and community, so I know that people are aware of these issues and are trying to find solutions, but that is difficult when you are tied to the architecture used by the current web. However, putting 'Solid on Safe' uses a fundamentally different method for both storing data and providing WebIDs which are always in control of the user. So I've been developing this solution with their help.

#  What is Solid on Safe?

At its core, Solid allows apps to access data stored at a location you control. To do so, apps use a standard protocol described in the [Solid Specification](https://github.com/solid/solid-spec#solid-specification). This includes an identity, your Web ID, which is represented by a Web address (URI) and allows you fine grained control over which other people and apps can access your data or write to your storage location.

When a Solid app interacts with a Solid pod (where your data is stored) it uses standard Web protocols which can talk to any storage system that supports the protocol. Instead of a centralised service or a self hosted server, Solid on Safe uses the Safe Network as its storage system!

Safe Network provides a secure decentralised storage system, where every Web ID is owned by the user rather than rented from a service. This means that there is no centralisation by service providers, and no service provider to lock you in, spy on or lose your data.

On Safe Network your data is secure and stored for as long as you want for a single one-time upload fee paid to the network itself. You can even barter spare disk space in exchange for storage by becoming a 'farmer' who contributes resources to the network in exchange for credit to purchase Safe storage.

For a Solid app to work on Safe Network it must use a library that supports the Solid Web protocols, but which is also able to talk to the Safe Network. This is already proven to work for simple Solid apps, and requires little or no modification of the app itself.

So far I have early versions of Solid libraries which demonstrate this capability live on the Safe Fleming test network and the earlier alpha2 test network. You can read about this and try one app yourself as explained in this post by community member JayBird: [Solid Filemanager on Safe](/blog/post/003-solid-filemanager-on-safe-network/).

My work to help put Solid on Safe continues, extending the number of Solid libraries which can operate with Safe Network and adding to the Solid features which are available.

In subsequent blog posts I plan to write about how Solid on Safe has been imlemented, and how to get an existing Solid app running on Safe Network.

### Acknowledgement
My thanks to [@David-B](https://forum.safedev.org/u/david-b) for his help as guest editor of my clumsy writings. This post is very much improved due to his input!
