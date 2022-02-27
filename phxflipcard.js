<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:dynamicViews='true' b:version='2' class='v2' expr:dir='data:blog.languageDirection' expr:lang='data:blog.locale' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <b:include data='blog' name='all-head-content'/>
    <title><data:blog.pageTitle/></title>
    <meta content='!' name='fragment'/>
    <meta content='dynamic' name='blogger-template'/>
    <meta content='IE=9,chrome=1' http-equiv='X-UA-Compatible'/>
    <meta content='initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width' name='viewport'/>
    <b:skin><![CDATA[/*-----------------------------------------------
Blogger Template Style
Name: Dynamic Views
----------------------------------------------- */

/* Variable definitions
   ====================
   <Variable name="keycolor" description="Main Color" type="color" default="#ffffff"
         variants="#2b256f,#00b2b4,#4ba976,#696f00,#b38f00,#f07300,#d0422c,#f37a86,#7b5341" value="#ffffff"/>

   <Group description="Page">
     <Variable name="page.text.font" description="Font" type="font"
         default="'Helvetica Neue Light', HelveticaNeue-Light, 'Helvetica Neue', Helvetica, Arial, sans-serif" value="&#39;Helvetica Neue Light&#39;, HelveticaNeue-Light, &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif"/>
     <Variable name="page.text.color" description="Text Color" type="color"
         default="#333333" variants="#333333" value="#444444"/>
     <Variable name="body.background.color" description="Background Color" type="color"
         default="#EEEEEE"
         variants="#dfdfea,#d9f4f4,#e4f2eb,#e9ead9,#f4eed9,#fdead9,#f8e3e0,#fdebed,#ebe5e3" value="#666666"/>
   </Group>

   <Variable name="body.background" description="Body Background" type="background"
       color="#EEEEEE" default="$(color) none repeat scroll top left" value="$(color) none repeat scroll top left"/>

   <Group description="Header">
     <Variable name="header.background.color" description="Background Color" type="color"
         default="#F3F3F3" variants="#F3F3F3" value="#666666"/>
   </Group>

   <Group description="Header Bar">
     <Variable name="primary.color" description="Background Color" type="color"
         default="#333333" variants="#2b256f,#00b2b4,#4ba976,#696f00,#b38f00,#f07300,#d0422c,#f37a86,#7b5341" value="#000000"/>
     <Variable name="menu.font" description="Font" type="font"
         default="'Helvetica Neue Light', HelveticaNeue-Light, 'Helvetica Neue', Helvetica, Arial, sans-serif" value="&#39;Helvetica Neue Light&#39;, HelveticaNeue-Light, &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif"/>
     <Variable name="menu.text.color" description="Text Color" type="color"
         default="#FFFFFF" variants="#FFFFFF" value="#ffffff"/>
   </Group>

   <Group description="Links">
     <Variable name="link.font" description="Link Text" type="font"
         default="'Helvetica Neue Light', HelveticaNeue-Light, 'Helvetica Neue', Helvetica, Arial, sans-serif" value="&#39;Helvetica Neue Light&#39;, HelveticaNeue-Light, &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif"/>
     <Variable name="link.color" description="Link Color" type="color"
         default="#009EB8"
         variants="#2b256f,#00b2b4,#4ba976,#696f00,#b38f00,#f07300,#d0422c,#f37a86,#7b5341" value="#009EB8"/>
     <Variable name="link.hover.color" description="Link Hover Color" type="color"
         default="#009EB8"
         variants="#2b256f,#00b2b4,#4ba976,#696f00,#b38f00,#f07300,#d0422c,#f37a86,#7b5341" value="#009EB8"/>
     <Variable name="link.visited.color" description="Link Visited Color" type="color"
         default="#009EB8"
         variants="#2b256f,#00b2b4,#4ba976,#696f00,#b38f00,#f07300,#d0422c,#f37a86,#7b5341" value="#009EB8"/>
   </Group>

   <Group description="Blog Title">
     <Variable name="blog.title.font" description="Font" type="font"
         default="'Helvetica Neue Light', HelveticaNeue-Light, 'Helvetica Neue', Helvetica, Arial, sans-serif" value="&#39;Helvetica Neue Light&#39;, HelveticaNeue-Light, &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif"/>
     <Variable name="blog.title.color" description="Color" type="color"
         default="#555555" variants="#555555" value="#ffffff"/>
   </Group>

   <Group description="Blog Description">
     <Variable name="blog.description.font" description="Font" type="font"
         default="'Helvetica Neue Light', HelveticaNeue-Light, 'Helvetica Neue', Helvetica, Arial, sans-serif" value="&#39;Helvetica Neue Light&#39;, HelveticaNeue-Light, &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif"/>
     <Variable name="blog.description.color" description="Color" type="color"
         default="#555555" variants="#555555" value="#ffffff"/>
   </Group>

   <Group description="Post Title">
     <Variable name="post.title.font" description="Font" type="font"
         default="'Helvetica Neue Light', HelveticaNeue-Light, 'Helvetica Neue', Helvetica, Arial, sans-serif" value="&#39;Helvetica Neue Light&#39;, HelveticaNeue-Light, &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif"/>
     <Variable name="post.title.color" description="Color" type="color"
         default="#333333" variants="#333333" value="#444444"/>
   </Group>

   <Group description="Date Ribbon">
     <Variable name="ribbon.color" description="Color" type="color"
         default="#666666" variants="#2b256f,#00b2b4,#4ba976,#696f00,#b38f00,#f07300,#d0422c,#f37a86,#7b5341" value="#666666"/>
     <Variable name="ribbon.hover.color" description="Hover Color" type="color"
         default="#AD3A2B" variants="#AD3A2B" value="#AD3A2B"/>
   </Group>

   <Variable name="blitzview" description="Initial view type" type="string" default="sidebar" value="flipcard"/>
*/

/* BEGIN CUT */
{
 "font:Text": "$(page.text.font)",
 "color:Text": "$(page.text.color)",
 "image:Background": "$(body.background)",
 "color:Background": "$(body.background.color)",
 "color:Header Background": "$(header.background.color)",
 "color:Primary": "$(primary.color)",
 "color:Menu Text": "$(menu.text.color)",
 "font:Menu": "$(menu.font)",
 "font:Link": "$(link.font)",
 "color:Link": "$(link.color)",
 "color:Link Visited": "$(link.visited.color)",
 "color:Link Hover": "$(link.hover.color)",
 "font:Blog Title": "$(blog.title.font)",
 "color:Blog Title": "$(blog.title.color)",
 "font:Blog Description": "$(blog.description.font)",
 "color:Blog Description": "$(blog.description.color)",
 "font:Post Title": "$(post.title.font)",
 "color:Post Title": "$(post.title.color)",
 "color:Ribbon": "$(ribbon.color)",
 "color:Ribbon Hover": "$(ribbon.hover.color)",
 "view": "$blitzview"
}
/* END CUT */
]]></b:skin>
    <b:template-skin>
      <b:variable default='960px' name='content.width' type='length'/>
      <b:variable default='0' name='main.column.left.width' type='length'/>
      <b:variable default='310px' name='main.column.right.width' type='length'/>
      <b:variable default='46px' name='faviconpanel.height' type='length'/>

      <![CDATA[
      body {
        min-width: $(content.width);
      }

      .column-center-outer {
        margin-top: $(faviconpanel.height);
      }

      .content-outer, .content-fauxcolumn-outer, .region-inner {
        min-width: $(content.width);
        max-width: $(content.width);
        _width: $(content.width);
      }

      .main-inner .columns {
        padding-left: $(main.column.left.width);
        padding-right: $(main.column.right.width);
      }

      .main-inner .fauxcolumn-center-outer {
        left: $(main.column.left.width);
        right: $(main.column.right.width);
        /* IE6 does not respect left and right together */
        _width: expression(this.parentNode.offsetWidth -
            parseInt("$(main.column.left.width)") -
            parseInt("$(main.column.right.width)") + 'px');
      }

      .main-inner .fauxcolumn-left-outer {
        width: $(main.column.left.width);
      }

      .main-inner .fauxcolumn-right-outer {
        width: $(main.column.right.width);
      }

      .main-inner .column-left-outer {
        width: $(main.column.left.width);
        right: 100%;
        margin-left: -$(main.column.left.width);
      }

      .main-inner .column-right-outer {
        width: $(main.column.right.width);
        margin-right: -$(main.column.right.width);
      }

      #layout {
        min-width: 0;
      }

      #layout .content-outer {
        min-width: 0;
        width: 800px;
      }

      #layout .region-inner {
        min-width: 0;
        width: auto;
      }
      ]]>
    </b:template-skin>

    <script src='//www.blogblog.com/dynamicviews/fde3fbc4763c0fab/js/thirdparty/jquery.js' type='text/javascript'/>
	<script src='//www.blogblog.com/dynamicviews/fde3fbc4763c0fab/js/thirdparty/jquery-mousewheel.js' type='text/javascript'/>
	<script src='//www.blogblog.com/dynamicviews/fde3fbc4763c0fab/js/common.js' type='text/javascript'/>
    <b:if cond='data:blog.localeUnderscoreDelimited != &quot;en&quot;'>
      <script expr:src='data:blog.dynamicViewsScriptSrc +           &quot;/js/languages/lang__&quot; + data:blog.localeUnderscoreDelimited + &quot;.js&quot;' type='text/javascript'/>
    </b:if>
    <b:if cond='data:blog.view'>
      <script expr:src='data:blog.dynamicViewsScriptSrc + &quot;/js/&quot; + data:blog.view + &quot;.js&quot;' type='text/javascript'/>
    <b:else/>
     <!-- <b:if cond='data:blog.isMobileRequest'>
        <script expr:src='data:blog.dynamicViewsScriptSrc + &quot;/js/classic.js&quot;' type='text/javascript'/>
      <b:else/> -->
        <b:if cond='data:skin.vars.blitzview'>
           <script type='text/javascript'>


