## Assignment 8

### How I Implemented Vue Router
I added Vue Router to my Vue 3 project using the official CLI command `vue add router`. This automatically created the `src/router/index.js` file and updated `main.js`.

I used `createRouter()` with `createWebHistory()` to enable clean, bookmarkable URLs (no `#` symbol). In `App.vue` I added a persistent navigation bar using `<router-link>` components and placed `<router-view>` where the page content should appear.

### Pages Created and Their Structure
I created three main views in the `src/views/` folder:

- **HomeView.vue** (`/`): Hero section with background image, name, title, subtitle, tags, and the interactive "My Work" project gallery (with hover modals on desktop and click-to-open modals on mobile).
- **AboutView.vue** (`/about`): Two-column layout featuring a personal photo, "Hey, I'm HENRI" name card, Download CV button, software skills icons, bio text, and Experience Timeline.
- **ContactView.vue** (`/contact`): Professional contact form with real-time validation, error messages, and a success modal.

All views follow Vue’s Single File Component structure and are cleanly separated.

### Challenges and Interesting Insights
Initially, I acidentally set up my pc to be the root folder of my git compository, which meant that the system tried to sync 10 000 changes which did not work. By the time I was able to fix the issue I had already made 3 commits to the Assignment 8 project. The only way I could find to fix the issue was to delete the old git repository and create a new one. This made me lose the history I had saved up until that point. Now, assignment 8 has its own repository which is not linked to the one I have been using for the other assignments of this course.

One of the biggest challenges was creating a truly responsive navigation experience. I had to build a compact pill-style nav for desktop and a hamburger menu for mobile, including logic to automatically close the menu when navigating to a new page.

Another interesting challenge was the project modal behaviour. On desktop it uses pure hover, while on mobile it switches to click-to-open with a close button. Solving this required screen-size detection (`isMobile`) and different event handlers (`@mouseenter`/`@mouseleave` vs `@click` + `toggleProject`).

The process taught me how powerful Vue Router is for creating smooth, app-like experiences.

### Why Routing Matters in Single-Page Applications (SPAs)
Vue Router is essential for SPAs because it enables seamless navigation between views **without full page reloads**. This keeps the user in the same JavaScript context, maintains application state, improves perceived performance, and provides clean, shareable URLs. Without routing, a portfolio would feel like separate static pages instead of a cohesive, modern web application.

Overall, implementing Vue Router transformed my static HTML/CSS portfolio into a dynamic, professional Single Page Application that feels modern and responsive.