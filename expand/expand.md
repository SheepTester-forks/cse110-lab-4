## 3. Expand - No Points, No Extra Credit

> _NOTE: To begin this section, you **MUST** have completed the previous "**Expose**" and "**Expand**" sections_

The following are a series of free response questions. If you complete this section, please complete every question, and please leave full, thought out responses. All of these questions should be **_in your own words_**. Put your answers in **expand.md** inside the **expand** directory

1. Some JavaScript developers believe that most of the issues with JavaScript stem from its asynchronous nature, its loose typing, and the web platform it runs on. For each of the three reasons listed, explain in your own words why a developer might believe that it is a pain point.

   developers like thinking about things sequentially. step 1, this, step 2, that. once things run in parallel it gets a bit harder to think about because irl we don't really multitask like that, it's very easy to loose track of things

   strong typing is nice for catching simple errors and for documentation, to know what a function is supposed to return

   the web platform doesn't have direct access to the file system and it also has to deal with mobile browsers, and developers are used to their three-4k-monitor setup and do not want to design for a phone

2. Related to the first question, why do you believe that the developer(s) who created JavaScript made it loosely typed? Why do you think they added asynchronous features?

   loose type is good for forwards and backwards compatibility. if they added a new api in the future, an old browser that doesn't know about the api would see code trying to use it and reject the entire program, even if the code has some feature checking that won't make it run if it's not supproted. it is better to just ignore it so code can work for both old and new browsers

   asynchronous is so if you click one button and it waits, it doesn't seem like the page is hanging when you try to click another button while it is loading. it is because javascript is very tightly coupled with the web page and user interaction

3. What are the key differences between a compiled language and an interpreted one? Which one is JavaScript? What are the benefits & drawbacks of JavaScript being made that way?

   compiled languages compile to something else that is executed, while interpreted languages require an interpreter to step through each piece of code and execute it one by one

   javascript is both just-in-time compiled (depending on the browser; chrome does this) and interpreted (depends on the implementation, but even the JIT compiled form is interpreted kind of like how hardware interprets machine code)

   if javascript was like java and had compile time syntax errors, that would make it less flexible as a forward compatible language for new apis, as said above; older browsers would not compile code for new browsers even if most of the code could still work

4. The professor believes that, though sometimes misused, JavaScript frameworks are incredibly powerful tools that can help teams work more efficiently and effectively. Given that, why do you believe he is focusing more on vanilla JavaScript for this course? What are the benefits of mastering vanilla JS first? What are the drawbacks of not learning a framework?

   vanilla JS is nice because many frameworks require vanilla JS things, like the `e.currentTarget.value` pattern in React, and this knowledge isn't specific to one framework

   but many companies use a framework so it would be good to be familiar with one

5. Explain, in your own words, how you think this lab relates to your project. How might you be able to use this information in your own project?

   we will use javascript in our project
