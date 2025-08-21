// Sample news data
const newsData = [
  {
    id: 1,
    title: "Major Technology Breakthrough Announced",
    excerpt:
      "Scientists have made a groundbreaking discovery that could revolutionize the way we approach renewable energy solutions.",
    content:
      "In a landmark announcement today, researchers at the International Technology Institute revealed a breakthrough in renewable energy technology that promises to transform how we generate and store clean energy. The new system, which combines advanced solar panel technology with revolutionary battery storage, could increase energy efficiency by up to 300%. Dr. Sarah Johnson, lead researcher on the project, explained that this innovation addresses one of the biggest challenges in renewable energy: consistent power supply regardless of weather conditions. The technology uses a novel approach to energy conversion that maximizes output while minimizing environmental impact. Initial testing has shown remarkable results, with the system maintaining 95% efficiency even during extended periods of low sunlight. The research team believes this breakthrough could accelerate the global transition to sustainable energy sources and significantly reduce carbon emissions worldwide.",
    category: "technology",
    author: "Tech Reporter",
    date: "2 hours ago",
    image: "pic1.png",
    featured: true,
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches Historic Agreement",
    excerpt:
      "World leaders unite on ambitious climate action plan with unprecedented commitments to reduce carbon emissions.",
    content:
      "The Global Climate Summit concluded today with a historic agreement that sets the most ambitious climate targets in international history. Representatives from 195 countries committed to achieving net-zero carbon emissions by 2040, a decade earlier than previously planned. The agreement includes substantial financial commitments from developed nations to support clean energy transitions in developing countries. Key provisions include a $500 billion fund for renewable energy infrastructure, mandatory carbon pricing mechanisms, and strict regulations on industrial emissions. Environmental activists have praised the agreement as a crucial step forward, while acknowledging that implementation will be the real test of its success.",
    category: "politics",
    author: "Political Correspondent",
    date: "4 hours ago",
    image: "pic2.jpg",
  },
  {
    id: 3,
    title: "Championship Finals Set Record Viewership",
    excerpt: "Sports fans worldwide tune in for the most-watched championship game in television history.",
    content:
      "Last night's championship final broke all previous viewership records, with over 2.1 billion people tuning in globally to watch the thrilling match. The game, which went into overtime, showcased exceptional athleticism and sportsmanship from both teams. Social media platforms reported unprecedented engagement, with over 500 million posts related to the game. The economic impact of the event is estimated at $2.5 billion, including tourism, merchandise sales, and advertising revenue. Sports analysts are calling it one of the greatest games ever played, with multiple record-breaking performances that will be remembered for generations.",
    category: "sports",
    author: "Sports Editor",
    date: "6 hours ago",
    image: "pic3.webp",
  },
  {
    id: 4,
    title: "Hollywood Announces Groundbreaking Film Project",
    excerpt:
      "Major studio reveals ambitious new film series that will revolutionize cinema with cutting-edge technology.",
    content:
      "Hollywood's biggest studio announced today a revolutionary film project that will utilize groundbreaking virtual reality and AI technology to create an immersive cinematic experience. The project, with a budget exceeding $500 million, will be the first of its kind to allow audiences to experience movies from multiple perspectives and even influence certain plot elements in real-time. Director Michael Chen, known for his innovative approach to filmmaking, will lead the project alongside a team of technology experts and renowned actors. The first film in the series is expected to premiere next year, with plans for a global rollout that includes specially equipped theaters designed for the new format.",
    category: "entertainment",
    author: "Entertainment Reporter",
    date: "8 hours ago",
    image: "pic4.jpg",
  },
  {
    id: 5,
    title: "Stock Market Reaches All-Time High",
    excerpt: "Major indices surge to record levels as investor confidence grows amid positive economic indicators.",
    content:
      "The stock market closed at record highs today, with major indices posting significant gains across all sectors. The surge was driven by strong quarterly earnings reports, positive employment data, and renewed investor confidence in the global economic recovery. Technology stocks led the rally, with several companies reporting revenue growth exceeding analyst expectations. Financial experts attribute the market's performance to a combination of factors including increased consumer spending, successful vaccination campaigns, and government stimulus measures. However, some analysts warn that the rapid growth may lead to increased volatility in the coming months.",
    category: "business",
    author: "Financial Analyst",
    date: "10 hours ago",
    image: "pic5.jpg",
  },
  {
    id: 6,
    title: "Space Mission Discovers New Exoplanet",
    excerpt: "NASA's latest space exploration mission identifies potentially habitable planet in nearby solar system.",
    content:
      "NASA scientists announced the discovery of a potentially habitable exoplanet located just 22 light-years from Earth. The planet, designated Kepler-442c, shows promising signs of having liquid water and an atmosphere capable of supporting life. Advanced telescopes detected water vapor in the planet's atmosphere, along with chemical signatures that suggest the presence of organic compounds. The discovery was made possible through the latest generation of space telescopes and AI-powered analysis systems. Research teams are now planning follow-up missions to gather more detailed information about the planet's composition and potential for harboring life.",
    category: "technology",
    author: "Science Correspondent",
    date: "12 hours ago",
    image: "pic6.jpg",
  },
  {
    id: 7,
    title: "International Trade Agreement Signed",
    excerpt: "Major economies finalize comprehensive trade deal expected to boost global commerce by 15%.",
    content:
      "Representatives from 12 major economies signed a comprehensive trade agreement today that is expected to increase global commerce by 15% over the next five years. The agreement reduces tariffs on thousands of products, streamlines customs procedures, and establishes new frameworks for digital trade. Economic analysts predict the deal will create millions of jobs worldwide and strengthen supply chains that were disrupted during recent global challenges. The agreement also includes provisions for environmental protection and labor rights, addressing concerns raised by advocacy groups during the negotiation process.",
    category: "business",
    author: "Economic Reporter",
    date: "14 hours ago",
    image: "pic10.jpeg",
  },
  {
    id: 8,
    title: "Music Festival Announces Star-Studded Lineup",
    excerpt: "Annual music festival reveals biggest lineup in its history with top artists from around the world.",
    content:
      "The world's largest music festival announced its most ambitious lineup yet, featuring over 200 artists across multiple genres and stages. The three-day event will showcase everything from pop and rock to electronic and world music, with headliners including some of the biggest names in the industry. Festival organizers have also announced new sustainability initiatives, including carbon-neutral operations and zero-waste goals. Tickets for the event sold out within hours of the announcement, breaking previous sales records. The festival is expected to attract over 500,000 attendees from around the globe.",
    category: "entertainment",
    author: "Music Journalist",
    date: "16 hours ago",
    image: "pic8.jpg",
  },
  {
    id: 9,
    title: "Olympic Training Facility Opens",
    excerpt:
      "State-of-the-art training center provides world-class facilities for athletes preparing for upcoming games.",
    content:
      "A revolutionary new Olympic training facility opened its doors today, featuring cutting-edge technology and world-class amenities designed to help athletes achieve peak performance. The $200 million facility includes advanced biomechanics labs, altitude simulation chambers, and recovery centers equipped with the latest sports medicine technology. Athletes from over 50 countries will have access to the facility, which also serves as a research center for sports science innovations. The facility's sustainable design has earned it multiple environmental certifications, setting a new standard for sports infrastructure.",
    category: "sports",
    author: "Olympic Correspondent",
    date: "18 hours ago",
    image: "pic7.jpg",
  },
  {
    id: 10,
    title: "Healthcare Innovation Saves Lives",
    excerpt: "New medical technology shows remarkable success in treating previously incurable conditions.",
    content:
      "A groundbreaking medical innovation has shown remarkable success in treating conditions that were previously considered incurable. The new treatment, developed through a collaboration between leading medical institutions, uses advanced gene therapy techniques to target specific cellular mechanisms. Clinical trials have shown a 90% success rate in treating the targeted conditions, offering hope to millions of patients worldwide. The treatment has received fast-track approval from regulatory agencies and is expected to be available in major medical centers within the next six months.",
    category: "technology",
    author: "Medical Reporter",
    date: "20 hours ago",
    image: "pic9.avif",
  },
]

