---
slug: 003-solid-filemanager-on-safe-network
title: 'How to use Solid Filemanager on the Safe Network'
date: 2019-09-04
author: JayBird
headerhtml: "<div style='text-align: center; font-weight: bold; font-size: +4em;'><img src='/images/filemanager-intro.png' description='safegit logo' style='text-flow: left; '>Solid Filemanager</div>"
---
Hello there, brave explorers of the new world! I am about to take you through a basic look at the functionality of the Solid Filemanager which is now working on both the Safe Browser on their Alpha 2 network and Solid, thanks to some wizardry from [happybeing](/about), the gracious host of this blog. I am [JayBird](https://safenetforum.org/u/JayBird) on the forum, in case you've any questions about the whole process described here.

It was my first time installing and using the Safe Browser from the people building the Safe Network, first time properly digging into Tim Berners-Lee's Solid, first time making a blog, first time consciously using Markdown, first time being exposed to a myriad of bizarre and wonderful computery words in fact... So many abbreviations, how do you all cope!

What I'm basically saying is that if I can install and run the Safe browser, use the Solid Filemanager to check out the bones of the various Safe sites on there, and then make a blog on the dWeb about it, a monkey typing full-speed on a typewriter going down a steep hill on a unicycle could probably manage it. Anyway, let's get into it.

### Step 1

Install and get going on the Safe Browser. This is explained clearly [here](https://safenetforum.org/t/the-safe-browser/28031), I got it going on Ubuntu and on Mac, and reports from Windows users seem positive too. If you've any problems just ask on the forum, it's a responsive and friendly place.

### Step 2

Play around on the various [Safe sites](https://safenetforum.org/t/list-of-websites-safesites-webids-community-resources/25168/101), there are cats, punk videos, wallet mockups, racer games and prototype social networks bubbling away.

### Step 3

Remember to enable experimental APIs in the top right before using the filemanager like so:

<img src="/images/filemanager-enable-api.png" alt="experimental API" style='text-flow: left; ' />

### Step 4

You are now ready to access the Solid Filemanager app. Either click on this [filemanager](safe://solid-filemanager) link with the browser open, or copy and paste `safe://solid-filemanager` into a new tab. A window will pop up after a pause asking you to open the directory of whatever site you want to look at, which looks like this:

<img src="/images/filemanager-open-directory.png" style='text-flow: left; ' />

### Step 5

If you've gotten to this point you're ready to inspect the structure of the site you've selected. A double-click on a file opens it up in a simple editor, any further directory can be inspected, and you can see basically everything that's going on under the hood. After checking out dWeb Blog (at [safe://dweb](safe://dweb)) above you might like to go onto JAMS (at [safe://jams.demo](safe://jams.demo)), the flagship music player on Safe.

<img src="/images/filemanager-editor.png" style='text-flow: left; ' />

### Step 6

Have a nice think for yourself about what kind of effects on security and creativity a service like this might have if it became standard practice to have your site fully open, auditable, and copyable. And of course if you're a programmer and would like to see this become a reality faster, get in touch with [happybeing](/about) and get involved. He is at the moment a one-man bridge between projects Safe and Solid, and was very helpful and responsive with me at all stages of getting this blog done showcasing his hard work bringing Solid and Safe closer together.
