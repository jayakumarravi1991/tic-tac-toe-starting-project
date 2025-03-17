Test

## Author and Publish Tier:
- In AEM Terminology, a "**Tier**" is a copy of AEM Environment on AEM as a Cloud Service. 
- AEM Installations usually involve at lease two Tiers: **Author Tier** and **Publish Tier**
### Author
- An AEM Tier used to create, upload and edit content and also authors and administerator can run some maintenance task and administration task on your author instance.
- Once the content is approved and ready to go live, it can be published from author tier to publish tier.
### Publish
- An AEM Tier that serves published content to the public or end user or site visitors.
### Author Evnironment
- This evnironment is for Business Practiniors, Marketors or authors and people who are managing assets and images. Author environment also be used by administors and team involved in maintenance task.
- Most important part of using author is to use predefined templates to create new content pages. The template editors will create some of templates which our authors can use to create new pages. THis simplifies process of creating new pages and also provide faster time for marketors.
- Business Practiniors, Authors can Add new content and edit existing content on a page.
- Users can upload new image or video or a graphics because lot of pages required these kind of assets. Create, Edit and Manager assets and collections.
- Asset administrators also can manage meta data of assets and also they can get reports on assets e.g which assets is expired and still active.
- Our pages or content which we added to environment, it can be moved or copied or deleted. Move, copy and delete content pages, assets and so on.
- Once you have finalized page creation and uploaded assets, you can also publish or unpublish pages and assets to publish instance. That is available to site visitors.
- Administors can manage user and user permissions based on their role.
- Site administrator or AEM Administrator can perform administrative task and maintenance tasks
- Create, manage and run workflows that control how changes are managed. May be it goes to content quality approval or futher goes to legal compliance approval, So once author creates the page it will go through multiple stages of approval in workflow. Those approval can send back with comments which our authors can further improve on and then finaly publish the content to publish instance.
- We can create projects which includes site and assets and team which you want to run by.
  ### Publish Environment
- It is user facing environment where visitors can interact with brands and they can see experience that our authors created for them.
- Visitors can can signup, login and manage their site preferences if you have designed your site for signup and login.
- With using Adobe Target Tool, you can also personalize the content that is served to the site visitors on publish environment only based on user segment.
- With using Adobe Analytics solution, user behaviour and activities can be tracked on pubish environment

## Content Publishing And Adobe Pipeline
- Once the content is finalized and got approva. The content will be published through Adobe Pipeline from author to publish instance. The adobe pipeline plays very important role it taking -the content from author instance to publish instance.
- Not all the content goes through the adobe pipeline like if you have images or assets or videos those contents are heavy content that wont go through adobe pipeline queue.
- There is shared binary storage, when our author uploads an image, the image goes to our shared binary storage and when ever that assets is published then only it is available to our site visitor or publish instance.
- There is also CDN or Load Balance in the front of our publish instance which will help us to balance the load and also provides us cache mechanism.

AEM Sling

AEM JCR

AEM OSGI

AEM Dispatcher

