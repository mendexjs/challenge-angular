import {DARK_GRAY, ORANGE_COLOR, WHITE_COLOR, YELLOW_COLOR} from "./home.mocks";

export const AnticipationMock = {
  mainContent: {
    styles: {
      'background': "url('assets/images/home/banner-header-antecipacao.jpg') 45% 0/cover",
    },
    titleContent: {
      title: {
        text: 'Antecipação',
        styles: {
          'color': ORANGE_COLOR,
          'font-size': '50px'
        }
      },
      subtitle: {
        textLines: ['de recebíveis', 'Desconto de Duplicata totalmente digital'],
        styles: {
          'color': WHITE_COLOR,
          'font-size': '26px'
        }
      },
      description: {
        textLines: ['Receba o seu crédito', 'em até 2 horas¹.'],
        styles: {
          'color': WHITE_COLOR,
          'font-size': '15px'
        }
      },
      buttons: [
        {
          styles: {
            'background-color': 'transparent',
            'border': '1px solid white',
            'color': WHITE_COLOR,
            'font-size': '13px'
          },
          title: 'Assista ao vídeo'
        }
      ]
    },
    actionCard: {
      title: 'Basta informar o seu CNPJ e pronto! Você está apto a enviar suas notas para descontar com a Trust.',
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
            'background-color': ORANGE_COLOR,
            'color': WHITE_COLOR,
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
      'border-top': `5px solid ${ORANGE_COLOR}`
    },
    cards: [
      {
        icon: 'money',
        description: 'Taxas competitivas com o mercado.',
        color: ORANGE_COLOR,
      },
      {
        icon: 'check_circle_outline',
        description: 'Atendimento ágil e personalizado, com soluções eficientes.',
        color: ORANGE_COLOR,
      },
      {
        icon: 'payment',
        description: 'Assessoria administrativa para cobrança de títulos ou direitos de créditos.',
        color: ORANGE_COLOR,
      },
      {
        icon: 'attach_money',
        description: 'Transformamos suas contas a receber em Dinheiro vivo.',
        color: ORANGE_COLOR,
      },
    ],
    observations: [
      '¹Aprovação do crédito em até 2h após o envio da documentação completa e válida.',
      'Empréstimo sujeito a aprovação cadastral e demais condições do produto.'
    ]
  },
  descriptionSection: {
    stockImage: '/assets/images/home/antecipacao-modelo.png',
    backgroundImage: ORANGE_COLOR,
    phoneStockContent: {
      title: 'O que é Antecipação de duplicatas?',
      description: 'A antecipação de duplicatas consiste em antecipar o valor que sua empresa tem a receber das vendas a prazo, à vista.'
    },
    secondaryAction: {
      title: {
        styles: {
          'color': WHITE_COLOR,
          'font-size': '26px'
        },
        textLines: ['Como antecipar?'],
      },
      description: {
        styles: {
          'color': WHITE_COLOR,
          'font-size': '16px'
        },
        textLines: [
          'Abra uma conta de pagamento digital na Trust.',
          'Faça upload das suas notas fiscais e seja aprovado em até 2 horas* após liberarem seu cadastro.',
          'Assine o contrato digital e receba seu dinheiro em sua conta.'
        ]
      },
      buttons: [
        {
          styles: {
            'background-color': WHITE_COLOR,
            'width': '100%',
            'color': DARK_GRAY,
          },
          title: 'Comece a antecipar'
        }
      ]
    }
  },
  advantageSection: {
    title: 'Quais as vantagens de antecipar com TRUST?',
    observations: ['*Aprovação do crédito em até 2h após o envio da documentação completa e válida. Sujeito à aprovação cadastral e demais condições do produto.\n'],
    infoCards: {
      styles: {
        width: '300px',
        height: '180px',
        'border-top': `5px solid ${ORANGE_COLOR}`
      },
      cards: [
        {
          icon: 'money',
          description: 'Dinheiro em caixa para movimentação dos negócios, evitando o endividamento.'},
        {
          icon: 'publish',
          description: 'Rapidez e agilidade de decisão.'},
        {
          icon: 'attach_money',
          description: 'Alívio financeiro para sua empresa, que poderá ter vantagens na compra de matérias-primas à vista e assim otmizar sua produção.'},
        {
          icon: 'show_chart',
          description: 'Intermediação entre a empresa e seu fornecedor, transformando a compra de matéria-prima a vista, mais vantajosa, em compra a prazo.'},
      ],
    }
  }
}
