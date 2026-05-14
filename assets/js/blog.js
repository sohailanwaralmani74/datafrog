const posts = [
// {
//     id: 1,
//     title: "JSON to Dart Converter – Create Flutter Models Instantly",
//     url: "https://datafrog.tools/blog/json-to-dart-converter",
//     img: "datafrog.png",
//     authorName: "DataFrog Team",
//     date: "October 17, 2025",
//     description:
//       "Learn how to convert JSON data into Dart classes for Flutter apps with null safety. Discover online tools, code generation tips, and developer-friendly methods.",
//     keywords: [
//       "json to dart converter",
//       "json to dart online",
//       "json to dart model",
//       "convert json to dart",
//       "dart class generator"
//     ]
//   },
//   {
//     id: 2,
//     title: "Mastering Null Safety in JSON to Dart Conversion",
//     url: "https://datafrog.tools/blog/json-to-dart-null-safety",
//     img: "datafrog1.webp",
//     authorName: "DataFrog Team",
//     date: "October 15, 2025",
//     description:
//       "Understand null safety in Dart and why it matters when converting JSON to Dart models. Explore examples, best practices, and quick fixes for safe Flutter code.",
//     keywords: [
//       "json to dart null safety",
//       "dart json model null safety",
//       "flutter null safety",
//       "safe json conversion"
//     ]
//   },
//   {
//     id: 3,
//     title: "From JSON to Dart – Simplifying Your Flutter Workflow",
//     url: "https://datafrog.tools/blog/from-json-to-dart",
//     img: "datafrog2.webp",
//     authorName: "DataFrog Team",
//     date: "October 10, 2025",
//     description:
//       "Boost your Flutter development with faster data model creation. This post shows how to move from JSON data to Dart classes in minutes using online generators.",
//     keywords: [
//       "from json to dart",
//       "json to dart online",
//       "flutter data model",
//       "json converter dart"
//     ]
//   }
    
]
        const blogGrid = document.getElementById('blogGrid');
        
        function renderBlogPost(postArray) {
            blogGrid.innerHTML = '';
            
            postArray.forEach(post => {
                const postCard = document.createElement('div');
                postCard.innerHTML = `
                   <a href="${post.url}" >
                    <div class="blog-post">
                    <div class="post-image" style="background-image: url('/assets/img/${post.img}');"></div>
                     <div class="post-content">
                      <h2 class="ss-card-header">${post.title}</h2>
                      <div class="post-meta"> Published By ${post.authorName}  On ${post.date} </div>
                       <p class="post-description">
                         ${post.description}
                       </p>
                      </div>
                    </div> 
                    </a>
                `;
                blogGrid.appendChild(postCard);
            });
        }
        renderBlogPost(posts);
        
        // Search Functionality
        const blogSearch = document.getElementById('blogSearch');
        
        blogSearch.addEventListener('input', () => {
            const searchTerm = blogSearch.value.toLowerCase();
            
            if (searchTerm === '') {
                renderBlogPost(posts);
                return;
            }
            
            const filteredTools = posts.filter(post => 
                post.title.toLowerCase().includes(searchTerm) || 
                post.description.toLowerCase().includes(searchTerm) ||
                post.keywords.some(tag => tag.toLowerCase().includes(searchTerm))
            );
            
            renderBlogPost(filteredTools);
        });              
        
        // Initialize with sample conversion
        window.addEventListener('DOMContentLoaded', () => {
        });