// <![CDATA[
      (function() {
    var f = ".filtered",
        n = ".item",
        p = "filtered",
        r;
    blogger.templates().compile('\x3c!-- Expected scope: Any. Attributes {format, type} --\x3e\n{template:Adsense}\n{block:HasAdsense}\n<div class=\'adsense\' data-host=\'{AdsenseHost}\' data-client=\'{AdsenseClient}\'\n     data-format=\'{format}\' data-type=\'{type}\'></div>\n{/block:HasAdsense}\n{/template:Adsense}\n\x3c!-- Attributes {class, top, bottom, title} --\x3e\n{template:Ribbon}\n{block:Ifurl}\n<a class="ribbon {class} {block:small}small{/block:small}" title="{title}" href="{url}" itemprop="url">\n{/block:Ifurl}\n{block:IfNoturl}\n<abbr class="ribbon {class} {block:small}small{/block:small}" title="{title}">\n{/block:IfNoturl}\n  <div class="top ribbon-piece">{top}</div>\n  <div class="bottom ribbon-piece">{bottom}</div>\n  <div class="tail">\n    <div class="left ribbon-piece"></div>\n    <div class="right ribbon-piece"></div>\n  </div>\n{block:Ifurl}\n</a>\n{/block:Ifurl}\n{block:IfNoturl}\n</abbr>\n{/block:IfNoturl}\n{/template:Ribbon}\n\n\x3c!-- Attributes {class, empty, value} --\x3e\n{template:Bubble}\n<span class="bubble {block:empty}empty{/block:empty} {class}" title="{title}">\n  <span class="bubble-content">{value}</span>\n  <span class="bubble-tail"></span>\n</span>\n{/template:Bubble}\n\n\x3c!-- Placeholder template for common (hidden) includes across views. --\x3e\n{template:MiscHidden}\n{block:browser:chrome}\n<div id="chromefix">\n\x3c!-- Fix Chrome 12+ bug with GPU accelerated composition causing\nflickering/performance issues. Note: put this last, else text glitches. --\x3e\n</div>\n{/block:browser:chrome}\n{/template:MiscHidden}\n\n{template:Loading}\n<div id="loading">\n  <span>{lang:Loading}</span>\n</div>\n{/template:Loading}\n\n{template:Menu}\n<div class="menu">\n  <span class="menu-heading">{Title}<span class="indicator"></span></span>\n  <ul>\n    {block:Items}\n    <li class="{Label}"><span class="menu-background"></span><a class="menu-item" href="{URL}" target="_self">{Label}</a></li>\n    {/block:Items}\n  </ul>\n</div>\n{/template:Menu}\n\n{template:QuickSearch}\n<div class="quick-search">\n  <ul class="results">\n  {block:Posts}\n    <li class="result" data-identifier="{PostID}">\n      {block:PhotoURL}\n      <img class=\'thumbnail\' src=\'{PhotoURL size="48" square="true"}\' style=\'width: 48px; height: 48px;\'/>\n      {/block:PhotoURL}\n      <span class="date" title="{TimeAgo}">{DayOfMonth}{DayOfMonthSuffix} {ShortMonth}, {Year}</span>\n      <span class="title" title="{Title}">{HTMLEscapedTitle}</span>\n      <div class="snippet">{Snippet term="{HTMLEscapedSearchQuery}" class="term" before="50" after="300" length="300"}</div>\n    </li>\n  {/block:Posts}\n  {block:HasPosts}\n  <li class="server">\n    <span class="message">{lang:Show all SearchResultCount}</span>\n  </li>\n  {/block:HasPosts}\n  {block:IfNotPosts}\n  <li class="server">\n    <span class="message">{lang:No results for SearchQuery2}</span>\n  </li>\n  {/block:IfNotPosts}\n  </ul>\n</div>\n{/template:QuickSearch}\n\n{template:Message}\n<div id="message"><span>{text}</span></div>\n{/template:Message}\n\n{template:EmptyMessage}\n{block:IfNotPostCount}{Message text="{lang:No posts found}"}{/block:IfNotPostCount}\n{/template:EmptyMessage}\n\n{template:AttributionContainer}\n<div id="attribution-container"></div>\n{/template:AttributionContainer}\n\x3c!-- Expected scope: Post --\x3e\n{template:Comments}\n<div class="comments" data-defer="{defer}">\n  <div class="comments-header toggle-switch">\n    {Bubble class="comments-count {class}" value="{CommentCount}" title="{CommentCountWithLabel}"}\n    <h3>\n    {block:CommentCount}{lang:View comments}{/block:CommentCount}\n    {block:IfNotCommentCount}{lang:Add a comment}{/block:IfNotCommentCount}\n    </h3>\n  </div>\n  {BloggerComments}\n</div>\n{/template:Comments}\n\n{template:GComments}\n<div class="comments" data-defer="{defer}">\n  <div class="comments-header toggle-switch">\n    {PlusCommentsCountBubble class="comments-count {class}" value="{CommentCount}" title="{CommentCountWithLabel}"}\n    <h3>\n    {lang:View comments}\n    </h3>\n  </div>\n  {PlusComments}\n</div>\n{/template:GComments}\n\n{template:PlusCommentsCountBubble}\n<span class="bubble {block:empty}empty{/block:empty} {class}" title="{title}" style="display: none;">\n  <span class="bubble-content plus-comment-count" data-itemid="{PostID}">{value}</span>\n  <span class="bubble-tail"></span>\n</span>\n{/template:PlusCommentsCountBubble}\n\n\x3c!-- Comments/Notes: interchangeable --\x3e\n{template:Notes}\n{Comments}\n{/template:Notes}\n\n\x3c!-- Expected scope: Post --\x3e\n{template:BloggerComments}\n<div class="comments-wrapper blogger-comments toggle-container" data-itemid="{PostID}">\n  <div class="comments-content"></div>\n  <div class="comments-footer">\n    <iframe frameborder="0" class="comments-replybox"\n        data-src="{BloggerBase}/comment-iframe.g?blogID={BlogID}&amp;postID={PostID}"></iframe>\n  </div>\n</div>\n{/template:BloggerComments}\n\n\x3c!-- Expected scope: Post --\x3e\n{template:PlusComments}\n<div class="comments-wrapper plus-comments toggle-container" data-itemid="{PostID}">\n  <div class="comment-styler">\n    <div class="cmt_iframe_holder" id="comment-holder_{PostID}"\n        data-href="{CanonicalUrl}" data-viewtype="{CommentModerationMode}"></div>\n  </div>\n</div>\n{/template:PlusComments}\n\n{template:CommentBubble}\n{block:IfNotIframeComments}\n  {block:Post.CommentCount}\n    {Bubble class="comments-count {class}" value="{Post.CommentCount}" title="{Post.CommentCountWithLabel}"}\n  {/block:Post.CommentCount}\n{/block:IfNotIframeComments}\n{block:IfIframeComments}\n  {PlusCommentsCountBubble class="comments-count {class}" value="{Post.CommentCount}" title="{Post.CommentCountWithLabel}"}\n{/block:IfIframeComments}\n{/template:CommentBubble}\n{template:GadgetDock}\n{block:Gadgets}\n<div id="gadget-dock" class="gadget-notifying"></div>\n{/block:Gadgets}\n{/template:GadgetDock}\n\n\x3c!-- Attributes {id} --\x3e\n{template:GadgetDockItem}\n<div class="gadget-item" data-gadget-id="{id}">\n</div>\n{/template:GadgetDockItem}\n\n\x3c!-- Attributes {title, icon, icon-selected} --\x3e\n{template:GadgetDockItemContents}\n  <div class="gadget-menu">\n    <div class="gadget-icons">\n      <img class="gadget-icon" src="{icon}" />\n      <img class="gadget-icon-selected" src="{icon-selected}" />\n    </div>\n    <span class="gadget-title">{title}</span>\n  </div>\n  <div class="gadget-container">\n    <div class="gadget">\n      <span class="gadget-title">{title}</span>\n      <div class="gadget-content"></div>\n    </div>\n  </div>\n{/template:GadgetDockItemContents}\n\n{template:GadgetDockResizeDetector}\n<iframe class="gadget-resize-detector"></iframe>\n{/template:GadgetDockResizeDetector}\n\x3c!-- Expected scope: Blog --\x3e\n{template:Header}\n<div id="header-container">\n  <div id="header" class="header">\n    <div class="header-bar">\n      {block:BlogID}{BlogHeader}{/block:BlogID}\n      {block:PlusID}{block:IfNotBlogID}{PlusHeader}{/block:IfNotBlogID}{/block:PlusID}\n    </div>\n    <div class="header-drawer sticky open">\n      {block:HasViews}\n      <div id="views" class="{block:HasPages}menu{block:HasPages}{block:IfNotPages}tabs{block:IfNotPages}">\n        <span class="menu-heading">{CurrentView}<span class="indicator"></span></span>\n        <ul>\n          {block:Views}\n          <li class="{Label}"><span class="menu-background"></span><a class="menu-item{block:Current} current{/block:Current}" href="{URL}" target="_self" data-view-name="{Name}">{LocalizedLabel}</a></li>\n          {/block:Views}\n        </ul>\n      </div>\n      {/block:HasViews}\n      {block:HasPages}\n      <div id="pages" class="menu">\n        <span class="menu-heading">Pages<span class="indicator"></span></span>\n        <ul>\n          {block:Pages}\n          <li><span class="menu-background"></span><a class="menu-item" data-item-type="page" data-id="{ID}" href="{URL}">{Label}</a></li>\n          {/block:Pages}\n        </ul>\n      </div>\n      {/block:HasPages}\n  <div class="blog-admin admin-controls">\n        <a class="new-post" href="{BloggerBase}/post-edit.g?blogID={BlogID}&from=pencil" target="_self" title="{lang:New post}"></a>\n        <a class="dashboard" href="https://www.blogger.com/home" target="_self" title="{lang:Dashboard}"></a>\n      </div>\n    </div>\n  </div>\n</div>\n \n{/template:Header}\n\n{template:BlogHeader}\n<span class="title" onclick="$(\'html,body\').stop().animate({\'scrollTop\': 0})">\n  <a href="/" target="_self"><h1 title={JSTitle}>{Title}</h1></a>\n  {block:HasDescription}<h3 title={JSDescription}>{Description}</h3>{/block:HasDescription}\n</span>\n<input type="text" id="search" autocomplete="off" placeholder="{lang:Search}">\n{/template:BlogHeader}\n\n{template:PlusHeader}\n<span class="title" onclick="$(\'html,body\').stop().animate({\'scrollTop\': 0})">\n  <a href="{AuthorURL}" target="_self"><h1 title={JSTitle}>{Title}</h1></a>\n  <div id="follow-author">\n    {PlusBadge id="{PlusID}"}\n  </div>\n</span>\n{/template:PlusHeader}\n{template:Overview}\n<div id="overview">\n  <div class="overview-backdrop"></div>\n</div>\n{/template:Overview}\n\n{template:OverviewItem}\n<div class="overview-panel">\n  <div class="overview-wrap">\n    <div class="overview-inner">\n      <div class="overview-header">\n        <div class="overview-controls-left">\n          <a class="kd-button small left previous {block:IfNotPreviousPost}disabled{/block:IfNotPreviousPost}" title="{lang:Newer}" href="{PreviousPost}"><img width="21" height="21" src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAYUlEQVQ4y2P4//8/A7Uxw6ihuCWxAFZ2DgMgfgCiqWIo1MAPQPwfZDDFhqIZ+IFil2IzECROtqG4DCTbUHwGUmLoA6iBIJyAHnGDx6U0CVOaxT7N0inNchTV8v5oIU0WBgCihhmGBdyx8gAAAABJRU5ErkJggg==\'/>\n          </a>\n          <a class="kd-button small right next {block:IfNotNextPost}disabled{/block:IfNotNextPost}" title="{lang:Older}" href="{NextPost}"><img width="21" height="21" src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAYUlEQVQ4jWP4//8/A7Ux1Q0cRoaysnMYAPEDEM2ABZBrKMjA/0D8AZvBlLj0Ay6DyTIUBPAZTLah+AymyFBcBlNsKNTgBKihIPxg8LmU6mFK9dinSTqlZY6ibt4nF49wQwEZ7RmGkO+jqQAAAABJRU5ErkJggg==\'/>\n          </a>\n        </div>\n        {Sharing url=\'{Permalink}\' httpUrl=\'{HttpPermalink}\' text=\'{Title}\' delay=\'1000\' width="90" disable-twitter="true" disable-facebook="true"}\n        <div class="overview-controls-right">\n          <a class="kd-button small close" title="{lang:Close}" href="/">\n            {OverviewCloseImage}\n          </a>\n        </div>\n      </div>\n      <div class="overview-content" tabindex="0">\n      {Post disable-sharing="false"}\n      </div>\n    </div>\n  </div>\n</div>\n{/template:OverviewItem}\n\n{template:ViewItem}\n<div class="viewitem-panel {block:Placeholder}placeholder{/block:Placeholder}">\n  <div class="viewitem-wrap">\n    <div class="viewitem-background"></div>\n    <div class="viewitem-header"></div>\n    <div class="viewitem-inner">\n      {block:Placeholder}\n      <span class="blogger-gear"></span>\n      {/block:Placeholder}\n      {block:IfNotPlaceholder}\n      <div class="viewitem-content" tabindex="0">\n      {block:Post}{Post}{/block:Post}\n      {block:Page}{Page}{/block:Page}\n      </div>\n      {block:IfNotPlaceholder}\n    </div>\n  </div>\n</div>\n{/template:ViewItem}\n\n{template:Lightbox}\n<div id="lightbox">\n  <div class="lightbox-backdrop"></div>\n  {LightboxItem}\n</div>\n{/template:Lightbox}\n\n{template:LightboxItem}\n<div class="lightbox-panel">\n  <div class="lightbox-wrap">\n    <div class="lightbox-inner">\n      <div class="lightbox-header">\n        <h2 class="lightbox-title" title="{title}">{title}</h2>\n        <div class="lightbox-controls-right">\n          <a class="kd-button small close" title="{lang:Close}" href="/">\n            {OverviewCloseImage}\n          </a>\n        </div>\n      </div>\n      <div class="lightbox-content" tabindex="0">\n        <div class="lightbox-contentwrap"></div>\n      </div>\n    </div>\n  </div>\n</div>\n{/template:LightboxItem}\n\n{template:OverviewCloseImage}\n<img width="21" height="21" src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAK9JREFUeNpjYBgFQxpoAPFqIObBIicBxOuhNFbAjEN8NxA7AbEd1PBfSAbuB2IbIFYB4pWkGHoQiEOAWAvJYCGogSBf3ADiUCD+gk0zI4Eg2A913REgFkEy0BGIX5DqfRB4A8RbkVwsQoyBIMBEIMI+QDGyRV8IxTI+l0qgheEftDD+Raqh6AY6QmM6hBiDcRkKMlAPLQzRw1gNajDRAJQOT+NI4CDXn4fSo2AUoAEAj24p6G8syswAAAAASUVORK5CYII=\'/>\n{/template:OverviewCloseImage}\n\x3c!-- Expected scope: Post --\x3e\n{template:Post}\n  {block:Blogger}{BloggerPost}{/block:Blogger}\n  {block:IfNotBlogger}{GenericPost}{/block:IfNotBlogger}\n{/template:Post}\n\n{template:BloggerPost}\n<div class="article hentry {TagsAsClasses} {block:HasAdsense}has-ads{/block:HasAdsense}" itemscope itemtype="http://schema.org/BlogPosting">\n  {PostMetaData}\n  {block:HasAdsense}\n  <div class="adsense-aside">\n    {Adsense format="vertical"}\n  </div>\n  {/block:HasAdsense}\n  <div class="article-header">{PostHeader}</div>\n  <div class="article-content entry-content" itemprop="articleBody">{Body}</div>\n  <div class="article-footer">\n    {PublishInfo}\n    {GeoLocationInfo}\n    {block:HasTags}\n    <div class="labels" itemprop="keywords">\n      {lang:Labels}: {block:Tags}<a class="label" href="{TagURL}" target="_self">{Tag}</a> {/block:Tags}\n    </div>\n    {/block:HasTags}\n    {block:IfNotdisable-sharing}\n    {Sharing url=\'{Permalink}\' httpUrl=\'{HttpPermalink}\' text=\'{HTMLEscapedTitle}\' width="90" defer="{defer-sharing}" delay=\'1000\'}\n    {/block:IfNotdisable-sharing}\n  </div>\n\n  {block:HasAdsense}\n  <div class="adsense-footer">\n    {Adsense format="horizontal"}\n  </div>\n  {/block:HasAdsense}\n\n  {block:IfNotdisable-comments}\n  {block:HasComments}\n    {block:IfNotIframeComments}\n    {Comments defer="{defer-comments}"}\n    {/block:IfNotIframeComments}\n    {block:IfIframeComments}\n    {GComments defer="{defer-comments}"}\n    {/block:IfIframeComments}\n  {/block:HasComments}\n  {/block:IfNotdisable-comments}\n</div>\n{/template:BloggerPost}\n\n{template:PublishInfo}\n<div class="publish-info">\n  {block:PostAuthorURL}\n    {lang:Posted TimeAgo by PostAuthorName 2}\n  {block:PostAuthorURL}\n  {block:IfNotPostAuthorURL}\n    {lang:Posted TimeAgo by PostAuthorName}\n  {/block:IfNotPostAuthorURL}\n</div>\n{/template:PublishInfo}\n\n{template:PostMetaData}\n  {block:PhotoURL}\n    <meta itemprop="image_url" content="{PhotoURL}"/>\n    <meta itemprop="thumbnailUrl" content="{PhotoURL}"/>\n  {/block:PhotoURL}\n  <meta itemprop="blogId" content="{BlogID}"/>\n  <meta itemprop="postId" content="{PostID}"/>\n{/template:PostMetaData}\n\n{template:GeoLocationInfo}\n{block:HasGeoLocationName}\n<div class="geolocation-info">\n  {lang:Location GeoLocationName}\n</div>\n{/block:HasGeoLocationName}\n{/template:GeoLocationInfo}\n\n{template:GeoLocationURL}\nhttps://maps.google.com/maps?q={URLEncodedGeoLocationName}@{GeoLocationLatitude},{GeoLocationLongitude}&z=10\n{/template:GeoLocationURL}\n\n{template:PostHeader}\n{Ribbon class="date" top="{ShortMonth}" bottom="{DayOfMonth}" title="{TimeAgo}" url="{Permalink}"}\n<h1 class="title entry-title" itemprop="name">\n  {block:RelatedURL}\n  <a href="{RelatedURL}">{ReblogBadge}{HTMLEscapedTitle}</a>\n  {/block:RelatedURL}\n  {block:IfNotRelatedURL}\n  <a href="{Permalink}" rel="bookmark" itemprop="url" data-item-type="post" data-id="{PostID}">{ReblogBadge}{HTMLEscapedTitle}</a>\n  {/block:IfNotRelatedURL}\n  {PostAdmin}\n</h1>\n{/template:PostHeader}\n\n\x3c!-- Expected scope: Page --\x3e\n{template:Page}\n<div class="article hentry {TagsAsClasses}" itemscope itemtype="http://schema.org/BlogPosting">\n  <div class="article-header">\n    <h1 class="title entry-title">\n      <a href="{Permalink}" rel="bookmark" itemprop="url" data-item-type="page" data-id="{PageID}">{HTMLEscapedTitle}</a>\n      <span class="blog-admin"><a class="edit" href="{BloggerBase}/page-edit.g?blogID={BlogID}&pageID={PageID}&from=pencil" target="_self" title="Edit"></a></span>\n    </h1>\n  </div>\n  <div class="article-content entry-content" itemprop="articleBody">{Body}</div>\n  <div class="article-footer"></div>\n</div>\n{/template:Page}\n\n{template:PostAdmin}\n{block:Blogger}\n<span class="blog-admin"><a class="edit" href="{BloggerBase}/post-edit.g?blogID={BlogID}&postID={PostID}&from=pencil" target="_self" title="Edit"></a></span>\n{/block:Blogger}\n{/template:PostAdmin}\n\n{template:GenericPost}\n<div class="article hentry" itemscope itemtype="http://schema.org/BlogPosting">\n  <div class="article-header">{PostHeader}</div>\n  <div class="article-content entry-content" itemprop="articleBody">\n    {Body}\n    {block:Attachments}\n      {block:Photo}\n        <img src="{PhotoURL-HighRes}" width="{PhotoWidth}" height="{PhotoHeight}" alt="{Caption}" style="display: block;"/>\n      {/block:Photo}\n      {block:Video}{Video}{/block:Video}\n      {block:Article}\n      <div>\n        <h4>\n          <a href="{URL}" title="{Caption}">{Caption}</a>\n        </h4>\n        {block:HasContent}\n          <p>{Content}</p>\n        {/block:HasContent}\n      </div>\n      {/block:Article}\n    {/block:Attachments}\n  </div>\n  <div class="article-footer">\n    {PublishInfo}\n    {GeoLocationInfo}\n    {SharePlusOne url="{Permalink}" text="{HTMLEscapedTitle}"}\n  </div>\n  {block:HasComments}\n    {Comments defer="true"}\n  {/block:HasComments}\n</div>\n{/template:GenericPost}\n\n{template:ReblogBadge}\n{block:Flickr}\n<span class="reblog-badge">\n<img src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABV0RVh0Q3JlYXRpb24gVGltZQA2LzI0LzA59sFr4wAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAG9SURBVDiNlZK9ahtBFIXPDOP9wzvKSsRNcHCCA8EpQtwtfgEX9iMImbR5gDxJKhfCpHSrJg9g0ikEEdwoEagTSLt4QLE8O/dOCuEVKgLe2x7Ouee7M2I8Hre99wNmztFgpJTfhRBnylo7yLIsz7IMQognmb33KMsyL8tyoKy1eRzHqKqqSQHEcYzZbJYr5xyEEGDmRgFCCDjnoKqqAhE1Mj9OVVXrgKbbtwKcc2Bm3Pz8g96XIcxfB50oXH06xsn71wCA6c0vTHpfweYBUod4ddXFy5N3cM5BPgb0Lscw4QHQfgMTHuDi8jeYGcyMoneNQ5PiLZ7j0KQoLq7BzJsbMDNM8AIQsq535+Mabd/EkNg88f6dAjNvI2idwtxvbtGKZR2Q6BQwD7UmWmHdQBIRmBn97h50ugvsJNDpLvrdvRoh6J8j0gkiKEQ6wU7/HMwMIoKy1oKIcPRshdvPLUi53myMAVEEAFgeJdC3H7e0iAjW2g1CEARYrVZ1zSAIaoT/ac45KCLCfD5Hu91u9AeKolgjeO+Hk8nkmIjQ6XSeZF4sFphOp/DeD5VS6nS5XH4bjUYfmjRQSv0Iw/D0HxnKDX6sx/D3AAAAAElFTkSuQmCC\'/>\n</span>\n{/block:Flickr}\n{block:Plus}\n<span class="reblog-badge">\n<img src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB1klEQVQoU2O4621JEmK442Vxw9P8Jm501skQiM45GQLVAFUy3PKwu1M/6ePxk9/e/f0PBx+uvKr0vuZuBkSnHQyAwmccDYHsq25mDK8uvfm+qeSGh8nlwMCnex4B5X4dar7uZnIZhk466AMFTznqA0UuuZow/P9//qGf0SUXo4tA5BH77iVQ9vPrEssT9npwBBSCs4EaDtx2NTjnBEW3lt0HSn9dFHnK0xLIwARADU8eJeidttc7ZQdC51p2gayYGXzEWhuOgCIwtg7D/7//v63POmGjcwyMLsy48P/XpbvBUC5Q5JCVFlADkASyj9poM3z9BuR+eruo6Gyw69nKCZ/e3HtWbXvQShOO9llqAFXstdA4YKkJRAwnguNuzlvyYtfez++A4t9f1NvtNVPfg4R2mapBEESQ4bC5+g4T1R0mwU/e/P/3/8OjAhMwFydiOGCiutVQeYuh7tmNL/7//P//x90HpU5gEeyI4Xzb1Ef7DzzbuOzBmmWPTz74BwrI9y+7QrfoK25ERRvAXIave3sOuamv05VfD0Jah7q3fv8F0nM3WQcsgkAQNQwnTORXacsio82Fa38AA25xOJo4hMuwT1durbbMGhQU+fDr/zddjqiCUDUAmzuTnmNga6gAAAAASUVORK5CYII=\'/>\n</span>\n{/block:Plus}\n{block:YouTube}\n<span class="reblog-badge">\n<img src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVQ4EcVTPUsDQRB9u7eJF0KEBATBIBoRUdQmhfgDrMRG1NIfYSHWIkRREPEDBX+HCUSbKKm0EhTBKrUkRcLlvNxmnY0h7JGYJoUDc8y+efNmZu+OKaUwiPFBinUtKyYRYfXoLVOYofMCeVgn+tgr5TwovC2Va9vsKR7NELDXp6Bf6pBLplZ8kjNdhkOYurhGKJUK4CZHx7qWewrjDephurRtJDa2sHhfQHx9M5AzebpWCyTIYXq9CbiuC49zTJ6eY+LkDP6QHeC0+QnhAVb3kgqO43Tg2OoaklLic3eng7UDSzR6fAeqGRSolEooXF0i2YOrJ5CkFphC0QXpFbS957J4zBxg1qOVGGthxkMK2qVMwIgBQvlNONUqHo6P8JW9w7zg1IG17sDkUVxmN8ORZwrSZkKPVPR8TAsLo7yrq0l9Eb5SeRIPCGjGcvh3K/2+/zSFvPiuuvtWzB4j0lyb2CVmCHxQXGudGXIVqmX//jf+AF6oryUyXsGzAAAAAElFTkSuQmCC\'/>\n</span>\n{/block:YouTube}\n{/template:ReblogBadge}\n\x3c!-- Expected scope: Any. Attributes {defer} --\x3e\n\x3c!-- TODO: revisit the disable logic --\x3e\n{template:Sharing}\n<div class="share-controls {block:defer}defer{/block:defer} {block:delay}delay{/block:delay}" data-defer="{defer}" data-delay="{delay}">\n{block:IfNotdisable-plusone}{SharePlusOne}{/block:IfNotdisable-plusone}\n{block:IfNotdisable-twitter}{ShareTwitter}{/block:IfNotdisable-twitter}\n{block:IfNotdisable-facebook}{ShareFacebook}{/block:IfNotdisable-facebook}\n</div>\n{/template:Sharing}\n\n{template:ShareTwitter}\n<span data-href="http://twitter.com/share" class="share-twitter twitter-share-button {block:defer}defer{/block:defer}" data-url="{url}" data-count="{count}" data-size="{size}" data-text={JSPlaintexttext}></span>\n{/template:ShareTwitter}\n\n{template:ShareFacebook}\n<span class="share-facebook {block:defer}defer{/block:defer}" data-url="{httpUrl}" data-count="{count}" data-layout="{layout}" data-text={JSPlaintexttext}></span>\n{/template:ShareFacebook}\n\n\x3c!-- +widgets are sensitive to newlines following the widget element so we make sure\nthe widget is wrapped in a parent element without CRs --\x3e\n\n{template:SharePlusOne whitespace="trim"}\n  <span class="share-plusone g-plusone {block:defer}defer{/block:defer}"\n      data-href="{httpUrl}"\n      data-hl="{Locale}"\n      data-size="{size}"\n      data-source="blogger:blog:plusone"\n      data-annotation="{annotation}"\n      data-width="{width}"\n      data-text={JSPlaintexttext}></span>\n{/template:SharePlusOne}\n\n\x3c!-- Attributes can include badgeType, profileUrl, width, height, theme, layout,\nshowCoverPhoto, showTagline --\x3e\n{template:PlusBadge whitespace="trim"}\n  <div class="plus-badge g-{badgeType}"\n      data-href="{profileUrl}"\n      data-width="{width}"\n      data-height="{height}"\n      data-source="blogger:blog:badge"\n      data-theme="{theme}"\n      data-layout="{layout}"\n      data-showcoverphoto="{showCoverPhoto}"\n      data-showtagline="{showTagline}"\n      data-rel="author"></div>\n{/template:PlusBadge}\n\n{template:PlusFollowers whitespace="trim"}\n  <div class="plus-followers g-plus"\n      data-action="followers"\n      data-href="{profileUrl}"\n      data-width="{width}"\n      data-height="{height}"\n      data-theme="{theme}"\n      data-source="blogger:blog:followers"></div>\n{/template:PlusFollowers}\n{template:Welcome}\n<style>\n  {LoadingCSS}\n\n  body {\n    background-color: #eee;\n  }\n  div {\n    height: 100px;\n    left: 50%;\n    margin-left: -50px;\n    margin-top: -50px;\n    text-align: center;\n    top: 50%;\n    width: 100px;\n    position: fixed;\n  }\n\n  .blogger-gear {\n    margin: 2px auto;\n  }\n\n  {text:Custom CSS}\n</style>\n<div>\n  <span class="blogger-gear"></span>\n</div>\n{/template:Welcome}\n\n{template:ErrorMessage}\n<style>\n  {CoreCSS}\n\n  #main {\n    background-color: #eee;\n    color: #e4e4e4;\n    font-size: 18px;\n    height: 100%;\n    left: 0;\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  #main .fourOhFour {\n    color: #e0e0e0;\n  }\n\n  #message {\n    background-color: white;\n    {css-box-shadow value="inset 0px 0px 10px rgba(0, 0, 0, 0.6)"}\n    color: #cb4534;\n    font-size: 20px;\n    left: 50%;\n    margin-left: -200px;\n    margin-top: -50px;\n    overflow: hidden;\n    padding: 15px;\n    text-align: center;\n    text-shadow: 0px 1px 3px #999;\n    top: 50%;\n    width: 400px;\n    position: absolute;\n    {css-transform value="rotateZ(3deg)"}\n    {css-crossbrowser property="transform-style" value="preserve-3d"}\n  }\n\n  a, a:hover, a:visited {\n    color: #4d90fe;\n    text-decoration: none;\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n</style>\n<div id="main">\n  <div id="message">\n    <span>{Value}</span>\n    <a id="home" href="{BlogURL}" target="_self" title="{lang:Home}">{lang:Home}</a>\n  </div>\n</div>\n{MiscHidden}\n<script>\n  // Persist some blitz parameters of the current url when navigating home.\n  $(\'#home\').click(function() {\n    var url = blogger.tools.path.decode($(this).attr(\'href\'));\n    var currentUrl = blogger.tools.path.decode();\n    for (var prop in currentUrl.params) {\n      if (!url.params[prop]) {\n        url.params[prop] = currentUrl.params[prop];\n      }\n    }\n    window.location.href = url.encode();\n    return false;\n  });\n\n  // Let\'s make the 404 look more interesting.\n  var fragment = document.createDocumentFragment();\n  var parts = \'110010100\'; // 404 in binary.\n  var length = parts.length;\n  var position = 0;\n  var current = [];\n  for (var i = 0; i < 55555; i++) { // Make it long enough to fill the screen.\n    if (position == length) {\n      if (Math.random() > 0.6) { // Only add explicit 404 occasionally.\n        current.push(\' \');\n        fragment.appendChild(document.createTextNode(current.join(\'\')));\n        current = [\' \'];\n        var fourOhFour = document.createElement(\'span\');\n        fourOhFour.innerText = \'404\';\n        fourOhFour.className = \'fourOhFour\';\n        fragment.appendChild(fourOhFour);\n      }\n      position = 0;\n    } else {\n      if (Math.random() > 0.6) { // Randomly add spaces to make uneven.\n        current.push(parts[position++]);\n      } else {\n        current.push(\' \');\n      }\n    }\n  }\n  document.getElementById(\'main\').appendChild(fragment);\n\x3c/script>\n{/template:ErrorMessage}\n');
    blogger.templates().compile('{template:BasicCSS}\n{CoreCSS}\n{ButtonCSS}\n{RibbonCSS}\n{BubbleCSS}\n{LoadingCSS}\n{MessageCSS}\n{SearchCSS}\n{PrintCSS}\n{AttributionContainerCSS}\n{/template:BasicCSS}\n\n{template:CoreCSS}\n\n/* Begin: reset styles */\n\nbody,div,ul,ol,li,input,textarea,p,abbr {\n  margin:0;\n  outline: none;\n  padding:0;\n}\nol,ul {\n  list-style:none;\n}\nh1,h2,h3,h4,h5,h6 {\n  font-size: 100%;\n  font-weight: normal;\n  margin: 0;\n  padding: 0;\n}\nimg {\n  border: none;\n}\n\n/* End: reset */\n\n#chromefix {\n  -webkit-transform: perspective(1); /* Chrome 12/13/14 flicker fix. */\n}\n\nbody {\n  background-color: {color:Background};\n  {block:image:Background}\n  background-image: url({image:Background});\n  background-position: left top;\n  background-repeat: no-repeat;\n  {/block:image:Background}\n  {block:text:BodyBackgroundCSS}\n  background: {text:BodyBackgroundCSS}; /* Override everything. */\n  background-color: {color:Background};\n  {/block:text:BodyBackgroundCSS}\n}\n\nbody, input, textarea {\n  font-family: {font:Text};\n  font-size: 14px;\n}\n\na,\na:focus {\n  color: {color:Link};\n  font-family: {font:Link};\n  outline: none;\n  text-decoration: none;\n  {css-transition value="color .3s"}\n}\n\na:visited {\n  color: {color:Link Visited};\n}\n\na:hover {\n  color: {color:Link Hover};\n  text-decoration: underline;\n}\n\nabbr.published {\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\n\n.title {\n  color: {color:Post Title};\n  font-family: {font:Post Title};\n  font-size: 14px;\n}\n\n.title a {\n  color: {color:Post Title};\n  font-family: {font:Post Title};\n}\n\n/* Way to prevent any css animations during dom manip. */\n.instant, .instant * {\n  {css-transition value="none !important"}\n  {css-crossbrowser property="animation-iteration-count" value="0 !important"}\n}\n\n.adsense {\n  margin: 0 auto;\n  text-align: center;\n}\n\n/* Admin restricted links - obviously verified on server, but for easy templates. */\n\n.blog-admin,\n.item-control {\n  display: none;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .blog-admin,\n  .item-control {\n    margin-left: 14px;\n  }\n}\n\n#injected-iframe {\n  z-index: 9999 !important;\n}\n\n{/template:CoreCSS}\n\n{template:RibbonCSS}\n\n.ribbon {\n  color: #eee;\n  cursor: default;\n  display: inline-block;\n  text-align: center;\n  width: 35px;\n}\na.ribbon {\n  color: #eee;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.ribbon .ribbon-piece {\n  background-color: {color:Ribbon};\n  {css-box-shadow value="0 0 5px rgba(0, 0, 0, 0.2)"}\n  {css-transition value="background-color 0.5s ease-in"}\n}\n\n/* On hover color change. */\na.ribbon:hover .ribbon-piece {\n  background-color: {color:Ribbon Hover};\n  color: #eee;\n}\n\n.ribbon .top {\n  border-bottom: solid 1px rgba(255, 255, 255, 0.6);\n  {css-border-radius value="1px 1px 0px 0px"}\n  font-size: 11px;\n  padding: 4px 0;\n  position: relative;\n  text-transform: uppercase;\n}\n\n.ribbon .bottom {\n  font-size: 17px;\n  padding: 5px 0;\n}\n\n.ribbon .tail {\n  height: 10px;\n  overflow: hidden;\n  position: relative;\n}\n\n.ribbon .tail .left,\n.ribbon .tail .right {\n  height: 10px;\n  position: absolute;\n  top: -10px;\n  width: 50px;\n}\n\n.ribbon .tail .left{\n  left: -9px;\n  {css-transform value="rotate(-25deg)"}\n}\n\n.ribbon .tail .right{\n  right: -9px;\n  {css-transform value="rotate(25deg)"}\n}\n\n/* Do this with a transform? */\n.ribbon.small {\n  width: 25px;\n}\n.ribbon.small .top {\n  font-size: 9px;\n  padding: 2px 0;\n}\n.ribbon.small .bottom {\n  font-size: 12px;\n  padding: 3px 0;\n}\n.ribbon.small .tail {\n  height: 6px;\n}\n.ribbon.small .tail .left,\n.ribbon.small .tail .right {\n  height: 6px;\n  top: -7px;\n  width: 40px;\n}\n.ribbon.small .tail .left {\n  left: -6px;\n}\n.ribbon.small .tail .right {\n  right: -6px;\n}\n\n{/template:RibbonCSS}\n\n{template:BubbleCSS}\n\n.bubble {\n  background-color: {color:Bubble};\n  background-position: center center;\n  border-radius: 3px;\n  border: solid 1px {color:Bubble};\n  color: white;\n  cursor: default;\n  display: inline-block;\n  font-size: 12px;\n  padding: 2px 0;\n  position: relative;\n  text-align: center;\n  {css-transition-property value="background-color, border-color"}\n  {css-transition-duration value="0.5s"}\n  {css-transition-timing-function value="ease-in"}\n  width: 26px;\n}\n\n.bubble.light {\n  background-color: {color:Bubble lighten="45%"};\n  border-color: {color:Bubble lighten="45%"};\n}\n\n.bubble.empty {\n  color: {color:Bubble};\n  border: solid 1px {color:Bubble lighten="20%"};\n  {css-box-shadow value="none"}\n  background-color: white;\n}\n\n.bubble .bubble-tail,\n.bubble.empty .bubble-tail:after {\n  border-color: {color:Bubble} transparent transparent transparent;\n  border-style:solid;\n  border-width: 5px;\n  bottom: -10px;\n  content: \'\';\n  height: 0;\n  left: 50%;\n  margin-left: -5px;\n  position: absolute;\n  {css-transition value="border-color 0.5s ease-in"}\n  width: 0;\n}\n\n.bubble.light .bubble-tail {\n  border-color: {color:Bubble lighten="45%"} transparent transparent transparent;\n}\n\n.bubble.empty .bubble-tail {\n  border-color: {color:Bubble lighten="20%"} transparent transparent transparent;\n}\n\n.bubble.empty .bubble-tail:after {\n  left: 0;\n  top: -6px;\n  border-color: white transparent transparent transparent;\n}\n\n/* On hover color change.\n.bubble:hover {\n  background-color: #d14836;\n  border-color: #d14836;\n}\n\n.bubble.empty:hover {\n  /*background-color: white;\n  border-color: #d14836;\n  color: #d14836;\n}\n\n.bubble:hover .bubble-tail {\n  border-color: #d14836 transparent transparent transparent !important;\n}\n*/\n\n{/template:BubbleCSS}\n\n{template:SharingCSS}\n\n.share-controls {\n  overflow: hidden;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.share-controls span,\n.share-controls iframe {\n  height: 20px !important;\n}\n\n.share-controls .share-plusone,\n.share-controls .share-twitter,\n.share-controls .share-facebook {\n  /* PlusOne tries to reset a lot of settings, don\'t let it. */\n  background-repeat: no-repeat !important;\n  background-position: left center !important;\n  display: inline-block;\n  margin: 0;\n}\n\n.share-controls .share-plusone {\n  height: 20px;\n  /* Don\'t touch anything other than min-width, causes havoc with +1 */\n  min-width: 90px;\n  {css-transition value="min-width 0.3s"}\n}\n.share-controls .share-plusone.defer {\n  min-width: 34px;\n}\n.share-controls .share-plusone.delay {\n  min-width: 90px;\n}\n\n.share-controls .share-twitter {\n  height: 20px;\n  width: 110px;\n  {css-transition value="width 0.3s"}\n}\n.share-controls .share-twitter.defer {\n  width: 57px;\n}\n.share-controls .share-twitter.delay {\n  width: 110px;\n}\n\n.share-controls .share-facebook {\n  height: 20px;\n  width: 90px;\n  {css-transition value="width 0.3s"}\n}\n.share-controls .share-facebook.defer {\n  width: 51px;\n}\n.share-controls .share-facebook.delay {\n  width: 90px;\n}\n\n{/template:SharingCSS}\n\n{template:LoadingCSS}\n\nbody.loading #loading {\n  opacity: 0.75;\n  margin-bottom: 0;\n}\n\n#loading {\n  background-color: #000;\n  border-radius: 6px 6px 0px 0px;\n  border: solid 1px #666;\n  border-bottom: none;\n  bottom: 0;\n  box-shadow: 0 0 4px #333;\n  color: white;\n  font-size: 18px;\n  left: 50%;\n  margin-bottom: -50px;\n  margin-left: -60px;\n  opacity: 0;\n  padding: 5px 0px;\n  position: fixed;\n  text-align: center;\n  {css-transition value="opacity 0.5s, margin-bottom 0.5s"}\n  {css-transition-delay value="279ms"}\n  width: 120px;\n  z-index: 999;\n}\n\n#loading span {\n  background-repeat: no-repeat;\n  background-position: right center;\n  background-image: url(data:image/gif;base64,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);\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n  padding-right: 30px;\n}\n\n#loading span:after {\n  content: \'...\';\n}\n\n.blogger-gear {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-image: url(data:image/gif;base64,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);\n  display: inline-block;\n  height: 95px;\n  width: 95px;\n}\n\n{/template:LoadingCSS}\n\n{template:ButtonCSS}\n.kd-button {\n  background-color: #f5f5f5;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));\n  background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -moz-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -ms-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -o-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: linear-gradient(top,#f5f5f5,#f1f1f1);\n  border: 1px solid #DCDCDC;\n  border: 1px solid rgba(0,0,0,0.1);\n  {css-border-radius value="2px"}\n  {css-box-sizing value="content-box"}\n  color: #222;\n  cursor:default;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: bold;\n  height: 27px;\n  line-height: 27px;\n  min-width: 54px;\n  padding: 0 8px;\n  text-align: center;\n  {css-transition value="all 0.218s"}\n  {css-user-select value="none"}\n}\n.kd-button:hover {\n  background-color: #f8f8f8;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));\n  background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);\n  background-image: -moz-linear-gradient(top,#f8f8f8,#f1f1f1);\n  background-image: -ms-linear-gradient(top,#f8f8f8,#f1f1f1);\n  background-image: -o-linear-gradient(top,#f8f8f8,#f1f1f1);\n  background-image: linear-gradient(top,#f8f8f8,#f1f1f1);\n  border: 1px solid #C6C6C6;\n  {css-box-shadow value="0px 1px 1px rgba(0,0,0,0.1)"}\n  color: #222;\n  {css-transition value="all 0.0s"}\n}\n.kd-button:active {\n  background-color: #f6f6f6;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#f6f6f6),to(#f1f1f1));\n  background-image: -webkit-linear-gradient(top,#f6f6f6,#f1f1f1);\n  background-image: -moz-linear-gradient(top,#f6f6f6,#f1f1f1);\n  background-image: -ms-linear-gradient(top,#f6f6f6,#f1f1f1);\n  background-image: -o-linear-gradient(top,#f6f6f6,#f1f1f1);\n  background-image: linear-gradient(top,#f6f6f6,#f1f1f1);\n  border: 1px solid #C6C6C6;\n  {css-box-shadow value="inset 0px 1px 2px rgba(0,0,0,0.1)"}\n  color: #333;\n}\n\n.kd-button:focus, .kd-button.right:focus, .kd-button.left:focus{\n  border: 1px solid #4d90fe;\n  outline: none;\n  z-index: 4 !important;\n}\n\n.kd-button.left {\n  {css-border-radius value="2px 0 0 2px"}\n  border-right-color: transparent;\n  margin-right: 0;\n}\n.kd-button.left:hover {\n  border-right: 1px solid #c6c6c6;\n}\n.kd-button.right {\n  {css-border-radius value="0 2px 2px 0"}\n  margin-left:-5px;\n}\n\n.kd-button.right:hover {\n  border-left: 1px solid #c6c6c6;\n}\n.kd-button img {\n  display: inline-block;\n  margin: -3px 0 0;\n  *margin:4px 0 0; /*IE7*/\n  opacity: 0.55;\n  vertical-align: middle;\n}\n\n.kd-button.selected img {\n  opacity: 0.9;\n}\n.kd-button:hover img {\n  opacity: 0.72;\n}\n.kd-button:active img {\n  opacity: 1.0;\n}\n/*disabled buttons*/\n.kd-button.disabled,\n.kd-button.disabled:hover,\n.kd-button.disabled:active {\n  background: #FFF;\n  border: 1px solid #f3f3f3;\n  border: 1px solid rgba(0,0,0,0.05);\n  color: #b8b8b8;\n  cursor: default;\n  pointer-events: none;\n}\n.kd-button.disabled:active{\n  {css-box-shadow value="inset 0px 1px 2px rgba(0,0,0,0.1)"}\n}\n.kd-button.disabled img {\n  opacity: 0.5;\n}\n.kd-button.small {\n  min-width: 36px;\n  padding: 0;\n  width: 36px;\n}\n{/template:ButtonCSS}\n\n{template:MessageCSS}\n#message {\n  position: fixed;\n  text-align: center;\n  top: 40%;\n  width: 100%;\n}\n#message span {\n  background-color: white;\n  border-radius: 6px;\n  color: #333;\n  box-shadow: 0 0 4px #666;\n  display: inline-block;\n  font-family: arial;\n  font-size: 16px;\n  padding: 15px;\n  white-space: no-wrap;\n}\n{/template:MessageCSS}\n\n{template:SearchCSS}\n\n.quick-search {\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  {css-border-radius value="5px"}\n  {css-box-shadow value="0 4px 16px rgba(0, 0, 0, 0.2)"}\n  padding: 5px;\n  width: 450px;\n  z-index: 10001;\n}\n\n.quick-search li {\n  cursor: pointer;\n}\n\n.quick-search .result {\n  border: solid 1px transparent;\n  clear: both;\n  font-size: 13px;\n  height: 48px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 7px;\n  position: relative;\n}\n\n.quick-search .title {\n  display: inline-block;\n  font-size: 15px;\n  left: 60px;\n  overflow: hidden;\n  position: absolute;\n  right: 130px;\n  text-overflow: ellipsis;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n  top: 5px;\n  white-space: nowrap;\n}\n\n.quick-search .date {\n  color: #dd4b39;\n  font-size: 15px;\n  margin-left: 5px;\n  position: absolute;\n  right: 5px;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);\n  top: 5px;\n}\n\n.quick-search .snippet {\n  color: #888;\n  left: 60px;\n  line-height: 1.25;\n  max-height: 35px;\n  overflow: hidden;\n  position: absolute;\n  right: 5px;\n  text-align: justify;\n  top: 24px;\n}\n\n.quick-search .thumbnail {\n  {css-border-radius value="5px"}\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  left: 5px;\n  margin-right: 7px;\n  position: absolute;\n  top: 5px;\n}\n\n.quick-search .result:hover,\n.quick-search .result.active {\n  background-color: #f9edbe;\n  border: solid 1px #f0c36d;\n  {css-box-shadow value="0 2px 4px rgba(0, 0, 0, 0.2)"}\n}\n\n.quick-search .result:hover .snippet,\n.quick-search .result.active .snippet {\n  color: #333;\n}\n\n.quick-search .result .term {\n  background-color: #f9edbe;\n  color: black;\n}\n\n.quick-search .result:hover .term,\n.quick-search .result:active .term {\n  background-color: transparent;\n}\n\n.quick-search .server {\n  border: solid 1px transparent;\n  margin: -1px;\n  padding: 10px;\n  text-align: center;\n}\n\n.quick-search li + .server {\n  border-top: solid 1px #ddd;\n}\n\n.quick-search .server:hover,\n.quick-search .server.active {\n  background-color: #eaeaea;\n  border: solid 1px #ccc;\n  {css-box-shadow value="0 2px 4px rgba(0, 0, 0, 0.2)"}\n}\n\n.quick-search .message {\n  color: #4d90fe;\n  display: block;\n  font-size: 16px;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.quick-search .search_query {\n  color: black;\n}\n\n.quick-search .count {\n  color: #222;\n  display: block;\n  font-size: 14px;\n}\n\n#search.searching {\n  background-image: url(data:image/gif;base64,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);\n  background-position: center right;\n  background-repeat: no-repeat;\n  {css-transition value="none"}\n}\n{/template:SearchCSS}\n\n{template:AttributionContainerCSS}\n#attribution-container {\n  padding: 8px;\n}\n{/template:AttributionContainerCSS}\n{template:CommentCSS}\n\n.comments {\n  clear: both;\n  margin-top: 10px;\n}\n\n.comments .comments-header,\n.comments .comments-footer {\n  text-align: center;\n}\n\n.comments .comments-header {\n  margin-bottom: 10px;\n}\n\n.comments .comments-header .comments-count {\n  top: -2px;\n}\n\n.comments .comments-header h3 {\n  display: inline-block;\n  padding: 5px;\n}\n\n@media only screen and (max-device-width: 1024px) {\n  .comments .comments-header h3 {\n    color: #222;\n    font-family: arial,sans-serif;\n    text-decoration: underline;\n  }\n}\n.comments .toggle-switch:hover h3 {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n/* Added by blogger for ghosted/removed comments .*/\n.comments .deleted-comment {\n  font-style: italic;\n  opacity: 0.5;\n}\n\n/* While loading, hide the comment count, and then show an indicator. */\n.comments.loading .comments-header .comments-count .bubble-content {\n  visibility: hidden;\n}\n\n.comments.loading .comments-header .comments-count {\n  background-image: url(data:image/gif;base64,R0lGODlhEAAQAPQAAGZmZv///2lpadzc3K+vr/r6+ufn5319fZmZmfDw8Le3t8DAwHV1daOjo4eHh9LS0srKygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAAKAAEALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkEAAoAAgAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkEAAoAAwAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAAKAAQALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAAKAAUALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);\n  background-position: center center;\n  background-repeat: no-repeat;\n  {css-transition value="none"}\n}\n\n.blogger-comments .comments-content {\n  background-color: whitesmoke;\n  font-size: 13px;\n  margin-bottom: 16px;\n  {css-border-radius value="10px"}\n  {css-transition value="all 0.5s ease-in"}\n}\n\n@media only screen and (max-device-width: 1024px) {\n  .blogger-comments .comments-content {\n    background-color: #f1f1f1;\n    border: 1px solid #bbb;\n    {css-border-radius value="0"}\n  }\n}\n.blogger-comments .comments-content .comment-actions {\n  color: #999;\n}\n.comments .comment .comment-actions a {\n  padding-top: 5px;\n  padding-right: 5px;\n}\n.comments .comment .comment-actions a:hover {\n  text-decoration: underline;\n}\n.blogger-comments .comments-content .secondary-link {\n  color: #69c;\n}\n.blogger-comments .comments-content .comment-thread {\n  list-style-type: none;\n  padding: 0;\n  text-align: left;\n}\n.blogger-comments .comments-content .inline-thread {\n  padding: 0.5em;\n}\n.blogger-comments .comments-content .comment-thread {\n  margin: 8px;\n}\n.blogger-comments .comments-content .comment-thread:empty {\n  display: none;\n}\n.blogger-comments .comments-content .comment-replies {\n  background-color: #ebebeb;\n  margin-top: 1em;\n  margin-left: 36px;\n  {css-border-radius value="10px"}\n}\n.blogger-comments .comments-content .comment {\n  border-bottom: 1px solid #e3e3e3;\n  margin-bottom: 16px;\n  padding-bottom: 8px;\n}\n.blogger-comments .comments-content .comment:first-child {\n  padding-top: 16px;\n}\n.blogger-comments .comments-content .comment:last-child {\n  border-bottom: 0;\n  padding-bottom: 0;\n}\n.blogger-comments .comments-content .comment-body {\n  position: relative;\n}\n.blogger-comments .comments-content .user {\n  font-style: normal;\n  font-weight: bold;\n}\n.blogger-comments .comments-content .datetime {\n  margin-left: 6px;\n}\n.blogger-comments .comments-content .comment-header,\n.blogger-comments .comments-content .comment-content {\n  margin: 0 0 8px;\n}\n.blogger-comments .comments-content .comment-content {\n  text-align: justify;\n}\n.blogger-comments .comments-content .owner-actions {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.blogger-comments .comments-replybox {\n  border: none;\n  height: 250px;\n  width: 100%;\n}\n\n.blogger-comments .comment-replybox-single {\n  margin-top: 5px;\n  margin-left: 48px;\n}\n.blogger-comments .comment-replybox-thread {\n  margin-top: 5px;\n}\n\n.blogger-comments .comments-content .user,\n.blogger-comments .comments-content .user a {\n  color: {color:Text};\n}\n\n.blogger-comments .icon.blog-author {\n  width: 18px;\n  height: 18px;\n  display: inline-block;\n  background-repeat: no-repeat;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB9sLFwMeCjjhcOMAAAD+SURBVDjLtZSvTgNBEIe/WRRnm3U8RC1neQdsm1zSBIU9VVF1FkUguQQsD9ITmD7ECZIJSE4OZo9stoVjC/zc7ky+zH9hXwVwDpTAWWLrgS3QAe8AZgaAJI5zYAmc8r0G4AHYHQKVwII8PZrZFsBFkeRCABYiMh9BRUhnSkPTNCtVXYXURi1FpBDgArj8QU1eVXUzfnjv7yP7kwu1mYrkWlU33vs1QNu2qU8pwN0UpKoqokjWwCztrMuBhEhmh8bD5UDqur75asbcX0BGUB9/HAMB+r32hznJgXy2v0sGLBcyAJ1EK3LFcbo1s91JeLwAbwGYu7TP/3ZGfnXYPgAVNngtqatUNgAAAABJRU5ErkJggg==);\n  margin: 0 0 -4px 6px;\n}\n\n.blogger-comments .comments-content .loadmore a {\n  background: #fafafa;\n  border-top: 1px solid #e3e3e3;\n  display: block;\n  padding: 10px 16px;\n  text-align: center;\n}\n\n.blogger-comments .thread-toggle {\n  cursor: pointer;\n  display: inline-block;\n  color: {color:Link};\n}\n\n.blogger-comments .continue {\n  cursor: pointer;\n}\n\n.blogger-comments .continue a {\n  color: #888;\n  display: block;\n  padding: 0.5em;\n  background: white;\n  border: 1px solid #CCC;\n  {css-box-shadow value="inset 1px 1px 3px #888"}\n}\n\n.blogger-comments .comments-content .loadmore:hover a {\n  background: #f1f1f1;\n  border-top: 1px solid #fff;\n}\n\n.blogger-comments .comments-content .loadmore {\n  cursor: pointer;\n  max-height: 3em;\n}\n\n.blogger-comments .comments-content .loadmore.loaded {\n  max-height: 0px;\n  opacity: 0;\n  overflow: hidden;\n  {css-transition value="all 0.5s ease-in"}\n}\n\n@media only screen and (max-device-width: 1024px) {\n  .blogger-comments .comments-content .loadmore a,\n  .blogger-comments .comments-content .loadmore:focus a {\n    background: none;\n    border-top: 1px solid #ccc;\n  }\n}\n.blogger-comments .thread-chrome.thread-collapsed {\n  display: none;\n}\n\n.blogger-comments .thread-toggle {\n  display: inline-block;\n}\n\n.blogger-comments .thread-toggle .thread-arrow {\n  display: inline-block;\n  height: 6px;\n  width: 7px;\n  overflow: visible;\n  margin: 0.3em;\n  padding-right: 4px;\n}\n\n.blogger-comments .thread-expanded .thread-arrow {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAG0lEQVR42mNgwAfKy8v/48I4FeA0AacVDFQBAP9wJkE/KhUMAAAAAElFTkSuQmCC") no-repeat scroll 0 0 transparent;\n}\n\n.blogger-comments .thread-collapsed .thread-arrow {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAJUlEQVR42mNgAILy8vL/DLgASBKnApgkVgXIkhgKiNKJ005s4gDLbCZBiSxfygAAAABJRU5ErkJggg==") no-repeat scroll 0 0 transparent;\n}\n\n.blogger-comments .avatar-image-container {\n  float: left;\n  width: 36px;\n  max-height: 36px;\n  overflow: hidden;\n}\n\n.blogger-comments .avatar-image-container img {\n  width: 36px;\n}\n\n.blogger-comments .comment-block {\n  margin-left: 48px;\n  position: relative;\n}\n\n/* Responsive styles. */\n@media screen and (max-device-width: 480px) {\n  .blogger-comments .comments-content .comment-replies {\n    margin-left: 0;\n  }\n}\n{/template:CommentCSS}\n{template:CommonCSS}\n{BasicCSS}\n{HeaderCSS}\n{OverviewCSS}\n{ViewItemCSS}\n{PostCSS}\n{CommentCSS}\n{SharingCSS}\n{GadgetDockCSS}\n{/template:CommonCSS}\n\n{template:CSS}\n{CommonCSS}\n{ViewCSS}\n{CustomCSS}\n{text:Custom CSS}\n{/template:CSS}\n\x3c!-- Attributes {gadgetSidebar} --\x3e\n{template:GadgetDockCSS}\n{block:Gadgets}\n{block:IfNotgadgetSidebar}\n#gadget-dock {\n  background-color: #333;\n  width: 50px;\n  {css-box-shadow value="0 1px 3px rgba(0, 0, 0, 0.3)"};\n  {css-border-radius value="2px 0 0 2px"};\n  {block:IfNotMobile}\n  {css-transition value="right 0.15s ease-in-out"};\n  {/block:IfNotMobile}\n  position: fixed;\n  right: -40px;\n  top: 124px;\n  z-index: 3000;\n}\n\n{block:IfNotMobile}\n#gadget-dock:hover,\n{/block:IfNotMobile}\n#gadget-dock.gadget-notifying,\n#gadget-dock.gadget-opening {\n  right: 0;\n}\n\n/* expand the hover area */\n#gadget-dock:after {\n  content: \'\';\n  display: block;\n  width: 90px;\n  height: 110%;\n  position: absolute;\n  top: -5%;\n  left: -40px;\n  z-index: -100;\n}\n\n#gadget-dock.gadget-opening:after {\n  display: none;\n}\n\n.gadget-item {\n  position: relative;\n  z-index: 1;\n}\n\n.gadget-selected {\n  z-index: 0;\n}\n\n.gadget-item:empty {\n  display: none;\n}\n\n.gadget-menu {\n  cursor: pointer;\n  background-color: #333;\n  border-top: 1px solid #585858;\n  text-align: center;\n  z-index: 0;\n}\n\n.gadget-icons {\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n}\n\n.gadget-menu .gadget-title {\n  display: none;\n}\n\n.gadget-selected .gadget-menu {\n  background-color: white;\n  border-color: #ccc;\n}\n\n.gadget-item:first-child .gadget-menu {\n  border-top: 1px solid transparent;\n  {css-border-radius value="2px 0 0 0"}\n}\n\n.gadget-selected.gadget-item:first-child .gadget-menu {\n  border-color: #ccc;\n  {css-border-radius value="0"}\n}\n\n.gadget-item:last-child .gadget-menu {\n  {css-border-radius value="0 0 0 2px"}\n}\n\n.gadget-selected.gadget-item:last-child .gadget-menu {\n  {css-border-radius value="0"}\n}\n\n.gadget-icon, .gadget-icon-selected {\n  display: inline-block;\n  max-width: 30px;\n  max-height: 30px;\n  vertical-align: middle;\n}\n\n.gadget-icon-selected {\n  display: none;\n}\n\n.gadget-selected .gadget-icon {\n  display: none;\n}\n\n.gadget-selected .gadget-icon-selected {\n  display: inline-block;\n}\n{/block:IfNotgadgetSidebar}\n\n{block:IfgadgetSidebar}\n#gadget-dock {\n  background-color: #f9f9f9;\n  position: relative;\n  top: auto !important;\n  z-index: 3000;\n}\n\n.gadget-item {\n  border-width: 0 1px 0 0;\n  border-color: transparent;\n  border-style: solid;\n  cursor: pointer;\n  padding: 0 20px;\n  height: 46px;\n  line-height: 46px;\n  box-sizing: border-box;\n}\n\n.gadget-selected {\n  background-color: white;\n  border-width: 1px 1px 1px 0;\n  border-color: #ccc;\n}\n\n.gadget-menu {\n  border-width: 1px 0 1px 0;\n  border-color: #eaeaea transparent #fbfbfb transparent;\n  border-style: solid;\n}\n\n.gadget-item:first-child .gadget-menu {\n  border-color: transparent transparent #fbfbfb transparent;\n}\n\n.gadget-item:last-child .gadget-menu {\n  border-color: #eaeaea transparent transparent transparent;\n}\n\n.gadget-selected .gadget-menu {\n  border-style: none;\n}\n\n.gadget-menu .gadget-title {\n  color: #1c52ba;\n  font-size: 14px;\n  padding-left: 4px;\n  vertical-align: middle;\n}\n\n.gadget-item:hover .gadget-menu .gadget-title {\n  text-decoration: underline;\n}\n\n.gadget-selected .gadget-menu .gadget-title {\n  color: #545659;\n}\n\n.gadget-selected:hover .gadget-menu .gadget-title {\n  text-decoration: none;\n}\n\n.gadget-icons {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n}\n\n.gadget-icon {\n  display: none;\n}\n\n.gadget-icon-selected {\n  display: inline-block;\n  opacity: 0.75;\n  max-width: 18px;\n  max-height: 18px;\n  vertical-align: top;\n}\n{/block:IfgadgetSidebar}\n\n.gadget-container {\n  background-color: white;\n  {css-box-shadow value="0 1px 3px rgba(0, 0, 0, 0.3)"};\n  line-height: 1.4em;\n  text-align: left;\n  visibility: hidden;\n  z-index: -1;\n  margin-left: 100%;\n  word-wrap: break-word;\n  max-width: 700px;\n}\n\n{block:IfNotgadgetSidebar}\n.gadget-container {\n  {block:IfNotMobile}\n  {css-transition value="right 0.15s ease-in-out, opacity 0.15s ease-in-out"};\n  {/block:IfNotMobile}\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: -100px;\n}\n\n{block:IfNotMobile}\n.gadget-container:hover,\n.gadget-item:hover .gadget-container,\n{/block:IfNotMobile}\n.gadget-selected .gadget-container {\n  visibility: visible;\n  right: 49px;\n  opacity: 1;\n}\n\n.gadget-selected .gadget-container {\n  border: 1px solid #ccc;\n  {css-border-radius value="2px 0 0 2px"};\n  cursor: auto;\n  z-index: -100;\n}\n\n.gadget-selected.gadget-dock-overflow-bottom .gadget-container {\n  position: fixed;\n  bottom: 27px;\n  top: auto;\n}\n\n.gadget-selected.gadget-dock-overflow-client-area .gadget-container {\n  position: fixed;\n  top: 0;\n  bottom: 24px;\n}\n{/block:IfNotgadgetSidebar}\n\n{block:IfgadgetSidebar}\n.gadget-container {\n  border: 1px solid #ccc;\n  cursor: auto;\n  position: absolute;\n  top: 0;\n  right: 199px;\n}\n\n.gadget-selected .gadget-container {\n  visibility: visible;\n}\n\n.gadget {\n  overflow-y: auto;\n  max-height: 600px;\n}\n{/block:IfgadgetSidebar}\n\n/* HACK: Because IE8 ignores max-width when "overflow-y: scroll" is set */\n/* the scroll-bar is shown by the child element of .gadget-container.   */\n.gadget {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  /* IE scroll-bar */\n  scrollbar-arrow-color: white;\n  scrollbar-track-color: white;\n  scrollbar-face-color: #999;\n  scrollbar-highlight-color: #999;\n  scrollbar-shadow-color: #999;\n  scrollbar-3dlight-color: white;\n  scrollbar-darkshadow-color: white;\n}\n.gadget-selected.gadget-dock-overflow-client-area .gadget {\n  overflow-y: scroll;\n}\n\n.gadget::-webkit-scrollbar {\n  width: 14px;\n}\n\n.gadget::-webkit-scrollbar:hover {\n  background-color: #f3f3f3;\n}\n\n.gadget::-webkit-scrollbar-thumb {\n  border-width: 0 0 0 4px;\n  border-color: #999;\n  border-style: solid;\n}\n\n.gadget::-webkit-scrollbar-thumb:hover {\n  border-width: 0 0 0 12px;\n}\n\n.gadget::-webkit-scrollbar-button {\n  width: 14px;\n  height: 16px;\n}\n\n.gadget::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n\n.gadget-content {\n  display: block;\n  height: 0;\n  overflow: hidden;\n  position: relative;\n}\n\n.gadget-selected .gadget-content {\n  height: auto;\n}\n\n.gadget-container .gadget-title {\n  background-color: #333;\n  color: white;\n  display: block;\n  font-size: 14px;\n  padding: 1px 16px 0 16px;\n  height: 50px;\n  line-height: 50px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  position: relative;\n}\n\n.gadget-container .gadget-title:hover {\n  text-decoration: underline;\n}\n\n.gadget-selected .gadget-container .gadget-title {\n  background-color: transparent;\n  color: black;\n  font-size: 16px;\n  height: 40px;\n}\n\n.gadget-selected .gadget-container .gadget-title:hover {\n  text-decoration: none;\n}\n\n.gadget-content {\n  background-color: white;\n}\n\n.gadget-resize-detector {\n  background-color: transparent;\n  border-style: none;\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  width: 0;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n\n{/block:Gadgets}\n{/template:GadgetDockCSS}\n{template:HeaderCSS}\n\n#header-container {\n  height: 105px;\n}\n\n#header {\n  {block:IfNotMobile}\n  left: 0;\n  position: fixed;\n  top: 0;\n  {/block:IfNotMobile}\n  width: 100%;\n  z-index: 1000;\n}\n\n#header .header-bar {\n  {block:IfNotimage:Header} /* No custom image, put slight gradient. */\n  background-image: -moz-linear-gradient(\n      center top,\n      rgba(255, 255, 255, 0.1),\n      rgba(100, 100, 100, 0.05)\n  );\n  background-image: -webkit-gradient(\n      linear,\n      left top,\n      left bottom,\n      from(rgba(255, 255, 255, 0.3)),\n      to(rgba(255, 255, 255, 0.05))\n  );\n  {/block:IfNotimage:Header}\n  {block:image:Header}\n  background-image: url({image:Header});\n  background-position: left top;\n  background-repeat: no-repeat;\n  {/block:image:Header}\n  {block:text:HeaderBackgroundCSS}\n  background: {text:HeaderBackgroundCSS}; /* Override everything. */\n  {/block:text:HeaderBackgroundCSS}\n  background-attachment: scroll; /* Chrome, really? */\n  background-color: {color:Header Background};\n  {css-box-shadow value="0 0 5px 0px rgba(0, 0, 0, 0.3)"}\n  height: 65px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1001;\n}\n\n#header .header-bar .title {\n  display: block;\n  height: 65px;\n  line-height: 65px;\n  margin-left: 20px;\n  margin-right: 235px;\n  overflow: hidden;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n#header .header-bar .title h1,\n#header .header-bar .title h3 {\n  display: inline;\n  height: 65px;\n  {block:IfNotimage:Header}\n  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.3);\n  {/block:IfNotimage:Header}\n  white-space: nowrap;\n}\n\n#header .header-bar .title h1 {\n  color: {color:Blog Title};\n  font-family: {font:Blog Title};\n  font-size: 28px;\n}\n\n#header .header-bar .title h3 {\n  color: {color:Blog Description};\n  font-family: {font:Blog Description};\n  font-size: 20px;\n  margin-left: 5px;\n}\n\n#header input#search {\n  background-color: #fafafa;\n  {css-border-radius value="3px"}\n  border: none;\n  {css-box-shadow value="inset 1px 1px 2px #bbb"}\n  font-size: 15px;\n  height: 30px;\n  margin: 0;\n  padding: 0px 7px;\n  right: 10px;\n  text-align: left;\n  text-transform: lowercase;\n  top: 18px;\n  {css-transition value="background-color 0.3s ease-in-out"};\n  width: 200px;\n  position: absolute;\n}\n\n#header input#search:focus {\n  background-color: white;\n}\n\n#header .header-drawer {\n  /* the drawer scrolls with the page initially, then gets fixed (.sticky) */\n  background-color: {color:Primary};\n  {css-box-shadow value="0 0 8px rgba(0, 0, 0, 0.5)"};\n  font-family: {font:Menu};\n  height: 35px;\n  margin-top: 31px; /* use margin to match back to un-scrolled */\n  position: absolute;\n  top: 34px; /* top here must match top when sticky */\n  width: 100%;\n  z-index: 1000;\n}\n\n{block:IfNotMobile}\n#header .header-drawer.sticky {\n  margin-top: 0px;\n  top: 34px; /* now stuck, just peeking out from the top */\n  {css-transition value="top 0.2s linear"}\n  {css-transition-delay value="0.3s"} /* don\'t surprise on quick hover */\n}\n\n#header:hover .header-drawer,\n#header .header-drawer.open {\n  margin-top: 0px;\n  top: 65px; /* animate back down to full unscrolled height */\n}\n{/block:IfNotMobile}\n\n/* Views and Pages */\n\n#header #views {\n  float: left;\n  position: relative;\n  z-index: 999;\n}\n\n#header .menu .menu-item,\n#header .menu .menu-heading {\n  border-radius: 4px;\n  {css-box-sizing value="border-box"}\n  color: {color:Menu Text};\n  cursor: pointer;\n  display: inline-block;\n  font-family: {font:Menu};\n  font-size: 15px;\n  font-weight: 100;\n  line-height: 30px;\n  height: 30px;\n  padding-left: 15px;\n  padding-right: 15px;\n  text-shadow: -1px -1px rgba(0, 0, 0, 0.1); /* subtle inset */\n  {css-transition value="background-color 0.2s ease-in-out, color 0.2s ease-in-out"}\n  {css-user-select value="none"};\n  width: 100%;\n}\n\n#header a.menu-item {\n  font-family: {font:Menu};\n}\n\n#views .menu-item {\n  text-transform: capitalize;\n}\n\n#header .menu .menu-heading {\n  {css-box-sizing value="border-box"}\n  height: 35px;\n  line-height: 35px;\n  margin-right: 15px;\n  position: relative;\n  width: auto;\n}\n\n#header .indicator {\n  /* instead of using a .heading::after actually put this in as elements\n     which will allow us to animate it rotating! */\n  border-color: {color:Menu Text} transparent transparent transparent;\n  border-style: solid;\n  border-width: 5px;\n  height: 0px;\n  margin: 0;\n  margin-top: -1px;\n  overflow: visible;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  {css-transition value="all .3s linear"}\n  {css-crossbrowser property="transform-origin" value="center 2px"}\n}\n\n#header .menu:hover .indicator {\n  {css-transform value="rotate(180deg)"}\n}\n\n#header .menu ul {\n  {css-box-shadow value="2px 2px 4px rgba(0, 0, 0, 0.2)"}\n  max-height: 0px;\n  overflow: hidden;\n  padding: 0;\n  {css-transition value="all 0.3s linear"}\n  visibility: hidden;\n  width: 100%;\n\n}\n\n#header .menu:hover ul {\n  max-height: 500px;\n  opacity: 1;\n  {css-transition value="all 0.6s linear"} /* show slower than hide */\n  visibility: visible;\n}\n\n#header .menu li {\n  display: list-item;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n#header .menu li a {\n  opacity: 0.99; /* Chrome12+ has different subpixel anti-aliasing rules, this looks worse, but prevents flicker. */\n}\n\n#header .menu .menu-background {\n  background-color: {color:Primary};\n  height: 100%;\n  left: 0;\n  opacity: 0.75;\n  position: absolute;\n  top: 0;\n  {css-transition value="opacity 0.3s ease-in"}\n  width: 100%;\n  z-index: -1; /* Negative isn\'t great... but otherwise the a needs to be positioned. */\n}\n\n#header .menu li:hover .menu-background {\n  opacity: 0.95;\n}\n\n#header .menu li {\n  {css-box-sizing value="border-box"}\n}\n\n#header .tabs li {\n  display: inline;\n  height: 35px;\n  line-height: 35px;\n  margin-left: 10px;\n}\n\n#header .tags li .menu-background {\n  display: none;\n}\n\n#header .tabs li .menu-item {\n  color: {color:Menu Text alpha="0.6"};\n  {css-transition value="color 286ms ease-in"}\n}\n\n#header .tabs li .menu-item:hover,\n#header .menu li .menu-item:hover,\n#header .tabs li .menu-item.current {\n  color: {color:Menu Text} !important;\n}\n\n#header .tabs .menu-heading {\n  display: none;\n}\n\n  \n #header #pages2 { \n  float: left; \n  margin-left: 0px; \n  position: relative; \n } \n \n #header #pages2:before { \n  border-left: solid 1px {color:Menu Text}; \n  content: \'\'; \n  height: 20px; \n  left: 0px; \n  opacity: 0.5; \n  position: absolute; \n  top: 8px; \n  z-index: 1000; \n } \n \n #header #pages2.tabs ul { \n  margin-left: 0px; \n  overflow: hidden; \n  white-space: nowrap; \n } \n #header #pages {\n  float: left;\n  margin-left: 0px;\n  position: relative;\n}\n\n#header #pages:before {\n  border-left: solid 1px {color:Menu Text};\n  content: \'\';\n  height: 20px;\n  left: 0px;\n  opacity: 0.5;\n  position: absolute;\n  top: 8px;\n  z-index: 1000;\n}\n\n#header #pages.tabs ul {\n  margin-left: 0px;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n#header .admin-controls {\n  height: 35px;\n  position: absolute;\n  right: 10px;\n  top: 0px;\n}\n\n#header .admin-controls .dashboard {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAANCAYAAAB2HjRBAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAVdEVYdENyZWF0aW9uIFRpbWUAMTEvNy8xMZe/cygAAADVSURBVCiRpZG9agJBFEbPxB/E1mCTV4iFldW+hZWIRdqAr2EtIX2a9Ja24jPoE1gKWqmIyUnhqqvuqpDTzB34Dtz5BjJQG+pMbak1deeeroqaKUbqNA7P1b66vSurzUQwjaP8dCG2gW+gkPUcYHcYjrL6BnwBxRsiwCuQP0gFtXdjzTQGahX1Q/1RNw+KK/VXHQY1ApZABHzeWRngHRgBlXwIYRyvX0l2ByyADZADnuMTYApMzgoDyol5DXRCCC9AHZin5c6+KkHg1Hopvl+RJT/Ev+Q/DML6Kx8BC7sAAAAASUVORK5CYII=);\n  /*background-size: 18px 18px;*/\n  display: block;\n  height: 35px;\n  opacity: 0.8;\n  position: absolute;\n  right: 0px;\n  top: 0;\n  width: 18px;\n}\n\n#header .admin-controls .new-post {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAVdEVYdENyZWF0aW9uIFRpbWUAMTEvNy8xMZe/cygAAADaSURBVCiRhdIxS0JRGMbx/z1a0KdwcyxttcXRLxBIEFgOfp0W5yAn56DNxUm3oiXItUmEgmwo/Dd4g+7p3HzW8/w45305sCNqW31QB2pQd4K6euc2C7WjVv8Dh+rcYl7Us0oJaAA3QDM6CsBTCjTVR/9mqXbV/RgclYA39TTvFMBxvqU4a/X8V68w9HMCfKiX0WtA3VOv8tImAheJmUGtqSO1pQ5z8K72SjZLAE6AT2ANtIAV0FevUwggU2fAAXALLIGJeh9CSP4XlSowBqbAAnjNsuyr7IaffAOehB+C7e2WDgAAAABJRU5ErkJggg==);\n  /*background-size: 18px 18px;*/\n  display: block;\n  height: 35px;\n  opacity: 0.8;\n  position: absolute;\n  right: 24px;\n  top: 0;\n  width: 18px;\n}\n\n#header .admin-controls .dashboard:hover,\n#header .admin-controls .new-post:hover {\n  opacity: 1;\n}\n\n#header #follow-author {\n  height: 65px;\n  right: 0px;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: 300px;\n}\n\n{block:IfTablet}\n/* Style for search box */\n#header input#search {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  -webkit-appearance: none;\n  -webkit-box-shadow: none;\n}\n\n#header .admin-controls .new-post { right: 50px; }\n#header .admin-controls .dashboard { right: 10px; }\nli.item { width: 75%; }\n{/block:IfTablet}\n\n{/template:HeaderCSS}\n/* Templates that effectively give us CSS mixins */\n\n/* expected params: [property, value]*/\n{template:css-mixin}\n{property}: {value};\n{/template:css-mixin}\n\n/* Cross-browser mixin. Expected params: [property, value] */\n{template:css-crossbrowser whitespace="collapse-breaks"}\n{css-mixin property=\'-moz-{property}\' value=\'{value}\'}\n{css-mixin property=\'-ms-{property}\' value=\'{value}\'}\n{css-mixin property=\'-o-{property}\' value=\'{value}\'}\n{css-mixin property=\'-webkit-{property}\' value=\'{value}\'}\n{css-mixin property=\'{property}\' value=\'{value}\'}\n{/template:css-crossbrowser}\n\n{template:css-box-sizing whitespace="trim"}\n{css-crossbrowser property=\'box-sizing\' value=\'{value}\'}\n{/template:css-box-sizing}\n\n{template:css-box-shadow whitespace="trim"}\n{css-crossbrowser property=\'box-shadow\' value=\'{value}\'}\n{/template:css-box-shadow}\n\n{template:css-border-radius whitespace="trim"}\n{css-crossbrowser property=\'border-radius\' value=\'{value}\'}\n{/template:css-border-radius}\n\n{template:css-border-image whitespace="trim"}\n{css-mixin property=\'-moz-border-image\' value=\'{value}\'}\n{css-mixin property=\'-ms-border-image\' value=\'{value}\'}\n{css-mixin property=\'-o-border-image\' value=\'{value}\'}\n/* If border-image is declared below -webkit-border-image */\n/* Webkit doesn\'t render correctly.                       */\n{css-mixin property=\'border-image\' value=\'{value}\'}\n{css-mixin property=\'-webkit-border-image\' value=\'{value}\'}\n{/template:css-border-image}\n\n/* Cross-browser transition. Expected params: [value | property,duration,timing] */\n{template:css-transition whitespace="collapse-breaks"}\n{block:value}\n{css-crossbrowser property=\'transition\' value=\'{value}\'}\n{/block:value}\n{block:IfNotvalue}\n{css-crossbrowser property=\'transition\' value=\'{property} {duration} {timing}\'}\n{/block:IfNotvalue}\n{/template:css-transition}\n\n{template:css-transition-property whitespace="trim"}\n{css-crossbrowser property=\'transition-property\' value=\'{value}\'}\n{/template:css-transition-property}\n\n{template:css-transition-delay whitespace="trim"}\n{css-crossbrowser property=\'transition-delay\' value=\'{value}\'}\n{/template:css-transition-delay}\n\n{template:css-transition-duration whitespace="trim"}\n{css-crossbrowser property=\'transition-duration\' value=\'{value}\'}\n{/template:css-transition-duration}\n\n{template:css-transition-timing-function whitespace="trim"}\n{css-crossbrowser property=\'transition-timing-function\' value=\'{value}\'}\n{/template:css-transition-timing-function}\n\n{template:css-transform whitespace="trim"}\n{css-crossbrowser property=\'transform\' value=\'{value}\'}\n{/template:css-transform}\n\n{template:css-user-select whitespace="trim"}\n{css-crossbrowser property=\'user-select\' value=\'{value}\'}\n{/template:css-user-select}\n\n{template:css-linear-gradient}\nbackground-image: -webkit-linear-gradient(top, {from}, {to});\nbackground-image:    -moz-linear-gradient(top, {from}, {to});\nbackground-image:     -ms-linear-gradient(top, {from}, {to});\nbackground-image:      -o-linear-gradient(top, {from}, {to});\nbackground-image:         linear-gradient(top, {from}, {to});\n{/template:css-linear-gradient}\n\n{template:css-diagonal-gradient}\nbackground-image: -webkit-linear-gradient(left top, {from}, {to});\nbackground-image:    -moz-linear-gradient(left top, {from}, {to});\nbackground-image:     -ms-linear-gradient(left top, {from}, {to});\nbackground-image:      -o-linear-gradient(left top, {from}, {to});\nbackground-image:         linear-gradient(left top, {from}, {to});\n{/template:css-diagonal-gradient}\n\n{template:css-radial-gradient}\nbackground-image: -webkit-radial-gradient(circle, {from}, {to});\nbackground-image:    -moz-radial-gradient(circle, {from}, {to});\nbackground-image:     -ms-radial-gradient(circle, {from}, {to});\nbackground-image:      -o-radial-gradient(circle, {from}, {to});\nbackground-image:         radial-gradient(circle, {from}, {to});\n{/template:css-radial-gradient}\n{template:OverviewCSS}\n\nbody.overview-open,\nbody.lightbox-open {\n  overflow: hidden;\n}\n\n/* overview background. */\n#overview .overview-backdrop,\n#lightbox .lightbox-backdrop {\n  background-color: black;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  position: fixed;\n  right: 0;\n  top: 0;\n  {css-transition value="all 1004ms ease-in"}\n  z-index: 3000;\n}\n\n#overview.open .overview-backdrop,\n#lightbox.open .lightbox-backdrop {\n  opacity: 0.7;\n}\n\n#overview.closing .overview-backdrop,\n#lightbox.closing .lightbox-backdrop {\n  opacity: 0;\n  {css-transition value="opacity 0.5s"}\n}\n\n.overview-panel,\n.lightbox-panel {\n  bottom: 0;\n  {css-box-sizing value="border-box"}\n  left: 20px;\n  pointer-events: none;\n  position: fixed;\n  right: 20px;\n  top: 50px;\n  {css-transition value="all 1009ms ease-in-out"}\n  z-index: 3001; /* Way up in the air. */\n}\n\n.lightbox-title {\n  bottom: 0;\n  display: table-cell;\n  font-family: {font:Post Title};\n  font-size: 20px;\n  height: 100%;\n  left: 60px;\n  line-height: 50px;\n  overflow: hidden;\n  position: absolute;\n  right: 60px;\n  text-align: center;\n  text-overflow: ellipsis;\n  top: 0;\n  white-space: nowrap;\n}\n\n.lightbox-contentwrap {\n  font-size: 14px;\n  margin: 0 auto;\n  max-width: 750px;\n}\n\n#overview.closing .overview-panel,\n#lightbox.closing .lightbox-panel {\n  opacity: 0;\n  {css-transition value="opacity 0.5s"}\n}\n\n/* Bounding box of our overview item. */\n.overview-panel .overview-wrap,\n.lightbox-panel .lightbox-wrap {\n  background-color: transparent;\n  {css-border-radius value="6px 6px 0px 0px"}\n  {block:browser:msie}\n  /* IE9 and IE10 don\'t support border-image */\n  {css-box-shadow value="0px 0px 20px 0px rgba(0, 0, 0, .6)"}\n  {css-box-sizing value="border-box"}\n  {/block:browser:msie}\n  {block:IfNotbrowser:msie}\n  {css-border-image value="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABTUlEQVRIx+2W3WrDMAyF47hJWzrY+z/mYKNtnNhLxlE5PZNhN3NuahB24qDP+nMUOn8EmW1dVony7UJ7NorMvxTXQKa87/42Mh3CBasFJhEQftdVTq17JhlgfvdkUQBkgx2wLhX3eoOtCQDOgGaDsrIeoIFcGARYHPdmiWGh9baXAM4GNDFYJKW9424PWBxQR2416BNwBJBdG5xYDgJMTuyKuHL7ZjIgxy2SmIs1iUYBTk6SzPRs8hNPBg4OLALQk7VnAV7JkowDLA40MXCgzIxk8QAZqS4vAvyiupugOFGGLpSxKZBydekBIAMfsX4T4CeU3Qk0CdAsntXCSO5l4DafVnmvxPBjlRuBbE4CTIHqji01i44AnRC7c6Xor5Ab5C4WPy6AF/BfgM2TZteyaFL4u1xtTS/v5r+n5j/g5i3GLk1U8zZxl0a4Sav/DRDkGFoKi/1vAAAAAElFTkSuQmCC) 12 / 12px repeat"}\n  {css-box-sizing value="content-box"}\n  background-clip: padding-box;\n  top: -12px;\n  {/block:IfNotbrowser:msie}\n  height: 100%;\n  left: 0;\n  margin: 0 auto;\n  max-width: 1000px;\n  overflow: hidden;\n  padding: 0px 1px; /* The controls the inset of the overview-inner. */\n  pointer-events: auto;\n  position: relative;\n  {css-transition value="left 0.5s linear"}\n  z-index: 3002;\n}\n\n.overview-panel.left .overview-wrap {\n  left: -110%;\n}\n\n.overview-panel.right .overview-wrap {\n  left: 110%;\n}\n\n/* This is the box that things can be draw in. */\n.overview-panel .overview-inner,\n.lightbox-panel .lightbox-inner {\n  background-color: #fafafa;\n  {css-border-radius value="6px 6px 0px 0px"}\n  bottom: 0px;\n  {css-box-sizing value="border-box"}\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.overview-panel .article {\n  /* Defend against Chrome 12+ antialiasing bug. */\n  background-color: #fafafa;\n}\n\n/* Header section for the overview-inner. */\n.overview-panel .overview-header,\n.lightbox-panel .lightbox-header {\n  {css-border-radius value="6px 6px 0px 0px"}\n  {css-box-shadow value="0px 3px 3px rgba(200, 200, 200, .4)"}\n  {css-box-sizing value="border-box"}\n  height: 50px;\n  padding: 10px;\n  position: absolute;\n  top: 0px;\n  {css-transition value="box-shadow 0.2s linear"}\n  z-index: 5;\n  width: 100%;\n}\n\n.overview-header .share-controls {\n  float: left;\n  margin-left: 10px;\n  margin-top: 4px;\n}\n\n.overview-header .overview-controls-left {\n  float: left;\n}\n\n.overview-header .overview-controls-right,\n.lightbox-header .lightbox-controls-right {\n  float: right;\n}\n\n/* overview container where we put the real stuff. */\n.overview-panel .overview-content,\n.lightbox-panel .lightbox-content {\n  bottom: 0px;\n  {css-box-sizing value="border-box"}\n  overflow-y: scroll; /* Always show: comments may cause it to bounce. */\n  padding: 10px;\n  position: absolute;\n  top: 50px;\n  {css-transition value="all 1s linear"}\n  width: 100%;\n  z-index: 1;\n}\n\n.overview-panel.start .overview-header,\n.lightbox-panel.start .lightbox-header {\n  {css-box-shadow value="none"}\n  min-width: 200px; /* Stop any buttons wrapping. */\n}\n\n/* Custom webkit scrollbars */\n\n.overview-panel .overview-content::-webkit-scrollbar,\n.lightbox-panel .lightbox-content::-webkit-scrollbar {\n  background: transparent;\n  height: 10px;\n  width: 10px;\n}\n\n/* the start/end of bar  */\n.overview-panel .overview-content::-webkit-scrollbar-button:start:decrement,\n.overview-panel .overview-content::-webkit-scrollbar-button:end:increment,\n.lightbox-panel .lightbox-content::-webkit-scrollbar-button:start:decrement,\n.lightbox-panel .lightbox-content::-webkit-scrollbar-button:end:increment {\n  display: block;\n  height: 10px;\n  width: 10px;\n}\n\n/* the track background */\n.overview-panel.overview-content::-webkit-scrollbar-track-piece,\n.lightbox-panel.lightbox-content::-webkit-scrollbar-track-piece {\n  background-color: #eee;\n}\n\n/* the scrollbar itself */\n.overview-panel .overview-content::-webkit-scrollbar-thumb,\n.lightbox-panel .lightbox-content::-webkit-scrollbar-thumb {\n  background-color: #666;\n  height: 50px;\n  width: 50px;\n}\n\n.overview-panel.start .overview-content:not(:hover)::-webkit-scrollbar-thumb,\n.lightbox-panel.start .lightbox-content:not(:hover)::-webkit-scrollbar-thumb {\n  background-color: #eee;\n}\n\n.overview-panel .overview-content::-webkit-scrollbar-thumb:hover,\n.lightbox-panel .lightbox-content::-webkit-scrollbar-thumb:hover {\n  background-color: #333;\n  height: 50px;\n  width: 50px;\n}\n\n{/template:OverviewCSS}\n\n{template:ViewItemCSS}\n\nbody.viewitem-open {\n  overflow: hidden;\n}\n\n/* Ensure header drawer is visible. */\nbody.viewitem-open #header .header-drawer {\n  margin-top: 0px;\n  position: fixed;\n  top: 65px; /* animate back down to full unscrolled height */\n}\n\n/* While open, don\'t highlight the view menu. */\nbody.viewitem-open #header #views .menu-heading {\n  color: {color:Menu Text alpha="0.6"} !important;\n}\n\nbody.viewitem-open #header #views .menu-heading .indicator {\n  border-color: {color:Menu Text alpha="0.6"} transparent transparent transparent !important;\n}\n\nbody.viewitem-open .blogger-clickTrap.singleton-element {\n  display: none;\n}\n\n.viewitem-panel {\n  bottom: 0;\n  border-top: solid 1px {color:Primary};\n  {css-box-sizing value="border-box"}\n  left: 0;\n  margin-top: 0;\n  position: fixed;\n  right: 0;\n  top: 100px;\n  {css-transition value="margin-top 1s ease-in-out, bottom 1s ease-in-out"}\n  z-index: 999; /* Way up in the air. */\n}\n\n.viewitem-panel.new,\n.viewitem-panel.closing {\n  margin-top: -100%;\n  bottom: 100%;\n}\n\n/* Bounding box of our overview item. */\n.viewitem-panel .viewitem-wrap {\n  background-color: white;\n  {css-box-sizing value="border-box"}\n  height: 100%;\n  left: 0;\n  margin: 0;\n  overflow: hidden;\n  position: relative;\n  z-index: 9999;\n}\n\n/* Header section for the overview-inner. */\n.viewitem-panel .viewitem-header {\n  {css-box-sizing value="border-box"}\n  height: 50px;\n  padding: 10px;\n  position: absolute;\n  top: 0px;\n  z-index: 5;\n  width: 100%;\n}\n\n/* This is the box that things can be draw in. */\n.viewitem-panel .viewitem-inner {\n  bottom: 0px;\n  {css-box-sizing value="border-box"}\n  height: 100%;\n  overflow-y: scroll;\n  padding: 30px 0px;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n/* This allows us to be cute with continuous backgrounds */\n.viewitem-panel .viewitem-background {\n  background-color: {color:Background};\n  {block:image:Background}\n  background-image: url({image:Background});\n  background-position: left top;\n  background-repeat: no-repeat;\n  {/block:image:Background}\n  {block:text:BodyBackgroundCSS}\n  background: {text:BodyBackgroundCSS}; /* Override everything. */\n  background-color: {color:Background};\n  {/block:text:BodyBackgroundCSS}\n  background-attachment: scroll; /* Chrome, really? */\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  top: -100px; /* This should be the height of the header. */\n  width: 100%;\n}\n\n/* overview container where we put the real stuff. */\n.viewitem-panel .viewitem-content {\n  background-color: white;\n  background-clip: padding-box;\n  /* TODO(kiyono): re-enable box-shadow when the performance of box-shadow */\n  /* gets better.                                                          */\n  {block:browser:msie}\n  /* IE9 and IE10 don\'t support border-image */\n  {css-box-shadow value="0px 0px 2px 1px #ccc"}\n  {/block:browser:msie}\n  {block:IfNotbrowser:msie}\n  {css-border-image value="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAANUlEQVQIW2NkYGBgQ8JAJsMvEGYEEjxQzA0SBYKvQPwFJCEExIJAfBcqoQyk3+OVwGkUVssBP4wMT0ZBZV0AAAAASUVORK5CYII=) 2 / 2px repeat"}\n  border-width: 2px;\n  {/block:IfNotbrowser:msie}\n  padding: 20px 70px;\n  left: 8px; /* Align it with classic in center - why is ther an offset? */\n  max-width: 750px;\n  margin: 0px auto;\n  position: relative;\n}\n\n.viewitem-panel .article {\n  background-color: white; /* Chrome12+ anti-aliasing bug. */\n}\n\n.viewitem-panel button.close {\n  margin-right: 10px;\n}\n\n.viewitem-panel .blogger-gear {\n  position: absolute;\n  left: 50%;\n  margin-left: -47px;\n  margin-top: -47px;\n  top: 50%;\n}\n\n{/template:ViewItemCSS}\n{template:PostCSS}\n\n/* Styles here should be minimized to limit amount of explicit casing. */\n\n.article {\n  font-size: 14px;\n  margin: 0 auto;\n  max-width: 750px;\n  position: relative;\n  word-wrap: break-word;\n}\n\n/* Post Header */\n\n.article .article-header {\n  display: table;\n  text-align: center;\n  width: 100%;\n}\n\n.article .article-header .title {\n  font-size: 20px;\n  font-family: {font:Post Title};\n  width: 100%;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  padding-right: 40px; /* Compensate for ribbon, to stay centered. */\n}\n\n.article .title .edit {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA+UlEQVR42s3U2QmDQBAG4JRgKZbio4qieIAniniiYgkpwRIsISVYQkqwhMlMiHkIhITNhGRgYNeHz/1xncPhn0pV1dkwjNW2bYkNRAzCMIQ4jj+HdzBJEmiaBtq2hSzLxOFHcBgGGMcRuq4Tg5+Be9/gmQ2kxmdrnucSG9j3/TxNEy/IGvl3oKIokqZpC+sJdV1fHceBNE2vl5oDlC3LInBjAakw9tF13TPeNRljbwh8BlKZpnnGAXGkdRRFclEUd1gIpOj0cQijPa6VIAhOdV2LgXt03/cBoy8Ib57n0QvWsixz4XFG0XEuQlVVC8a23/6HX6A80DfrAlIMSJorw8fYAAAAAElFTkSuQmCC);\n  background-repeat: no-repeat;\n  background-position: center center;\n  cursor: pointer;\n  display: inline-block;\n  height: 21px;\n  opacity: 0.8;\n  position: relative;\n  top: 3px;\n  width: 21px;\n}\n\n.article .title .edit:hover {\n  opacity: 1;\n}\n\n.article .article-header .date {\n  float: left;\n  left: 0px;\n  margin: 0px 5px 5px 0px;\n  position: relative;\n  top: 5px;\n}\n\n/* Post Content */\n\n.article .article-content {\n  clear: both;\n  color: {color:Text};\n  line-height: 1.4;\n  margin-top: 10px;\n  margin: 10px auto 5px auto;\n  text-align: justify;\n}\n\n/* This shouldn\'t really be added at all... it is from feeds. */\n.article .article-content .blogger-post-footer {\n  display: none;\n}\n\n/* Restore a lot of the styles we reset globally. */\n.article-content ol {\n  list-style-type: decimal;\n  margin: 0.5em 0;\n  padding-left: 2em;\n}\n.article-content ul {\n  list-style-type: disc;\n  margin: 0.5em 0;\n  padding-left: 2em;\n}\n\n.article-content p {\n  margin: 1em 0;\n}\n\n/* Defaults from: http://www.w3.org/TR/CSS2/sample.html */\n.article-content h1,\n.article-content h2,\n.article-content h3,\n.article-content h4,\n.article-content h5,\n.article-content h6 {\n  font-weight: bolder;\n}\n.article-content h1 {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.article-content h2 {\n  font-size: 1.5em;\n  margin: .75em 0;\n}\n.article-content h3 {\n  font-size: 1.17em;\n  margin: .83em 0;\n}\n.article-content h4 {\n  margin: 1.12em 0;\n}\n.article-content h5 {\n  font-size: .83em;\n  margin: 1.5em 0;\n}\n.article-content h6 {\n  font-size: .75em;\n  margin: 1.67em 0;\n}\n\n.article .article-content a {\n  display: inline;\n}\n\n.article .article-content img {\n  {css-box-sizing value="border-box"}\n  display: inline-block;\n  height: auto;\n  margin: 10px auto; /* Attempt to horizontally center. */\n  /* For Sally-Anne. Keep images to the width of the post. */\n  /* It\'s needed to avoid IE because of b/5420328 */\n  {block:IfNotbrowser:msie}\n  max-width: 100%;\n  {/block:IfNotbrowser:msie}\n}\n\n.article .article-content img:not(.deferred) {\n  padding: 8px;\n  /* TODO(kiyono): re-enable box-shadow when the performance of box-shadow */\n  /* gets better.                                                          */\n  {block:browser:msie}\n  /* IE9 and IE10 don\'t support border-image */\n  background-color: white;\n  border: 1px solid #ccc;\n  {css-box-shadow value="0 0 15px rgba(0, 0, 0, 0.2)"}\n  {/block:browser:msie}\n  {block:IfNotbrowser:msie}\n  {css-border-image value="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAOVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///+8yHYvAAAAEnRSTlMAAgEDBAUJBwYzCw0UChARDghnBteEAAAAhElEQVR4XnWRSxJDIQgEEx1Axd/L/Q8bKCuuyOzsohHxdZLS25LSOV2ULQdflgEiIDu9KqiIFILXXpeEx2ChXwdnKNxUGxc4dZbNfXjPufkp5H0Nwtymq/dltUIweNy9qmXt08EgydDZ6+dT+9Qh9AeGenhROFI0fPjMaCHx6uIlh9/xBSJuB3l0A/6JAAAAAElFTkSuQmCC) 9 / 9px stretch"}\n  border-width: 9px;\n  {/block:IfNotbrowser:msie}\n}\n\n/* Resize all images/videos in posts. */\n.article .article-content iframe,\n.article .article-content embed {\n  display: inline-block;\n  /* It\'s needed to avoid IE because of b/5420328 */\n  {block:IfNotbrowser:msie}\n  max-width: 100%;\n  {/block:IfNotbrowser:msie}\n}\n\n/* Post Footer */\n\n.article .article-footer {\n  clear: both;\n  text-align: center;\n}\n\n.article .article-footer .publish-info,\n.article .article-footer .geolocation-info,\n.article .article-footer .labels {\n  color: {color:Text lighten="30%"};\n  font-family: {font:Text};\n  padding: 5px 0;\n}\n\n.article .article-footer .publish-info .author a,\n.article .article-footer .publish-info .time {\n  color: {color:Text};\n}\n\n.article .article-footer .label:not(:last-child):after {\n  content: \',\';\n}\n\n.article .article-footer .share-controls {\n  display: inline-block;\n  margin: 10px 5px;\n  text-align: center;\n}\n\n/* AdSense */\n\n.article.has-ads {\n  padding-right: 220px;\n  min-height: 650px; /* To accomodate skyscraper */\n}\n\n.article .adsense-aside {\n  padding: 15px 5px 0 5px;\n  position: absolute;\n  right: 5px;\n  text-align: center;\n  top: 5px;\n  width: 200px;\n}\n\n.article .adsense-footer .adsense {\n  margin-top: 10px;\n  padding: 10px 0;\n}\n\n{/template:PostCSS}\n{template:PrintCSS}\n\n@media print {\n  /* Printing on white is cleaner. */\n  .article {\n    background-color: white !important;\n    margin: 0 !important;\n  }\n  .article img {\n    border: none !important;\n    box-shadow: none !important;\n  }\n\n  .ribbon.date .ribbon-piece {\n    display: none;\n  }\n  .ribbon.date {\n    display: inline-block;\n    height: 100%;\n    margin: 0 !important;\n    padding: 0;\n    position: static !important;\n    top: 0;\n    white-space: nowrap;\n    width: auto;\n  }\n  .ribbon.date:after{\n    content: attr(title);\n    color: {color:Post Title};\n    font-size: 20px;\n  }\n\n  /* Include the links to all anchors */\n  .article-content a:after {\n    content: " [" attr(href) "] ";\n    font-size: 90%;\n  }\n\n  /* Fix printing for the viewitem --------------------------------- */\n\n  /* Hide lots of things. */\n  .overview-open > *,\n  .overview-backdrop,\n  .overview-header,\n  .share-controls,\n  .adsense-aside,\n  .adsense-aside {\n    display: none !important;\n  }\n\n   /* Show the main content. */\n  .overview-open > #overview {\n    display: block !important;\n  }\n\n   /* Reset colors, padding, and positions. */\n  body.overview-open,\n  .overview-panel,\n  .overview-wrap,\n  .overview-inner,\n  .overview-content {\n    background-color: white !important;\n    border: none !important;\n    box-shadow: none !important;\n    margin: 0 !important;\n    overflow: visible !important;\n    padding: 0 !important;\n    position: static !important;\n  }\n   /* Ensure content positioned - but keep padding. */\n  .overview-panel .overview-content {\n    position: static !important;\n  }\n\n  /* Fix printing for the viewitem --------------------------------- */\n\n  /* Hide lots of things. */\n  .viewitem-open > *,\n  .viewitem-background,\n  .viewitem-header,\n  .share-controls {\n    display: none !important;\n  }\n\n   /* Show the main content. */\n  .viewitem-open > .viewitem-panel {\n    display: block !important;\n  }\n\n   /* Reset colors, padding, and positions. */\n  body.viewitem-open,\n  .viewitem-panel,\n  .viewitem-wrap,\n  .viewitem-inner,\n  .viewitem-content {\n    background-color: white !important;\n    border: none !important;\n    box-shadow: none !important;\n    margin: 0 !important;\n    overflow: visible !important;\n    padding: 0 !important;\n    position: static !important;\n  }\n\n   /* Ensure content positioned - but keep padding. */\n  .viewitem-panel .viewitem-content {\n    position: static !important;\n  }\n\n  /* View specific (eg Sidebar and Mosaic) fixes should go elsewhere */\n}\n\n{/template:PrintCSS}\n');
    blogger.templates().template("CustomCSS", "");
    blogger.templates().template("ViewCSS", "");
    var t = $.inherit(blogger.core.view);
    t.prototype.modules = [blogger.modules.ViewLightbox];
    t.prototype.o = function() {
        var a = $("head #css");
        a.length || this.bind(this.ui, "templatechange", $.proxy(this.o, this));
        a.remove();
        $("head").append('<style id="css">' + this.template("CSS") + "</style>")
    };
    t.prototype.log = function(a) {
        var b = window.console;
        b && b.log && b.log(a)
    };
    blogger.templates().compile('/* Copyright 2011 Google Inc. All Rights Reserved. */\n{template:ViewCSS}\n\nbody {\n  overflow-y: scroll; /* inevitable... skip the jitter */\n  overflow-x: hidden;\n}\n\n#main {\n  margin: 15px 15px;\n  min-width: 300px;\n  position: relative;\n}\n\n#content {\n  position: relative;\n}\n\n/* the 3d flip animations/transitions */\n.item {\n  /* give some perspective so not so flat */\n  background-color: transparent; /* Have something! Need to capture clicks. */\n  cursor: pointer;\n  {css-crossbrowser property="perspective" value="1000"}\n  z-index: 1;\n}\n{block:IfNotTablet}\n.card {\n  {css-crossbrowser property="transform-style" value="preserve-3d"}\n  {css-transition value="0.3s linear"}\n}\n\n.card:hover {\n  /* make the timing different so the cards don\'t look in sync */\n  {css-transition value="0.5s linear"}\n}\n\n.front, .back {\n  {css-crossbrowser property="backface-visibility" value="hidden"}\n  position: absolute;\n}\n\n.item.ad .front {\n  {css-crossbrowser property="backface-visibility" value="visible"}\n}\n\n.item:hover {\n  z-index: 10 !important;\n}\n\n.item .front {\n  z-index: 10;\n}\n\n.item:hover .front {\n  z-index: 0;\n}\n\n.item:hover .back {\n  z-index: 10;\n}\n\n/* At the hover state we want to rotate the card 180 degrees */\n.item:hover .card {\n  {css-transform value="rotateY(180deg)"}\n}\n.item:hover .card.flipLeft {\n {css-transform value="rotateY(-180deg)"}\n}\n.item:hover .card.flipUp {\n  {css-transform value="rotateX(180deg)"}\n}\n.item:hover .card.flipDown {\n  {css-transform value="rotateX(-180deg)"}\n}\n.item .card .back {\n  {css-transform value="rotateY(180deg)"}\n}\n.card.flipLeft .back {\n  {css-transform value="rotateY(-180deg)"}\n}\n.card.flipUp .back {\n  {css-transform value="rotateX(180deg)"}\n}\n.card.flipDown .back {\n  {css-transform value="rotateX(-180deg)"}\n}\n\n.item.ad:hover .card {\n  {css-transform value="rotateY(360deg)"} /* Don\'t want ad mirrored */\n}\n{/block:IfNotTablet}\n/* the individual tile styles */\n\n.items .item {\n  {css-box-sizing value="border-box"}\n  position: absolute;\n  /* Could use "all 1.2s ease-out" but only FireFox seems to animate size smoothly.\n     It looks better to snap height/width, and then animate position and opacity. */\n  {css-transition value="left 1.2s ease-out, top 1.2s ease-out, opacity 1.2s ease-out"}\n}\n\n.items .item.new,\n.items .item.filtered {\n  opacity: 0;\n  /*visibility: hidden !important; Beware: Safari doesn\'t like animating visibility. */\n}\n\n.items .item .card {\n  border: solid 1px #ccc;\n  {css-box-sizing value="border-box"}\n  height: 100%;\n  width: 100%;\n}\n\n.items .item .card .front,\n.items .item .card .back {\n  background-color: #ddd;\n  {css-crossbrowser property="background-size" value="cover"}\n  {css-box-sizing value="border-box"}\n  height: 100%;\n  overflow: hidden;\n  width: 100%;\n}\n\n.items .item:hover .card {\n  cursor: pointer;\n}\n\n.items .item .card .back {\n  background: #333;\n  color: white;\n  height: 100%;\n  width: 100%;\n}\n\n.items .item .card .back .reblog-badge {\n  position: relative;\n  top: 3px;\n}\n\n.items .item .card .front .overlay {\n  display: table;\n  height: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n  width: 100%;\n}\n\n.items .item .card .front .title {\n  display: table-cell;\n  font-size: 14px;\n  padding: 4px;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.items .item .front .title {\n  color: #666;\n  font-size: 14px;\n}\n\n.items .item .summary {\n  background-color: white;\n  border-radius: 4px;\n  color: black;\n  display: none; /* Disable summaries. */\n  font-size: 12px;\n  left: -10px;\n  margin-top: 0;\n  max-height: 200px;\n  opacity: 0;\n  overflow: visible;\n  padding: 10px;\n  position: absolute;\n  text-overflow: ellipsis;\n  top: 90%;\n  visibility: hidden;\n  width: 150px;\n}\n\n.items .item:hover .summary {\n  cursor: pointer;\n  margin-top: 7px; /* bounce */\n  opacity: 0.9;\n  {css-transition value="all 0.5s ease-in-out"}\n  {css-transition-delay value="1.4s"}\n  visibility: visible;\n  z-index: 99;\n}\n\n.items .item .summary .teaser {\n  border-color: transparent transparent white transparent;\n  border-style: solid;\n  border-width: 7px;\n  height: 0;\n  left: 25px;\n  position: absolute;\n  top: -12px;\n  width: 0;\n  z-index: 1;\n}\n\n.overlay .title,\n.overlay .date {\n  {css-box-sizing value="border-box"}\n  display: block;\n  margin: 5px 5px 0 5px;\n  max-width: 95%;\n  overflow: hidden;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.overlay .title {\n  color: white;\n  font-size: 14px;\n  height: 34px;\n  margin-top: 10px;\n  max-height: 34px;\n  vertical-align: bottom;\n  white-space: normal;\n}\n\n.overlay .date {\n  color: #999;\n  font-size: 14px;\n  margin-top: 2px;\n}\n\n.overlay .comments-count {\n  display: block;\n  margin: 12px auto 0 auto;\n}\n\n.overlay .comments-count.hidden {\n  display: block;\n  visibility: hidden; /* so that still position rest correctly */\n}\n\n{block:IfNotTablet}\n/* when a tile is grouped (small) don\'t show much on the back */\n.item.grouped .front .overlay .title {\n  font-size: 70% !important;\n}\n\n.item.grouped .back .overlay .title,\n.item.grouped .back .overlay .comments-count {\n  display: none;\n}\n\n/* hide the title and comment count, show the date */\n.item.grouped .back .overlay .date {\n  padding-top: 5px;\n  white-space: normal;\n}\n\n#labels {\n  left: 13px;\n}\n\n.grouped #content {\n  margin-left: 175px;\n}\n\n#labels .group-label,\n#labels .group-label a,\n#labels .group-label span {\n  padding: 10px 20px 0 0;\n}\n{/block:IfNotTablet}\n\n{block:IfTablet}\n.card .front .overlay {\n  position: relative;\n}\n\n.overlay .noflip-bar {\n  background-color: #5a5a5a;\n  color: #eee;\n  height: 21px;\n  left: 0;\n  position: absolute;\n  top: 102px;\n  width: 100%;\n}\n\n.overlay .transparent {\n  background-color: black;\n  opacity: 0.6;\n}\n\n.overlay .noflip-date {\n  color: #eee;\n  font-size: 13px;\n  left: 0;\n  padding: 3px;\n  position: absolute;\n  top: 101px;\n}\n\n.overlay .noflip-comment {\n  color: #eee;\n  font-size: 13px;\n  left: 107px;\n  padding: 3px;\n  position: absolute;\n  top: 101px;\n}\n\n.overlay .noflip-bubble {\n  background-color: lightgrey;\n  border: solid 1px lightgrey;\n  border-radius: 3px;\n  display: inline-block;\n  left: 89px;\n  height: 5px;\n  padding: 2px 0;\n  position: absolute;\n  top: 106px;\n  width: 13px;\n}\n.overlay .noflip-bubble-tail {\n  border-color: transparent transparent transparent lightgrey;\n  border-style:solid;\n  border-width: 5px;\n  bottom: -5px;\n  left: 74%;\n  margin-left: -8px;\n  position: absolute;\n}\n{/block:IfTablet}\n\n.item.grouped .front .overlay .title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#labels {\n  overflow: visible;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  {css-transition value="all 0.5s ease-in-out"}\n  /*visibility: hidden; Beware: Safari hates: breaks all transitions. */\n  width: 162px;\n}\n\n.grouped #labels {\n  opacity: 1;\n  visibility: visible;\n}\n\n#labels .group-label,\n#labels .group-label a,\n#labels .group-label span {\n  {css-box-sizing value="border-box"}\n  color: #333;\n  font-size: 14px;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n{block:IfTablet}\n#labels .group-label,\n#labels .group-label a,\n#labels .group-label span {\n  color: rgba(51, 51, 51, 0.9);\n  font-size: 18px;\n}\n{/block:IfTablet}\n\n/* the links for categories */\n\n#controls {\n  font-family: {font:Menu};\n  left: 1px;\n  overflow: visible;\n  position: absolute;\n  top: -45px;\n  z-index: 100;\n}\n\n#controls:focus,\n#controls:active {\n  outline: none;\n}\n\n#controls ul#groups {\n  display: none;\n  float: left;\n  opacity: 0.8;\n}\n\n#controls ul#groups li {\n  background-color: #f5f5f5;\n  {css-linear-gradient from="#f5f5f5" to="#f1f1f1"}\n  border: 1px solid #ccc;\n  color: rgba(0, 0, 0, 0.75);\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  font-size: 13px;\n  font-weight: bold;\n  height: 27px;\n  line-height: 27px;\n  margin-left: -1px;\n  padding: 0 15px;\n  text-align: center;\n  width: 50px;\n  {css-transition value="background-color 0.4s ease-in"}\n}\n\n#controls ul#groups li.selected {\n  background-color: #eee;\n  {css-linear-gradient from="#eee" to="#e0e0e0"}\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  color: #000;\n}\n\n#controls ul#groups li:hover:not(.selected) {\n  background-color: #f8f8f8;\n  {css-linear-gradient from="#f8f8f8" to="#f1f1f1"}\n  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 1px 0;\n  color: #000;\n}\n\n.space {\n  height: 25px;\n  margin: 0 0 -25px 0;\n}\n\n{/template:ViewCSS}\n\x3c!-- Expected scope: Blog --\x3e\n{template:Main}\n{Header}\n{EmptyMessage}\n<div id="main" tabindex="0">\n  {Controls}\n  <div id="labels" class="group-labels"></div>\n  <div id="content" class="items hfeed"></div>\n</div>\n{GadgetDock}\n{Loading}\n{MiscHidden}\n{AttributionContainer}\n{/template:Main}\n\n\x3c!-- Expected scope: Blog --\x3e\n{template:Controls}\n<div id="controls">\n  <ul id="groups">\n    <li class="group selected" data-category="none" title="{lang:Recent}">{lang:Recent}</li>\n    <li class="group" data-category="published" title="{lang:Group by date}">{lang:Date}</li>\n    {block:PlusID}\n    <li class="group" data-category="service" title="{lang:Group by service}">{lang:Service}</li>\n    {/block:PlusID}\n    {block:BlogID}\n    <li class="group" data-category="tag" title="{lang:Group by label}">{lang:Label}</li>\n    <li class="group" data-category="author" title="{lang:Group by author}">{lang:Author}</li>\n    {/block:BlogID}\n  </ul>\n</div>\n{/template:Controls}\n\n\x3c!-- Expected scope: Post --\x3e\n{template:Item}\n<div class="item hentry {TagsAsClasses}" itemscope itemtype="http://schema.org/BlogPosting">\n  <div class="card {setting:direction}">\n    <div class="front" style="{block:PhotoURL}background-image: url(\'{PhotoURL size=\'{size:thumbnail}\' square=\'true\'}\');{/block:PhotoURL}">\n      <div class="overlay">\n        {block:IfNotPhotoURL}\n        <div class="title entry-title" itemprop="name">{HTMLEscapedTitle}</div>\n        {/block:IfNotPhotoURL}\n        {block:IfTablet}\n        <div class="noflip-bar {block:PhotoURL}transparent{/block:PhotoURL}"></div>\n        <p class="noflip-date">{ShortMonth} {DayOfMonth}{DayOfMonthSuffix}</p>\n        {block:IfCommentCount}\n        <p class="noflip-comment">{Post.CommentCount}</p>\n        <span class="noflip-bubble">\n          <span class="noflip-bubble-tail"></span>\n        </span>\n        {/block:IfCommentCount}\n        {/block:IfTablet}\n      </div>\n    </div>\n    {block:IfNotTablet}\n    <div class="back">\n      <div class="overlay">\n        <div class="title entry-title" itemprop="name">{ReblogBadge}{HTMLEscapedTitle}</div>\n        <abbr class="date published" title="{ISO8601}" itemprop="datePublished">{ShortMonth} {DayOfMonth}{DayOfMonthSuffix}</abbr>\n        {block:Comments}\n        {CommentBubble}\n        {/block:Comments}\n        {block:IfNotComments}\n        <span class="comments-count hidden"></span>\n        {/block:IfNotComments}\n      </div>\n    </div>\n    {/block:IfNotTablet}\n  </div>\n  {block:Summary}\n  <span class="summary entry-summary" itemprop="description">\n    <div class="snippet">{Summary}</div>\n    <div class="teaser"></div>\n  </span>\n  {/block:Summary}\n  <div class="space"></div>\n</div>\n{/template:Item}\n\n{template:GroupLabel}\n<div class="group-label {TagAsClass}">\n  {block:TagURL}<a href="{TagURL}">{Tag}</a>{/block:TagURL}\n  {block:IfNotTagURL}<span>{Tag}</span>{/block:IfNotTagURL}\n</div>\n{/template:GroupLabel}\n\n\x3c!-- Expected scope: Any --\x3e\n{template:Ad}\n{block:HasAdsense}\n<div class="item ad">\n  <div class="card {setting:direction}">\n    <div class="front">\n      <div class="overlay">\n        <div style="width: {size:thumbnail}px; height: {size:thumbnail}px;">\n          {Adsense}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n{/block:HasAdsense}\n{/template:Ad}\n');

    function v() {
        this.base();
        this.m = 0
    }
    $.inherit(v, t);
    blogger.ui().register(v);
    r = v.prototype;
    r.defaults = {
        name: "flipcard",
        size: 125,
        groupedSize: 50,
        spacing: 5,
        groupSpacing: 25,
        groupedSizeTablet: 125,
        groupSpacingTablet: 60,
        labelGroupSpacing: 0,
        labelGroupSpacingTablet: 30,
        offset: 0,
        pageSize: 25,
        randomizeFlip: !1,
        animateLoad: !0,
        animateStyle: "stagger",
        showAds: !1,
        itemsPerAd: 15
    };
    r.scope = function(a) {
        a.scope("size:thumbnail", this.settings.size);
        this.settings.randomizeFlip && a.scope("setting:direction", ["flipLeft", "flipRight", "flipUp", "flipDown"][Math.floor(4 * Math.random())])
    };
    r.onPreInit = function() {
        this.ui.addModule(new blogger.modules.Overview)
    };
    r.onInitComplete = function() {
        this.ui.settings.headless && (this.settings.animateLoad = !1);
        $("head style").not(".singleton-element").remove();
        this.o();
        var a = $("body");
        a.children().not(".singleton-element, #injected-iframe").remove();
        a.append(this.template("Main"));
        a.toggleClass("instant", 1 == this.ui.settings.headless);
        this.ui.notify("updated");
        x(this);
        this.f = $("#controls");
        this.f.click($.proxy(this.u, this));
        this.ui.select()
    };
    r.onRender = function(a) {
        if (a) {
            var b = this,
                c = $(".items"),
                k = c.find(n).length,
                l = k,
                m = [];
            $.each(a, function(a, d) {
                d = $(b.template("Item", d)).not(":text").attr("data-id", d.id);
                var c = y(b, k++);
                d.css(c);
                d.css({
                        width: b.settings.size,
                        height: b.settings.size
                    });
                m.push(d[0]);
                if (b.settings.animateLoad) {
                    c = $(window).width();
                    var l = $(window).height(),
                        e = d ? {
                            left: parseInt(d.css("left"), 10),
                            top: parseInt(d.css("top"), 10)
                        } : y(b, a);
                    "chaos" == b.settings.animateStyle ? (a = [
                            [-1, 0],
                            [1, 0],
                            [0, 1]
                        ][Math.floor(3 * Math.random())], e.left += a[0] *
                        c, e.top += a[1] * l) : "columns" == b.settings.animateStyle ? e.left += c * (0 == a % 2 ? 1 : -1) : "stagger" == b.settings.animateStyle && (e.left = e.left + c + b.settings.size * a);
                    d && d.css(e);
                    d.addClass("new")
                }
                b.settings.showAds && ++b.m >= b.settings.itemsPerAd && (a = $(b.template("Ad")).not(":text"), a.length && (y(b, k++, a), m.push(a[0]), b.m = 0))
            });
            c.append($(m));
            b.settings.animateLoad && setTimeout(function() {
                $.each(m, function(a, c) {
                    y(b, l + a, $(c).removeClass("new"))
                })
            }, 0)
        }
    };
    r.needMore = function() {
        var a = y(this, $(".items .item").length).top - $(window).height() - $(window).scrollTop();
        return this.settings.scrollBuffer >= a
    };

    function x(a) {
        a.settings.columnWidth = a.settings.size + a.settings.spacing;
        a.settings.rowHeight = a.settings.size + a.settings.spacing;
        var b = $(".items").innerWidth();
        a.settings.numColumns = Math.max(1, Math.floor(b / a.settings.columnWidth))
    }
    r.onResize = function() {
        x(this);
        clearTimeout(this.v);
        this.v = setTimeout($.proxy(this.w, this), 500)
    };
    r.w = function() {
        this.c ? ($(".cloned").remove(), A(this)) : F(this)
    };

    function y(a, b, c) {
        var k = b % a.settings.numColumns,
            l = k * a.settings.columnWidth;
        b = Math.floor(b / a.settings.numColumns) * a.settings.rowHeight;
        k % 2 && (b += a.settings.offset);
        c && c.css({
                left: l,
                top: b
            });
        return {
            left: l,
            top: b
        }
    }
    r.onFilter = function(a) {
        this.i = !0;
        G(this);
        var b = $.map(a, function(a) {
            return a.id
        });
        $(n).each(function() {
            $(this).toggleClass(p, !(0 <= $.inArray($(this).attr("data-id"), b)))
        });
        $("html,body").stop().animate({
                scrollTop: 0
            });
        H(this)
    };
    r.onClearFilter = function() {
        $(n).removeClass(p);
        this.i = !1;
        G(this);
        H(this)
    };
    r.u = function(a) {
        var b = $(a.target).attr("data-category");
        b && b != this.j && this.f && (this.f.find(".group").removeClass("selected"), $(a.target).parents().andSelf().filter(".group").addClass("selected"), this.j = b, H(this))
    };

    function H(a) {
        $(".cloned").css({
                left: 0,
                top: 0
            }).fadeOut(1500, function() {
                $(this).remove()
            });
        a.settings.showAds && $(".items .ad").addClass(p);
        var b = $(n).not(".ad"),
            c = $.map(a.data.items(), function(a, c) {
                if (!b.eq(c).is(f)) return a
            });
        a.c = blogger.tools.categorizer.group(c, a.j);
        G(a);
        $("#main").toggleClass("grouped", null != a.c);
        $("#labels").empty();
        a.c ? A(a) : (a.settings.showAds && $(".items .ad").removeClass(p), F(a))
    }

    function G(a) {
        a.preventMore(!(!a.c && !a.i))
    }

    function F(a) {
        $(n).not(f).each(function(b, c) {
            b = y(a, b);
            b = {
                left: b.left,
                top: b.top,
                width: a.settings.size,
                height: a.settings.size
            };
            $(c).removeClass("grouped").css(b)
        })
    }

    function A(a) {
        var b = a.data.settings.is_tablet,
            c = b ? a.settings.groupedSizeTablet : a.settings.groupedSize,
            k = b ? a.settings.groupSpacingTablet : a.settings.groupSpacing,
            l = b ? a.settings.labelGroupSpacingTablet : a.settings.labelGroupSpacing,
            m = c + a.settings.spacing,
            z = c + a.settings.spacing,
            d = $(".items").innerWidth();
        d = Math.max(1, Math.floor(d / m));
        var q = 0,
            u = 0;
        if (!b) {
            for (var e = 0, g; g = a.c[e]; e++) q = Math.max(q, g.count());
            u = Math.max(1, Math.ceil(q / d))
        }
        q = $(n).not(f);
        $("#labels").empty();
        var B = 0,
            C = 0,
            I = {}, J = $("#content");
        for (e =
            0; g = a.c[e]; e++) {
            for (var h = 0, w; w = g.items()[h]; h++) {
                var D = {
                    left: (b ? h % d : Math.floor(h / u)) * m,
                    top: (B + (b ? Math.floor(h / d) : h % u)) * z + C + l,
                    width: c,
                    height: c
                }, E = q.eq(w.index).addClass("grouped");
                "tag" == a.j ? I[w.index] ? E.clone().addClass("cloned").css(D).fadeIn("fast").appendTo(J) : (I[w.index] = !0, E.css(D)) : E.css(D)
            }
            h = b ? Math.ceil(g.count() / d) : Math.min(g.count(), u);
            $(a.template("GroupLabel", {
                        Tag: a.ui.escapeHTML(a.ui.localize(g.caption)),
                        TagAsClass: $.asClasses(g.caption),
                        TagURL: g.url
                    })).css({
                    position: "absolute",
                    left: 0,
                    top: B * z + C,
                    "max-height": h * z
                }).appendTo("#labels");
            B += h;
            C += k
        }
    }
    r.onRenderComplete = function() {
        if (this.i) this.onClearFilter();
        H(this)
    };
}).call(this);// JavaScript Document
// ]]>
  </script>
        <b:else/>
          <script expr:src='data:blog.dynamicViewsScriptSrc + &quot;/js/sidebar.js&quot;' type='text/javascript'/>
        </b:if>
     <!-- </b:if> -->
    </b:if>
    <script expr:src='data:blog.dynamicViewsScriptSrc + &quot;/js/gadgets.js&quot;' type='text/javascript'/>
    <script expr:src='data:blog.dynamicViewsCommentsSrc'/>
    <b:include data='blog' name='google-analytics'/>
  </head>
  <body>
    <div class='content'>
      <div class='content-outer'>
        <div class='fauxborder-left content-fauxborder-left'>
          <div class='content-inner'>
            <div class='main-outer'>
              <div class='fauxborder-left main-fauxborder-left'>
                <div class='region-inner main-inner'>
                  <div class='columns fauxcolumns'>
                    <div class='column-center-outer'>
                      <div class='column-center-inner'>
                        <b:section class='main' id='main' showaddelement='no'>
                          <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog'>
                            <b:widget-settings>
                              <b:widget-setting name='showDateHeader'>true</b:widget-setting>
                              <b:widget-setting name='style.textcolor'>#666666</b:widget-setting>
                              <b:widget-setting name='showShareButtons'>true</b:widget-setting>
                              <b:widget-setting name='authorLabel'>By</b:widget-setting>
                              <b:widget-setting name='showCommentLink'>true</b:widget-setting>
                              <b:widget-setting name='style.urlcolor'>#000000</b:widget-setting>
                              <b:widget-setting name='showAuthor'>false</b:widget-setting>
                              <b:widget-setting name='disableGooglePlusShare'>true</b:widget-setting>
                              <b:widget-setting name='style.linkcolor'>#444444</b:widget-setting>
                              <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
                              <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
                              <b:widget-setting name='reactionsLabel'/>
                              <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
                              <b:widget-setting name='style.layout'>1x1</b:widget-setting>
                              <b:widget-setting name='showLabels'>true</b:widget-setting>
                              <b:widget-setting name='showLocation'>true</b:widget-setting>
                              <b:widget-setting name='showTimestamp'>true</b:widget-setting>
                              <b:widget-setting name='postsPerAd'>1</b:widget-setting>
                              <b:widget-setting name='showBacklinks'>false</b:widget-setting>
                              <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
                              <b:widget-setting name='showInlineAds'>false</b:widget-setting>
                              <b:widget-setting name='showReactions'>false</b:widget-setting>
                            </b:widget-settings>
                            <b:includable id='main' var='top'>
  <b:if cond='!data:mobile'>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.isDateStart and not data:post.isFirstPost'>
          &lt;/div&gt;&lt;/div&gt;
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-outer&quot;&gt;
        </b:if>
        <b:if cond='data:post.dateHeader'>
          <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-posts&quot;&gt;
        </b:if>
        <div class='post-outer'>
          <b:include data='post' name='post'/>
          <b:include cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}' data='post' name='comment_picker'/>
        </div>

        <!-- Ad -->
        <b:if cond='data:post.includeAd'>
          <div class='inline-ad'>
            <data:adCode/>
          </div>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;&lt;/div&gt;
      </b:if>
    </div>

    <!-- navigation -->
    <b:include name='nextprev'/>

    <!-- feed links -->
    <b:include name='feedLinks'/>

  <b:else/>
    <b:include name='mobile-main'/>
  </b:if>

  <b:include cond='data:top.showPlusOne' name='googlePlusBootstrap'/>
