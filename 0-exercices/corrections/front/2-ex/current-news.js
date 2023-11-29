import ModalArticle from './modal-article.js'

class CurrentNews extends HTMLElement {
  /**
   * C'est spécifique ici à mon architecture parce que je traite chaque exercice de manière indépendante au niveau du JS
   * par contre pour le CSS et HTML j'utilise les sources de l'exercice 1 (dossier 1-ex/src)
   */ 
  static ARTICLE_TPL = '_partials/article.html'
  static MODAL_TPL = '_partials/modal.html'
  /**
   * Constructor
   * @param Object dataFetch
   * @param {Object} feed flux d'information
   * @param {Array} items les articles de ce flux
   * @returns void
   */
  constructor (dataFetch = null, feed = {}, items = []) {
    super()
    this.dataFetch = dataFetch
    this.feed = feed
    this.items = items
    // contenu de base titre et loader
    this.innerHTML = `
    <h2>Chargement actualité depuis ${this.feed.url}</h2>
    <div class="loader"></div>
    `
  }

  /**
   * Rien ici, toute la responsabilité ici est volontairement délégué au client (index.js)
   * Je pouvais tout gérer et traiter comme on a vu précedemment ici c'est uniquement de montrer une autre approche
   * qui a ses avantages et incovénients par rapport à l'approche précédente
   */
  connectedCallback () {
    console.info('connected news Element in DOM')
  }

  /**
   * J'aurais pu faire plus simple, j'ai ajouté et chainé plusieurs then
   * pour vous montrer qu'on peut presque le faire à l'infini
   * @returns void
   */
  async render () {
    console.info('render method start with promise all', this.feed)
    // Promesse pour récupérer l'article sous forme de texte qui nous servira de template
    const fetchTplArticle = this.dataFetch.html(CurrentNews.ARTICLE_TPL)
    // Promesse pour récupérer le flux RSS XML et parsé en JSON
    const fetchItems = this.dataFetch.xml(this.feed.url)
    // Promesse du template HTML et articles lancée en parallèle
    return Promise.all([fetchTplArticle, fetchItems])
      .then((responses) => {
        /**
         * Avec Promise.all on rentre ici uniquement si tous les promesses reussissent
         * s'il y en a au moins un qui échoue, on va directement dans le catch
         * */
        const artTpl = responses[0]
        const feed = responses[1]
        const items = feed.items
        this.innerHTML = `<h2>${feed.title}</h2>`
        this.feed.title = feed.title
        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          this.items = [...this.items, item]
          this.innerHTML += this.replaceWith(artTpl, item)
        }
        return artTpl // une promesse dont le résultat s'il est positif pour être récupérer dans un then
      })
      .then((template) => {
        // on appel ici parce qu'il faut avoir au moins un article dans le DOM
        this.openModal()
        return template // idem retourne une promesse dont on peut récupérer le résultat avec then()
      })
      .then((template) => {
        return { // une promesse qui retourne un objet qu'on pourra recup dans then comme pour les cas préc.
          feed: this.feed,
          items: this.items,
          template // clé et valeur s'ils ont le même nom, on peut juste mettre le nom au lieu de faire template: template
        }
      })
      .catch(error => {
        console.error('error ', error)
        this.innerHTML = `<p>Aucun article n'a pu être récupéré depuis ${this.feed.url}!</p>`
      })
  }

  /**
   * Une solution parmi tant d'autres pour faire du templating dynamique
   * Dans le template, on remplace les motifs (pattern) par les valeurs
   * @param {string} template du HTML en texte
   * @param {string} data les artciles sous forme d'objet littéral
   * @returns string
   */
  replaceWith (template, data) {
    return template
      .replace(/{{title}}/g, data.title)
      .replace(/{{thumbnail.url}}/g, data.media.thumbnail.url)
      .replace(/{{published}}/g, this.getFrDate(data.published))
      .replace(/{{author}}/g, data.author??'NC')
      .replace(/{{link}}/g, data.link)
      .replace(/{{description}}/g, data.description)
  }

  /**
   * Formater pour avoir la date en format française
   * @param {Number} timestamp
   * @returns string
   */
  getFrDate (timestamp) {
    return (new Date(timestamp)).toLocaleDateString('fr')
  }

  /**
   * Récupère tous les articles depuis le flux RSS
   * @returns Promise<Array>
   */
  async getAll () {
    return this.dataFetch.xml(this.feed.url)
  }

  /**
   * Retourner un article parmi la liste des articles d'un flux
   * @param {string} url
   * @returns Array
   */
  findOne (url) {
    return this.items.find(item => item.link === url)
  }

  /**
   * Lancer une modale
   * @returns void
   */
  async openModal () {
    // Tous les boutons pour ouvrir une modale
    const btns = document.querySelectorAll('.open-modal')
    // Attend d'avoir le template
    const tpl = await this.dataFetch.html(CurrentNews.MODAL_TPL)
    for (let i = 0; i < btns.length; i++) {
      const btn = btns[i]
      // Ajout d'un écouteur d'event click sur chaque bouton modal
      btn.addEventListener('click', () => {
        /*
        * Normalement le lien est unique
        * Même si ce n'était pas le cas, on récupère le premier qui sera trouvé
        */
        // Récupération d'un article
        const data = this.findOne(btn.dataset.link)
        // Remplacement des motifs par les valeurs
        const modalWithData = this.replaceWith(tpl, data)
        const modalEl = document.querySelector('modal-article')
        const modalArticle = new ModalArticle(modalWithData)
        // Remplacement de la modal par une nouvelle avec les infos de l'article séléctionné
        if (modalEl) { // modal existe déjà dans le DOM => remplacer
          modalEl.replaceWith(modalArticle)
        } else { // n'existe pas => l'ajouter au DOM
          document.body.querySelector('main').append(modalArticle)
        }
        // permet d'afficher modal, par defaut en display: none dans le CSS
        document.querySelector('.modal').style.display = 'block'
      })
    }
  }
}

customElements.define('current-news', CurrentNews)
export default CurrentNews
