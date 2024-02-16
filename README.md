This is a sample Next.js blog that:
- Covers the basic concepts of Next.js
- Uses AI (MistralAI) to recommend topics, tags, related posts and more when a new post is created.

# Next.js Topics
- Introduction to Next.js
- Link Component
- Client-Side Navigation
- Assets, Metadata, and CSS
- Pre-rendering and Data Fetching
  - SSR vs SSG 
  - Static Generation with and without Data
  - getStaticProps
- Dynamic routes
  - getStaticPaths
  - getStaticProps
  - Render markdown
 
# AI Topics
- Uses the MistralAI api
- Suggest 10 topics for new post. Uses a simple prompt and sync request
- Suggest 50 topics. Uses streams to show the result
- Suggest related posts. Uses embeddings to alculate distance
- Suggest tags and mailing list to share the new post. Uses user content data 
