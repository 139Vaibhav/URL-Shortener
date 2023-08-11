# Url Shortener

Created APIs that allow the users to enter a URL of any length and returns a short URL which redirects to the original URL.

## Tech Stack Used

Backend Frameworks - NodeJS, ExpressJS

Database - MongoDB

### APIs

- localhost:8000/api/v1/url -> API that’ll take in the long URL and convert it into a short URL as json

- localhost:8000/api/v1/redirect/:shortUrl -> API that’ll take in the short URL and redirect to the original page

- localhost:8000/api/v1/info/:shortUrl -> API that takes in the short URL to display information about where the URL points to

- localhost:8000/api/v1/update/:shortUrl -> API that’ll update an already existing short URL to point to another long URL

- localhost:8000/api/v1/delete/:shortUrl -> API to delete the short URL

