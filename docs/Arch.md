
## GatorWiki Architecture

This document should be used to maintain high level descriptions of the current
or planned GatorWiki project architecture, including pages, APIs, database models, and services
within the project and the interactions between them.

## Overview

The project can be understood as a 3-tiered web app,
with the following structure:

+ Presentation Tier: React Front End
    + `frontend/`
    + Content Presentation
    + User interaction 
    + Basic input validation
    + Makes requests to application tier
+ Application Tier: Django Back End - REST API and Other Processes
    + `gatorwiki/`
    + Comprehensive input validation
    + User authorization and permissions management
    + Input pre-processing
    + Data modification and access
    + Provides REST API to presentation tier
+ Data Tier: Django Back End - Models
    + `gatorwiki/`
    + Data Storage
    + Relationships between models
    + Accepts data queries from the application tier via the [Django ORM](https://docs.djangoproject.com/en/3.2/topics/db/queries/)

## Presentation Tier

The presentation tier includes a variety of web pages available to
the user.

### Home Page

Includes information about the site and
a mechanism to view document pages (e.g. by name). 

### Document Page

Page to present a `Document`, an entry in the wiki.

Should have the title at the top and render the text content as markdown.
Attached images should rendered into the document.

### Document Editing Page

Page to edit or create a `Document`. 

The form essentially consists of a form with the fields:

+ Title - a small text field
+ Content - a large text field to compose markdown
+ Attachments - a widget to upload attachments

The content field will allow users to reference other pages
and attached files. This can be accomplished by having users specify
markdown links, but with special content for the URL.

One way to do this is the following:

```
[a normal markdown link](www.github.com/ufosc)
[a reference to another page by title](page:Title of another page)
[a reference to an attached file](attachment:Name of an attached file)
```

The application tier could then handle pre-processing these special
links into real URLs.

### Rules Page

A page including a code of conduct and other rules for the site.

This could be merged in the home page for now.

## Application Tier

### Document API

This API must support the following operations:

+ Accessing the contents of `Document` and returning them. (GET)
+ Creating a new `Document` entry, and first performing all pre-processing
steps. (POST)
+ Deleting a `Document` entry.

Modification requests should be queued for review by a moderator 
or admin prior to completion. This might require the development of a
new type of model to store requested modifications.

TODO: To solve the issue of concurrent modification, it might be best 
to store requested modifications as diffs or through another method.

### User API

A service to create a new user, and perform other related services.

## Data Tier

The backend includes a variety of models implementing
the entities and relations of the application.

### Document

An entry in the wiki.

**Fields:**

+ Title
    + A string of characters
    + Title of the entry
+ Content
    + A large text field
    + Captures the written content of an entry
    + While the `Content` model is agnostic to styling,
the text document stored is in Markdown format for presentation purposes.
+ Attachments
    + A list of foreign keys referencing `Attachment` models
    + Consists of the attachments utilized when presenting this entry,
such as images.
+ Id
    + Primary key

### Attachment

A media file uploaded for use in a particular `Document`.

**Fields:**

+ URL
    + A URL to identify and access the attachment
+ File
    + A [binary field](https://docs.djangoproject.com/en/dev/ref/models/fields/#binaryfield)
capturing the binary contents of the file.
+ Id
    + Primary key

### Users

Users of the site. Implemented with [`Django.contrib.auth.models.User`](https://docs.djangoproject.com/en/3.2/ref/contrib/auth/).

Users must support a few roles: user, moderator, admin.

