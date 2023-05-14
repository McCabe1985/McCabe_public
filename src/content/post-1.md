---
slug: "/supercharge-your-website"
date: "2023-03-04"
category: "Web Development"
title: "How to optimize a website's Core Web Vitals and Page Speed Score"
author: "Patrick"
image: ../blog-assets/blog-images/superchargepostbanner.webp
description: "Learn how to Supercharge your website's performance!"
shortTitle: "Supercharge your website"
---
 <header class="blog-header-container">
        <div class="blog-banner-image-container">
        <img src="../blog-assets/blog-images/superchargepostbanner.webp" alt="A Rocket blasting through space, presumably your website can do this if you optimize it properly"/>
        </div>
        <h1 class="blog-heading">How to optimize a website's Core Web Vitals and Page Speed Score.</h1>
        <section class="blog-metadata-container">
        <div class="author-img-container">
        <img src="../blog-assets/author-images/author-mccabe.webp" class="author-img" alt="Patrick's ugly mug"/>
        </div>
        <div class="blog-metadata-text-container">
            <p to="/" class="author-name">
              Patrick
            </p>
            <p class="post-date">03.04.2023</p>
        </div>
          <p class="category">Category <em>Web Development</em></p>
        </section>
</header>
<section class="blog-intro-section blog-section-bg1">
<h2 class="blog-intro-heading">Supercharging your website.</h2>
<p class="blog-intro-text">As part of my role here at McCabe's, I spend a considerable amount of time honing the techniques that are the foundation of our craft, whether that's conducting research on new technologies or spending time tinkering with established resources. And so it is that just lately I find myself up to my neck in documentation looking to push our page performance even faster.</p>
<p class="blog-intro-text">Page performance is the crux of good user experience and at the end of the day, it is good user experience that matters for a whole host of reasons and it is an area where all-too-many sites are still really lacking, so I am going to spend some time today to discuss how to optimize a website's core web vitals and page speed score.</p>
</section>
<section class="blog-section blog-section-bg2">
<article class="blog-section-text-container">
<h2 class="blog-section-heading">The internet is a giant reservoir of information.</h2>
<p class="blog-section-text">The internet is a giant reservoir of information, and when we interact with it, our internet speed acts a bit like a tap that only allows so much of that information through at once.</P>
<p class="blog-section-text">Every time someone visits your website, they have to turn that tap on to let the information pour out. In our case, that information is everything on our website, from the smallest bit of text to the largest video. All of it adds to the sheer bulk of information trying to fit through that tap all at once, and it's really easy to bloat your website so much that it takes so long to load that users will abandon the page rather than wait. Gone are the 90s when we would patiently wait for the internet to come to us.</P>
</section>
<section class="blog-section blog-section-bg1">
<article class="blog-section-text-container">
<h2 class="blog-section-heading">How to Optimize images for the web.</h2>
<p class="blog-section-text">The biggest culprits by far are images and videos, great big multi-megabyte whales of information that can hold up your page load by several seconds and, as mentioned above, drive your users away. But they are an unavoidable necessity if you want your website to look like more than a rich text document. So what do we do?</P>
<p class="blog-section-text">Well, we have several tools at our disposal to tackle these problems. Firstly, I would suggest using the appropriate media format for the job. File formats like JPEG, PNG, and MP4 can be too cumbersome for web use. Nowadays, we have next-generation file formats such as WebP and WebM that are much more lightweight than older formats and can be 30% or more smaller. This may not sound like a significant difference, but it can translate into substantial improvements in performance.</P>
<p class="blog-section-text">Secondly, asset optimization is crucial. Make sure that the pixel dimensions of the image align with the size at which they are rendered. Although images can be resized with css, doing so can increase loading time and compromise image quality. There are several options available online for this purpose, such as Compressor.io, ShortPixel, and many others that are readily accessible. However, compression can only reduce the size of the image by so much.</P>
<p class="blog-section-text">Use lazy loading to defer the loading of below the fold images until the user scrolls to their location on the page, saving time on initial page load. This is as simple as adding the HTML attribute loading="lazy" to your img tags. Be warned though, as lazy loading images above the fold can cause delays and layout shifts, which can negatively impact Core Web Vitals since they won't begin to load until the rest of the page has loaded.</P>
<p class="blog-section-text">Source sets, or more specifically, the HTML attribute "srcset," is a vital tool to have. With this, you can set different versions of the same image to load corresponding to different screen sizes, using the original image as a fallback. By combining this with WebP files, and lazy loading the bloat that your images will have on your page speed will disappear.</P>
<p class="blog-section-text">SVGs offer a multitude of benefits and are incredibly versatile. While they can be used to create visually stunning background shapes, their real bread and butter use case is replacing PNG images. SVGs are smaller in size and load much faster than PNGs, making them an excellent choice for websites.</P>
<p class="blog-section-text">Despite their many advantages, some developers may feel intimidated by working with SVGs. However, with tools like Inkscape, creating SVGs is easier than you might think. Inkscape is a free software program that can create any SVG you need, ready to import like any other image.</P>
</article>
</section>
<section class="blog-section blog-section-bg2">
<article class="blog-section-text-container">
<h2 class="blog-section-heading">How to Optimize fonts for the web.</h2>
<p class="blog-section-text">Typography is essential from a design perspective. Apart from being visually appealing, typography plays a critical role in a business's branding, and the right choice of fonts can significantly impact a design. Moreover, how we utilize those fonts, such as selecting a different font family or font weight for various portions of the text, can determine how well the visual hierarchy of a website's content functions. which is a critical part of facilitating a users journey through the website</P>
<p class="blog-section-text">The primary issue with fonts is that many developers forget to optimize them beyond basic CSS, assuming they even host the fonts themselves. Instead, they may rely on Google Fonts or similar services, which can lead to slower page load times as the response from the external server is delayed.</P>
<p class="blog-section-text">So, how do we optimize our fonts for the web? Firstly, you should host them on the website. CDNs have their place, but if you want to get your Core Web Vitals in hand, then maximizing your direct control over the elements on the page is the way to go.</P>
<p class="blog-section-text">Secondly, use variable fonts where possible. Variable Font files allow for more compression of data and only contain one typeface. That typeface can then be styled using its corresponding axes, usually weight but often more axes are available. This gives designers an incredibly potent and versatile tool for differentiating and branding typography with a single, lightweight font file.
</P>
<p class="blog-section-text">Thirdly, the WOFF, and WOFF2 file formats were developed by the World Wide Web Consortium to provide a universal font format native to the web that is compatible across all browsers. WOFF2 files contain fonts in a compressed format that makes them smaller and faster than previous generations of fonts. TrueType and OpenType fonts can be easily converted to WOFF2 using sites such as CloudConvert, Aspose.App, or Free Font Converter.</P>
<p class="blog-section-text">
In addition to using variable fonts and WOFF2 files, we should be using the font-display descriptor within our @font-face rules to determine how our fonts are displayed based on whether or not they have been downloaded yet. By setting font-display to swap, we allow a placeholder font to be used until our own font is loaded. This can give your page speed a dramatic boost, especially when using variable fonts and WOFF2 files, resulting in a fast, smooth experience with minimal delays or layout changes due to typography.</P>
</article>
</section>
<section class="blog-section blog-section-bg1">
<article class="blog-section-text-container">
<h2 class="blog-section-heading">Use proper JavaScript, and then defer it.</h2>
<p class="blog-section-text">jQuery had its place in the past, as it was developed to meet specific needs in the mid-2000s and performed well for its time. However, JavaScript has evolved significantly since then, and many of the reasons that made jQuery a go-to tool no longer apply.</P>
<p class="blog-section-text">For example, standardization across browsers is no longer a major issue for JavaScript, as the ECMAScript specification now dictates how JavaScript is implemented across all browsers. This removes one of the biggest arguments in favor of jQuery.</P>
<p class="blog-section-text">Moreover, the reason to stick to pure JavaScript over jQuery is code bloat. Code bloat refers to the unnecessary addition of code to your page, which can slow down page load times. If you're using jQuery, the amount of JavaScript you need to use is likely minimal, so it's better to just write pure JavaScript.
</P>
<p class="blog-section-text">Well written JavaScript is also a lot more readable than jQuery, which in my (not so) humble opinion looks like the keyboard has been possessed and is speaking in tongues. There might be less of it to wade through, but clean, concise JavaScript is easier to work with.
</P>
<p class="blog-section-text">As for your Javascript files, when importing them into your HTML, make sure that as much of your javascript as possible is deferred, literally just write defer inside the script tag. Doing so makes sure that the JavaScript isn't loaded until the after the web page is fully loaded, saving you crucial seconds on your loading time.</P>
</article>
</section>
<section class="blog-section blog-section-bg2">
<article class="blog-section-text-container">
<h2 class="blog-section-heading">Browser Caching.</h2>
<p class="blog-section-text">Browser caching is a technique we can use to great effect by deferring the job of storing and loading website data solely to the user's browser. This can reduce the number of calls the user makes to the web server when they visit the website. Each request and response cycle with the web server takes time, and for resource-intensive websites, this can dramatically impact page loading times.</P>
<p class="blog-section-text">When a user visits a website for the first time, their browser checks its cache to see if it already has the necessary information. It checks whether the information is fresh or stale, and if it is stale, the browser requests that information from the web server. Loading a website from the browser's own cache is much quicker than waiting for the web server to send it over.</P>
<p class="blog-section-text">However, caching should be implemented with consideration, as if resources are updated but the cache hasn't expired yet, users won't receive the updated content. While this isn't a major problem for most websites which don't update frequently, we can also specify which resources we want to cache and which resources we want to request, giving us significant control over how our sites load in the first place
</P>
<p class="blog-section-text">I would like to do a proper discussion on browser caching, as it is a topic that could and probably should be a post all on it's own. However it is competing with everything else for space so if you want to learn more about broswer caching I would recommend starting with <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" class="blog-section-link">Mozilla Developer Network</a>.
</P>
</article>
</section>
<section class="blog-section blog-section-bg1">
<article class="blog-section-text-container">
<h2 class="blog-section-heading">Minify your code.</h2>
<p class="blog-section-text">Lastly, and perhaps least, is the importance of minifying your JavaScript and CSS. Everything within your files is considered data, including whitespace and comments. While this may seem minimal, it can still add to the burden of data that users have to access when visiting your website.</P>
<p class="blog-section-text">Fortunately, minifying your CSS and JavaScript is an easy process. You can do it yourself, or use online options such as toptal.com, cleancss.com, and minifier.org. These services are typically free and can greatly reduce the amount of data being transferred, resulting in faster load times by saving crucial milliseconds.
</P>
<p class="blog-section-text">However, it's important to keep a backup of your original code, just in case a third-party service makes any changes to your code.
</P>
</article>
</section>
<section class="blog-section blog-section-bg2">
<article class="blog-section-text-container">
<h2 class="blog-section-heading">Conclusion</h2>
<p class="blog-section-text">So, that was a bit more long-winded than I intended this post to be. However, optimizing your website and using the various techniques mentioned above to achieve that is critical for providing a better user experience, which is ultimately what your site's Core Web Vitals are trying to measure.</P>
<p class="blog-section-text">From a practical perspective, having a well-optimized website is better received by Google, giving you a competitive edge in SEO against rivals who may not pay as much attention to detail or strive for the best quality. The speed of your website is also measured and ranked, and slower sites run the risk of Google's crawlers timing out before fully crawling and ranking your website. Potentially wasting content that you have invested time and money into, as well as the potential loss of site traffic and revenue if your website is not ranking as well as it should be.
</P>
<p class="blog-section-text">But it's not just about providing value to your clients, though that is of paramount importance. As a craftsman, you should strive for the finest quality possible in your work, your reputation depends on it. Don't be a cowboy developer; do a proper job.
</P>
<p class="blog-section-text">Overall, by implementing the techniques discussed in this post, you can significantly improve your website's speed and performance, resulting in a better user experience, improved search engine rankings, and furthermore you will be giving your clients the top quality product they are paying for. So, take the time to optimize your website properly and see the positive results it brings.
</P>
</article>
</section>


 