</b:includable>
                            <b:includable id='backlinkDeleteIcon' var='backlink'/>
                            <b:includable id='backlinks' var='post'/>
                            <b:includable id='comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <h4 id='comment-post-message'>
        <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'><data:postCommentMsg/></a></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <h4 id='comment-post-message'><data:postCommentMsg/></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
                            <b:includable id='commentDeleteIcon' var='comment'>
  <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
    <b:if cond='data:showCmtPopup'>
      <div class='goog-toggle-button'>
        <div class='goog-inline-block comment-action-icon'/>
      </div>
    <b:else/>
      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
        <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
      </a>
    </b:if>
  </span>
</b:includable>
                            <b:includable id='comment_count_picker' var='post'>
  <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
    <data:post.commentLabelFull/>:
  </a>
</b:includable>
                            <b:includable id='comment_picker' var='post'>
  <b:if cond='data:post.showThreadedComments'>
    <b:include data='post' name='threaded_comments'/>
  <b:else/>
    <b:include data='post' name='comments'/>
  </b:if>
</b:includable>
                            <b:includable id='comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
    <b:if cond='data:post.allowComments'>
      <h4><data:post.commentLabelFull/>:</h4>

      <b:if cond='data:post.commentPagingRequired'>
        <span class='paging-control-container'>
          <b:if cond='data:post.hasOlderLinks'>
            <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
              &#160;
            <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
              &#160;
          </b:if>

          <data:post.commentRangeText/>

          <b:if cond='data:post.hasNewerLinks'>
            &#160;
            <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
            &#160;
            <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
          </b:if>
        </span>
      </b:if>

      <div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
        <dl expr:class='data:post.avatarIndentClass' id='comments-block'>
          <b:loop values='data:post.comments' var='comment'>
            <dt expr:class='&quot;comment-author &quot; + data:comment.authorClass' expr:id='data:comment.anchorName'>
              <b:if cond='data:comment.favicon'>
                <img expr:src='data:comment.favicon' height='16px' style='margin-bottom:-2px;' width='16px'/>
              </b:if>
              <a expr:name='data:comment.anchorName'/>
              <b:if cond='data:blog.enabledCommentProfileImages'>
                <data:comment.authorAvatarImage/>
              </b:if>
              <b:if cond='data:comment.authorUrl'>
                <a expr:href='data:comment.authorUrl' rel='nofollow'><data:comment.author/></a>
              <b:else/>
                <data:comment.author/>
              </b:if>
              <data:commentPostedByMsg/>
            </dt>
            <dd class='comment-body' expr:id='data:widget.instanceId + data:comment.cmtBodyIdPostfix'>
              <b:if cond='data:comment.isDeleted'>
                <span class='deleted-comment'><data:comment.body/></span>
              <b:else/>
                <p>
                  <data:comment.body/>
                </p>
              </b:if>
            </dd>
            <dd class='comment-footer'>
              <span class='comment-timestamp'>
                <a expr:href='data:comment.url' title='comment permalink'>
                  <data:comment.timestamp/>
                </a>
                <b:include data='comment' name='commentDeleteIcon'/>
              </span>
            </dd>
          </b:loop>
        </dl>
      </div>

      <b:if cond='data:post.commentPagingRequired'>
        <span class='paging-control-container'>
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
            <data:post.oldestLinkText/>
          </a>
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
            <data:post.olderLinkText/>
          </a>
          &#160;
          <data:post.commentRangeText/>
          &#160;
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
            <data:post.newerLinkText/>
          </a>
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
            <data:post.newestLinkText/>
          </a>
        </span>
      </b:if>

      <p class='comment-footer'>
        <b:if cond='data:post.embedCommentForm'>
          <b:if cond='data:post.allowNewComments'>
            <b:include data='post' name='comment-form'/>
          <b:else/>
            <data:post.noNewCommentsText/>
          </b:if>
        <b:elseif cond='data:post.allowComments'/>
          <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
        </b:if>
      </p>
    </b:if>
    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

  </div>
