---
slug: 002-safegit-decentralised-git-on-safe-network
title: 'safegit: Decentralised Git on SAFE Network'
date: 2019-02-21
author: happybeing
authortwitter: https://twitter.com/safepress
headerhtml: "<div style='text-align: right; font-weight: normal; font-size: 8pt; color: rgb(100, 100, 100);'>safegit image by <a href='https://safenetforum.org/u/nigel'>@nigel</a><br/></div><div style='text-align: center; font-weight: bold; font-size: +4em;'><img src='/images/safegit-logo-8a31ccf66202d8209de7345c105da82070b22876_2_1380x580.png' description='safegit logo' style='text-flow: left; '></div>safegit</div>"
---

This article explains how to create a decentralised git repository on SAFE Network, push to it, clone from it, and submit pull requests back to it. So all the normal `git` functionality is working, right now.

# Overview
`safegit` is a script for creating and updating headless `git` repositories on SAFE Network using the [SAFE Command Line Interface (CLI)](https://github.com/maidsafe/safe-api/tree/master/safe-cli#safe-cli).

This is an interim solution but achieves the aim of a truly decentralised alternative to github and other centralised solutions, based on the SAFE Network. Once published, a project will be available to everyone forever
as a secure immutable repository, without censorship, server downtime, or vulnerability to DDoS and other attacks.

It works by pushing to a local headless repository (repo) that is then published to SAFE Network using the SAFE CLI.

# Setup and Workflow

## Set Up (Linux)

- Install the [SAFE Command Line Interface (CLI)](https://github.com/maidsafe/safe-api/tree/master/safe-cli#safe-cli).
- Set up an alias so you can execute the `safegit.sh` script by typing `safegit`. For example, add the following to your `~/.bash_aliases` file:
```
  alias safegit='~/safenetwork-git/scripts/linux/safegit.sh'
```
- Make it executable:
	`chmod +x safegit.sh`
- You can see `safegit` usage, including how to override the default location of your local headless repos by typing `safegit` without any parameters. Do this now to check it is set up correctly.

## Using safegit
You can now try out the following actions described in the sections below.

- [Before you begin](#before-you-begin)
- [Create a local `safegit` repository](#create-a-safegit-repo)
- [Publish/Update a git repo to SAFE Network](#publish-a-safegit-repo)
- [Update your `safegit` remote repo](#update-a-safegit-repo)
- [Clone a git repo from SAFE Network](#clone-a-safegit-repo)
- [Issue a Pull Request after making changes](#issue-a-pull-request)
- [Accept a Pull Request from someone else](#accept-a-pull-request)

<a name='before-you-begin'></a>
### Before you begin
Before you begin, log into your SAFE Network account, or if you want to follow
along without affecting your real SAFE Network account you can use a local test
network by typing `safe vault -t run-baby-fleming` and then follow along exactly
as below.

In the following examples we'll assume you have a local project git repository in `~/src/dweb-blog`. If you want to follow along, start out with:
```bash
mkdir -p ~/src
cd ~/src
git clone https://github.com/theWebalyst/dweb-blog
```

<a name='create-a-safegit-repo'></a>
### Create a local `safegit` repository

Note: to follow along you'll need to use a different SAFE NRS name from the one used in this example ('dgit'), because it is already taken. So choose your own and remember to use that wherever 'dgit' appears below.

1). Create a SAFE NRS name and sub-name for your repository (repo) on SAFE Network using the
SAFE CLI. For example, for a local git based project in `~/src/dweb-blog` you might create `dweb-blog.dgit` as follows:

IMPORTANT: make sure to enclose the SAFE XOR URI in double quotes and include `?v=0` at the end:
```bash
mkdir empty-directory
safe files put -r empty-directory
safe nrs create dweb-blog.dgit --link "<safe-xor-uri-from-files-put-command>?v=0"
rm -r empty-directory
```
IMPORTANT: you must choose a SAFE NRS name that you already own, or which is
free and not in use by somebody else. If you want to add a sub-name to a
safe NRS name which you already own, use `safe nrs add` instead of `safe nrs create`.

Alternatively, use the following short script which does the same as the above
commands, but without you needing to copy and paste the URI and or '?v-0'.

```bash
mkdir -p empty-directory
safe files put -r empty-directory | sed 's/^FilesContainer.*\"\(.*\)\"/\1/'| head -n 1 | sed 's/$/\?v=0/' | safe nrs create dweb-blog.dgit
rm -r empty-directory
```

Note: In the above script, the `sed` pipeline extracts the SAFE XOR URI of the
FilesContainer from the output of `safe files put` and formats it for use by
the `safe nrs create` command.

Whatever SAFE NRS name you choose becomes the `<repo-name>` in the following examples (e.g. `dweb-blog.dgit`). For multiple projects you can create multiple sub-names on the same NRS name, such as `safenetworkjs.dgit` or `safenetwork-farming.dgit` etc.


2). Create a `safegit` mirror for your local repository

We'll create a headless git repository to mirror your working repository (`~/src/dweb-blog`) and link it to the SAFE FilesContainer via the NRS URI `safe://dweb-blog.dgit` that was set up in step 1.

Create a local mirror for `~/src/dweb-blog` with the command.
```bash
cd ~/src/dweb-blog
safegit create dweb-blog.dgit
```

The above creates a headless repo `dweb-blog.dgit` and sets it up a remote in your project for it, called 'safegit'. You can see this with `git remote -v`

Example:
```
$ cd ~/src/dweb-blog
$ `safegit` create dweb-blog.dgit
$ git remote -v
origin	https://github.com/theWebalyst/dweb-blog (fetch)
origin	https://github.com/theWebalyst/dweb-blog (push)
safegit	/home/mrh/src/safegit/dweb-blog.dgit (fetch)
safegit	/home/mrh/src/safegit/dweb-blog.dgit (push)
```

After making changes to your code you can push these to 'safegit' using normal `git` commands, in the same way you would push to 'upstream' or 'origin' etc.

<a name='publish-a-safegit-repo'></a>
### Publish/Update a git repo to SAFE Network

Change to your working repository and push changes to the 'safegit' mirror:
```
cd ~/src/dweb-blog
safegit push dweb-blog.dgit
```
This will upload or update the headless copy of ~/src/dweb-blog on SAFE Network to match your local `safegit` headless mirror. Headless means that the source files are not present, only the '.git' subdirectory.

You can review what has been uploaded using the `safe cat`:
```
$ safe cat safe://dweb-blog.dgit
```
You can now publicise the existance of `safe://dweb-blog.dgit` on SAFE Network, a headless git mirror of your working repository `~/src/safegit/`, but which is accessible to everyone.

Note: `safe://dweb-blog.dgit` is not a website like github. It is a copy of the contents of your local `safegit` repo.

<a name='update-a-safegit-repo'></a>
### Update your `safegit` remote repo

Every time you commit changes to 'master' and want to publish them you use `safegit push <repo-name>`. For example:
```bash
safegit push dweb-blog.dgit
```
Any commits in master will be pushed to the headless mirror, and then to
SAFE network and appear at `safe://dweb-blog.dgit`.

If you want to share other branches on your SAFE repo (e.g. to submit a pull request back to a `safegit` repo you cloned), you must first push them to the local `safegit` repo. To push a branch to your *local* `safegit` repo:
```
git push safegit <branch>
```
You can now push everything to your SAFE remote with `safegit push <repo-name>` as we did for 'master'.

<a name='clone-a-safegit-repo'></a>
### Clone a git repo from SAFE Network
Anyone can make a copy of `safe://dweb-blog.dgit` using:
```bash
safe files get -e overwrite safe://dweb-blog.dgit ~/headless-dweb-blog
```
To create a working repository, clone the headless copy using `git`:
```bash
git clone ~/headless-dweb-blog ~/working-dweb-blog
```
Changes to the new `~/working-dweb-blog` can be published by creating a headless
mirror using `safegit` as explained above. Any changes to this 'fork' can be
pulled to other projects, including the original as described later.

The 'fork' will have remote 'origin' set to the local headless mirror. To pull  updates from the original (`safe:/dweb-blog.dgit`), update the local headless
copy and pulling them to the working repository. For example:
```bash
safe files get -e overwrite safe://dweb-blog.dgit ~/headless-dweb-blog
cd ~/working-dweb-blog
git pull
```

And finally, it's always worth checking the integrity of a cloned repository as follows (and you can add `--verbose` to see more about what's going on):
```
$ git fsck --strict --unreachable
Checking object directories: 100% (256/256), done.
```

<a name='issue-a-pull-request'></a>
### Issue a Pull Request after making changes
A pull request works differently with `safegit` than you are used to with github or similar git management websites. What follows is not the only way, but one suggested way that you can start with.

Make changes to a branch you create specifically for the pull request, having chosen a suitable name for the branch. For example, prefix the branch name with `<yourname>-pr-`. So what we'll do it create a branch, push it locally, and  publish to SAFE Network.

The following example assumes we've already cloned `safe://dweb-blog.dgit` and are working in our cloned project (e.g. `~/working-dweb-blog`. It also assumes that we've already published our cloned repo to a remote at `safe://dweb-blog.tgit1`, where 'tgit1' is a public name we created for our repos, and 'dweb-blog' the sub name for this particular project.

Changes we make can be shared using a pull request, as follows.
```
# Make sure you are up-to-date with the upstream repo
safe files get -e overwrite safe://dweb-blog.dgit ~/headless-dweb-blog
cd ~/working-dweb-blog
git pull

git checkout development # Your local working branch
```
Working on your local branch you commit some changes to the
project `README.md` and decide you want to submit these changes
as a pull request.

Having checked your changes and when you're ready to create the pull request, make a branch for the pull request and check it out:
```
git branch pr-readme-changes
git checkout pr-readme-changes

# Push to your SAFE Network remote
safegit push dweb-blog.tgit1
```

Note: If you get a message like the one below, execute the suggested `git push` command and then repeat the `safegit` push (above):
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
$ git request-pull 7b498aa5d9c8c81a36ada16603ac4a7c7c2bd8a8 safe://dweb-blog.tgit1 pr-readme-changes
The following changes since commit 7b498aa5d9c8c81a36ada16603ac4a7c7c2bd8a8:

  Prevent wasteful renaming when deploying to safe (rsync -u -> cp -u) (2019-02-06 17:16:46 +0000)

are available in the Git repository at:

  safe://dweb-blog.tgit1 pr-readme-changes

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
To accept a pull request means pulling a branch from a repo that has been published to SAFE Network using `safegit`.

First you will make (or update) your headless copy of the 'foreign' repo which contains the pull request. Then you can pull it into a new branch on in the
original working repo `~/src/dweb-blog`.

Example:  if we receive a pull request from 'theWebalyst' (as in the output from `git request-pull` shown above) we can pull those changes as follows.
```bash
# create or update our headless mirror of the 'foreign' repo
safe files get -e overwrite safe://dweb-blog.tgit1 ~/headless-foreign-dweb-blog

# create a branch to receive the changes (so they aren't merged immediately)
cd ~/src/dweb-blog
git branch pr-readme-changes
git checkout pr-readme-changes

# pull the changes into the new branch, in original author's working repo
git pull ~/headless-foreign-dweb-blog pr-readme-changes
```

We now have the changes on branch 'pr-readme-changes' which we can review and decide whether to merge into master.
___
### Update 1st July 2020
This article was updated to use the [SAFE CLI](https://github.com/maidsafe/safe-api/tree/master/safe-cli#safe-cli) in place of SAFE Drive which no longer works due to changes to the SAFE Network APIs.