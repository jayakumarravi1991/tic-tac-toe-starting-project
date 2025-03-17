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

## AEM Architecture Stack and order
1. Apache Felix ( OSGI Java Container) - This container is used for moduler development and it provides varies functionalities in form of modules and components and services.
2. Apache JackRabbit Oak ( JCR Repository / Storage Layer) - What ever content which authors add are stored in this repository. JCR is in the form or hierarchical structure.
3. Apache Sling (Web Application Framework) - Rest based web application framework which helps in consuming and exposing content in your JCR repository. And also interacting with OSGI java container.
4. AEM Application Layer - Where we find varies capabilities like sites, forms and assets


## AEM Sling
- Apache Sling is a framework for RESTful web-application based on an extensible content tree.
- AEM is built using Sling, a Web application framework based on REST principles, that provides easy development of content-oriendted applications. 
- Sling uses as JCR repository such as Apache Jackrabbit, or in the case of AEM, the CRX Content Repository, as its data store

- 

## AEM JCR
JCR is a database that looks like a file system. It is unstrucutred and enables versioning and observation. It provides services such as full-text search, indexing, access control and event monitoring. 
- Content repository is way to store data in hierarchical format. 
- In JCR content organization is done in repository model and hierarchical modeling.
- Implemented by Apache Jackrabbit Oak
- This JCR contains features of RDBMS and file system and top of that it has feature versionaning and full text search and indexing.

### JCR Nodes and Properties
- JCR is a tree structure that contains items:
  - Nodes provide structure
  - Properties store data
- Item names should be meaningful. not recommended to use ID in JCR.
- Item addresses are stored in the form of paths:
  - /blog/jan/31/title
  - blog/jan/1
![image](https://github.com/user-attachments/assets/5d78a911-5d14-48a7-9e76-bab409586b09)
- Parent Node > this node
  - node type: nt:folder, nt:file, nt:structured, nt:nodeType, rep:User, rep:ACL
  - mixin type: mix:versionable, mix:lockable, sling:VanityPath, cq:Taggable
  - single value properties: value ( string long date path binary ...)
  - multi-value properties: values[] (string long date path binary ...)
  - child nodes

AEM OSGI

AEM Dispatcher:

How Dispatcher returns Documents
![image](https://github.com/user-attachments/assets/9366efe9-0f42-4401-ae39-87ccc5beb14b)