</b:includable>
                            <b:includable id='feedLinks'>
  <b:if cond='data:blog.pageType != &quot;item&quot;'> <!-- Blog feed links -->
    <b:if cond='data:feedLinks'>
      <div class='blog-feeds'>
        <b:include data='feedLinks' name='feedLinksBody'/>
      </div>
    </b:if>

  <b:else/> <!--Post feed links -->
    <div class='post-feeds'>
      <b:loop values='data:posts' var='post'>
        <b:include cond='data:post.allowComments and data:post.feedLinks' data='post.feedLinks' name='feedLinksBody'/>
      </b:loop>
    </div>
  </b:if>
</b:includable>
                            <b:includable id='feedLinksBody' var='links'>
  <div class='feed-links'>
  <data:feedLinksMsg/>
  <b:loop values='data:links' var='f'>
     <a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'><data:f.name/> (<data:f.feedType/>)</a>
  </b:loop>
  </div>
</b:includable>
                            <b:includable id='iframe_comments' var='post'>
  <!-- G+ comments, no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
                            <b:includable id='mobile-index-post' var='post'>
  <div class='mobile-date-outer date-outer'>
    <b:if cond='data:post.dateHeader'>
      <div class='date-header'>
        <span><data:post.dateHeader/></span>
      </div>
    </b:if>

    <div class='mobile-post-outer'>
      <a expr:href='data:post.url'>
        <h3 class='mobile-index-title entry-title' itemprop='name'>
          <data:post.title/>
        </h3>

        <div class='mobile-index-arrow'>&amp;rsaquo;</div>

        <div class='mobile-index-contents'>
          <b:if cond='data:post.thumbnailUrl'>
            <div class='mobile-index-thumbnail'>
              <div class='Image'>
                <img expr:src='data:post.thumbnailUrl'/>
              </div>
            </div>
          </b:if>

          <div class='post-body'>
            <b:if cond='data:post.snippet'><data:post.snippet/></b:if>
          </div>
        </div>

        <div style='clear: both;'/>
      </a>

      <div class='mobile-index-comment'>
        <b:include cond='data:blog.pageType != &quot;static_page&quot;                          and data:post.allowComments                          and data:post.numComments != 0' data='post' name='comment_count_picker'/>
      </div>
    </div>
  </div>
