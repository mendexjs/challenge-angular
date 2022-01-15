import {DARK_GRAY, WHITE_COLOR, YELLOW_COLOR} from "./home.mocks";

export const DigitalAccountMock = {
  mainContent: {
    styles: {
      'background': "url('assets/images/home/banner-header-contadigital.jpg') 45% 0/cover",
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
          type: 'text',
          masks: {person: true}
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
  },
  infoCards: {
    styles: {
      width: '180px',
      height: '150px',
      'border-top': `5px solid ${YELLOW_COLOR}`
    },
    cards: [
      {
        icon: 'payment',
        description: 'Extratos, pagamentos, depósitos e transferências.'
      },
      {
        icon: 'home',
        description: 'Saia do banco tradicional.'
      },
      {
        icon: 'wifi_tethering',
        description: '100% digital.'
      },
      {
        icon: 'timer',
        description: 'Agilidade.'
      },
      {
        icon: 'thumb_up',
        description: 'Sem burocracia.'
      },
    ],
  },
  descriptionSection: {
    stockImage: '/assets/images/home/conta-modelo.png',
    backgroundImage: YELLOW_COLOR,
    phoneStockContent: {
      title: 'Sem anuidade ou taxa de manutenção',
      description: 'Extratos consolidados, pagamentos, depósitos e transferências que vão descomplicar as finanças da sua empresa.'
    },
    secondaryAction: {
      topicsList: [
        {
          icon: 'payment',
          title: 'Pagamentos',
          description: 'Um sistema rápido e 100% digital que aceita diversos pagamentos por código de barras.'
        },
        {
          icon: 'attach_money',
          title: 'Depósitos',
          description: 'Receba e faça depósitos de forma simples e ágil através do pagamento de boletos ou Transferência Eletrônica (TED).'
        },
        {
          icon: 'sync',
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
            'margin': '20px auto'
          },
          title: 'Abra a sua conta'
        }
      ]
    }
  }
}