// Global variables
let currentCategory = "all"
let displayedArticles = 6
let filteredNews = [...newsData]

// DOM elements
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const newsGrid = document.getElementById("news-grid")
const loadMoreBtn = document.getElementById("load-more-btn")
const modal = document.getElementById("article-modal")
const modalClose = document.getElementById("modal-close")
const modalBody = document.getElementById("modal-body")
const sectionTitle = document.getElementById("section-title")

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  initializeWebsite()
  setupEventListeners()
})

function initializeWebsite() {
  loadHeroArticle()
  loadTrendingArticles()
  loadNewsArticles()
  updateBreakingNews()
}

function setupEventListeners() {
  // Mobile navigation toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const category = link.getAttribute("data-category")
      setActiveCategory(category)
      navMenu.classList.remove("active")
    })
  })

  // Category filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category")
      setActiveCategory(category)
    })
  })

  // Search functionality
  searchBtn.addEventListener("click", performSearch)
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch()
    }
  })

  // Load more articles
  loadMoreBtn.addEventListener("click", loadMoreArticles)

  // Modal functionality
  modalClose.addEventListener("click", closeModal)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal()
    }
  })
}

function loadHeroArticle() {
  const heroArticle = newsData.find((article) => article.featured) || newsData[0]
  const heroElement = document.getElementById("hero-article")

  heroElement.innerHTML = `
        <div class="hero-image">
            <img src="${heroArticle.image}" alt="${heroArticle.title}">
            <div class="hero-overlay">
                <span class="hero-category">${capitalizeFirst(heroArticle.category)}</span>
                <h2 class="hero-title">${heroArticle.title}</h2>
                <p class="hero-excerpt">${heroArticle.excerpt}</p>
                <div class="hero-meta">
                    <span class="hero-date">${heroArticle.date}</span>
                    <span class="hero-author">By ${heroArticle.author}</span>
                </div>
            </div>
        </div>
    `

  heroElement.addEventListener("click", () => openModal(heroArticle))
}