</b:includable>
                            <b:includable id='mobile-main' var='top'>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <b:if cond='data:blog.pageType == &quot;index&quot;'>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-index-post'/>
        </b:loop>
      <b:else/>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-post'/>
        </b:loop>
      </b:if>
    </div>

   <b:include name='mobile-nextprev'/>
</b:includable>
                            <b:includable id='mobile-nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <div class='mobile-link-button' id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>&amp;lsaquo;</a>
      </div>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <div class='mobile-link-button' id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>&amp;rsaquo;</a>
      </div>
    </b:if>

    <div class='mobile-link-button' id='blog-pager-home-link'>
    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>
    </div>

    <div class='mobile-desktop-link'>
      <a class='home-link' expr:href='data:desktopLinkUrl'><data:desktopLinkMsg/></a>
    </div>

  </div>
  <div class='clear'/>
</b:includable>
                            <b:includable id='mobile-post' var='post'>
  <div class='date-outer'>
    <b:if cond='data:post.dateHeader'>
      <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
    </b:if>
    <div class='date-posts'>
      <div class='post-outer'>

        <div class='post hentry uncustomized-post-template' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
          <b:if cond='data:post.thumbnailUrl'>
            <meta expr:content='data:post.thumbnailUrl' itemprop='image_url'/>
          </b:if>
          <meta expr:content='data:blog.blogId' itemprop='blogId'/>
          <meta expr:content='data:post.id' itemprop='postId'/>

          <a expr:name='data:post.id'/>
          <b:if cond='data:post.title'>
            <h3 class='post-title entry-title' itemprop='name'>
              <b:if cond='data:post.link'>
                <a expr:href='data:post.link'><data:post.title/></a>
              <b:elseif cond='data:post.url and data:blog.url != data:post.url'/>
                <a expr:href='data:post.url'><data:post.title/></a>
              <b:else/>
                <data:post.title/>
              </b:if>
            </h3>
          </b:if>

          <div class='post-header'>
            <div class='post-header-line-1'/>
          </div>

          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
            <data:post.body/>
            <div style='clear: both;'/> <!-- clear for photos floats -->
          </div>

          <div class='post-footer'>
            <div class='post-footer-line post-footer-line-1'>
              <span class='post-author vcard'>
                <b:if cond='data:top.showAuthor'>
                  <b:if cond='data:post.authorProfileUrl'>
                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                      <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                      <a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                        <span itemprop='name'><data:post.author/></span>
                      </a>
                    </span>
                  <b:else/>
                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                      <span itemprop='name'><data:post.author/></span>
                    </span>
                  </b:if>
                </b:if>
              </span>

              <span class='post-timestamp'>
                <b:if cond='data:top.showTimestamp'>
                  <data:top.timestampLabel/>
                  <b:if cond='data:post.url'>
                    <meta expr:content='data:post.url.canonical' itemprop='url'/>
                    <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
                  </b:if>
                </b:if>
              </span>

              <span class='post-comment-link'>
                <b:include cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;}                                  and data:post.allowComments' data='post' name='comment_count_picker'/>
              </span>
            </div>

            <div class='post-footer-line post-footer-line-2'>
              <b:if cond='data:top.showMobileShare'>
                <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                  <a href='javascript:void(0);'><data:shareMsg/></a>
                </div>
              </b:if>
              <b:if cond='data:top.showDummy'>
                <div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
              </b:if>
            </div>

          </div>
        </div>

        <b:include cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}' data='post' name='comment_picker'/>
      </div>
    </div>
  </div>
