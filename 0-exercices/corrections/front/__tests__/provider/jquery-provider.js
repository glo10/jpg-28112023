
export const names = [
  {
    value: 'ab',
    result: true,
    type: 'input[type=text]'
  },
  {
    value: 'a',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: '1',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: '123hello',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: 'philippe2',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: 'bob marley',
    result: true,
    type: 'input[type=text]'
  },
  {
    value: 'thierry-marc',
    result: true,
    type: 'input[type=text]'
  },
  {
    value: '<script>',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: 'fatou&',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: 'nadia$',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: 'amine&',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: '+paul',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: 'lucie*',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: '/daniel',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: 'danielle#',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: '~paul',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: 'luci€',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: 'dan%el',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: 'dan^elle',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: 'carlos!',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: 'mick_lou',
    result: false,
    type: 'input[type=text]'
  },
  {
    value: 'mia@lou',
    result: false,
    type: 'input[type=text]'
  }
]

export const ages = [
  {
    value: '5',
    result: false,
    type: 'input[type=number]'
  },
  {
    value: '30',
    result: true,
    type: 'input[type=number]'
  },
  {
    value: '2',
    result: false,
    type: 'input[type=number]'
  },
  {
    value: '-10',
    result: false,
    type: 'input[type=number]'
  },
  {
    value: '14',
    result: true,
    type: 'input[type=number]'
  },
  {
    value: '130',
    result: true,
    type: 'input[type=number]'
  },
  {
    value: '10.5',
    result: false,
    type: 'input[type=number]'
  },
  {
    value: '20,4',
    result: false,
    type: 'input[type=number]'
  },
  {
    value: '131',
    result: false,
    type: 'input[type=number]'
  },
  {
    value: '1250',
    result: false,
    type: 'input[type=number]'
  },
  {
    value: '13',
    result: false,
    type: 'input[type=number]'
  }
]

export const countriesCities = [
  {
    value: 'marseille4',
    result: true,
    type: 'option'
  },
  {
    value: 'idf93 denis',
    result: true,
    type: 'option'
  },
  {
    value: 'yvelines78',
    result: true,
    type: 'option'
  },
  {
    value: 'p',
    result: false,
    type: 'option'
  },
  {
    value: 'paris',
    result: true,
    type: 'option'
  },
  {
    value: 'ar',
    result: true,
    type: 'option'
  },
  {
    value: '',
    result: false,
    type: 'option'
  },
  {
    value: '  ',
    result: false,
    type: 'option'
  },
  {
    value: 'saint-germain',
    result: true,
    type: 'option'
  },
  {
    value: 'saint-etienne',
    result: true,
    type: 'option'
  },
  {
    value: 'rosny_sous-bois',
    result: false,
    type: 'option'
  },
  {
    value: '&$+*/#~€%^!_@',
    result: false,
    type: 'option'
  }
]
export const emails = [
  {
    value: 'contact@tshimini.fr',
    result: true,
    type: 'input[type=email]'
  },
  {
    value: 'contact@',
    result: false,
    type: 'input[type=email]'
  },
  {
    value: '@tshimini.fr',
    result: false,
    type: 'input[type=email]'
  },
  {
    value: '@',
    result: false,
    type: 'input[type=email]'
  },
  {
    value: 'contact@hello.world.com',
    result: true,
    type: 'input[type=email]'
  },
  {
    value: 'contact@hello.worldhello',
    result: true,
    type: 'input[type=email]'
  },
  {
    value: 'contact@tshimini.morethantenstring',
    result: false,
    type: 'input[type=email]'
  },
  {
    value: 'contact@tshimini.abcdefghij',
    result: true,
    type: 'input[type=email]'
  }
]

export const pwds = [
  {
    value: '12345678912345',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: '123457789123456',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: 'axcdefghijklmnopqrstuvwxyz0123456789',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: 'axcdefghijklmnopqrstuvwxyz01234567890',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: 'contact@hello.world.com',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: '',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: ' ',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: 'azertyhelloworld15',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: 'qwertyhellomamapapa',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: 'qwertyHell_omamapapa',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: ' ',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: 'azertyhelloworld15$',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: 'qwertyhellomamapapa',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: '$orTdj456esdw945',
    result: true,
    type: 'input[type=password]'
  },
  {
    value: 'ax154ehdMsedei78#$',
    result: true,
    type: 'input[type=password]'
  },
  {
    value: 'Qertyhe45llo$dmamDapapa',
    result: true,
    type: 'input[type=password]'
  },
  {
    value: 'Azerty&he45llo$dmamDapapa',
    result: true,
    type: 'input[type=password]'
  },
  {
    value: 'abcdef&he45llo$dmamDapapa',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: '123456&he45llo$dmamDapapa',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: 'azerty&he45llo$dmamDapapa',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: 'qwerty&he45llo$dmamDapapa',
    result: false,
    type: 'input[type=password]'
  },
  {
    value: '$he45lloouM',
    result: false,
    type: 'input[type=password]'
  }
]

export const exceptionsTypes = [
  {
    body: '<input type="color" value="red">'
  },
  {
    body: '<input type="submit" value="ok">'
  },
  {
    body: '<input type="radio" value="1">'
  },
  {
    body: '<div>hello world</div>'
  }
]

export const templateForm = `
<div>
  <option value="{{value}}">
  <input type="number" value="{{value}}">
  <input type="text" value="{{value}}">
  <input type="email" value="{{value}}">
  <input type="password" value="{{value}}">
</div>
`

export const all = [
  ...emails,
  ...pwds,
  ...names,
  ...ages,
  ...countriesCities
]
