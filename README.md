# react-new-beginning

This repository is for learning react from scratch

# parcel: A bundler

-   Dev Build
-   Local server
-   HMR: Hot Module Replacement (Refreshing the browser automatically whenever we save any files)
-   It does HMR because it has File Watching Algorithm wriiten in C++
-   It caches builds which makes it faster
-   Image optimization
-   Minify the production build
-   Bundle the files
-   Compress all the files
-   Consistent hashing (makes it easy for any modification without having to redo everything from scratch)
-   Code Splitting
-   Differential bundling: supports older browser
-   Diagnostics
-   Better Error Handling
-   Capibilty to host the application on HTTPs
-   Tree shaking: meaning removing unsed code
-   For using parcel, we need to remove main: '' from package.json as it mentions that whatever is inside main is the entry point for the NPM which is not as we define it while executing NPX