</b:includable>
                            <b:includable id='nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <span id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
      </span>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <span id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
      </span>
    </b:if>

    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>

    <b:if cond='data:mobileLinkUrl'>
      <div class='blog-mobile-link'>
        <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
      </div>
    </b:if>

  </div>
  <div class='clear'/>
</b:includable>
                            <b:includable id='post' var='post'>
  <div class='post hentry uncustomized-post-template' itemprop='blogPost' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
    <b:if cond='data:post.firstImageUrl'>
      <meta expr:content='data:post.firstImageUrl' itemprop='image_url'/>
    </b:if>
    <meta expr:content='data:blog.blogId' itemprop='blogId'/>
    <meta expr:content='data:post.id' itemprop='postId'/>

    <a expr:name='data:post.id'/>
    <b:if cond='data:post.title'>
      <h3 class='post-title entry-title' itemprop='name'>
      <b:if cond='data:post.link or (data:post.url and data:blog.url != data:post.url)'>
        <a expr:href='data:post.link ? data:post.link : data:post.url'><data:post.title/></a>
      <b:else/>
        <data:post.title/>
      </b:if>
      </h3>
    </b:if>

    <div class='post-header'>
    <div class='post-header-line-1'/>
    </div>

    <!-- Then use the post body as the schema.org description, for good G+/FB snippeting. -->
    <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' expr:itemprop='(data:blog.metaDescription ? &quot;&quot; : &quot;description &quot;) + &quot;articleBody&quot;'>
      <data:post.body/>
      <div style='clear: both;'/> <!-- clear for photos floats -->
    </div>

    <b:if cond='data:post.hasJumpLink'>
      <div class='jump-link'>
        <a expr:href='data:post.url + &quot;#more&quot;' expr:title='data:post.title'><data:post.jumpText/></a>
      </div>
    </b:if>

    <div class='post-footer'>
    <div class='post-footer-line post-footer-line-1'>
      <span class='post-author vcard'>
        <b:if cond='data:top.showAuthor'>
          <data:top.authorLabel/>
            <b:if cond='data:post.authorProfileUrl'>
              <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                <a class='g-profile' expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                  <span itemprop='name'><data:post.author/></span>
                </a>
              </span>
            <b:else/>
              <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                <span itemprop='name'><data:post.author/></span>
              </span>
            </b:if>
        </b:if>
      </span>

      <span class='post-timestamp'>
        <b:if cond='data:top.showTimestamp'>
          <data:top.timestampLabel/>
          <b:if cond='data:post.url'>
            <meta expr:content='data:post.url.canonical' itemprop='url'/>
            <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
          </b:if>
        </b:if>
      </span>

      <span class='post-comment-link'>
        <b:include cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;}                          and data:post.allowComments' data='post' name='comment_count_picker'/>
      </span>

      <span class='post-icons'>
        <!-- email post links -->
        <b:if cond='data:post.emailPostUrl'>
          <span class='item-action'>
          <a expr:href='data:post.emailPostUrl' expr:title='data:top.emailPostMsg'>
            <img alt='' class='icon-action' height='13' src='https://resources.blogblog.com/img/icon18_email.gif' width='18'/>
          </a>
          </span>
        </b:if>

        <!-- quickedit pencil -->
        <b:include data='post' name='postQuickEdit'/>
      </span>

      <!-- share buttons -->
      <div class='post-share-buttons goog-inline-block'>
        <b:include cond='data:post.sharePostUrl' data='post' name='shareButtons'/>
      </div>

      </div>

      <div class='post-footer-line post-footer-line-2'>
      <span class='post-labels'>
        <b:if cond='data:top.showPostLabels and data:post.labels'>
          <data:postLabelsLabel/>
          <b:loop values='data:post.labels' var='label'>
            <a expr:href='data:label.url' rel='tag'><data:label.name/></a><b:if cond='not data:label.isLast'>,</b:if>
          </b:loop>
        </b:if>
      </span>
      </div>

      <div class='post-footer-line post-footer-line-3'>
      <span class='post-location'>
        <b:if cond='data:top.showLocation and data:post.location'>
          <data:postLocationLabel/>
          <a expr:href='data:post.location.mapsUrl' target='_blank'><data:post.location.name/></a>
        </b:if>
      </span>
      </div>
      <b:if cond='data:post.authorAboutMe'>
        <div class='author-profile' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
          <b:if cond='data:post.authorPhoto.url'>
            <img expr:src='data:post.authorPhoto.url' itemprop='image' width='50px'/>
          </b:if>
          <div>
            <a class='g-profile' expr:href='data:post.authorProfileUrl' itemprop='url' rel='author' title='author profile'>
              <span itemprop='name'><data:post.author/></span>
            </a>
          </div>
          <span itemprop='description'><data:post.authorAboutMe/></span>
        </div>
      </b:if>
    </div>
  </div>
