---
title: "It Wasn't Made To Do That"
date: "9/6/2020"
hero: "/images/figma-input.png"
status: "published"
description: "How to deal with bizarre prototypes."
---

import Figure from "../../components/figure"
import Embed from "../../components/embed"
import Tweet from "../../components/tweet"

This week [Figma](https://figma.com) released their [Interactive Components ](https://help.figma.com/hc/en-us/articles/360061175334-Create-interactive-components-with-Variants) feature in beta. The results have been um, surprising.

<Tweet id="1367501450683834372" />

The feature was probably designed with problems like these in mind:

<Tweet id="1366830065468768261" />

That hasn't stopped designers from filling my timeline with incredible, bizarre prototypes like this:

<Tweet id="1366677421001502721" />

...and this:

<Tweet id="1366041396092755970" />

...and even this:

<Tweet id="1366520489578016775" />

Prototypes like these beg the question... **why?**

Or, more specifically, **why make this in Figma?**

Personally, I'm a big fan of making stuff with the wrong tools. Projects like [Poom](https://freds72.itch.io/poom) inspire me. A long time ago, I made a kind of [Minecraft in Framer](https://framer.cloud/TDhUi/).

<Embed src="https://framer.cloud/TDhUi/" />

Figma is a special case because its prototypes don't work like anything else. To learn more about why these new protoypes are exciting (or ridiculous, depending on your perspective) let's go back and look at how we got here.

## Draw a Noodle

In 2017, Figma [released](https://www.figma.com/blog/figma-2-0-now-with-prototyping-and-developer-handoff/) its first set of prototyping features. It worked like this: select Frame A, draw an arrow to Frame B; and then in the preview mode, interact with Frame A to transition to Frame B.

![Drawing a Noodle in Figma](/images/figma-noodle.gif)

While the team has continued adding to this part of the app, it hasn't changed much. Prototyping in Figma has always been about **creating links between Frames**.

A few months ago, Figma released [Component Variants](https://www.figma.com/best-practices/creating-and-organizing-Variants/), a new feature that lets a designer create related snapshots of a Component.

<Figure
  src="/images/it-wasnt-made-for-that/figma-0.png"
  alt="Component Variants in Figma."
/>

Interactive Components brings prototyping to Component Variants, allowing a designer to **create links between Variants**.

<Figure
  src="/images/figma-interaction.gif"
  alt="Drawing a link between component Variants."
/>

It works pretty much the same way: select Variant A, draw an arrow to Variant B; and then in the preview mode, interact with Variant A to transition _the Component_ to Variant B.

To learn why this change matters so much, let's first look at some of the problems with Figma's prototyping model.

## Noodle Problems

Figma's prototyping model was always good for simple click-through prototypes but it struggled with anything complex. This is because, before Interactive Components, Figma's prototype only kept track of the user's current Frame.[^1]

<Figure
  src="/images/it-wasnt-made-for-that/figma-a-0.svg"
  alt="A diagram showing three Frames in Figma, with Home as the current Frame."
/>

Clicking a link would change the current Frame.

<Figure
  src="/images/it-wasnt-made-for-that/figma-a-1.svg"
  alt="A diagram a link to News, with News as the new current Frame."
/>

And that was pretty much it. Building a prototype like this was easy to learn and easy to use. But it had two problems.

### Problem 1: Lots of Noodles

Even a small prototype has lots of links, each of which would need to be created by hand.

<Figure
  src="/images/it-wasnt-made-for-that/figma-a-2.svg"
  alt="A diagram showing all of the possible links."
/>

There were some tricks to reduce the number of links, such as using the "Back" transition target or setting your links on a Component and then reusing that Component between Frames, but there was really no escaping it: prototyping in Figma meant drawing lots and lots of arrows.

And while [I really like drawing arrows](https://github.com/steveruizok/perfect-arrows), needing to draw so many arrows made it extremely tedious to prototype even a medium-sized project in Figma.

### Problem 2: Compound Noodles

There was a bigger problem, however.

Real apps keep track of lots of information that describes the current "state" of the app. Navigation is often only a small part of that state. An app's state might also hold information such as the current user's name, their preferences and settings, or the contents of their shopping cart.

By comparison, a Figma prototype's state included _one_ piece of information: the user's current Frame.

This meant that a designer looking to model _other_ types of state, such as whether the user is in a "light mode" or "dark mode", would have to somehow achieve this complexity with only that single property to work with.

The solution? **Create a Frame for every possible state combination**.

<Figure
  src="/images/it-wasnt-made-for-that/figma-b-0.svg"
  alt="A diagram showing six Frames: three for light mode and three for dark mode."
/>

Once a designer had modeled each state as its own Frame, a user could "change the state" by linking to a version that showed the correct configuration.

<Figure
  src="/images/it-wasnt-made-for-that/figma-b-1.svg"
  alt="A diagram showing six Frames: three for light mode and three for dark mode."
/>

As you can imagine, this doesn't mix well with the first problem.

<Figure
  src="/images/it-wasnt-made-for-that/figma-b-2.svg"
  alt="A diagram showing 18 arrows between the six Frames."
/>

Different _kinds_ of state could make the problem even worse.

Adding a "dusk" mode would require yet another duplication, or three more Frames, which is bad enough. But adding a _parallel_ state, such as "logged in", would mean duplicating the entire collection—so six more states on top of the original six, with even more arrows for each.

<Figure
  src="/images/it-wasnt-made-for-that/figma-b-3.svg"
  alt="A diagram showing 18 arrows between the six Frames."
/>

Given enough time and coffee, I could in theory prototype a working game of checkers in Figma using only links between Frames—but it would require about 500 quintillion Frames to do it, and an even greater number of links.

More realistically, once I'd built a medium-sized prototype with both light mode, dark mode, and an authentication state, I would never again change that design. Whatever I'd wired up would ship, sorry.

### Enter Interactive Components

Giving each Component its own state means freeing that "current Frame" state from its extra duties, greatly reducing the number of Frames needed to model states other than the user's actual navigation.

While [@mingyaaa](https://twitter.com/mingyaaa)'s [game of Go](https://www.figma.com/community/file/948345806178418685) would previously have required 10<sup>172</sup> Frames (a number far greater than the number of atoms in the universe), Ming-ya could do it with just four Components, each with four Variants and a simple set of links.

<Figure
  src="/images/it-wasnt-made-for-that/figma-c-0.png"
  alt="A screenshot of a Figma file showing four Components."
/>

The fundamental problem hasn't changed: modeling a Component with multiple properties still means creating different Variants for each combination of the Component's properties. However, by pushing the problem down into Components, Interactive Components greatly reduces the number of combinations.

Prototypes that were impossible (or impractical) before are now comparitively easy to put together. That's good for everyone.

## Prototyping Anything?

While Figma's Interactive Components do expand the field of what a designer can do in a Figma prototype, there are still some major limitations. Without the ability to store, refer to, or manipulate actual data like text, numbers, or values, designers will be limited to what can be fully represented through snapshots.

For example, Design XStream's [text input](https://www.figma.com/community/file/949319444934680661) has a "Single Letter" Component with Variants for each possible character. The input field is a row of 26 of these components. Pressing a key changes the Component's Variant to match the key that you've pressed.

<Figure
  src="/images/it-wasnt-made-for-that/figma-d-0.png"
  alt="A screenshot of the Single Character Component, showing interactions."
/>

In other words, Figma isn't actually storing the text you type; it's just changing the Variant of each of those Components. There's no way to use that data outside of the component.

If that's something you want to do, then you'll need to use a more powerful prototyping tool. And you have plenty of tools on the market, both code and no code, for creating more functional prototypes. I'm working on one [Play](http://createwithplay.com/).

That said, as these prototype show, you _can_ do a lot with Interactive Components. While I'll still use other tools for serious prototyping, Figma's limitations do make for some excellent creative constraints. I'm looking forward to seeing what designers make.

<Tweet id="1367024814062530560" />

---

[^1] Technically speaking, Figma also keeps track of the user's visited Frames. This "navigation stack" works like a stack of cards: clicking a link would add a new Frame to the stack, and going back would remove the current Frame from the stack. Whichever way you went, the Frame on top of the stack would always become the new current Frame.
