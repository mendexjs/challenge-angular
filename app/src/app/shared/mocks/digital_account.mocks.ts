import {DARK_GRAY, WHITE_COLOR, YELLOW_COLOR} from "./home.mocks";

export const DigitalAccountMock = {
  mainContent: {
    styles: {
      'background-image': 'url(/assets/images/home/digital-account-stock.png) center no-repeat',
    },
    titleContent: {
      title: {
        text: 'Conta de Pagamento Digital',
        styles: {
          'color': YELLOW_COLOR,
          'font-size': '50px'
        }
      },
      description: {
        textLines: ['É tudo, menos banco.', 'É 100% digital.', 'Descomplique a parte', 'financeira da sua sempresa.'],
        styles: {
          'color': WHITE_COLOR,
          'font-size': '15px'
        }
      }
    },
    actionCard: {
      title: 'Abra a sua conta e tenha agilidade e praticidade nos seus negócios.',
      description: 'Abra a sua conta e peça já o seu cartão:',
      inputs: [
        {
          name: 'cnpj',
          placeholder: 'Digite o seu CNPJ',
          type: 'text'
        },
      ],
      buttons: [
        {
          styles: {
            'background-color': YELLOW_COLOR,
            'color': DARK_GRAY,
          },
          title: 'Continue'
        }
      ]
    },
    infoCards: [
      {
        icon: 'extract-icon',
        description: 'Extratos, pagamentos, depósitos e transferências.',
        color: YELLOW_COLOR,
      },
      {
        icon: 'phone-icon',
        description: 'Saia do banco tradicional.',
        color: YELLOW_COLOR,
      },
      {
        icon: 'globe-icon',
        description: '100% digital.',
        color: YELLOW_COLOR,
      },
      {
        icon: 'timer-icon',
        description: 'Agilidade.',
        color: YELLOW_COLOR,
      },
      {
        icon: 'like-icon',
        description: 'Sem burocracia.',
        color: YELLOW_COLOR,
      },
    ],
  },
  descriptionSection: {
    stockImage: '/assets/images/digital-account/stock.png',
    backgroundColor: YELLOW_COLOR,
    phoneStockContent: {
      title: 'Sem anuidade ou taxa de manutenção',
      description: 'Extratos consolidados, pagamentos, depósitos e transferências que vão descomplicar as finanças da sua empresa.'
    },
    secondaryAction: {
      topicsList: [
        {
          icon: 'payment-icon',
          title: 'Pagamentos',
          description: 'Um sistema rápido e 100% digital que aceita diversos pagamentos por código de barras.'
        },
        {
          icon: 'receive-icon',
          title: 'Depósitos',
          description: 'Receba e faça depósitos de forma simples e ágil através do pagamento de boletos ou Transferência Eletrônica (TED).'
        },
        {
          icon: 'money-icon',
          title: 'Transferências',
          description: 'Plataforma simples e intuitiva que ajuda a fazer as transferências da sua empresa.'
        }
      ],
      buttons: [
        {
          styles: {
            'background-color': WHITE_COLOR,
            'width': '70%',
            'color': DARK_GRAY,
          },
          title: 'Abra a sua conta'
        }
      ]
    }
  }
}