</b:includable>
                            <b:includable id='postQuickEdit' var='post'>
  <b:if cond='data:post.editUrl'>
    <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
      <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
        <img alt='' class='icon-action' height='18' src='https://resources.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
      </a>
    </span>
  </b:if>
</b:includable>
                            <b:includable id='shareButtons' var='post'>
  <b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showPinterestButton'><a class='goog-inline-block share-button sb-pinterest' expr:href='data:post.sharePostUrl + &quot;&amp;target=pinterest&quot;' expr:title='data:top.shareToPinterestMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToPinterestMsg/></span></a></b:if><b:if cond='data:top.showPlusOne'><div class='goog-inline-block google-plus-share-container'><data:post.googlePlusShareTag/></div></b:if>
</b:includable>
                            <b:includable id='status-message'>
  <b:if cond='data:navMessage'>
  <div class='status-msg-wrap'>
    <div class='status-msg-body'>
      <data:navMessage/>
    </div>
    <div class='status-msg-border'>
      <div class='status-msg-bg'>
        <div class='status-msg-hidden'><data:navMessage/></div>
      </div>
    </div>
  </div>
  <div style='clear: both;'/>
  </b:if>
</b:includable>
                            <b:includable id='threaded-comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
                            <b:includable id='threaded_comment_js' var='post'>
  <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>

  <script type='text/javascript'>
    (function() {
      var items = <data:post.commentJso/>;
      var msgs = <data:post.commentMsgs/>;
      var config = <data:post.commentConfig/>;

// <![CDATA[
      var cursor = null;
      if (items && items.length > 0) {
        cursor = parseInt(items[items.length - 1].timestamp) + 1;
      }

      var bodyFromEntry = function(entry) {
        var text = (entry &&
                    ((entry.content && entry.content.$t) ||
                     (entry.summary && entry.summary.$t))) ||
            '';
        if (entry && entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
              return '<span class="deleted-comment">' + text + '</span>';
            }
          }
        }
        return text;
      }

      var parse = function(data) {
        cursor = null;
        var comments = [];
        if (data && data.feed && data.feed.entry) {
          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
            var comment = {};
            // comment ID, parsed out of the original id format
            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
            comment.id = id ? id[2] : null;
            comment.body = bodyFromEntry(entry);
            comment.timestamp = Date.parse(entry.published.$t) + '';
            if (entry.author && entry.author.constructor === Array) {
              var auth = entry.author[0];
              if (auth) {
                comment.author = {
                  name: (auth.name ? auth.name.$t : undefined),
                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                };
              }
            }
            if (entry.link) {
              if (entry.link[2]) {
                comment.link = comment.permalink = entry.link[2].href;
              }
              if (entry.link[3]) {
                var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                if (pid && pid[1]) {
                  comment.parentId = pid[1];
                }
              }
            }
            comment.deleteclass = 'item-control blog-admin';
            if (entry.gd$extendedProperty) {
              for (var k in entry.gd$extendedProperty) {
                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                  comment.displayTime = entry.gd$extendedProperty[k].value;
                }
              }
            }
            comments.push(comment);
          }
        }
        return comments;
      };

      var paginator = function(callback) {
        if (hasMore()) {
          var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
          if (cursor) {
            url += '&published-min=' + new Date(cursor).toISOString();
          }
          window.bloggercomments = function(data) {
            var parsed = parse(data);
            cursor = parsed.length < 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1
            callback(parsed);
            window.bloggercomments = null;
          }
          url += '&callback=bloggercomments';
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      };
      var hasMore = function() {
        return !!cursor;
      };
      var getMeta = function(key, comment) {
        if ('iswriter' == key) {
          var matches = !!comment.author
              && comment.author.name == config.authorName
              && comment.author.profileUrl == config.authorUrl;
          return matches ? 'true' : '';
        } else if ('deletelink' == key) {
          return config.baseUri + '/delete-comment.g?blogID='
               + config.blogId + '&postID=' + comment.id;
        } else if ('deleteclass' == key) {
          return comment.deleteclass;
        }
        return '';
      };

      var replybox = null;
      var replyUrlParts = null;
      var replyParent = undefined;

      var onReply = function(commentId, domId) {
        if (replybox == null) {
          // lazily cache replybox, and adjust to suit this style:
          replybox = document.getElementById('comment-editor');
          if (replybox != null) {
            replybox.height = '250px';
            replybox.style.display = 'block';
            replyUrlParts = replybox.src.split('#');
          }
        }
        if (replybox && (commentId !== replyParent)) {
          replybox.src = '';
          document.getElementById(domId).insertBefore(replybox, null);
          replybox.src = replyUrlParts[0]
              + (commentId ? '&parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
          replyParent = commentId;
        }
      };

      var hash = (window.location.hash || '#').substring(1);
      var startThread, targetComment;
      if (/^comment-form_/.test(hash)) {
        startThread = hash.substring('comment-form_'.length);
      } else if (/^c[0-9]+$/.test(hash)) {
        targetComment = hash.substring(1);
      }

      // Configure commenting API:
      var configJso = {
        'maxDepth': config.maxThreadDepth
      };
      var provider = {
        'id': config.postId,
        'data': items,
        'loadNext': paginator,
        'hasMore': hasMore,
        'getMeta': getMeta,
        'onReply': onReply,
        'rendered': true,
        'initComment': targetComment,
        'initReplyThread': startThread,
        'config': configJso,
        'messages': msgs
      };

      var render = function() {
        if (window.goog && window.goog.comments) {
          var holder = document.getElementById('comment-holder');
          window.goog.comments.render(holder, provider);
        }
      };

      // render now, or queue to render when library loads:
      if (window.goog && window.goog.comments) {
        render();
      } else {
        window.goog = window.goog || {};
        window.goog.comments = window.goog.comments || {};
        window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
        window.goog.comments.loadQueue.push(render);
      }
    })();
