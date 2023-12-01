export function fetchMockJson (data) {
  return {
    json: () => new Promise((resolve) => resolve(data))
  }
}

export function fetchMockText (data) {
  return {
    text: () => new Promise((resolve) => resolve(data))
  }
}

export function fetchMock (data) {
  return new Promise((resolve) => resolve(data))
}

export const baseHtml = `${process.env.INIT_CWD}/1-ex/src/html`
export const signInFormSrc = `${baseHtml}/_partials/sign-in.html`
export const signUpFormSrc = `${baseHtml}/_partials/sign-up.html`
export const items = [
  {
    id: '1',
    title: 'title 1',
    description: 'description 1',
    link: 'http://feed.com/article1',
    media: {
      thumbnail: {
        url: 'http://feed.com/article2/img.png'
      }
    },
    pubDate: 1209495,
    author: 'glodie'
  },
  {
    id: '2',
    title: 'title 2',
    description: 'description 2',
    link: 'http://feed.com/article2',
    media: {
      thumbnail: {
        url: 'http://feed.com/article2/img.png'
      }
    },
    pubDate: 10293845,
    author: 'Tshimini'
  }
]

export const countries = [
  {
    name: 'Congo',
    translations: {
      fr: 'congo'
    }
  }, {
    name: 'Brazil',
    translations: {
      fr: 'Bresil'
    }
  },
  {
    name: 'Algeria',
    translations: {
      fr: 'Algérie'
    }
  },
  {
    name: 'USA',
    translations: {
      fr: 'Etats unis'
    }
  }
]

export const cities = [
  {
    name: 'france',
    cities: [
      {
        name: 'paris',
        longitude: 1,
        latitude: 2
      },
      {
        name: 'lyon',
        longitude: 3,
        latitude: 4
      }
    ]
  },
  {
    name: 'belgium',
    cities: [
      {
        name: 'anvers',
        longitude: 5,
        latitude: 6
      },
      {
        name: 'bruxelles',
        longitude: 7,
        latitude: 8
      },
      {
        name: 'bruges',
        longitude: 9,
        latitude: 10
      }
    ]
  }
]
