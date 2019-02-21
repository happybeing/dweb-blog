accept---
slug: 002-safegit-decentralised-git-on-safe-network
title: 'safegit: Decentralised Git on SAFE Network'
date: 2019-02-21
author: happybeing
authortwitter: https://twitter.com/safepress
---
This article explains how to create a decentralised git repository on SAFE Network, push to it, clone from it, and submit pull requests back to it. So all the normal `git` functionality is working, right now.

**Pre-requisites:** [SAFE Drive](https://github.com/theWebalyst/safe-drive) which is currently only working on Linux, but Mac and Windows are not far away, and if anyone is able to help finish those please [get in touch](/about#the-author) (as I don't have those platforms).

**Warning:** this is a hack, but it seems to work so we do have decentralised git repositories on SAFE Network right now. No warranty, help with testing and feedback very welcome.

# Overview
`safegit` is a script for creating and updating headless `git` repositories on SAFE Network via a mounted SAFE Drive.

It works by pushing to a local headless repo that is then copied via SAFE Drive to SAFE Network. We copy to, rather than push directly to a headless repo on SAFE Drive because this does not work reliably yet (see SAFE Drive issue [#10](https://github.com/theWebalyst/safe-drive/issues/10)).

When that issue is fixed, we could push directly to SAFE Drive, but that may be less efficient (e.g. using more SAFE storage credits/PUTS) than using `safegit.sh` to _copy_ changed files.

# Setup and Workflow (SAFE Drive + safegit)

## Set Up (Linux)

- Get SAFE Drive and test it (see https://github.com/theWebalyst/safe-drive).
- Set up an alias so you can execute the `safegit.sh` script by typing `safegit`. For example, add the following to your `~/.bash_aliases` file:
```
  alias safegit='~/safe-drive/scripts/linux/safegit.sh'
```
- Make it executable:
	`chmod +x safegit.sh`
- You can see `safegit` usage, including how to override the default location of your local headless repos by typing `safegit` without any parameters. Do this now to check it is set up correctly.

## Using safegit
You can now try out the following actions described in the sections below.

- [Create a local safegit repo](#create-a-safegit-repo)
- [Update your safegit remote repo](#update-a-safegit-repo)
- [Publish/Update a git repo to SAFE Network](#publish-a-safegit-repo)
- [Clone a git repo from SAFE Network](#clone-a-safegit-repo)
- [Issue a Pull Request after making changes](#issue-a-pull-request)
- [Accept a Pull Request from someone else](#accept-a-pull-request)

<a name='create-a-safegit-repo'></a>
### Create a local safegit repo

In the following examples we'll assume you have a local project git repository in `~/src/dweb-blog`. If you want to follow along, start out with:
```
mkdir -p ~/src
cd ~/src
git clone https://github.com/theWebalyst/dweb-blog
```

1). Create a public name and sub name for your repo on SAFE Network (e.g. by using Maidsafe's Web Hosting Manager). For example, for a local git based project in `~/src/dweb-blog` you might create `dweb-blog.dgit` (i.e. create and publish a default website, using a Web Hosting Manager template). The content does not matter, just that you create a pubic name a sub name for use as a `git` repo.

Note: to follow along you'll need to use a different SAFE Network public name because the one used in this example ('dgit') is already taken, so create your own, and remember to use that wherever 'dgit' appears below.

Whatever public name you choose becomes part of your `&lt;repo-name>` in the following examples (e.g. `dweb-blog.dgit`). For multiple projects you can create multiple sub names (websites) on the same public name, such as safenetworkjs.dgit, safe-drive.dgit etc.

2). Next, create a local headless repo for your project: from within your project directory with:
```
safegit create &lt;repo-name>
```
The above creates a headless repo `&lt;repo-name>` and sets it up a remote in your project for it, called 'safegit'. You can see this with `git remote -v`

Example:
```
$ cd ~/src/dweb-blog
$ safegit create dweb-blog.dgit
$ git remote -v
safegit	/home/mrh/src/safegit/dweb-blog (fetch)
safegit	/home/mrh/src/safegit/dweb-blog.dgit (push)
```

After making changes to your code you can push these to 'safegit' using normal `git` commands, in the same way you would push to 'upstream' or 'origin' etc.

### Update your safegit remote repo
<a name='update-a-safegit-repo'></a>
You won't need to do this for master (because `safegit.sh` takes care of that), but if you want to share other branches on your SAFE repo (e.g. to submit a pull request back to a safegit repo you cloned), you must first push them to the local safegit repo. To push a branch to your *local* safegit repo:
```
git push safegit <branch>
```
You can then push everything to your SAFE remote with:
```
safegit push
```

<a name='publish-a-safegit-repo'></a>
### Publish/Update a git repo to SAFE Network

Make sure your SAFE Drive is mounted at ~/SAFE and checking the output is as shown:
```
$ ls ~/SAFE
_public _publicNames
```

From within your project directory (e.g. first `cd ~/src/dweb-blog`), type:
```
safegit push &lt;repo-name>
```
This will upload or update the copy of &lt;repo-name> on SAFE Network to match your local safegit headless &lt;repo-name>. Note that you will need to allow SAFE Drive access to your SAFE storage for this to succeed, by accepting the authorisation request when it appears in SAFE Browser.

Example:
```
$ safegit push dweb-blog.dgit
git push safegit master
cp -ruv /home/mrh/src/safegit/dweb-blog.dgit/branches /home/mrh/src/safegit/dweb-blog.dgit/config /home/mrh/src/safegit/dweb-blog.dgit/description /home/mrh/src/safegit/dweb-blog.dgit/HEAD /home/mrh/src/safegit/dweb-blog.dgit/hooks /home/mrh/src/safegit/dweb-blog.dgit/info /home/mrh/src/safegit/dweb-blog.dgit/objects /home/mrh/src/safegit/dweb-blog.dgit/refs /home/mrh/SAFE/_public/dgit/root-dweb-blog/
rsync -ru --delete /home/mrh/src/safegit/dweb-blog.dgit/ /home/mrh/SAFE/_public/dgit/root-dweb-blog
Everything up-to-date
'/home/mrh/src/safegit/dweb-blog.dgit/branches' -> '/home/mrh/SAFE/_public/dgit/root-dweb-blog/branches'
'/home/mrh/src/safegit/dweb-blog.dgit/config' -> '/home/mrh/SAFE/_public/dgit/root-dweb-blog/config'
'/home/mrh/src/safegit/dweb-blog.dgit/description' -> '/home/mrh/SAFE/_public/dgit/root-dweb-blog/description'
'/home/mrh/src/safegit/dweb-blog.dgit/HEAD' -> '/home/mrh/SAFE/_public/dgit/root-dweb-blog/HEAD'
...
cleanup
```

Following the example above, `~/src/safegit/dweb-blog` will now be present at `safe://dweb-blog.dgit` *and* accessible to everyone as a public read-only on their SAFE Drive at `~/SAFE/_webMounts/dweb-blog.dgit`. You can now publicise the existance of 'dweb-blog.dgit' on SAFE Network.

Note: `safe://dweb-blog.dgit` is not a website like github, and can't be browsed using SAFE Browser like other SAFE URIs. It is just a copy of the contents of your local safegit repo available for cloning using git clone `~/SAFE/_webMounts/dweb-blog.dgit`

<a name='clone-a-safegit-repo'></a>
### Clone a git repo from SAFE Network
If you want to clone a repo from SAFE Network, you can do so by accessing it via the web mounts feature of SAFE Drive. First make sure your SAFE Drive is mounted at `~/SAFE` and checking the output is as shown:
```
$ ls ~/SAFE
_public _publicNames
```

Note: you will not see the `_webMounts` directory listed until you cause it to automount. See next.

To clone a repo use git as normal, but instead of an 'http' URI, provide the path to the corresponding web mount, and the directory you wish to clone into:
```
git clone [web-mount] [directory]
```

The web mount is just `~/SAFE/_webMounts/&lt;repo-name>`

So for `safe://dweb-blog.dgit` the web mount is `~/SAFE/_webMounts/dweb-blog.dgit` and to clone it you would mount SAFE Drive and type:
```
git clone ~/SAFE/_webMounts/dweb-blog.dgit dweb-blog
```
Your clone will have remote 'origin' set to `~/SAFE/_webMounts/dweb-blog.dgit`, so you can pull any updates from it at any time, just as you would if you cloned from github, with `git pull`. You don't own the SAFE web mount so you can't push changes to it. In fact, web mounts are always read-only, so not even the owner can push to it, instead they push to their local repo and sync to SAFE using `safegit push` as described earlier.

Example:
```
$ mkdir testing
$ cd testing
$ git clone ~/SAFE/_webMounts/dweb-blog.dgit dweb-blog
Cloning into 'dweb-blog'...
done.
$ cd dweb-blog
$ git remote -v
origin	/home/mrh/SAFE/_webMounts/dweb-blog.dgit (fetch)
origin	/home/mrh/SAFE/_webMounts/dweb-blog.dgit (push)
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working tree clean
$ ls -a
.         content       .gitignore    public     src
..        .eslintrc.js  LICENSE       README.md  static.config.js
.babelrc  .git          package.json  scripts    yarn.lock
```
And finally, it's always worth checking the integrity of a cloned repository as follows (and you can add `--verbose` to see more about what's going on):
```
$ git fsck --strict --unreachable
Checking object directories: 100% (256/256), done.
```

<a name='issue-a-pull-request'></a>
### Issue a Pull Request after making changes
A pull request works differently with `safegit` than you are used to with github or similar git management websites. What follows is not the only way, but one suggested way that you can start with.

Make changes to a branch you create specifically for the pull request, having chosen a suitable name for the branch. For example, prefix the branch name with `&lt;yourname>-pr-`. So what we'll do it create a branch, push it locally, and  publish to SAFE Network.

The following example assumes we've already cloned `~/SAFE/_webMounts/dweb-blog.dgit` and are working in our cloned project which has remote 'origin' set to `~/SAFE/_webMounts/dweb-blog.dgit`. It also assumes that we've already published our cloned repo to a remote at `safe://dweb-blog.tgit1`, where 'tgit1' is a public name we created for our repos, and 'dweb-blog' the sub name for this particular project.

Changes we make can be shared using a pull request, as follows.
```
# Make sure you are up-to-date with the upstream repo
git pull

git checkout development # Your local working branch
```
Working on your local branch you commit some changes to the
project README.md and decide you want to submit these changes
as a pull request.

Having checked your changes and when you're ready to create the pull request, make a branch for the pull request and check it out:
```
git branch pr-readme-changes
git checkout pr-readme-changes

# Push to your SAFE Network remote
safegit push dweb-blog.tgit1
```

Note: If you get a message like the one below, execute the suggested `git push` command and then repeat the safegit push (above):
```
fatal: The current branch pr-readme-changes has no upstream branch.
```
To push the current branch and set the remote as upstream, use

```
git push --set-upstream safegit pr-readme-changes
```

Generate a pull request message using the commit at which your
changes begin using a tag, or you can identify the hash using `git log` which is what is being done here:
```
$ git request-pull 7b498aa5d9c8c81a36ada16603ac4a7c7c2bd8a8 ~/SAFE/_webMounts/dweb-blog.tgit1 pr-readme-changes
The following changes since commit 7b498aa5d9c8c81a36ada16603ac4a7c7c2bd8a8:

  Prevent wasteful renaming when deploying to safe (rsync -u -> cp -u) (2019-02-06 17:16:46 +0000)

are available in the Git repository at:

  /home/mrh/SAFE/_webMounts/dweb-blog.tgit1 pr-readme-changes

for you to fetch changes up to 0c15476185831f51bfa0bdd8a973fee91992962b:

  Make improvements to README (2019-02-13 12:31:30 +0000)

----------------------------------------------------------------
theWebalyst (1):
      Make improvements to README

 README.md | 25 ++++++++++++++++++++-----
 1 file changed, 20 insertions(+), 5 deletions(-)
```


We can now send the above in a message to the owner of `safe://dweb-blog.dgit`

<a name='accept-a-pull-request'></a>
### Accept a Pull Request from someone else
To accept a pull request means pulling a branch from a repo that has been published to a remote on SAFE and is accessible as a web mount.

To do this you should make a suitable remote for the 'foreign' repo in your project (if not done previously), and then pull the branch from it.

So if we receive a pull request from 'theWebalyst' (as in the output from `git request-pull` shown above) and we decide to pull those changes we: look at the line underneath 'are available in the Git repository at', and type `git pull` followed by the content of the line. But first let's create a branch to receive the changes, otherwise they will immediatelly be merged with the current branch.
```
$ git branch pr-readme-changes
$ git checkout pr-readme-changes
Switched to branch 'pr-readme-changes'
```

Now we can merge into the (new) current branch:
```
$ git pull /home/mrh/SAFE/_webMounts/dweb-blog.tgit1 pr-readme-changes
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 2), reused 0 (delta 0)
Unpacking objects: 100% (3/3), done.
From /home/mrh/SAFE/_webMounts/dweb-blog.tgit1
 * branch            pr-readme-changes -> FETCH_HEAD
Updating 7b498aa..0c15476
Fast-forward
 README.md | 25 ++++++++++++++++++++-----
 1 file changed, 20 insertions(+), 5 deletions(-)
```

We now have the changes on branch 'pr-readme-changes' which we can checkout, test and merge.
