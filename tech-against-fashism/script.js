// Open / toggle description
const descriptionLink = document.getElementById("descriptionLink");
const description = document.getElementById("description");
const closeButton = document.getElementById("closeDescription");
const menu = document.getElementById("menu");

descriptionLink.addEventListener("click", (event) => {
    event.preventDefault();
    description.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
    description.classList.add("hidden");
});


menu.addEventListener("click", (event) => {
    const link = event.target.closest("#menu-list a");
    if (link) description.classList.add("hidden");
}); 



// fetch & parse readme
async function loadReadme() {

    try {

        const response = await fetch("./README.md");

        if (!response.ok) {
            throw new Error("Could not fetch README.md");
        }

        const markdown = await response.text();


        const html = marked.parse(markdown);


        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const elements = Array.from(doc.body.children);

        const content = document.querySelector("#content");
        const menuList = document.querySelector("#menu-list");

        let currentArticle = null;


        elements.forEach(element => {

            if (element.tagName === "H3" || element.tagName === "H2") {

                currentArticle = document.createElement("article");


                const id = element.textContent
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, "")
                    .replace(/\s+/g, "-");

                currentArticle.id = id;

                content.appendChild(currentArticle);

                // Create navigation item
                const li = document.createElement("li");
                const link = document.createElement("a");

                link.href = `#${id}`;
                link.textContent = element.textContent;
                if (element.tagName === "H2") {
                 link.classList.add("h2");
                }

                li.appendChild(link);
                menuList.appendChild(li);
            }


            if (currentArticle) {
                currentArticle.appendChild(element);
            }

        });

        setupMenu();

        const articles = [...content.querySelectorAll("article:has(> h2)")];

function checkSticky() {
    const stickyTop = parseFloat(getComputedStyle(document.documentElement).fontSize);

    articles.forEach((article, index) => {
        if (index === 0) return;

        const previousH2 = articles[index - 1].querySelector("h2");
        const nextTop = article.getBoundingClientRect().top;

        if (previousH2) {
            previousH2.style.display = nextTop <= stickyTop ? "none" : "";
        }
    });
}

window.addEventListener("scroll", checkSticky, { passive: true });
window.addEventListener("resize", checkSticky);
checkSticky();

    } catch (error) {
        console.error("Error loading README:", error);
    }

}


// Hamburger menu functionality
function setupMenu() {

    const button = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");

    button.addEventListener("click", () => {

        const expanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", !expanded);
        menu.hidden = expanded;

        button.classList.toggle("active", !expanded);

    });

    document.querySelectorAll("#menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.hidden = true;
            button.setAttribute("aria-expanded", "false");
            button.classList.remove("active");

        });

    });

}




loadReadme();