function loadTrendingArticles() {
  const trendingContainer = document.getElementById("trending-articles")
  const trendingArticles = newsData.slice(1, 5)

  trendingContainer.innerHTML = trendingArticles
    .map(
      (article) => `
        <div class="trending-item" onclick="openModal(${JSON.stringify(article).replace(/"/g, "&quot;")})">
            <div class="trending-image">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="trending-content">
                <h4>${article.title}</h4>
                <div class="trending-meta">
                    <span>${article.date}</span> • <span>${capitalizeFirst(article.category)}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

function loadNewsArticles() {
  filterNews()
  displayArticles()
}

function filterNews() {
  if (currentCategory === "all") {
    filteredNews = [...newsData]
  } else {
    filteredNews = newsData.filter((article) => article.category === currentCategory)
  }
  displayedArticles = 6
}

function displayArticles() {
  const articlesToShow = filteredNews.slice(0, displayedArticles)

  newsGrid.innerHTML = articlesToShow
    .map(
      (article) => `
        <article class="news-card" onclick="openModal(${JSON.stringify(article).replace(/"/g, "&quot;")})">
            <div class="news-image">
                <img src="${article.image}" alt="${article.title}">
                <span class="news-category">${capitalizeFirst(article.category)}</span>
            </div>
            <div class="news-content">
                <h3 class="news-title">${article.title}</h3>
                <p class="news-excerpt">${article.excerpt}</p>
                <div class="news-meta">
                    <span class="news-author">By ${article.author}</span>
                    <span class="news-date">${article.date}</span>
                </div>
            </div>
        </article>
    `,
    )
    .join("")

  // Show/hide load more button
  loadMoreBtn.style.display = displayedArticles >= filteredNews.length ? "none" : "block"
}

function setActiveCategory(category) {
  currentCategory = category

  // Update navigation active state
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("data-category") === category) {
      link.classList.add("active")
    }
  })

  // Update filter buttons active state
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active")
    if (btn.getAttribute("data-category") === category) {
      btn.classList.add("active")
    }
  })

  // Update section title
  sectionTitle.textContent = category === "all" ? "Latest News" : `${capitalizeFirst(category)} News`

  // Filter and display articles
  filterNews()
  displayArticles()
}

function performSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase()

  if (searchTerm === "") {
    filteredNews =
      currentCategory === "all" ? [...newsData] : newsData.filter((article) => article.category === currentCategory)
  } else {
    const baseFilter =
      currentCategory === "all" ? newsData : newsData.filter((article) => article.category === currentCategory)
    filteredNews = baseFilter.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm) ||
        article.excerpt.toLowerCase().includes(searchTerm) ||
        article.content.toLowerCase().includes(searchTerm),
    )
  }

  displayedArticles = 6
  displayArticles()

  // Update section title for search results
  if (searchTerm !== "") {
    sectionTitle.textContent = `Search Results for "${searchTerm}"`
  }
}

function loadMoreArticles() {
  displayedArticles += 6
  displayArticles()
}

function openModal(article) {
  modalBody.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="modal-image">
        <span class="modal-category">${capitalizeFirst(article.category)}</span>
        <h1 class="modal-title">${article.title}</h1>
        <div class="modal-meta">
            <span>By ${article.author}</span>
            <span>${article.date}</span>
        </div>
        <div class="modal-content-text">
            ${article.content
              .split("\n")
              .map((paragraph) => `<p>${paragraph}</p>`)
              .join("")}
        </div>
    `

  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

function closeModal() {
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

function updateBreakingNews() {
  const breakingText = document.getElementById("breaking-text")
  const breakingNews = [
    "Latest updates from around the world",
    "Technology sector shows remarkable growth",
    "Sports championship finals this weekend",
    "Global climate summit reaches historic agreement",
    "New space mission discovers potentially habitable planet",
    "Stock market reaches all-time high amid positive indicators",
  ]

  let currentIndex = 0
  setInterval(() => {
    breakingText.textContent = breakingNews[currentIndex]
    currentIndex = (currentIndex + 1) % breakingNews.length
  }, 5000)
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add loading animation for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })
  })
})

// Newsletter subscription
document.querySelector(".newsletter button").addEventListener("click", () => {
  const email = document.querySelector(".newsletter input").value
  if (email) {
    alert("Thank you for subscribing to NextGen News!")
    document.querySelector(".newsletter input").value = ""
  }
})

// Add scroll-to-top functionality
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    if (!document.querySelector(".scroll-top")) {
      const scrollTop = document.createElement("button")
      scrollTop.className = "scroll-top"
      scrollTop.innerHTML = '<i class="fas fa-arrow-up"></i>'
      scrollTop.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #e11d48;
                color: white;
                border: none;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                cursor: pointer;
                z-index: 1000;
                transition: all 0.3s ease;
            `
      scrollTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
      document.body.appendChild(scrollTop)
    }
  } else {
    const scrollTop = document.querySelector(".scroll-top")
    if (scrollTop) {
      scrollTop.remove()
    }
  }
})

