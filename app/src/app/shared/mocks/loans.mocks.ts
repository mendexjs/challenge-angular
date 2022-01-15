import {DARK_GRAY, PINK_COLOR, WHITE_COLOR} from "./home.mocks";

export const LoansMock = {
  mainContent: {
    styles: {
      'background-image': 'url(/assets/images/home/loans-stock.png) center no-repeat',
    },
    titleContent: {
      title: {
        text: 'Empréstimos',
        styles: {
          'color': PINK_COLOR,
          'font-size': '50px'
        }
      },
      subtitle: {
        textLines: ['Em até 2 horas¹, a gente aprova o seu crédito.'],
        styles: {
          'color': WHITE_COLOR,
          'font-size': '18px'
        }
      },
      description: {
        textLines: ['A Trust quer ver seu negócio decolando, por isso, nós oferecemos esses recursos para ajudar sua empresa:'],
        styles: {
          'color': WHITE_COLOR,
          'font-size': '15px'
        }
      },
    },
    actionCard: {
      title: 'Faça seu empréstimo na Trust',
      description: {
        'text': 'é a melhor opção para você que precisa de uma análise de crédito personalizada e ágil, com taxas mais justas para você investir no seu negócio.'
      },
      buttons: [
        {
          styles: {
            'background-color': PINK_COLOR,
            'color': WHITE_COLOR,
          },
          title: 'Simule aqui'
        }
      ]
    },
    infoCards: [
      {
        icon: 'tax-icon',
        description: 'Basta informar o CNPJ da sua empresa para iniciarmos a análise.',
        color: PINK_COLOR,
      },
      {
        icon: 'display-icon',
        description: 'Do pedido de empréstimo até a assinatura do contrato: o processo é 100% digital e em até 2 horas¹.',
        color: PINK_COLOR,
      },
      {
        icon: 'like-icon',
        description: 'Análise de crédito personalizada com poucos cliques e sem burocracias.',
        color: PINK_COLOR,
      },
      {
        icon: 'cash-icon',
        description: 'Pagamento em até 6 vezes.',
        color: PINK_COLOR,
      },
      {
        icon: 'cash-icon',
        description: 'Taxas competitivas pensadas exatamente para o que você precisa.',
        color: PINK_COLOR,
      },
    ],
    observations: [
      '¹Aprovação do crédito em até 2h após o envio da documentação completa e válida.',
      'Empréstimo sujeito a aprovação cadastral e demais condições do produto.'
    ]
  },
  descriptionSection: {
    stockImage: '/assets/images/loans/stock.png',
    backgroundColor: PINK_COLOR,
    phoneStockContent: {
      title: 'Um modelo que ajuda sua empresa nas horas de aperto: Empréstimo em 6x.',
      description: 'É a melhor opção para quem precisa de uma análise de crédito rápida e personalizada.'
    },
    secondaryAction: {
      description: {
        styles: {
          'color': WHITE_COLOR,
          'font-size': '16px'
        },
        textLines: [
          'Ele ajuda você a investir',
          'no seu negócio em até',
          'seis parcelas e com taxas',
          'mais justas.'
        ]
      },
      buttons: [
        {
          styles: {
            'background-color': WHITE_COLOR,
            'width': '100%',
            'color': DARK_GRAY,
          },
          title: 'Solicite já!'
        }
      ]
    }
  }
}