// ]]>
  </script>
</b:includable>
                            <b:includable id='threaded_comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
    <h4><data:post.commentLabelFull/>:</h4>

    <div class='comments-content'>
      <b:include cond='data:post.embedCommentForm' data='post' name='threaded_comment_js'/>
      <div id='comment-holder'>
         <data:post.commentHtml/>
      </div>
    </div>

    <p class='comment-footer'>
      <b:if cond='data:post.allowNewComments'>
        <b:include data='post' name='threaded-comment-form'/>
      <b:else/>
        <data:post.noNewCommentsText/>
      </b:if>
    </p>

    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
    </div>
    </div>
  </div>
</b:includable>
                          </b:widget>
                        </b:section>
                      </div>
                    </div>
                    <div class='column-right-outer'>
                      <div class='column-right-inner'>
                        <aside>
                          <b:section class='sidebar' id='sidebar-right-1' preferred='yes' showaddelement='yes'>
                            <b:widget id='PageList1' locked='false' title='Artists' type='PageList'>
                              <b:widget-settings>
                                <b:widget-setting name='pageListJson'><![CDATA[{"1222522449172457980":{"href":"https://www.phxcustomsgroup.com/p/the-phx-customs-group-artists.html","position":2,"title":"View Artists"},"474488062958683339":{"href":"https://www.phxcustomsgroup.com/p/projects.html","position":1,"title":"View Projects"},"home":{"href":"https://www.phxcustomsgroup.com/","position":0,"title":"Home"}}]]></b:widget-setting>
                                <b:widget-setting name='homeTitle'>Home</b:widget-setting>
                              </b:widget-settings>
                              <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
  <div class='widget-content'>
    <b:if cond='data:mobile'>
      <select expr:id='data:widget.instanceId + &quot;_select&quot;'>
        <b:loop values='data:links' var='link'>
          <option expr:value='data:link.href'>
            <b:attr cond='data:link.isCurrentPage' name='selected' value='selected'/>
            <data:link.title/>
          </option>
        </b:loop>
      </select>
      <span class='pagelist-arrow'>&amp;#9660;</span>
    <b:else/>
      <ul>
        <b:loop values='data:links' var='link'>
          <li>
            <b:class cond='data:link.isCurrentPage' name='selected'/>
            <a expr:href='data:link.href'><data:link.title/></a>
          </li>
        </b:loop>
      </ul>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
                            </b:widget>
                            <b:widget id='Header1' locked='false' title='PHX Customs (Header)' type='Header'>
                              <b:widget-settings>
                                <b:widget-setting name='displayUrl'>http://1.bp.blogspot.com/-xnDgN6_F5VA/WtOJX4AcH3I/AAAAAAAAFow/0t0O10jlHSAsnIYAjvp_R2e3zEov-MDuACK4BGAYYCw/s1600/logobar.png</b:widget-setting>
                                <b:widget-setting name='displayHeight'>101</b:widget-setting>
                                <b:widget-setting name='sectionWidth'>752</b:widget-setting>
                                <b:widget-setting name='useImage'>true</b:widget-setting>
                                <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
                                <b:widget-setting name='imagePlacement'>BEFORE_DESCRIPTION</b:widget-setting>
                                <b:widget-setting name='displayWidth'>411</b:widget-setting>
                              </b:widget-settings>
                              <b:includable id='main'>

  <b:if cond='data:useImage'>
    <b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
      <!--
      Show image as background to text. You can't really calculate the width
      reliably in JS because margins are not taken into account by any of
      clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
      width if the user is using shrink to fit.
      This results in a margin-width's worth of pixels being cropped. If the
      user is not using shrink to fit then we expand the header.
      -->
      <b:if cond='data:mobile'>
        <div id='header-inner'>
          <div class='titlewrapper' style='background: transparent'>
            <h1 class='title' style='background: transparent; border-width: 0px'>
              <b:include name='title'/>
            </h1>
          </div>
          <b:include name='description'/>
        </div>
      <b:else/>
        <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                      + &quot;background-position: &quot;                      + data:backgroundPositionStyleStr + &quot;; &quot;                      + data:widthStyleStr                      + &quot;min-height: &quot; + data:height                      + &quot;_height: &quot; + data:height                      + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
          <div class='titlewrapper' style='background: transparent'>
            <h1 class='title' style='background: transparent; border-width: 0px'>
              <b:include name='title'/>
            </h1>
          </div>
          <b:include name='description'/>
        </div>
      </b:if>
    <b:else/>
      <!--Show the image only-->
      <div id='header-inner'>
        <a expr:href='data:blog.homepageUrl' style='display: block'>
          <img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block'/>
        </a>
        <!--Show the description-->
        <b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
          <b:include name='description'/>
        </b:if>
      </div>
    </b:if>
  <b:else/>
    <!--No header image -->
    <div id='header-inner'>
      <div class='titlewrapper'>
        <h1 class='title'>
          <b:include name='title'/>
        </h1>
      </div>
      <b:include name='description'/>
    </div>
  </b:if>
</b:includable>
                              <b:includable id='description'>
  <div class='descriptionwrapper'>
    <p class='description'><span><data:description/></span></p>
  </div>
</b:includable>
                              <b:includable id='title'>
  <b:tag cond='data:blog.url != data:blog.homepageUrl' expr:href='data:blog.homepageUrl' name='a'>
    <data:title/>
  </b:tag>
</b:includable>
                            </b:widget>
                            <b:widget id='BlogSearch1' locked='false' title='Search This Blog' type='BlogSearch'>
                              <b:includable id='main'>
    <!-- only display title if it's non-empty -->
    <b:if cond='data:title != &quot;&quot;'>
      <h2 class='title'><data:title/></h2>
    </b:if>

    <div class='widget-content'>
      <div expr:id='data:widget.instanceId + &quot;_form&quot;'>
        <form class='gsc-search-box' expr:action='data:blog.searchUrl'>
          <b:attr cond='not data:view.isPreview' name='target' value='_top'/>
          <table cellpadding='0' cellspacing='0' class='gsc-search-box'>
            <tbody>
              <tr>
                <td class='gsc-input'>
                  <input autocomplete='off' class='gsc-input' expr:value='data:view.isSearch ? data:view.search.query.escaped : &quot;&quot;' name='q' size='10' title='search' type='text'/>
                </td>
                <td class='gsc-search-button'>
                  <input class='gsc-search-button' expr:value='data:messages.search' title='search' type='submit'/>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>

    <b:include name='quickedit'/>
  </b:includable>
                            </b:widget>
                            <b:widget id='BlogArchive1' locked='false' title='Blog Archive' type='BlogArchive'>
                              <b:widget-settings>
                                <b:widget-setting name='showStyle'>FLAT</b:widget-setting>
                                <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
                                <b:widget-setting name='showWeekEnd'>true</b:widget-setting>
                                <b:widget-setting name='monthPattern'>MMMM yyyy</b:widget-setting>
                                <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
                                <b:widget-setting name='weekPattern'>MM/dd</b:widget-setting>
                                <b:widget-setting name='chronological'>false</b:widget-setting>
                                <b:widget-setting name='showPosts'>true</b:widget-setting>
                                <b:widget-setting name='frequency'>MONTHLY</b:widget-setting>
                              </b:widget-settings>
                              <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'>
    <h2><data:title/></h2>
  </b:if>
  <div class='widget-content'>
  <div id='ArchiveList'>
  <div expr:id='data:widget.instanceId + &quot;_ArchiveList&quot;'>
    <b:include cond='data:style == &quot;HIERARCHY&quot;' data='data' name='interval'/>
    <b:include cond='data:style == &quot;FLAT&quot;' data='data' name='flat'/>
    <b:include cond='data:style == &quot;MENU&quot;' data='data' name='menu'/>
  </div>
  </div>
  <b:include name='quickedit'/>
  </div>
</b:includable>
                              <b:includable id='flat' var='data'>
  <ul class='flat'>
    <b:loop values='data:data' var='i'>
      <li class='archivedate'>
        <a expr:href='data:i.url'><data:i.name/></a> (<data:i.post-count/>)
      </li>
    </b:loop>
  </ul>
</b:includable>
                              <b:includable id='interval' var='intervalData'>
  <b:loop values='data:intervalData' var='interval'>
    <ul class='hierarchy'>
      <li expr:class='&quot;archivedate &quot; + data:interval.expclass'>
        <b:include cond='data:interval.toggleId' data='interval' name='toggle'/>
        <a class='post-count-link' expr:href='data:interval.url'>
          <data:interval.name/>
        </a>
        <span class='post-count' dir='ltr'>(<data:interval.post-count/>)</span>
        <b:include cond='data:interval.data' data='interval.data' name='interval'/>
        <b:include cond='data:interval.posts' data='interval.posts' name='posts'/>
      </li>
    </ul>
  </b:loop>
</b:includable>
                              <b:includable id='menu' var='data'>
  <select expr:id='data:widget.instanceId + &quot;_ArchiveMenu&quot;'>
    <option value=''><data:title/></option>
    <b:loop values='data:data' var='i'>
      <option expr:value='data:i.url'><data:i.name/> (<data:i.post-count/>)</option>
    </b:loop>
  </select>
</b:includable>
                              <b:includable id='posts' var='posts'>
  <ul class='posts'>
    <b:loop values='data:posts' var='post'>
      <li><a expr:href='data:post.url'><data:post.title/></a></li>
    </b:loop>
  </ul>
</b:includable>
                              <b:includable id='toggle' var='interval'>
  <a class='toggle' href='javascript:void(0)'>
    <span expr:class='&quot;zippy&quot; + (data:interval.expclass == &quot;expanded&quot; ? &quot; toggle-open&quot; : &quot;&quot;)'>
      <b:if cond='data:interval.expclass == &quot;expanded&quot;'>
        &#9660;&#160;
      <b:elseif cond='data:blog.languageDirection == &quot;rtl&quot;'/>
        &#9668;&#160;
      <b:else/>
        &#9658;&#160;
      </b:if>
    </span>
  </a>
</b:includable>
                            </b:widget>
                            <b:widget id='AdSense1' locked='false' title='' type='AdSense'>
                              <b:includable id='main'>
  <div class='widget-content'>
    <data:adCode/>
    <b:include name='quickedit'/>
  </div>
</b:includable>
                            </b:widget>
                            <b:widget id='AdSense2' locked='false' title='' type='AdSense'>
                              <b:includable id='main'>
  <div class='widget-content'>
    <data:adCode/>
    <b:include name='quickedit'/>
  </div>
</b:includable>
                            </b:widget>
                            <b:widget id='Navbar1' locked='false' title='Navbar' type='Navbar' version='1'>
                              <b:includable id='main'>&lt;script type=&quot;text/javascript&quot;&gt;
    function setAttributeOnload(object, attribute, val) {
      if(window.addEventListener) {
        window.addEventListener(&#39;load&#39;,
          function(){ object[attribute] = val; }, false);
      } else {
        window.attachEvent(&#39;onload&#39;, function(){ object[attribute] = val; });
      }
    }
  &lt;/script&gt;
&lt;div id=&quot;navbar-iframe-container&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;https://apis.google.com/js/plusone.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
      gapi.load(&quot;gapi.iframes:gapi.iframes.style.bubble&quot;, function() {
        if (gapi.iframes &amp;&amp; gapi.iframes.getContext) {
          gapi.iframes.getContext().openChild({
              url: &#39;https://www.blogger.com/navbar.g?targetBlogID\x3d1807135391332731347\x26blogName\x3dPHX+Customs\x26publishMode\x3dPUBLISH_MODE_HOSTED\x26navbarType\x3dLIGHT\x26layoutType\x3dLAYOUTS\x26searchRoot\x3dhttps://www.phxcustomsgroup.com/search\x26blogLocale\x3den\x26v\x3d2\x26homepageUrl\x3dhttp://www.phxcustomsgroup.com/\x26vt\x3d8992914601780672323&#39;,
              where: document.getElementById(&quot;navbar-iframe-container&quot;),
              id: &quot;navbar-iframe&quot;
          });
        }
      });
    &lt;/script&gt;&lt;script type=&quot;text/javascript&quot;&gt;
(function() {
var script = document.createElement(&#39;script&#39;);
script.type = &#39;text/javascript&#39;;
script.src = &#39;//pagead2.googlesyndication.com/pagead/js/google_top_exp.js&#39;;
var head = document.getElementsByTagName(&#39;head&#39;)[0];
if (head) {
head.appendChild(script);
}})();
&lt;/script&gt;
</b:includable>
                            </b:widget>
                            <b:widget id='Attribution1' locked='false' title='' type='Attribution'>
                              <b:widget-settings>
                                <b:widget-setting name='copyright'/>
                              </b:widget-settings>
                              <b:includable id='main'>
    <div class='widget-content' style='text-align: center;'>
      <b:if cond='data:attribution != &quot;&quot;'>
       <data:attribution/>
      </b:if>
    </div>

    <b:include name='quickedit'/>
  </b:includable>
                            </b:widget>
                          </b:section>
                        </aside>
                      </div>
                    </div>
                    <div style='clear: both'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script language='javascript' type='text/javascript'>
  window.onload = function() {
    blogger.templates().compile(
        blogger.templates().template(&quot;Header&quot;).raw()
            .replace(/{block:HasViews[\s\S]*block:HasViews}/,&quot;&quot;));
    blogger.ui().configure().view();
  };
</script>
  </body>
</html>
