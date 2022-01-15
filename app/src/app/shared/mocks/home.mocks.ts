export const GREEN_COLOR  = '#4ac64e';
export const YELLOW_COLOR = '#e8c837';
export const ORANGE_COLOR = '#ff942a';
export const PINK_COLOR   = '#d83c93';
export const WHITE_COLOR  = '#FFF';
export const DARK_GRAY    = '#333';

export const HomeMock = {
  mainContent: {
    styles: {
      'background': "url('assets/images/home/banner-header-home.jpg') 45% 0/cover",
    },
    titleContent: {
      title: {
        text: 'Trust é tudo,',
        styles: {
          'color': GREEN_COLOR,
          'font-size': '50px',
        }
      },
      subtitle: {
        textLines: ['menos banco.'],
        styles: {
          'color': WHITE_COLOR,
          'font-size': '45px'
        }
      },
      description: {
        textLines: ['Soluções financeiras 100% digitais e integradas.', 'A gente confia no seu potencial, e você?'],
        styles: {
          'color': WHITE_COLOR,
          'font-size': '15px'
        }
      }
    },
  },
  serviceCards: {
    cards: [
      {
        title: 'CONTA DIGITAL',
        description: 'É tudo, menos banco.',
        color: YELLOW_COLOR,
        backgroundImage: "url('assets/images/home/yellow_arrow.png')",
        redirectPath: 'home/conta-digital'
      },
      {
        title: 'ANTECIPAÇÃO',
        description: 'Antes de tudo, o melhor para seu negócio.',
        color: ORANGE_COLOR,
        backgroundImage: "url('assets/images/home/orange_arrow.png')",
        redirectPath: 'home/antecipacao'
      },
      {
        title: 'Empréstimos',
        description: 'Em até 2 horas*, a gente aprova o seu crédito.',
        color: PINK_COLOR,
        backgroundImage: "url('assets/images/home/pink_arrow.png')",
        redirectPath: 'home/emprestimos'
      }
    ],
  },
  observations: [
    '*Aprovação do crédito em até 2h após o envio da documentação completa e válida. Empréstimo sujeito a aprovação cadastral e demais condições do produto.'
  ],
  descriptionSection: {
    backgroundImage: "url('assets/images/home/description-stock.jpg') 45% 0/cover",
    secondaryAction: {
      title: {
        styles: {
          'color': DARK_GRAY,
          'font-size': '25px'
        },
        textLines: ['Conta de Pagamento', 'Digital Trust.', 'É tudo, menos banco.']
      },
      description: {
        styles: {
          'color': DARK_GRAY,
          'font-size': '14px'
        },
        textLines: [
          'Segurança, agilidade, e integração: você 100% conectado ao controle do seu negócio.',
          'Com sua Conta de pagamento digital, você realiza pagamentos, depósitos e transferências de forma rápida e sem complicação, facilitando a gestão da sua empresa.'
        ]
      },
      buttons: [
        {
          styles: {
            'background': 'linear-gradient(90deg,#2a437b,#4dab4f)',
            'width': '40%',
            'color': WHITE_COLOR,
          },
          title: 'Conheça mais'
        }
      ]
    }
  }
}
